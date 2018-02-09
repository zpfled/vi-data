# VictoryIllinois Data

API for Illinois Men's Basketball stats.

## Setup 


* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](http://docs.sequelizejs.com/en/v3/)
* [Sequelize-CLI](https://github.com/sequelize/cli)
* [JSON Web Token](https://jwt.io/)

**Hosting**

* [Heroku](https://www.heroku.com/)

**Testing**

(This may change soon)

* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Supertest](https://github.com/visionmedia/supertest)


### To run locally

Make sure to install and run PostgreSQL first.
```
brew update
brew install postgres
brew services start postgresql
createdb vi_data_dev
```

In `config/config.json`, set the username to your postgres username. 
If you have a password, set that as well.

Then install Node and Yarn, if you haven't already.

Download and install [Node](https://nodejs.org/en/), then

```
npm install -g yarn
```

Clone the repo and run the app
```
git clone git@github.com:zpfled/vi-data.git
cd vi-data
yarn
yarn start
```

### To run tests

```
yarn test
```

and in another tab
```
yarn test:only
```

### To deploy on Heroku
```
heroku login
heroku create
git push heroku master
```