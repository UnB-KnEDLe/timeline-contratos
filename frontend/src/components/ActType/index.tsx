import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Nav,
  NavMenu,
  NavMenuList,
  NavMenuItems,
} from './styles';
import { useProcess } from '../../hooks/useProcess';
import { useAdvancedSearch } from '../../hooks/useAdvancedSearch';

const ActType: React.FC = () => {
  const { typeActs } = useProcess();
  const { pickIdAct } = useAdvancedSearch();

  const [offHover, setOffHover] = useState(false);
  const [chooseAct, setChooseAct] = useState('TODOS');

  useEffect(() => {
    setOffHover(false);
  }, [offHover, pickIdAct]);

  const handleOffHover = useCallback(() => {
    setOffHover(true);
  }, []);

  const handleWithIdAct = useCallback(
    async (descricao: string, id_tipo: number) => {
      setChooseAct(descricao);
      pickIdAct(id_tipo);
    },
    [pickIdAct]
  );

  const handleTypeAct = useCallback(
    async (id: number) => {
      // eslint-disable-next-line
      typeActs.map((typeAct) => {
        typeAct.id_tipo === id &&
          handleWithIdAct(typeAct.descricao, typeAct.id_tipo);
      });
    },

    [typeActs, handleWithIdAct]
  );

  return (
    <Container>
      <h2>Tipo de Ato</h2>
      <Nav offHover={offHover}>
        <ul>
          <NavMenu>
            {chooseAct}
            <NavMenuList>
              <NavMenuItems
                onClick={() => {
                  handleOffHover();
                  setChooseAct('TODOS');
                  pickIdAct(null as any);
                }}
              >
                Todos
              </NavMenuItems>
              {typeActs.map((typeAct) => {
                return (
                  <NavMenuItems
                    key={typeAct.id_tipo}
                    onClick={() => {
                      handleTypeAct(typeAct.id_tipo);
                      handleOffHover();
                    }}
                  >
                    {typeAct.descricao}
                  </NavMenuItems>
                );
              })}
            </NavMenuList>
          </NavMenu>
        </ul>
      </Nav>
    </Container>
  );
};
export default ActType;
