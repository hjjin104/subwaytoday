
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
   return render_template('Home.html')

@app.route('/menu')
def menu():
    return render_template('Menu.html')

# @app.route('/menu')
# def menu():
#     return render_template('Menu.html')
#
# @app.route('/menu')
# def menu():
#     return render_template('Menu.html')

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)