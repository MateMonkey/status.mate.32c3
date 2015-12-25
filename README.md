# MateMonkey.com 32c3 Frontend

## Dealer Filter

The slugs for the 32c3 dealers are
* 32c3-hall1
* 32c3-lounge
* 32c3-saal-3
* 32c3-foyer-saal-g

(used in `app/js/dealer.js`)

## Development

This project uses [Brunch](http://brunch.io) to build the final product.

### Installation / First Start

* Install nodejs
* Install brunch (e.g. using npm)
* Install bower (e.g. using npm)
* Install all development dependencies by running `npm install`
* Install all source dependencies by running `bower install`
* Start your local server by running `brunch watch --server`

### API

[Click here for the full API documentation](https://github.com/MateMonkey/api)

The frontend uses [playground.matemonkey.com](http://playground.matemonkey.com)
when built for development.
Have a look at `app/js/config/api.yaml` and the `urlfor` service that is
defined in `app/js/application.js` to learn how this works ;).

Please make sure that you always build the project for development if
you are creating a new feature/fixing a bug - otherwise you will change
production data! Thanks!

## Contributing

Please fork the repository and create a *feature* branch for a pull
request.
(DO NOT COMMIT IN MASTER! :rage1:)

## License

Copyright 2015 Maximilian Güntner <maximilian.guentner@gmail.com>

This software is licensed under the GPL, version 3. See gpl-3.0.txt for
the full text.
