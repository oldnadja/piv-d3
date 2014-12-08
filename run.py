import os
from flask import Flask, render_template, request, redirect, jsonify, url_for, send_from_directory, make_response
from functools import wraps, update_wrapper
from datetime import datetime
from werkzeug import secure_filename
from flaskext.uploads import UploadSet, IMAGES
import logging


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
            "coords": [30, 30]
        },
        {
            "id": "id2",
            "type": "arrow",
            "coords": [30, 60]
        },
        {
            "id": "id3",
            "type": "arrow",
            "coords": [30,90]
        },
        {
            "id": "id4",
            "type": "arrow",
            "coords": [30, 120]
        }

    ],
    "links": [
       {
                "source": "id1",
                "target": "id2",
                "strength": 1
       },
       {
                "source": "id4",
                "target": "id3",
                "strength": 1
       }
    ]
}

# This is the path to the upload directory
app.config['UPLOAD_FOLDER'] = 'uploads/'
# These are the extension that we are accepting to be uploaded
app.config['ALLOWED_EXTENSIONS'] = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

# For a given file, return whether it's an allowed type or not
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']

@app.route("/")
@nocache
def hello():
    return render_template('index.html')

@app.route('/api/vectors', methods=['GET'])
@nocache
def get_vectors():
    return jsonify({'vectors': vectors})

# Route that will process the file upload
@app.route('/upload', methods=['POST'])
def upload():
    images = UploadSet('images', IMAGES)
    logging.info(request)

    if request.method == 'POST' and 'image_1' and 'image_2' in request.files:
        filename_1 = images.save(app.config['UPLOAD'], request.files['image_1'])
        filename_2 = images.save(app.config['UPLOAD'], request.files['image_2'])
        rec = Photo(filename=filename, user=g.user.id)
        rec.store()
        flash("Photo saved.")
        return "OK", 204

    return "Failed", 404

if __name__ == "__main__":
	app.run(host='127.0.0.1', port=8080, debug=True)

