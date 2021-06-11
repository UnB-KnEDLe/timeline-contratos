import React, { useCallback, useRef, useState } from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import homeOneImg from '../../assets/homeOne.png';
import { useToast } from '../../hooks/toast';
import homeTwoImg from '../../assets/HomeTwo.png';
import { Container, Process, Wrapper } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import { useProcess } from '../../hooks/useProcess';

interface ContractFormData {
  contract: string;
}

export const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { addNumberProcess } = useProcess();
  const [load, setLoad] = useState(false);

  const handleSubmit = useCallback(
    async (data: ContractFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          contract: Yup.string().required('Número de processo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        setLoad(true);

        const length = await addNumberProcess(data.contract);

        // await api.post('/users', data);

        history.push('/');
        await addNumberProcess(data.contract);

        history.push(`/timeline/${data.contract}`);


        if (length === 0) {
          throw new Error('Erro ao buscar contrato');
        } else {
          history.push(`/timeline/${data.contract}`);
          addToast({
            type: 'success',
            title: 'Contrato encontrado!',
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          console.log(err);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao processar o contrato',
          description: 'Ocorreu um erro ao encontrar o contrato, tente novamente',
        });

        history.push('/404');
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
          <Wrapper>
            <Input
              name="contract"
              placeholder="00410-00024230/2017-06"
              icon={HiOutlineDocumentSearch}
            />
            {load ? (
              <ReactLoading
                color="#122145"
                type="bubbles"
                height="20%"
                width="50%"
              />
            ) : (
              <Button type="submit" icon={BiSearchAlt} />
            )}
          </Wrapper>
        </Form>
      </Process>
    </Container>
  );
};
