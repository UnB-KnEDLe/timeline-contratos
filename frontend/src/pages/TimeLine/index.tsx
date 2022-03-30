import React, { useCallback, useEffect, useState } from 'react';
// @ts-ignore
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { Link } from 'react-router-dom';

import ReactLoading from 'react-loading';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdMore } from 'react-icons/md';
import { ImFileText } from 'react-icons/im';
import { BsPersonFill } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import { MdSpeakerNotes } from 'react-icons/md';
import { FaMoneyBill } from 'react-icons/fa';
import { FaFileContract } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa';
import { GrProductHunt } from 'react-icons/gr';
import { GiSuitcase } from 'react-icons/gi';
import { GiClawHammer } from 'react-icons/gi';
import { FaPenAlt } from 'react-icons/fa';
import { RiFolderInfoLine } from 'react-icons/ri';
import { MdSmsFailed } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { AiTwotoneSnippets } from 'react-icons/ai';
import { TiInfo } from 'react-icons/ti';
import { TiInfoLarge } from 'react-icons/ti';
import { useRef } from 'react';
import axios from 'axios';
import homeTwoWhite from '../../assets/homeTwoWhite.svg';
import whiteLogo from '../../assets/whiteLogo.svg';

import {
  Container,
  DateRec,
  Rec,
  InformationAct,
  Topic,
  BodyStyle,
  Footer,
  MenuHeader,
} from './styles';
import { useProcess } from '../../hooks/useProcess';
import { useAdvancedSearch } from '../../hooks/useAdvancedSearch';
import api from '../../services/api';
import Header from '../../components/Header';

interface ColorTypes {
  [key: number]: string;
}

const colors: ColorTypes = {
  0: '#eeff00',
  1: '#46EB8E',
  2: '#ff5b5b',
  3: '#3538D4',
  4: '#00A3FF',
  5: '#8615FF',
  6: '#ECB33B',
  7: '#FF28AB',
  8: '#35D4A7',
  9: '#35CAD4',
  10: '#8385FF',
  11: '#845B5B',
  12: '#045929',
  13: '#FF5C00',
  14: '#37839B',
  15: '#404040',
  16: '#00343a',
};

