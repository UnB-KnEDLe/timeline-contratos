from api.models.atos import AtosModel, CertameModel, TipoAtoModel
from flask import jsonify, Blueprint
from sqlalchemy import desc

atos_blueprint = Blueprint('_atos', __name__)


@atos_blueprint.route('/acts/<n_processo>', methods=['GET'])
def get_act(n_processo):
    response_object = {
        'status': 'fail',
        'message': 'Act does not exist'
    }
    try:
        acts = AtosModel.query.join(CertameModel, AtosModel.id_certame == CertameModel.id_certame).join(
            TipoAtoModel, AtosModel.id_tipo == TipoAtoModel.id_tipo).filter(
                CertameModel.n_processo == n_processo).order_by(desc(AtosModel.data_dodf)).all()
        if not acts:
            return response_object, 404
        else:
            acts_json = [AtosModel.to_json(act) for act in acts if act is not None]
            return jsonify({'acts': acts_json}), 200
    except ValueError:
        return response_object, 404

@atos_blueprint.route('/acts/types', methods=['GET'])
def get_all_type_acts():
    """Get all acts types"""
    response_object = {
        'status': 'success',
        'data': [type_acts.to_json() for type_acts in TipoAtoModel.query.all()]
    }
    return response_object, 200
