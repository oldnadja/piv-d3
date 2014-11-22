from flask import Flask, render_template, jsonify
from flask import make_response
from functools import wraps, update_wrapper
from datetime import datetime
 
def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Last-Modified'] = datetime.now()
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '-1'
        return response
        
    return update_wrapper(no_cache, view)
	
	
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
@nocache
def hello():
    return render_template('index.html')

@app.route('/api/vectors', methods=['GET'])
@nocache
def get_vectors():
    return jsonify({'vectors': vectors})
	
if __name__ == "__main__":
	app.run(host='127.0.0.1', port=8080, debug=True)