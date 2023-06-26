# Bootcamp_MVC_TechBlog

## Description

Welcome to MVC_Techblog, the ultimate destination for the latest in tech news and trends! Our web app delivers timely articles, insightful reviews, and expert analysis to keep you at the forefront of the ever-evolving world of technology. Here you can create new posts, comment on other posts, and find posts created by users through their userid

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Create a file called `.env` in the root directory and fill in the following variables:
- `DB_USER=[your mysql username]`
- `DB_PASSWORD=[your mysql password]`
- `DB_NAME=[the name of the database]`
- `PORT=[the port you want to use for the server]`

(Optional) if npm is installed, run `npm run seed` to seed the database. 

if npm is installed, run `npm i` to quicklty download all appropriate packages.

## Usage

Instructions for using the app:
- `cd` into the repository and in the command line enter `node server`
- Then go to localhost:[your port number]/
    - create a username and post away
- Or go to this website to see the functional app: [Heroku app](https://mvc-tech-blog-bootcamp-x-d0540789d98c.herokuapp.com/)
## Credits

packages used:
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- handlebars
- bcrypt

