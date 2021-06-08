import React, { useEffect } from 'react';
// @ts-ignore
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useRouteMatch } from 'react-router-dom';

import { useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';

interface ActTypes {
  [key: number]: string;
}

interface ActParam {
  data_dodf: string;
  texto: string;
  id_ato: number;
  tipo_atos: number;
}

interface ActRouteParam {
  contract: string;
}

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
};

// 0010009842017
// 0005000153415201755

export const TimelineActs: React.FC = () => {
  const { params } = useRouteMatch<ActRouteParam>();
  const [acts, setActs] = useState<ActParam[]>([]);

  useEffect(() => {
    api.get(`/${params.contract}`, {}).then((response) => {
      setActs(response.data.acts);
    });
  }, [params.contract]);

  return (
    <Container>
      <header />
      <Timeline lineColor="#ddd">
        {acts.map((act) => {
          return (
            <TimelineItem
              key={act.id_ato}
              dateText={new Intl.DateTimeFormat('pt-BR').format(
                new Date(act.data_dodf)
              )}
              style={{ color: '#e86971' }}
            >
              <h3>{actType[act.tipo_atos]}</h3>
              <p>{act.texto}</p>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Container>
  );
};
