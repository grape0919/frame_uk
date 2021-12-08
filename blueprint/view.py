from flask.blueprints import Blueprint
from flask import redirect, render_template

bp_view = Blueprint("view", __name__, url_prefix="/")

@bp_view.route("/")
def index():
    return redirect("/monitor")

@bp_view.route("/adm")
def adm():
    return render_template("order_adm.html")

@bp_view.route("/monitor")
def monitor():
    return render_template("order_monitor.html")

@bp_view.route("/sample/<template>")
def page(template):
    print("!@#!@# template : ", template)
    return render_template(template+".html")

