from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
# client = MongoClient('mongodb://test:test@52.79.241.120', 27017)
db = client.dbhomework

@app.route('/')
def home():
   return render_template('todaysubway_main.html')

@app.route('/show')
def show():
    return render_template('todaysubway_list_top10.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/result')
def result():
    return render_template('todaysubway_result.html')

@app.route('/check')
def check():
    return render_template('todaysubway_lastpage.html')

#유저가 선택한 주메뉴, 빵, 치즈, 소스 data를 db에 생성하는 API
@app.route('/menu', methods=['POST'])
def menuPost():
   sandwich_receive = request.form['sandwich_give']
   bread_receive = request.form['bread_give']
   sauce_receive = request.form.getlist('sauce_give')
   cheese_receive = request.form['cheese_give']

   doc = {
      'sandwich': sandwich_receive,
      'bread': bread_receive,
      'sauce': sauce_receive,
      'cheese': cheese_receive
   }

   db.userchoice.insert_one(doc)
   return jsonify({'result':'success', 'msg': '완료되었습니다!'})


if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)