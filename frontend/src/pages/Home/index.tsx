import React, { useCallback, useRef, useState } from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import homeOneImg from '../../assets/homeOne.png';
import { useToast } from '../../hooks/toast';
import homeTwoImg from '../../assets/HomeTwo.png';
import { Container, Process, Wrapper } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import Button from '../../components/Button';

interface ContractFormData {
  contract: string;
}

export const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [acts, setActs] = useState();

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

        // http://localhost:5000/atos/0010009842017

        await api.get(`/atos/${data.contract}`).then((res) => {
          const act = res.data;
          setActs(act);
        });

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
          <Wrapper>
            <Input
              name="contract"
              placeholder="00410-00024230/2017-06"
              icon={HiOutlineDocumentSearch}
            />
            <Button type="submit" icon={BiSearchAlt} />
          </Wrapper>
        </Form>
      </Process>
      {acts ? <Link to="/timeline" /> : <Link to="/timeline" />}
    </Container>
  );
};
