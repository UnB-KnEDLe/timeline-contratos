import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS


# instantiate the db
db = SQLAlchemy()


def create_app(script_info=None):

    # instantiate the app
    app = Flask(__name__)
    api = Api(app)
    CORS(app)
    # set config
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    # set up extensions
    db.init_app(app)


    # register blueprints
    from api.resources.atos import atos_blueprint
    app.register_blueprint(atos_blueprint)


    # shell context for flask cli
    @app.shell_context_processor
    def ctx():
        return {'app': app, 'db': db}

    return app