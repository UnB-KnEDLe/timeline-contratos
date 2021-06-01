CREATE TABLE _ATO(
    ato_id SERIAL NOT NULL,
    processo VARCHAR(50),
    objeto VARCHAR(100),
    data_dodf VARCHAR(30),
    texto TEXT,
    CONSTRAINT _ATO_PK PRIMARY KEY (ato_id)
);