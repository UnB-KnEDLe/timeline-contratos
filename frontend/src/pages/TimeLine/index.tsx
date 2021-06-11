import React from 'react';
// @ts-ignore
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Link } from 'react-router-dom';

import ReactLoading from 'react-loading';
import { BiArrowBack } from 'react-icons/bi';
import { Container } from './styles';
import { useProcess } from '../../hooks/useProcess';

interface ActTypes {
  [key: number]: string;
}

interface ColorTypes {
  [key: number]: string;
}

const colors: ColorTypes = {
  1: '#46EB8E',
  2: '#FF0000',
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
  999: '#808080',
};

const actType: ActTypes = {
  1: 'AVISO DE ABERTURA DE LICITACAO',
  2: 'AVISO DE HOMOLOGACAO E ADJUDICACAO',
  3: 'AVISO DE HOMOLOGACAO E CONVOCACAO',
  4: 'AVISO DE RESULTADO',
  5: 'AVISO DO RESULTADO DE JULGAMENTO',
  6: 'AVISO DE DECLARACAO DE VENCEDOR',
  7: 'AVISO DE JULGAMENTO',
  8: 'AVISO DE JULGAMENTO DE HABILITACAO',
  9: 'AVISO DE JULGAMENTO DE RECURSO ADMINISTRATIVO',
  10: 'AVISO DE SUSPENSAO DE LICITACAO',
  11: 'AVISO DE ADIAMENTO DE LICITACAO',
  12: 'AVISO DE NOVA DATA DE ABERTURA',
  13: 'AVISO DE REABERTURA',
  14: 'AVISO DE LICITACAO',
  15: 'EXTRATOS DE CONTRATO',
  16: 'AVISO DE ALTERAÇÃO',
  999: 'DESCONHECIDO',
};

// 0000000005000003463201965

// 0000000008000029272201750

// 0000000015000000737201918

// 0000000005000003463201965

export const TimelineActs: React.FC = () => {
  const { acts, loading, cleanActs } = useProcess();

  return (
    <Container>
      <header />
      <Link to="/" onClick={cleanActs}>
        <BiArrowBack size="5rem" />
      </Link>
      {loading ? (
        <ReactLoading
          color="#122145"
          type="bars"
          className="loading"
          height="10%"
          width="10%"
        />
      ) : (
        <Timeline lineColor="#ddd">
          {acts.map((act) => {
            return (
              <TimelineItem
                key={act.id_ato}
                dateText={new Intl.DateTimeFormat('pt-BR').format(
                  new Date(act.data_dodf)
                )}
                dateInnerStyle={{
                  background: colors[act.tipo_atos],
                }}
                style={{
                  color: colors[act.tipo_atos],
                }}
              >
                <h3>{actType[act.tipo_atos]}</h3>
                <p>{act.texto}</p>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    </Container>
  );
};
