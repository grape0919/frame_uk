from flask.blueprints import Blueprint
from flask.helpers import make_response
from flask import request


bp_api = Blueprint("api", __name__, url_prefix="/api")

@bp_api.route("/", methods=["GET"])
def index():

    req = request.args.to_dict()
    print("!@#!@# req : ", req)

    return make_response({"status":True}, 200)

@bp_api.route("/generalOrder", methods=["GET"])
def generalOrder():

    res = index()
    print("!@#!@# res : ", res)

    return make_response({"status":True}, 200)