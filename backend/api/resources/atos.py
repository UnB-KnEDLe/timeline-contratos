import sys

from api.models.atos import AtosModel, CertameModel, TipoAtoModel
from flask import jsonify, Blueprint
from sqlalchemy import desc
from dataclasses import asdict
from flask import request


atos_blueprint = Blueprint('_atos', __name__)


@atos_blueprint.route('/acts/<n_processo>', methods=['GET'])
def get_act(n_processo):
    response_object = {
        'status': 'fail',
        'message': 'Act does not exist'
    }
    try:
        acts_json = []
        page = request.args.get("page", 1, type=int)
            
        acts = AtosModel.query.join(CertameModel, AtosModel.id_certame == CertameModel.id_certame).join(
            TipoAtoModel, AtosModel.id_tipo == TipoAtoModel.id_tipo).filter(
            CertameModel.n_processo == n_processo).order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        if not acts:
            return response_object, 404
        else:
            for act in acts.items:
                acts_json.append(asdict(act))

            return {'acts': acts_json}, 200
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


@atos_blueprint.route('/acts/advanced_search')
def get_advanced_search():

    response_object = {
        'status': 'fail',
        'message': 'Act does not exist'
    }

    try:
        page = request.args.get("page", 1, type=int)
        n_processo = request.args.get("n_processo", default=None)
        start_date = request.args.get("start_date", default=None)
        end_date = request.args.get("end_date", default=None)
        id_tipo = request.args.get("id_tipo", default=None)

        if n_processo and start_date and end_date and id_tipo is not None:
            acts = AtosModel.query.join(CertameModel, AtosModel.id_certame == CertameModel.id_certame). \
                join(TipoAtoModel, AtosModel.id_tipo == TipoAtoModel.id_tipo).filter(CertameModel.n_processo == n_processo). \
                filter(AtosModel.data_dodf.between(start_date, end_date)).filter(AtosModel.id_tipo == id_tipo). \
                    order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        elif n_processo and start_date and end_date is not None:
            acts = AtosModel.query.join(CertameModel, AtosModel.id_certame == CertameModel.id_certame). \
                filter(CertameModel.n_processo == n_processo). \
                filter(AtosModel.data_dodf.between(start_date, end_date)). \
                    order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        elif n_processo and id_tipo is not None:
            acts = AtosModel.query.join(CertameModel, AtosModel.id_certame == CertameModel.id_certame). \
                join(TipoAtoModel, AtosModel.id_tipo == TipoAtoModel.id_tipo).filter(CertameModel.n_processo == n_processo). \
                filter(AtosModel.id_tipo == id_tipo).order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        elif n_processo is not None:
            acts = AtosModel.query.join(CertameModel, AtosModel.id_certame == CertameModel.id_certame). \
                filter(CertameModel.n_processo == n_processo).order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        elif start_date and end_date and id_tipo is not None:
            acts = AtosModel.query.join(TipoAtoModel, AtosModel.id_tipo == TipoAtoModel.id_tipo). \
                filter(AtosModel.data_dodf.between(start_date, end_date)). \
                filter(AtosModel.id_tipo == id_tipo).order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        elif start_date and end_date is not None:
            acts = AtosModel.query.filter(AtosModel.data_dodf.between(start_date, end_date)). \
                order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        elif id_tipo is not None:
            acts = AtosModel.query.join(TipoAtoModel, AtosModel.id_tipo == TipoAtoModel.id_tipo). \
                filter(AtosModel.id_tipo == id_tipo).order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        else:
            acts = AtosModel.query.order_by(desc(AtosModel.data_dodf)).paginate(per_page=5, page=page, error_out=False)
        
        if not acts:
            return response_object, 404
        else:
            acts_json = []

            for act in acts.items:
                acts_json.append(asdict(act))
            return {'acts': acts_json}, 200
    except ValueError:
        return response_object, 404
