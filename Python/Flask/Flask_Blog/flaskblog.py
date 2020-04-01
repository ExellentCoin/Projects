from flask import Flask, render_template, url_for #Importing flask base and render_template, url_for function
app = Flask(__name__) #Creating the app

#Variables
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





if __name__ == '__main__':
    app.run(debug=True)

    ffor