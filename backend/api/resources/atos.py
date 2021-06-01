from flask import Blueprint
from sqlalchemy import exc
from api import db
from api.models.atos import AtosModel


atos_blueprint = Blueprint('_atos', __name__)


@atos_blueprint.route('/atos/<processo>', methods=['GET'])
def get_ato(processo):
    """Get single ato details"""
    response_object = {
        'status': 'fail',
        'message': 'Process not found'
    }
    try:
        ato = AtosModel.query.filter_by(process=process).first()
        if not ato:
            return response_object, 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'ato_id': ato.ato_id,
                    'processo': ato.processo,
                    'objeto': ato.objeto,
                    'data_dodf': ato.data_dodf,
                    'texto': ato.texto
                }
            }
            return response_object, 200
    except ValueError:
        return response_object, 404


@atos_blueprint.route('/atos', methods=['GET'])
def get_all_atos():
    """Get all atos"""
    response_object = {
        'status': 'success',
        'data': {
            'atos': [ato.to_json() for ato in AtosModel.query.all()]
        }
    }
    return response_object, 200