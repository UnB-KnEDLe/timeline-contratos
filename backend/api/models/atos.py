from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.dialects import postgresql


db = SQLAlchemy()


class CertameModel(db.Model):
    __tablename__ = 'certame'
    id_certame = db.Column(db.Integer, primary_key=True, autoincrement=True)
    processo = db.Column(db.Text, nullable=True)

    def __init__(self, id_certame, processo):
        self.id_certame = id_certame
        self.processo = processo

    def to_json(self):
        return {
            'id_certame': self.id_certame,
            'processo': self.processo
        }


class TipoAtoModel(db.Model):
    __tablename__ = 'tipo_ato'
    cod_ato = db.Column(db.Integer, primary_key=True, autoincrement=True)
    descricao = db.Column(db.Text, nullable=True)

    def __init__(self, cod_ato, descricao):
        self.cod_ato = cod_ato
        self.descricao = descricao

    def to_json(self):
        return {
            'cod_ato': self.cod_ato,
            'descricao': self.descricao
        }


class AtosModel(db.Model):
    __tablename__ = 'atos'
    id_ato = db.Column(db.Integer, primary_key=True, autoincrement=True)
    data_dodf = db.Column(db.Text, nullable=True)
    texto = db.Column(db.Text, nullable=True)
    id_certame = db.Column(db.Integer, db.ForeignKey('certame.id_certame'))
    cod_ato = db.Column(db.Integer, db.ForeignKey('tipo_ato.cod_ato'))

    def __init__(self, id_ato, data_dodf, texto, id_certame, cod_ato):
        self.id_ato = id_ato
        self.data_dodf = data_dodf
        self.texto = texto
        self.id_certame = id_certame
        self.cod_ato = cod_ato

    def to_json(self):
        return {
            'id_ato': self.id_ato,
            'data_dodf': self.data_dodf,
            'texto': self.texto,
            'certames': [certame.id_certame for certame in self.id_certame],
            'tipo_atos': [tipo_ato.cod_ato for tipo_ato in self.cod_ato]
        }