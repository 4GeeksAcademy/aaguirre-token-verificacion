"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)



#se crea la ruta para autentificar los usuarios y devolver el token
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    
    #hago un filter para ver si tengo en la base de datos el usuario/contraseña y lo almaceno en una va. 
    user = User.query.filter_by(email=email, password=password).first()
     
    #verifico si se encuentra o no:
    if not user:
        return jsonify({'msg':'Email o contraseña incorrectos'}), 401

    #sino entra en esa condición, se inicia seción y se genera el jwt:
    token_creado = create_access_token(identity = user.id) 
    return jsonify({'token': token_creado, 'user_id': user.id}), 200


#login , registro y verficacion token














@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
