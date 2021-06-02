import React, { useCallback, useRef } from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import homeOneImg from '../../assets/homeOne.png';
import { useToast } from '../../hooks/toast';
import homeTwoImg from '../../assets/HomeTwo.png';
import { Container, Process } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

interface ContractFormData {
  contract: string;
}

export const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ContractFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          contract: Yup.string().required('Processo Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Contrato encontrado!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          console.log(err);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novam',
        });
      }
    },
    [addToast, history]
  );
  return (
    <Container>
      <header />
      <div>
        <img src={homeOneImg} alt="Man with contracts" />
        <div>
          <h2>Contratos</h2>
          <p>
            Veja aqui a linha do tempo de um processo licitatório do DODF de uma
            forma rápida e simples.
          </p>
        </div>
      </div>
      <span>
        <div>
          <h2>Auditoria</h2>
          <p>
            Veja todas as etapas do procedimento desde o aviso de abertura até o
            aviso de declaração de vencedor.
          </p>
        </div>
        <img src={homeTwoImg} alt="Woman drinking coffe" />
      </span>
      <Process>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Digite o número do processo</h2>
          <Input
            name="contract"
            placeholder="00410-00024230/2017-06"
            icon={HiOutlineDocumentSearch}
          />
        </Form>
      </Process>
    </Container>
  );
};
