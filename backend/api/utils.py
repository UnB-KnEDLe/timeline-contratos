from api.models.atos import AtosModel


def get_acts_process(requests: list) -> list:
    for request in requests:
        id_certame = request["id_certame"]
        atos = AtosModel.query.filter_by(id_certame=id_certame).first()
        request["data_dodf"] = atos.data_dodf
        request["texto"] = atos.texto
        request["id_tipo"] = atos.id_tipo

    return requests