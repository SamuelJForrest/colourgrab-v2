ALLOWED_EXTENSIONS = ['jpg', 'png', 'svg']

def allowed_file(filename):
    """Check whether file extension is allowed"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS