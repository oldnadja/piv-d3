# Import flask dependencies
from flask import Blueprint, request, render_template, \
                  flash, g, session, redirect, url_for

# Import password / encryption helper tools
from werkzeug import check_password_hash, generate_password_hash

# Import the database object from the main app module
from app import db

# Import module forms
from app.mod_auth.forms import UploadForm

# Set the route and accepted methods
@mod_auth.route('/images/', methods=['POST'])
def upload_images():

    # If sign in form is submitted
    form = UploadFormForm(request.form)

    # Verify the sign in form
    if form.validate_on_submit():

        

    return str(request.form)