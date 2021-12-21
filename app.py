# app.py
# python 3.8

from flask import Flask

from blueprint import view
from blueprint import api
app = Flask(__name__)

app.register_blueprint(view.bp_view)
app.register_blueprint(api.bp_api)

app.run(port=90, debug=False)