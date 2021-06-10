# Front-end Module of Movie Social


Front-end module developed as the fianl proyect of the GeeksHubs fullstack Bootcamp Madrid 2021. Click [HERE](https://github.com/G4BR1EL0/MovieSocial/tree/main/react-module) to see the application deployed.


![ezgif com-gif-maker](https://user-images.githubusercontent.com/75450403/121583582-bba00700-ca30-11eb-8bbf-3c75c2102ae1.gif)



## Getting started

To beging to use this proyect the first step is to run

### `npm install`

Then to beging the application the Back-end module must be up and runnig, To see the back-end module repository click [HERE](https://github.com/G4BR1EL0/MovieSocial/tree/main/api). If the Api is runnig localy the app can start with the comand :

### `npm start`

## Features


###  Users
    
   Resgiter, Login and Profile editing to any user.
    
   ![image](https://user-images.githubusercontent.com/75450403/121586433-f2c3e780-ca33-11eb-93ae-1179a076f11f.png)
   
   Movie Searching, Movie Detail, and Movies Valoration to any user.
   
   ![image](https://user-images.githubusercontent.com/75450403/121587483-294e3200-ca35-11eb-9fa0-31bbb966c06f.png)
  
   Create, Edit and Delete Movie Valorations only to logged in users.
   
   ![image](https://user-images.githubusercontent.com/75450403/121587918-995cb800-ca35-11eb-9501-8cd98143e97d.png)


### Administrator

  Seed activation: restarts the database with 184 movies from theMovieDB API , 20 dummy Movies Valorations and 
  2 users 
  
  `{`
  
      `{'name' : 'user', 'email':'user@mail.com', 'password':'user'},` 
  
      `{'name' : 'admin', 'email':'admin@mail.com', 'password':'admin'}`
      
   `}`
   
  The admin user is the only posible admin and has the options of creating, editing and deleting movies
  
  ![image](https://user-images.githubusercontent.com/75450403/121589465-61567480-ca37-11eb-84f0-56dd35c154c7.png)

## Tecnology

- Reactjs
- Scss styles
- Redux
- Redux Dev tools
- Thunk Middleware to  handle the login asincronous process
- Varios libraries (react-router-dom, react-icons, dotenv, react-multi-carousel)

   
