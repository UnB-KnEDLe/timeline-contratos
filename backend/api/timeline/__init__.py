from flask import Flask
from flask_restful import Resource, Api

# instantiate the app
app = Flask(__name__)

api = Api(app)

# set config
app.config.from_object('timeline.config.DevelopmentConfig')  # new


class UsersPing(Resource):
    def get(self):
        return {
            'status': 'success',
            'message': 'pong!'
        }


api.add_resource(UsersPing, '/users/ping')
