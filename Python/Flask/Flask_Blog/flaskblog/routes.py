from flask import render_template, url_for, flash, redirect #Importing render_template, url_for, flash, redirect function
from flaskblog import app
from flaskblog.forms import RegistrationForm, LoginForm #Import the forms that I have created in forms.py

posts = [
    {
        'author': 'Jonas',
        'title': 'Blog post 1',
        'content': 'First blog post!',
        'date_posted': 'April 3, 2020'
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
