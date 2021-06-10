# Movie Social API

Back-end module developed as the final project of the GeeksHubs fullstack Bootcamp Madrid 2021. Click [HERE](https://main.d2sbnupanjk8no.amplifyapp.com) to see the application deployed. This API is developed following the REST principles

## Getting started

To begin to use this project the first step is to run

### `npm install`

Although this API is deploy in Heruku with a database hosted at Mongo Atlas, it was developed locally with a Docker compose image. To begin the application it's necessary to have installed docker plugin at the IDE. For more information click [HERE](https://www.docker.com).

To start the application run:

### `docker compose up`

## EndPoints

### User
  
  One user can be created at `/singup`.
  The `/login` validates user credentials and provides a jsonWebToken with all user information
  The `/user` endpoint its used to edit, delete and to find users in the database
  The `/user/all` provides the function of erasing al registers
  
### Valoration

  The `/valoration` endpoint can be used to list, edit, create and delete valuations
  The `/valoration/all` provides the function of erasing all valuations
  The `/valoration/by-user` provides the function of listing all valuations of a single user
  The `/valoration/by-movie` provides the function of listing all valuations of a single movie
  
### Movies
  
  The `/movies` endpoint endpoint can be used to list, edit, create and delete movies
  The `/movies/title` endpoint endpoint can be used to list movies by title
  The `/movies/genre` endpoint endpoint can be used to list movies by genre
  The `/movies/actors` endpoint endpoint can be used to list movies by actors
  The `/movies/director` endpoint endpoint can be used to list movies by directors
  The `/movies/value` endpoint endpoint can be used to list movies by one single filter in all     previous fields
  The `/movies/all` endpoint endpoint can be used to list movies
  
## Middlewares
  
  Check Json Web Token protects valoration Crud so only logged in users can access
  Check Admin protecs movie Crud so only de administrator can access
  
## Technology

  - ExpressJs
  - NodeJs
  - Mongoose
  - Nodemon (develope purposes)
  - Docker (develope purposes)
  - Libraries as dotenv and jsonwebtoken

## Develop Tools

![image](https://user-images.githubusercontent.com/75450403/121598158-d038cb00-ca41-11eb-9c85-15386f288d36.png)


  To develop this api many tools were used:
  - Postman
  - Docker Desktop
  - Heroku cli (deployment purposes)

  
