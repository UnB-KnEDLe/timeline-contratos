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
