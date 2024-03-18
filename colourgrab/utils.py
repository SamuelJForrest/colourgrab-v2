import os
import sys


UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER')
ALLOWED_EXTENSIONS = ['jpg', 'png', 'svg']


def allowed_file(filename):
    """Check whether file extension is allowed"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def dir_files_length(dir) -> int:
    number_of_files = 0
    
    for filename in os.listdir(dir):
        if os.path.isfile(os.path.join(dir, filename)):
            number_of_files += 1
            
    return number_of_files
        

def clear_uploads():
    upload_path = os.path.join(os.getcwd(), UPLOAD_FOLDER)
    number_of_uploads = dir_files_length(upload_path)
    
    print(number_of_uploads)
    
    if number_of_uploads:
        for filename in os.listdir(upload_path):
            if os.path.isfile(os.path.join(upload_path, filename)):
                filepath = os.path.join(upload_path, filename)
                os.remove(filepath)
                
        print('Uploads folder cleared')
    else:
        print('Uploads folder is empty')


if os.getenv('DEVELOPMENT'):
    def main():
        if len(sys.argv) != 2:
            print('Invalid command, please try again.')
            sys.exit(1)
        
        function_name = sys.argv[1]
        
        if function_name == "clear_uploads":
            clear_uploads()


if __name__ == "__main__":
    main()
