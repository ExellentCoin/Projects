from flask import Flask, render_template #Import flask and the render_template function

app = Flask(__name__) #Create a flask app


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


# Start with python ... in stead of setting env variables
if __name__ == '__main__':
    app.run(debug=True)