import React, { useCallback, useRef, useState } from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import { useToast } from '../../hooks/toast';

import {
  Container,
  Process,
  WrapperProcess,
  GlobalStyleModified,
  AdvancedButton,
  AnimationDiv,
  Title,
} from './styles';
import Input from '../../components/Input';
import AdvancedFilter from '../../components/AdvancedFilter';
import Header from '../../components/Header';
import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import { useProcess } from '../../hooks/useProcess';
import IconsAnimation from '../../components/IconsAnimation';

interface ContractFormData {
  contract: string;
}

export const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { addNumberProcess, addProcess, search, changeSearch } = useProcess();
  const [load, setLoad] = useState(false);

  function replaceAll(str: string, find: any, replace: string) {
    let formatedSring = str.replace(new RegExp(find, 'g'), replace);
    if (formatedSring.length < 25) {
      let addZeros = 25 - formatedSring.length;
      while (addZeros !== 0) {
        let zero = '0';
        formatedSring = zero.concat(formatedSring);
        addZeros -= 1;
      }
    }
    return formatedSring;
  }

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

        const testContract = data.contract;
        const formatContract = replaceAll(testContract, /[/.-\sA-Za-z]/, '');

        await addProcess(formatContract);
        // 0000000000000010010472010
        // 001-001.047/2010

        await addNumberProcess(formatContract);

        addToast({
          type: 'success',
          title: 'Contrato encontrado!',
        });

        history.push(`/acts`);
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
          description:
            'Ocorreu um erro ao encontrar o contrato, tente novamente',
        });

        history.push('/404');
      }
    },
    [addToast, history, addNumberProcess, addProcess]
  );

  return (
    <>
      <Header />
      <Container search={search}>
        <Title>
          <h1>Licitações de um jeito simples</h1>
          <p>Veja todas as etapas do procedimento de um processo licitatório</p>
        </Title>

        {!search ? (
          <AnimationDiv>
            <Process>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <h2>Digite o número do processo</h2>
                <WrapperProcess>
                  <Input
                    name="contract"
                    pattern="[0-9]*"
                    placeholder="00410-00024230/2017-06"
                    icon={HiOutlineDocumentSearch}
                    colorError="#c53030"
                  />
                  {load ? (
                    <ReactLoading
                      color="#122145"
                      type="spinningBubbles"
                      height="5rem"
                      width="5rem"
                      className="load"
                    />
                  ) : (
                    <Button type="submit" icon={BiSearchAlt} />
                  )}
                </WrapperProcess>
                <AdvancedButton type="button" onClick={() => changeSearch()}>
                  Busca Avançada
                </AdvancedButton>
              </Form>
            </Process>
          </AnimationDiv>
        ) : (
          <AdvancedFilter />
        )}

      </Container>
      <GlobalStyleModified />
      <IconsAnimation />
    </>
  );
};
