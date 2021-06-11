import React, { useCallback, useRef } from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
<<<<<<< HEAD
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
=======
import { BiSearchAlt } from 'react-icons/bi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
import * as Yup from 'yup';
import homeOneImg from '../../assets/homeOne.png';
import { useToast } from '../../hooks/toast';
import homeTwoImg from '../../assets/HomeTwo.png';
<<<<<<< HEAD
import { Container, Process } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
=======
import { Container, Process, Wrapper } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import { useProcess } from '../../hooks/useProcess';
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb

interface ContractFormData {
  contract: string;
}

export const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
<<<<<<< HEAD
=======
  const { addNumberProcess, loading } = useProcess();
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb

  const handleSubmit = useCallback(
    async (data: ContractFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
<<<<<<< HEAD
          contract: Yup.string().required('Processo Obrigatório'),
=======
          contract: Yup.string().required('Número de processo obrigatório'),
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
        });

        await schema.validate(data, {
          abortEarly: false,
        });
<<<<<<< HEAD

        // await api.post('/users', data);

        history.push('/');
=======
        await addNumberProcess(data.contract);

        history.push(`/timeline/${data.contract}`);
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb

        addToast({
          type: 'success',
          title: 'Contrato encontrado!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          console.log(err);
<<<<<<< HEAD

=======
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
          return;
        }

        addToast({
          type: 'error',
<<<<<<< HEAD
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novam',
        });
=======
          title: 'Erro ao processar o contrato',
          description:
            'Ocorreu um erro ao encontrar o contrato, tente novamente',
        });

        history.push('/404');
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
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
<<<<<<< HEAD
          <Input
            name="contract"
            placeholder="00410-00024230/2017-06"
            icon={HiOutlineDocumentSearch}
          />
=======
          <Wrapper>
            <Input
              name="contract"
              placeholder="00410-00024230/2017-06"
              icon={HiOutlineDocumentSearch}
            />
            <Button type="submit" icon={BiSearchAlt} />;
          </Wrapper>
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
        </Form>
      </Process>
    </Container>
  );
};
