from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data')
def data():
    df = pd.read_csv('data/oura_2024-10-28_2024-12-28_trends.csv', skipinitialspace=True)
    df['date'] = pd.to_datetime(df['date']).dt.date
    scores = df[['date', 'Resting Heart Rate Score']].to_dict(orient='records')
    return jsonify(scores)

if __name__ == '__main__':
    app.run(debug=True)