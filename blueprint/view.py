from flask.blueprints import Blueprint
from flask.templating import render_template


bp_view = Blueprint("view", __name__, url_prefix="/")

@bp_view.route("/")
def index():
    return render_template("products.html")

@bp_view.route("/blogger")
def nohandblogger():
    return render_template("blogger.html")

@bp_view.route("/sample/<template>")
def page(template):
    print("!@#!@# template : ", template)
    return render_template(template+".html")

