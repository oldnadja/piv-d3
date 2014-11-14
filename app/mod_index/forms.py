# Import Form and RecaptchaField (optional)
from flask.ext.wtf import Form # , RecaptchaField

# Import Form elements such as TextField and BooleanField (optional)
from wtforms import TextField, PasswordField # BooleanField

# Import Form validators
from wtforms.validators import Required, FileField, EqualTo


# Define the login form (WTForms)

class UploadForm(Form):
    image_first        = FileField(u'First Image File', [validators.regexp(u'^[^/\\]\.bmp$')])
    image_second       = FileField(u'Second Image File', [validators.regexp(u'^[^/\\]\.bmp$')])

    def validate_image(form, field):
        if field.data:
            field.data = re.sub(r'[^a-z0-9_.-]', '_', field.data)

def upload(request):
    form = UploadForm(request.POST)
    if form.image.data:
        image_data = request.FILES[form.image.name].read()
        open(os.path.join(UPLOAD_PATH, form.image.data), 'w').write(image_data)