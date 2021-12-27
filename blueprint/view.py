from flask.blueprints import Blueprint
from flask import redirect, render_template, request, jsonify
from flask.helpers import make_response

from db import db_hander
bp_view = Blueprint("view", __name__, url_prefix="/")

@bp_view.route("/")
def index():
    return redirect("/monitor")

@bp_view.route("/adm")
def adm():
    return redirect("/adm/gen")

@bp_view.route("/adm/<t>")
def adm_type(t):
    gen_order = db_hander.get_order()
    mas_order = db_hander.get_mas_order()
    return render_template("order_adm.html", order_type=t, gen_order=gen_order, mas_order=mas_order)

@bp_view.route("/monitor")
def monitor():
    gen_order = db_hander.get_order()
    mas_order = db_hander.get_mas_order()
    return render_template("order_monitor.html", gen_order=gen_order, mas_order=mas_order)

@bp_view.route("/getorder", methods=["POST"])
def getorder():
    order_id = request.json['id']
    print("!@#!@# id : ", order_id)
    order = db_hander.get_order(order_id)
    print("!@#!@# order : ", order)
    return jsonify({"status":True, "status_code":200, "result":order})

@bp_view.route("/addorder", methods=["POST"])
def addorder():    
    order = request.form.to_dict()
    if not order['font_color']:
        order['font-color'] = 'white'
    print("!@#!@# request : ", order)
    db_hander.add_order(order)
    return redirect("/adm/gen")

@bp_view.route("/updateorder", methods=["POST"])
def updateorder():
    order = request.form.to_dict()
    print("!@#!@# update : ", order)
    if not order['font_color']:
        order['font-color'] = 'white'
    print("!@#!@# request : ", order)
    db_hander.update_order(order)
    return redirect("/adm/mas")

@bp_view.route("/delorder", methods=["DELETE"])
def delorder():
    order_id = request.form.to_dict()['id']
    db_hander.del_order(order_id)
    return jsonify({"status":True, "status_code":200})

@bp_view.route("/addmasorder", methods=["POST"])
def addmasorder():    
    order = request.form.to_dict()
    if not order['font_color']:
        order['font-color'] = 'white'
    print("!@#!@# request : ", order)
    db_hander.add_mas_order(order)
    return redirect("/adm/mas")

@bp_view.route("/updatemasorder", methods=["POST"])
def updatemasorder():
    order = request.form.to_dict()
    print("!@#!@# update mas : ", order)
    if not order['font_color']:
        order['font-color'] = 'white'
    print("!@#!@# request : ", order)
    db_hander.update_mas_order(order)
    return redirect("/adm/mas")

@bp_view.route("/delmasorder", methods=["DELETE"])
def delmasorder():
    print("!@#!@# delete mas order")
    order_id = request.form.to_dict()['id']
    db_hander.del_mas_order(order_id)
    return jsonify({"status":True, "status_code":200})


@bp_view.route("/getmasorder", methods=["POST"])
def getmasorder():
    order_id = request.json['id']
    print("!@#!@# order_id : ", order_id)
    order = db_hander.get_mas_order(order_id)
    print("!@#!@# order : ", order)
    return make_response(jsonify({"status":True, "result":order}),200)




@bp_view.route("/sample/<template>")
def page(template):
    print("!@#!@# template : ", template)
    return render_template(template+".html")

