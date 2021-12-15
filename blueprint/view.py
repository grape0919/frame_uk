from flask.blueprints import Blueprint
from flask import redirect, render_template, request

from db import db_hander
bp_view = Blueprint("view", __name__, url_prefix="/")

@bp_view.route("/")
def index():
    return redirect("/monitor")

@bp_view.route("/adm")
def adm():
    result = db_hander.get_order()
    return render_template("order_adm.html", gen_order= result)

@bp_view.route("/monitor")
def monitor():
    result = db_hander.get_order()
    return render_template("order_monitor.html", gen_order=result)

@bp_view.route("/addorder", methods=["POST"])
def addorder():
    
    if request.method == 'POST':
        order = request.form.to_dict()
        if not order['font_color']:
            order['font-color'] = 'white'
        print("!@#!@# request : ", order)
        db_hander.add_order(order)
    return redirect("/adm")

@bp_view.route("/sample/<template>")
def page(template):
    print("!@#!@# template : ", template)
    return render_template(template+".html")

