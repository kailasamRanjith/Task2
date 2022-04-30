from flask import *
import sqlite3
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
project_root = os.path.dirname(os.path.realpath(__file__))
database = os.path.join(project_root, 'db.db')

@app.route('/insert_records', methods=['POST'])
def insert_records():
    record = json.loads(request.data)
    name=record.get('datas').get('name')
    email=record.get('datas').get('email')
    phone_number=record.get('datas').get('phone')
    dob=record.get('datas').get('dob')
    address=record.get('datas').get('address')
    with sqlite3.connect(database) as connection:
        cursor = connection.cursor() 
        cursor.execute("select * from info")   
        data = cursor.fetchall() 
        person_id=len(data)+1
        cursor.execute("""insert into info (person_id,name,email,phone_number,dob,address)
        values(?,?,?,?,?,?);""",(person_id,name,email,phone_number,dob,address))
        connection.commit()
        cursor = connection.cursor() 
        cursor.execute("select * from info")   
        data = cursor.fetchall()
        print(len(data))    
        return jsonify(data=data)

@app.route('/get_records', methods=['POST'])
def get_records():
    record = json.loads(request.data)
    name = record.get('datas')
    with sqlite3.connect(database) as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM info WHERE person_id='%s'"%name)
        data = cursor.fetchall()
        print(data)
        return jsonify(data=data)

if __name__ == "__main__":
    app.run(debug = True)  