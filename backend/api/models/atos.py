from sqlalchemy.sql import func

from api import db


class AtosModel(db.Model):
    __tablename__ = '_ato'
    ato_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    processo = db.Column(db.String(50), nullable=True)
    objeto = db.Column(db.String(100), nullable=True)
    data_dodf = db.Column(db.String(30), nullable=True)
    texto = db.Column(db.String, nullable=True)

    def __init__(self, processo, objeto, data_dodf, texto):
        self.processo = processo
        self.objeto = objeto
        self.data_dodf = data_dodf
        self.texto = texto

    def to_json(self):
        return {
            'ato_id': self.ato_id,
            'processo': self.processo,
            'objeto': self.objeto,
            'data_dodf': self.data_dodf,
            'texto': self.texto
        }