from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
import json

db = SQLAlchemy()


class CertameModel(db.Model):
    __tablename__ = 'certame'
    id_certame = db.Column(db.Integer, primary_key=True, autoincrement=True)
    n_processo = db.Column(db.Text, nullable=True)

    def __init__(self, id_certame, n_processo):
        self.id_certame = id_certame
        self.n_processo = n_processo

    def to_json(self):
        return {
            'id_certame': self.id_certame,
            'n_processo': self.n_processo
        }


class TipoAtoModel(db.Model):
    __tablename__ = 'tipo_ato'
    id_tipo = db.Column(db.Integer, primary_key=True, autoincrement=True)
    descricao = db.Column(db.Text, nullable=True)

    def __init__(self, id_tipo, descricao):
        self.id_tipo = id_tipo
        self.descricao = descricao
    

    def to_json(self):
        return {
            'id_tipo': self.id_tipo,
            'descricao': self.descricao
        }

@dataclass
class AtosModel(db.Model):
    __tablename__ = 'atos'
    id_ato: int = db.Column(db.Integer, primary_key=True, autoincrement=True)
    data_dodf: str = db.Column(db.Text, nullable=True)
    texto: str = db.Column(db.Text, nullable=True)
    id_certame: int = db.Column(db.Integer, db.ForeignKey('certame.id_certame'))
    id_tipo: int = db.Column(db.Integer, db.ForeignKey('tipo_ato.id_tipo'))
    empresa:str = db.Column(db.Text, nullable=True)
    cnpj:str = db.Column(db.Text, nullable=True)
    itensvencedores:str = db.Column(db.Text, nullable=True)
    itensfracassados:str = db.Column(db.Text, nullable=True)
    responsavelato:str = db.Column(db.Text, nullable=True)
    contrato:str = db.Column(db.Text, nullable=True) 
    partes:str = db.Column(db.Text, nullable=True)
    objeto:str = db.Column(db.Text, nullable=True)
    valor:str = db.Column(db.Text, nullable=True)
    lei_orc:str = db.Column(db.Text, nullable=True)
    uni_orc:str = db.Column(db.Text, nullable=True)
    prog_trab:str = db.Column(db.Text, nullable=True)
    nat_desp:str = db.Column(db.Text, nullable=True)
    nota_emp:str = db.Column(db.Text, nullable=True)
    data_ass:str = db.Column(db.Text, nullable=True)
    signatarios:str = db.Column(db.Text, nullable=True)
    vigencia:str = db.Column(db.Text, nullable=True)
    view:bool = False

    def __init__(self, id_ato, data_dodf, texto, id_certame, id_tipo, empresa, cnpj, itensvencedores, itensfracassados, responsavelato,contrato, partes, objeto, valor, lei_orc, uni_orc, prog_trab, nat_desp, nota_emp, data_ass, signatarios, vigencia, view):
        self.id_ato: int = id_ato
        self.data_dodf: str = data_dodf
        self.texto: str = texto
        self.id_certame: int = id_certame
        self.id_tipo: int = id_tipo
        self.empresa: str = empresa
        self.cnpj:str = cnpj
        self.item_vencedor:str = itensvencedores
        self.itensfracassados:str = itensfracassados
        self.responsavelato:str = responsavelato
        self.contrato:str = contrato
        self.partes:str = partes
        self.objeto:str = objeto
        self.valor:str = valor
        self.lei_orc:str = lei_orc
        self.uni_orc:str = uni_orc
        self.prog_trab:str = prog_trab
        self.nat_desp:str = nat_desp
        self.nota_emp:str = nota_emp
        self.data_ass:str = data_ass
        self.signatarios:str = signatarios
        self.vigencia:str = vigencia
        self.view:bool = view


