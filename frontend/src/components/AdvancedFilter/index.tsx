import React, { useCallback, useEffect, useRef, useState } from 'react';
import { parse, isDate } from 'date-fns';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import Button from '../Button';
import ActType from '../ActType';
import { useToast } from '../../hooks/toast';
import {
  Container,
  Header,
  NumberProcess,
  DateProcess,
  CheckProcess,
  Cancel,
  TypeButton,
  CheckDate,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../Input';
import { useProcess } from '../../hooks/useProcess';
import InputVariation from '../InputVariation';
import { useAdvancedSearch } from '../../hooks/useAdvancedSearch';

interface ContractFormData {
  process: string;
  dateOne: string;
  dateTwo: string;
  actIdType: string;
}

const AdvancedFilter: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {
    addToast,
    onVisible,
    makeVisible,
    onVisibleProcess,
    makeVisibleProcess,
  } = useToast();
  const history = useHistory();
  const { changeSearch, addProcess } = useProcess();
  const { addAdvancedSearch, addDateOne, addDateTwo } = useAdvancedSearch();
  const [load, setLoad] = useState(false);
  const { actType } = useAdvancedSearch();

  const [withProcess, setWithProcess] = useState(false);
  const [withDate, setWithDate] = useState(false);
  const [offHover, setOffHover] = useState(false);

  const handleWithFormatProcess = useCallback(
    (str: string, find: any, replace: string) => {
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
    },
    []
  );

  useEffect(() => {
    setOffHover(false);
  }, [offHover]);

  const handleWithDate = useCallback(() => {
    setWithDate(!withDate);
  }, [withDate]);

  const handleWithProcess = useCallback(() => {
    setWithProcess(!withProcess);
  }, [withProcess]);

  const parseDateString = useCallback((value, originalValue) => {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date());

    return parsedDate;
  }, []);

  const parseDateStringToSend = useCallback((originalValue) => {
    const originalValueParsed = originalValue.split('/');
    const originalValueParsedReverse = originalValueParsed.reverse();
    const parsedDate = originalValueParsedReverse.join('');

    return parsedDate;
  }, []);

  const handleSubmit = useCallback(
    async (data: ContractFormData) => {
      try {
        const today = new Date();
        addDateOne('');
        addDateTwo('');
        addProcess('');

        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          process: !withProcess
            ? Yup.string()
                .required('Este campo é obrigatório')
                .min(10, 'Este campo deve possuir no mínimo 10 caracteres')
            : Yup.string().notRequired(),
          dateOne: !withDate
            ? Yup.date()
                .required('Este campo é obrigatório')
                .transform(parseDateString)
                .max(today, 'Digite uma data válida')
                .typeError('Digite uma data válida')
            : Yup.string().notRequired(),
          dateTwo: !withDate
            ? Yup.date()
                .required('Este campo é obrigatório')
                .transform(parseDateString)
                .max(today, 'Digite uma data válida')
                .typeError('Digite uma data válida')
            : Yup.string().notRequired(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoad(true);

        const { process, dateOne, dateTwo } = data;
        const dateOneParsed = parseDateStringToSend(dateOne);
        const dateTwoParsed = parseDateStringToSend(dateTwo);

        const testContract = process;
        const formatContract = handleWithFormatProcess(
          testContract,
          /[/.-\sA-Za-z]/,
          ''
        );

        addDateOne(dateOneParsed);
        addDateTwo(dateTwoParsed);
        process ? addProcess(formatContract) : addProcess('');

        await addAdvancedSearch(
          process ? formatContract : process,
          dateOneParsed,
          dateTwoParsed,
          actType
        );
        history.push(`/acts/${process}`);

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
          title: 'Erro ao processar o contrato',
          description:
            'Ocorreu um erro ao encontrar o contrato, tente novamente',
        });

        history.push('/404');
      }
    },
    [
      addToast,
      history,
      withProcess,
      parseDateString,
      withDate,
      actType,
      addAdvancedSearch,
      parseDateStringToSend,
      handleWithFormatProcess,
      addDateOne,
      addDateTwo,
      addProcess,
    ]
  );

  return (
    <Container>
      <Header>
        <h1>Pesquisa Avançada</h1>
      </Header>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <NumberProcess
          onVisibleProcess={onVisibleProcess}
          withProcessStyle={withProcess}
        >
          <h2>Digite o número do processo</h2>
          <InputVariation
            readOnly={!!withProcess}
            name="process"
            pattern="[0-9]*"
            placeholder="00410-00024230/2017-06"
            icon={HiOutlineDocumentSearch}
            colorError={withProcess ? '#e7e7e7' : '#c53030'}
          />
          <CheckProcess>
            <label className="checkbox">
              <span className="checkbox__input">
                <input
                  type="checkbox"
                  name="checkbox"
                  onClick={() => {
                    handleWithProcess();
                    makeVisibleProcess(withProcess);
                  }}
                />
                <span className="checkbox__control">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
              </span>
              <p>Sem número de processo</p>
            </label>
          </CheckProcess>
        </NumberProcess>
        <DateProcess onVisible={onVisible} withDateStyle={withDate}>
          <h2>Data</h2>
          <span>
            <Input
              readOnly={!!withDate}
              name="dateOne"
              placeholder="01/01/2020"
              icon={FaRegCalendarAlt}
              colorError={withDate ? '#e7e7e7' : '#c53030'}
            />

            <h3>até</h3>

            <Input
              readOnly={!!withDate}
              name="dateTwo"
              placeholder="01/05/2021"
              icon={FaRegCalendarAlt}
              colorError={withDate ? '#e7e7e7' : '#c53030'}
            />
          </span>
          <CheckDate>
            <label className="checkbox">
              <span className="checkbox__input">
                <input
                  type="checkbox"
                  name="checkbox"
                  onClick={() => {
                    handleWithDate();
                    makeVisible(withDate);
                  }}
                />
                <span className="checkbox__control">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
              </span>
              <p>Sem data específica</p>
            </label>
          </CheckDate>
        </DateProcess>
        <TypeButton>
          <Cancel type="button" onClick={() => changeSearch()}>
            Cancelar
          </Cancel>
          {load ? (
            <ReactLoading
              color="#122145"
              type="spinningBubbles"
              height="5rem"
              width="5rem"
              className="load"
            />
          ) : (
            <Button
              style={{ marginTop: '1.2rem' }}
              type="submit"
              icon={BiSearchAlt}
            />
          )}
        </TypeButton>
        <ActType />
      </Form>
    </Container>
  );
};
export default AdvancedFilter;
