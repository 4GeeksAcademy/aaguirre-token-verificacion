"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity


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

#una vez se inicia sesión, se va realizando la verificación del token. 
@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user is None:
        return jsonify({'msg':'verificación incorrecta'}), 401
    
    return jsonify({'id':user.id, 'email':user.email})

@api.route('/signup', methods=['POST'])
def signup():
    #primero obtengo los datos json de la solicitud 
    data = request.get_json()
    #extraígo el email y contraseña
    email = data.get('email')
    password = data.get('password')
    is_active = data.get('is_active')

    user = User.query.filter_by(email=email, is_active = is_active).first()

    if not user:
        user = User(email=email, password=password, is_active= is_active)
        #añadimos esos datos a nuestro base 
        db.session.add(user)
        db.session.commit() 
        return jsonify({'msg':'Usuario registrado exitosamente'}),200 
    elif user:
        return jsonify({'msg':'Usuario ya existe'}),400













@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
