from flask import Flask, render_template, jsonify
app = Flask(__name__)

vectors = [
    {
        "source": "1.0",
        "target": "2.0",
        "type": "arrow",
        "coords": {
            "source": [0,12],
            "target": [40,30]
        }
    },
    {
        "source": "2.0",
        "target": "20.0",
        "type": "arrow",
        "coords": {
            "source": [0,0],
            "target": [44,20]
        }
    },
    {
        "source": "3.0",
        "target": "10.0",
        "type": "arrow",
        "coords": {
            "source": [20,20],
            "target": [43,3]
        }
    },
    {
        "source": "7.0",
        "target": "8.0",
        "type": "arrow",
        "coords": {
            "source": [0,10],
            "target": [43,34]
        }
    }
]

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/api/vectors', methods=['GET'])
def get_vectors():
    return jsonify({'vectors': vectors})
	
if __name__ == "__main__":
	app.run(host='127.0.0.1', port=8080, debug=True)