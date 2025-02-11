# Take home assignments
This project was made with React.js framework. 
## Some package I used 
- bycrypt library
- Fontawesome
- jwt decoder `jwt-decoder`

### In case these packages were missing when you run the project.
#### bycrpt
You can install with `npm i bycrypt`
### Fontawesome
1. `npm i --save @fortawesome/fontawesome-svg-core`
2.
 ```
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```
3.`npm i --save @fortawesome/react-fontawesome@latest`
### jwt-decoder
`Run npm install jwt-decode or yarn add jwt-decode`

## To run this.
### On local computer
Either download the project to your local machine or clone the repository to your computer then navigate to this folder and ruun `npm run start`
### On docker
I have also pushed this project onto [docker](https://hub.docker.com/r/patkleo/dashboard/tags) as well.


## NOTE
I have stored some data that the program will required to run properly inside `.env` file. However, this file will not be included when you cloned the project. So before you run the program, Please create a new `.env` file and use the same variable names inside `.env.example` file.

Same goes when running with docker. Please run with (use quotation marks on value as well): 

```
docker run -e REACT_APP_USER_JWT="USERJWT"
-e  REACT_APP_ADMIN_JWT="ADMINJWT"
-e REACT_APP_USER_PASS="ANYPASS"
-e  REACT_APP_ADMIN_PASS="ANYPASS"
-dp 8000:3000 --name [name]  dashboard:latest
```

### NOTE 2
Kindly note that,for the time being, any new user created in sign up page will be assigned the same token as User1.

Thank you :) 
