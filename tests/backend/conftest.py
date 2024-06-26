import pytest
import os
from colourgrab import app, routes # noqa
from enum import Enum


class StatusCode(Enum):
    """
    status code values
    """
    OK = 200
    REDIRECT = 302
    NOT_FOUND = 404


class UrlRoutes(Enum):
    """
    values for the available urls
    """
    HOME = '/'
    PALETTE = '/palette'
    DEMO = '/demo'


@pytest.fixture()
def empty_static_image_dir(tmpdir):
    app.static_folder = os.path.join(tmpdir, 'static')
    os.makedirs(os.path.join(app.static_folder, 'images'))


@pytest.fixture()
def client():
    app.config.update({
        'SECRET_KEY': os.environ.get('SECRET_KEY')
    })
    return app.test_client()
