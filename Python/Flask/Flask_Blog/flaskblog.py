from flask import Flask, render_template, url_for, flash, redirect #Importing flask base and render_template, url_for, flash, redirect function
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm #Import the forms that I have created in forms.py

app = Flask(__name__) #Creating the app
app.config['SECRET_KEY'] = '7b14aa0ecd7201deedd6ac24005bfedc' #Secret app key to protect against attacks
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

#Variables
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image}')"

posts = [
    {
        'author': 'Jonas Caluwé',
        'title': 'Blog post 1',
        'content': 'First post content',
        'date_posted': 'April 1, 2020'
    },
    {
        'author': 'David Caluwé',
        'title': 'Blog post 2',
        'content': 'Second post content',
        'date_posted': 'April 2, 2020'
    }
]

#App routes
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', posts=posts)

@app.route('/about')
def about():
    return render_template('about.html', title='About')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login unsuccessful. Please check username and/or password!', 'danger')
    return render_template('login.html', title='Login', form=form)





if __name__ == '__main__':
    app.run(debug=True)

    ffor