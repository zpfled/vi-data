# Database

We'll use [PostgreSQL](https://www.postgresql.org/) for our database, so you'll need to 
get it installed on your computer if you haven't already. Once you've installed
it and started the postgres service on your machine, you can run commands like
`createdb` which, incidentally, is the one you're going to really need.

### To run locally

Make sure to install and run PostgreSQL first.
```
brew update
brew install postgres
brew services start postgresql
createdb vi_data_dev
```

Make sure you get that right. 

To check, run `psql -ls`*. You should see something like this:
```$xslt
                                         List of databases
    Name     |     Owner     | Encoding |   Collate   |    Ctype    |        Access privileges
-------------+---------------+----------+-------------+-------------+---------------------------------
 postgres    | zachpflederer | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0   | zachpflederer | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/zachpflederer               +
             |               |          |             |             | zachpflederer=CTc/zachpflederer
 template1   | zachpflederer | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/zachpflederer               +
             |               |          |             |             | zachpflederer=CTc/zachpflederer
 vi_data_dev | zachpflederer | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
```

If you have the vi_data_dev database listed, you're good. Don't expect to see `zachpflederer` as the owner, though. 
That's me.

*If you're on a windows machine, Tyler, I don't know if it's the same command.

## Configuration

You'll need to set up your `config/config.json` file, as well. This file
is ignored by git, because the values will be different form machine to 
machine.

Create a `config` directory and in it, a `config.json` file. Then put this in it:

```json
{
  "development": {
    "username": "zachpflederer",
    "password": null,
    "database": "vi_data_dev",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "test": {
    "username": "zachpflederer",
    "password": null,
    "database": "vi_data_test",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "port": "",
    "dialect": ""
  }
}

```

Put your own name in there and leave the rest the same.

## Migrations

To generate a new model and migration, install the sequelize command line tools, 
found [here](https://github.com/sequelize/cli).

Install CLI locally to your node_modules folder with:
```$xslt
$ yarn add -D sequelize-cli
```

You should be able to run CLI with:

```$xslt
$ node_modules/.bin/sequelize
```

Now you can run a command like this. 

```$xslt
sequelize model:create --name Game --attributes homeTeamId:number,awayTeamId:number
```