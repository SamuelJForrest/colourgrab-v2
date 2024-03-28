import pytest
import io
from flask.testing import FlaskClient
from tests.backend.conftest import StatusCode, UrlRoutes
from colourgrab.utils import ALLOWED_EXTENSIONS


def create_test_file(size_in_mb: int) -> io.BytesIO:
    """
    simulates a file, returning it's filesize in binary.
    """
    num_of_bytes = (size_in_mb * 1024 * 1024 + 1)
    file_contents = b'0' * num_of_bytes
    return io.BytesIO(file_contents)


def test_allowed_file_upload(client: FlaskClient) -> None:
    """
    test that a file smaller than 5MB can be uploaded
    """

    test_file = create_test_file(1)

    data = {
        'file-input': (test_file, 'test_file.jpg')
    }

    with client:
        response = client.post('/', data=data)

    # test for redirect, as the user should be redirected to '/palette'
    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.PALETTE.value


def test_large_file_upload(client: FlaskClient) -> None:
    """
    test that a file larger than 5MB cannot be uploaded
    """

    test_file = create_test_file(10)

    data = {
        'file-input': (test_file, 'test_file.jpg')
    }

    with client:
        response = client.post('/', data=data)

    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.HOME.value

    with client.session_transaction() as session:
        assert (
            "message", "File upload failed. Maximum allowed file size is 5MB."
        ) in session["_flashes"]


@pytest.mark.parametrize("file_extension", ALLOWED_EXTENSIONS)
def test_allowed_file_type_upload(client: FlaskClient, file_extension: list[str]) -> None: # noqa
    """
    test that only .jpg, .png, and .svg files can be uploaded
    """

    test_file = create_test_file(1)

    data = {
        'file-input': (test_file, f'test_file.{file_extension}')
    }

    with client:
        response = client.post('/', data=data)

    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.PALETTE.value


@pytest.mark.parametrize("file_extension", ['pdf', 'gif', 'doc', 'html', 'wav']) # noqa
def test_not_allowed_file_type_upload(client: FlaskClient, file_extension: list[str]) -> None: # noqa
    """
    test that uploading incorrect file types will redirect the user
    to the homepage and display a flash message
    """

    test_file = create_test_file(1)

    data = {
        'file-input': (test_file, f'test_file.{file_extension}')
    }

    with client:
        response = client.post('/', data=data)

    assert response.status_code == StatusCode.REDIRECT.value
    assert response.location == UrlRoutes.HOME.value

    with client.session_transaction() as session:
        assert (
            "message",
            "Invalid file type. Please upload a .jpg, .png, or .svg file."
        ) in session["_flashes"]
