from flask import Flask #Importing flask base
from flask_sqlalchemy import SQLAlchemy #Importing SQLAlchemy for interaction with any SQL database

app = Flask(__name__) #Creating the app
app.config['SECRET_KEY'] = '7b14aa0ecd7201deedd6ac24005bfedc' #Secret app key to protect against attacks
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' #Link to the database we will be using ('///' means local relative file)
db = SQLAlchemy(app)

from flaskblog import routes
from flaskblog.models import User, Post