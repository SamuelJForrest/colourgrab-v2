from flask.testing import FlaskClient
from tests.backend.conftest import StatusCode, UrlRoutes


# Home page tests
def test_home_page_exists(client: FlaskClient) -> None:
    """
    test that homepage exists
    """

    response = client.get('/')
    assert response.status_code == StatusCode.OK.value


# Palette page tests
def test_palette_page_without_image(client: FlaskClient) -> None:
    """
    test that palette page cannot be accessed without uploading an image
    """

    response = client.get('/palette')

    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.HOME.value

    with client.session_transaction() as client_session:
        assert (
            "message", "There has been an error. Please try again."
        ) in client_session["_flashes"]


def test_palette_page_with_existing_image(client: FlaskClient) -> None:
    """
    testing that the palette page loads when there is an image in session
    """

    with client.session_transaction() as client_session:
        # the image here needs to be one that exists
        # in the /colourgrab/static/uploads folder
        client_session['uploaded_image'] = '20180224_182511.jpg'

    response = client.get('/palette')

    assert response.status_code == StatusCode.OK.value
    assert b'Colours' in response.data


def test_palette_page_with_non_existent_image(client: FlaskClient) -> None:
    """
    testing that the palette page redirects the user to the homepage
    if there is an image in session that does not exist in the
    /colourgrab/static/uploads folder
    """

    with client.session_transaction() as client_session:
        client_session['uploaded_image'] = 'image_name.png'

    response = client.get('/palette')

    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.HOME.value

    with client.session_transaction() as client_session:
        assert (
            "message", "There has been an error. Please try again."
        ) in client_session["_flashes"]


# Demo page tests
def test_demo_page_exists(client: FlaskClient) -> None:
    """
    test that demo page exists
    """

    response = client.get('/demo')
    assert response.status_code == StatusCode.OK.value


def test_demo_page_with_no_image(client: FlaskClient, empty_static_image_dir) -> None: # noqa
    """
    test that demo page redirects user, and shows flash message,
    when no demo images are available
    """
    response = client.get('/demo')

    assert response.status_code == StatusCode.REDIRECT.value

    with client.session_transaction() as client_session:
        assert (
            "message",
            "We don't have any demo images to show right now. " +
            "Sorry for the inconvenience."
        ) in client_session["_flashes"]
