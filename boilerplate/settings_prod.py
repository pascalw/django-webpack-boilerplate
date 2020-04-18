from .settings import *

DEBUG=False
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
ALLOWED_HOSTS='*'
