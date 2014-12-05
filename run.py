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

vectors = {
    "points": [
        {
            "id": "id1",
            "type": "arrow",
            "coords": [120, 120]
        },
        {
            "id": "id2",
            "type": "arrow",
            "coords": [30, 30]
        },
        {
            "id": "id3",
            "type": "arrow",
            "coords": [40,60]
        },
        {
            "id": "id4",
            "type": "arrow",
            "coords": [80, 80]
        },
        {
            "id": "id5",
            "type": "arrow",
            "coords": [300, 300]
        },
        {
            "id": "id6",
            "type": "arrow",
            "coords": [320, 320]
        }
    ],
    "links": [
       {
                "source": "id1",
                "target": "id2",
                "strength": 1
       },
       {
                "source": "id3",
                "target": "id4",
                "strength": 1
       },
       {
                "source": "id5",
                "target": "id6",
                "strength": 1
       }
    ]
}

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