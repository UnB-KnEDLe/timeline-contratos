CREATE TABLE CERTAME(
    id_certame SERIAL NOT NULL,
    processo VARCHAR(30),
    CONSTRAINT CERTAME_PK primary key (id_certame)
);
CREATE TABLE TIPO_ATO(
    cod_ato SERIAL NOT NULL,
    descricao VARCHAR(50),
    CONSTRAINT TIPO_ATO_PK PRIMARY KEY (cod_ato)
);
CREATE TABLE ATOS(
    id_ato SERIAL NOT NULL,
    data_dodf VARCHAR(15),
    texto text,
    id_certame INT,
    cod_ato INT,
    CONSTRAINT ATOS_PK PRIMARY KEY (id_ato),
                FOREIGN KEY(id_certame)
                    REFERENCES CERTAME(id_certame),
                FOREIGN KEY (cod_ato)
                    REFERENCES TIPO_ATO(cod_ato)
);