export const TimelineActs: React.FC = () => {
  const { acts, loading, cleanActs, setActs, actTypeDicionary, process } =
    useProcess();
  const { dateOneInitial, dateTwoInitial, actType } = useAdvancedSearch();

  const [page, setPage] = useState(1);
  const [loadingInfiniteScrool, setLoadingInfiniteScrool] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const observer = useRef<any>();
  const lastActElementRef = useCallback(
    (node: any) => {
      if (loadingInfiniteScrool) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loadingInfiniteScrool, hasMore, setPage]
  );

  useEffect(
    () => {
      setLoadingInfiniteScrool(true);
      setError(false);
      let cancel;
      api
        .get(`/advanced_search`, {
          params: {
            ...(process ? { n_processo: process } : {}),
            ...(dateOneInitial ? { start_date: dateOneInitial } : {}),
            ...(dateTwoInitial ? { end_date: dateTwoInitial } : {}),
            ...(actType ? { id_tipo: actType } : {}),
            ...(page ? { page } : {}),
          },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((response) => {
          setActs((prevActs) => {
            return [...new Set([...prevActs, ...response.data.acts])];
          });
          setHasMore(response.data.acts.length > 0);
          setLoadingInfiniteScrool(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setLoadingInfiniteScrool(true);
        });
      return () => cancel();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page]
  );

  const handleInformation = useCallback(
    (id: number) => {
      if (acts.length > 0) {
        const newActsWithView = acts.map((act) =>
          act?.id_ato === id
            ? {
                ...act,
                view: !act.view,
              }
            : act
        );
        setActs(newActsWithView);
      }
    },
    [setActs, acts]
  );

  return (
    <Container>
      <Header />
        <MenuHeader>
          <Link
            to="/"
            onClick={() => {
              cleanActs();
            }}
          >
            <h3>Home</h3>
          </Link>
          <AiOutlineRight color="#959595" style={{ marginRight: '0.3rem' }} />
          <h3>Timeline</h3>
        </MenuHeader>

      {loading ? (
        <ReactLoading
          color="#122145"
          type="bars"
          className="loading"
          height="10%"
          width="10%"
        />
      ) : (
        <>
          <Timeline className="extra" lineColor="#ddd" animate={false}>
            {acts.map((act, index) => {
              if (acts.length === index + 1) {
                return (
                  <button
                    style={{ background: 'transparent', color: 'transparent' }}
                    type="button"
                    ref={lastActElementRef}
                    onClick={() => handleInformation(act.id_ato)}
                  >
                    Infinite
                  </button>
                );
              }
              return (
                <TimelineItem
                  key={act.id_ato}
                  dateText={new Intl.DateTimeFormat('pt-BR').format(
                    new Date(act.data_dodf)
                  )}
                  dateComponent={
                    <>
                      <DateRec>
                        <Rec act_type={act.id_tipo}>
                          <p>
                            {new Intl.DateTimeFormat('pt-BR').format(
                              new Date(act.data_dodf)
                            )}
                          </p>
                        </Rec>
                      </DateRec>
                    </>
                  }
                  style={{ color: colors[act.id_tipo] }}
                >
                  {!act.view ? (
                    <BodyStyle>
                      <h3>{actTypeDicionary[act.id_tipo]}</h3>
                      <p>{act.texto}</p>
                    </BodyStyle>
                  ) : (
                    <InformationAct>
                      {act.id_tipo && (
                        <Topic>
                          <ImFileText size="2rem" color="#243386" />
                          <p>Tipo do Ato: {actTypeDicionary[act.id_tipo]}</p>
                        </Topic>
                      )}
                      {process && (
                        <Topic>
                          <GrProductHunt size="2rem" color="#364784" />
                          <p>Nº Processo: {process}</p>
                        </Topic>
                      )}
                      {act.empresa !== 'None' && (
                        <Topic>
                          <BsPersonFill size="2rem" color="#2A84BF" />
                          <p>Empresa: {act.empresa}</p>
                        </Topic>
                      )}
                      {act.cnpj !== 'None' && (
                        <Topic>
                          <GiSuitcase size="2rem" color="#6585D7" />
                          <p>
                            {' CNPJ: '}
                            {act.cnpj}
                          </p>
                        </Topic>
                      )}
                      {act.itensfracassados !== 'None' && (
                        <Topic>
                          <MdSmsFailed size="2rem" color="#FF0000 " />
                          <p>Itens Fracassados: {act.itensfracassados}</p>
                        </Topic>
                      )}
                      {act.itensvencedores !== 'None' && (
                        <Topic>
                          <MdSmsFailed size="2rem" color="#36D492" />
                          <p>Itens Vencedores: {act.itensvencedores}</p>
                        </Topic>
                      )}
                      {act.responsavelato !== 'None' && (
                        <Topic>
                          <FaPenAlt size="2rem" color="#3538D4" />
                          <p>Responsável: {act.responsavelato}</p>
                        </Topic>
                      )}
                      {act.contrato !== 'None' && (
                        <Topic>
                          <FaFileContract size="2rem" color="#016154" />
                          <p>Contrato: {act.contrato}</p>
                        </Topic>
                      )}
                      {act.partes !== 'None' && (
                        <Topic>
                          <RiFolderInfoLine size="2rem" color="#020324" />
                          <p>Partes: {act.partes}</p>
                        </Topic>
                      )}
                      {act.objeto !== 'None' && (
                        <Topic>
                          <AiFillInfoCircle size="2rem" color="#0b3641" />
                          <p>Objeto: {act.objeto}</p>
                        </Topic>
                      )}
                      {act.valor !== 'None' && (
                        <Topic>
                          <FaMoneyBill size="2rem" color="#15b11d" />
                          <p>Valor: {act.valor}</p>
                        </Topic>
                      )}
                      {act.lei_orc !== 'None' && (
                        <Topic>
                          <GiClawHammer size="2rem" color="#5f351838D4" />
                          <p>Lei Orçamentária: {act.lei_orc}</p>
                        </Topic>
                      )}
                      {act.uni_orc !== 'None' && (
                        <Topic>
                          <FaRegNewspaper size="2rem" color="#220a2c" />
                          <p>União Orçamentária: {act.uni_orc}</p>
                        </Topic>
                      )}
                      {act.prog_trab !== 'None' && (
                        <Topic>
                          <MdWork size="2rem" color="#060607" />
                          <p>Programa de Trabalho: {act.prog_trab}</p>
                        </Topic>
                      )}
                      {act.nat_desp !== 'None' && (
                        <Topic>
                          <TiInfoLarge size="2rem" color="#006781" />
                          <p>Natureza da Despesa: {act.nat_desp}</p>
                        </Topic>
                      )}
                      {act.nota_emp !== 'None' && (
                        <Topic>
                          <MdSpeakerNotes size="2rem" color="#004bee" />
                          <p>Nota Empresa: {act.nota_emp}</p>
                        </Topic>
                      )}
                      {act.data_ass !== 'None' && (
                        <Topic>
                          <MdDateRange size="2rem" color="#005586" />
                          <p>Data de Assinatura: {act.data_ass}</p>
                        </Topic>
                      )}
                      {act.signatarios !== 'None' && (
                        <Topic>
                          <TiInfo size="2rem" color="#1b244b" />
                          <p>Signatários: {act.signatarios}</p>
                        </Topic>
                      )}
                      {act.vigencia !== 'None' && (
                        <Topic>
                          <AiTwotoneSnippets size="2rem" color="#300b53" />
                          <p>Vigência: {act.vigencia}</p>
                        </Topic>
                      )}
                    </InformationAct>
                  )}

                  <button
                    type="button"
                    onClick={() => handleInformation(act.id_ato)}
                  >
                    <MdMore
                      size="2rem"
                      color={act.view ? '#2980B9' : '#0F1B39'}
                    />
                  </button>
                </TimelineItem>
              );
            })}
          </Timeline>
          {loadingInfiniteScrool && (
            <ReactLoading
              color="#122145"
              type="bars"
              className="loadingTimeline"
              height="10%"
              width="10%"
            />
          )}
          <div>{error && 'Error'}</div>
          <Footer>
            <footer>
              <div>
                <img src={homeTwoWhite} alt="" />
              </div>
            </footer>
            <div>
              <p>© 2021 KnEDLe. All Rights Reserved.</p>
            </div>
          </Footer>
        </>
      )}
    </Container>
  );
};
