from flask_sqlalchemy import SQLAlchemy

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


class AtosModel(db.Model):
    __tablename__ = 'atos'
    id_ato = db.Column(db.Integer, primary_key=True, autoincrement=True)
    data_dodf = db.Column(db.Text, nullable=True)
    texto = db.Column(db.Text, nullable=True)
    id_certame = db.Column(db.Integer, db.ForeignKey('certame.id_certame'))
    id_tipo = db.Column(db.Integer, db.ForeignKey('tipo_ato.id_tipo'))

    def __init__(self, id_ato, data_dodf, texto, id_certame, id_tipo):
        self.id_ato = id_ato
        self.data_dodf = data_dodf
        self.texto = texto
        self.id_certame = id_certame
        self.id_tipo = id_tipo

    def to_json(self):
        return {
            'id_ato': self.id_ato,
            'data_dodf': self.data_dodf,
            'texto': self.texto,
            'certames': self.id_certame,
            'tipo_atos': self.id_tipo
        }
