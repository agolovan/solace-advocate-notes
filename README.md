# Selecting technology for this project
As I understand, the main condition to have fun with that, so I selected approaches that I would have fun for this project.

Front end: I selected React. Usually, when you join any company, you have to be consistent with framework that company is using. I have some recent experience with Payload framework https://payloadcms.com/, so I decided to use that as it will simplify a work and give more fun, as I think it is very logical and cool framework.

Payload takes care about users for me, allow to add and delete users, and we have information in each component what is logged user.  

Back end:  I was considering AWS Lambda functions, Azure functions and Nodejs/Express. However, for simplicity, I decided to use Nodejs/Express and typescript for both frond and back end. It is easy to debug, same utilties could be used for both front end and back end and I put that into same repository.
I used Localstack for AWS Lambda functions, and serverless it may be better from many points of view, but not for this project.

Between REST API and GraphQL, I decided to use simple REST API, as there is no over-fetching here. Just having endpoints for GET, POST and DELETE is simple and enough.

Database: I decided to use MongoDB, put locally MongoDB Compass and did all development locally.

# Development process
I am using Chrome degugger for REACT front end, to debug serves side nodejs, I am using configuration "Debug Server" in Launch.json, and start debugging with this configuration allows to put break point inside server side code.

I am using yarn "lint:fix" and "yarn tsc" fix and report issues in a code.  

# Unit tests
I usually write a lot of unit test and using TDD approach. However, I do that mostly for some busines logic to cover all edge cases and make sure that code is stable and future changes by different people are not going to break business logic. I like using testing-library. For this project, I could use mock objects to test react code without need to call back end, however, it will be over-engineering. Simple smoke testing will cover all scenarios.

# Assumptions: 
I really need to talk to advocates to follow what they want to see. For now, I decided to use email as unique key for each advocate. I also decided to have client property with email for client as unique key. 

I also added a title - just short description what is that note about. It could be used for fast search and etc.

This is my document for each note - we may add filtering for type ( appointment or contract) and client.
[{
  "_id": {
    "$oid": "65f6054aa025e8ba69085d73"
  },
  "advocate": "agolovan@hotmail.com",
  "client": "client1@gmail.com",
  "title": "Find good therapist for client 1",
  "note": "Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1Find good therapist for client1",
  "type": "appoinment",
  "createdBy": "agolovan@hotmail.com",
  "createdAt": {
    "$date": "2024-03-14T04:50:53.000Z"
  }
}]

Currently, I allow create duplicate note with same title, client and etc ( It will be just different ID). I am not sure what are real business rules, may be for each client and advocate title should be unique, again, I need to interview advocate.

I also add server side filtering for advocate to see only related notes. We may have admin user who see all messages. We also may add some roles based modules that allows some people only see notes, for some people edit, delete and etc.

For error conditions, I just log error messages into console. We could add toast messages, but again, it is not clear what does business want.

It will be good to add confirmation dialog when deleting a note

# Setup database
- Install Mongodb locally
  - Install MongoD as a service
  - Choose Run service as local or domain user
  Running Mongodb locally
  - After installation - mongodb should be running and automatically start when computer restarts
    I did not use any env variables, just put that into constants fikle

- Running with local Mongodb or MongoDB Atlas ( it is set to run in Atlas in Constants.ts)
    MongoDB Atlas is a fully managed cloud database service provided by MongoDB, Inc. It allows users to deploy, manage, and scale MongoDB databases in the cloud, without the need for extensive administrative work.
    For Atlas:
    MONGODB_URI = mongodb+srv://agolovan:JakeMila1234@cluster0.taibgev.mongodb.net/solace
    For local:
    MONGODB_URI = "mongodb://127.0.0.1/solace";
  
- solace is the name of database in MongoDB

# running localy database
- Clone repository, install dependencies and start "yarn start"

# using app locally
- locally use url http://localhost:3000/admin 

# hosting
- I decided to use Payload Cloud - because it takes care behing the scene to connect front rub both front end and back end. 
- This is URL of public web site: https://solace-advocate-notes.payloadcms.app/admin

# using system
- use email: admin@gmail.com password: password to log first time. If you remove users collection from it will ask you at first time login to enter email/password
- select Users from left nav menu to add advocates 
- select Advocate Notes from left nav menu to enter notes for logged advocate

# known issues
- Sometimes the entered value is dissappeared and I have to enter that second time. Framework validations does not allow to enter wrong information, however this is not great, I did not have time to figure that out, may be something related to Payload framework. 

