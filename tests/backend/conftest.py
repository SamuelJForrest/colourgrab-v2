import pytest
import os
from colourgrab import app, routes # noqa


@pytest.fixture()
def client():
    app.config.update({
        'SECRET_KEY': os.environ.get('SECRET_KEY')
    })
    return app.test_client()
