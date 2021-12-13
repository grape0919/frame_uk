from flask.blueprints import Blueprint
from flask import request, make_response, jsonify

from db import db_hander

bp_api = Blueprint("api", __name__, url_prefix="/api")

@bp_api.route("/", methods=["GET"])
def index():

    req = request.json
    print("!@#!@# req : ", req)

    return make_response({"status":True}, 200)

@bp_api.route("/generalorder", methods=["GET"])
def generalOrder():

    res = request.json
    print("!@#!@# res : ", res)
    
    result = db_hander.get_order()
    
    print("!@#!@# result = ", result)
    try:
        pass
    except Exception as e:
        repr(e)
    
    return jsonify({"status":True, "status_code":200, "result": result})

@bp_api.route("/addorder", methods=["POST"])
def addOrder():

    res = request.json
    print("!@#!@# res : ", res)
    
    db_hander.add_order(res)
    
    result = {}
    
    try:
        pass
    except Exception as e:
        repr(e)
    
    return jsonify({"status":True, "status_code":200, "result": result})