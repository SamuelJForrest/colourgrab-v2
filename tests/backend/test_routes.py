import io


# Home page tests
def test_home_page_exists(client) -> None:
    """
    test that homepage exists
    """

    response = client.get('/')
    assert response.status_code == 200


def test_large_file_upload(client) -> None:
    """
    test that a file larger than 5MB cannot be uploaded
    """

    test_file = io.BytesIO(b'0' * (5 * 1024 * 1024 + 1))

    data = {
        'file': (test_file, 'test_file.jpg')
    }

    with client:
        response = client.post('/', data=data)

    assert response.status_code != 200

    with client.session_transaction() as session:
        assert (
            "message", "File upload failed. Maximum allowed file size is 5MB."
        ) in session["_flashes"]


# Palette page tests
def test_palette_page_without_image(client) -> None:
    """
    test that palette page cannot be accessed without uploading an image
    """

    response = client.get('/palette')
    assert response.status_code == 500


# Demo page tests
def test_demo_page_exists(client) -> None:
    """
    test that demo page exists
    """

    response = client.get('/demo')
    assert response.status_code == 200
