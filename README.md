# Django + Webpack without any plugins to glue them together

This is a demo project for my blog post [here](https://pascalw.me/blog/2020/04/17/webpack-django.html).

## Installation

1. `yarn install` (or `npm install`)
2. `poetry install` (or `pip install -r requirements.txt`)

## Development workflow

Run the Django server (`python manage.py runserver`) and Webpack in another tab (`yarn start`).

For more convenience you can use a tool like [Goreman](https://github.com/mattn/goreman) to run Django and Webpack in a single terminal: `goreman -f Procfile.dev start`.

## Production workflow

Compile assets first with `yarn build`, then use Django collectstatic: `python manage.py collectstatic`.

If you're running on Heroku this will happen automatically if you use both the Node.js and Python buildpacks.
