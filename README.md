# promo-codes

## TechStack
1. Nodejs
2. MySql 
3. React 
4. Redux
5. Mocha- Backend testing
6. Chai - Backend testing
7. Jest - Frontend testing
8. Enzyme - Frontend testing
## Instruction for Backend
To run this project locally we need to do the following 

- First you need to install node, this is required for the backend project 
- You will need to go into the `./server` directory from applications root directory
  - `cd server`
- Once you are in the server directory and Node and NPM are installed you will be required run ` npm i `  command. This will install all the dependent packages those are required for Backend server  
- You will also need to install MySql DB server locally as we are connecting to local version of MySql
- Once it is installed you will need to seed the database with following scripts under ./server/db 
- - To run below scripts you will be to be in `./server/db` folder
- These scripts should be ran using command and in following order:  
  - `mysql -u root -p < create-user-db.sql`
  - `mysql -u root -p < create-service-db.sql`
  - `mysql -u root -p < create-activate-bonus-db.sql`
- Once database has been created and seeded using the scripts, you will need to create a user, which will be then authenticated and authorized to view the dashboard.
- You will also need to create or update the `.env` file with following 
```
DB Configurations
    HOST=localhost
    DB_USER=root
    DB_PASS= Your password
    DB_DATABASE=promo_codes
Local runtime configs
    PORT=5000
    SECRET_JWT=supersecret
```

- You can use a client like POSTMAN to create the user, example endpoint is given below
  -  `localhost:5000/api/v1/users`
  -  POST method call 
  -  Body `{
    "email": "abc@email.com",
    "first_name": "abc",
    "last_name": "xyz",
    "username": "abczyz",
    "password": "123456",
    "confirm_password": "123456"
    }`
    - No Auth is required to create the user. 

- Once the user has been created you will be required to login to access the application. 
- Finally, to run backend server individually you can run command `npm run serve`. It will spin up the server on port 5000
- We also have an optional command to run the server in dev (watch) mode for development purpose `npm run dev` 
- To access other APIs I have also added a POSTMAN json which can be imported `Promo Codes.postman_collection.json`. It is in the root folder.  

## Run tests 
To run test on backend following command can be used `npm test`

## Instructions for Frontend 
To run the frontend project you need to follow below instructions

- Again Node and NPM will be required for the client project to run 
- Go to `./client` directory under the root directory 
- Once you are under the client directory, you can then run `npm i` command to install all the dependencies.
- It will then spin up web server on port `3000`.
- After this it will take you to the login screen which is on the `http://localhost:3000/login` route
- On this route you can log in with the created user. 

## Run Test - Client Side
To run the test on client side you can run the script `npm test`

## Run both projects
In order to run both projects simultaneously you can go to the root ./ folder of the app and run the command `npm run project`

You can also run client and server project from the route location using command 
- client --> `npm run client`
- server --> `npm run server` 


# Question - Backend 
1. How do you document your backend code?
   -  We can document backend API using swagger.io 
   -  Other ways of documenting is by writing comments over the routes and controller for better understanding

2. What are your thoughts on testing for the backend?
    - Backend code should be tested to it's core as most of the business logic is in the apis. 
    - We can write integration and unit test to test apis and controller. 

3. What Design Patterns that you have used in your backend projects?
   - The module system and its patterns: the fundamental mechanisms for organizing code in Node.js    
   - The reactor pattern: the mechanism at the heart of the Node.js asynchronous architecture

4. What do you think about Typescript on the backend?
    - optional static typing, with emphasis on optional
   - As a developer, you can start using ECMAScript features that are not supported by the current V8 engine by using build targets
   - Use of interfaces for strict object checking
   - Great tooling which can help in IntelliSense support.

5. What are the most important performance issues in NodeJS web applications?
   - Getting large amount of data from database, here we can use pagination tool to get chunks of data back (Query Optimization). 
   - When too many request are sent to the server it can crash the server, hence we can optimise it by load balancing 
   - When huge amount of temp data is stored on the server itself th can cause memory leaks and also cause the server to crash with Out of memory, hence we can use Caching server like Redis Cache, Node cache etc. 

# Question - Frontend

1. How do you document your frontend code?
   - One of the great way for documenting frontend code is by writing unit tests and functional tests.
   - Creating Styling guides
   - React Storybook for components 
   - Creating components with meaningful names 
   - Defining good PropTypes definition.

2. What are your thoughts on testing for the frontend?
   - It should be tested thoroughly as again it's a great way to document your frontend code 
   - Unit and functional tests can be performed 
   - Gives higher degree of confidence while developing and releasing the code. 

3. What Design Patterns have you used in your frontend projects?
   - Stateless components 
   - Conditional rendering 
   - Render Props 
   - Higher order components 
   - Controlled components 
   - React hooks - custom hooks 
  
4. What do you think about Typescript on the frontend?
   - Gives good type safety, during developing the application
   - Interfaces gives us good notion of what to expect form the object and what methods are available
   - Helps to avoid runtime errors at early stage. 

5. What are the most important performance issues in React web applications?
   - Passing all the unwanted props to child components, which might create unnecessary renders 
   - Defining unnecessary callbacks, if the parent component re-renders the it will render child component again
   -  Not passing good keys to the component, it not done so then the diff algorithm will not know which component to re-render. 


