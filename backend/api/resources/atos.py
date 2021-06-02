from flask import Blueprint, jsonify, request
from flask.wrappers import Request
from sqlalchemy import exc
from api import db
from api.models.atos import AtosModel, CertameModel
from api.utils import get_acts_process


atos_blueprint = Blueprint('_atos', __name__)


@atos_blueprint.route('/atos/<processo>', methods=['GET'])
def get_ato(processo):
    """Get single ato details"""
    error_response = {"status": "fail", "message": "Request not found"}

    requests = get_acts_process(
        [
            request.to_json()
            for request in CertameModel.query.filter(
                CertameModel.processo == processo).all()
        ]
    )

    if not requests:
        return jsonify(error_response), 404

    response = {
        "status": "success",
        "data": {"requests": requests},
    }

    return jsonify(response), 200


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