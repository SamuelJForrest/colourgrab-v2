from tests.backend.conftest import StatusCode, UrlRoutes


# Home page tests
def test_home_page_exists(client) -> None:
    """
    test that homepage exists
    """

    response = client.get('/')
    assert response.status_code == StatusCode.OK.value


# Palette page tests
def test_palette_page_without_image(client) -> None:
    """
    test that palette page cannot be accessed without uploading an image
    """

    response = client.get('/palette')

    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.HOME.value

    with client.session_transaction() as session:
        assert (
            "message", "There has been an error. Please try again."
        ) in session["_flashes"]


# Demo page tests
def test_demo_page_exists(client) -> None:
    """
    test that demo page exists
    """

    response = client.get('/demo')
    assert response.status_code == StatusCode.OK.value
