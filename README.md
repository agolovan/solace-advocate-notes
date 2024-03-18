# Selecting technology for this project
As I understand, the main condition to have fun with that, so I selected approaches that I would have fun for this project.

Front end: I selected React. Usually, when you join any company, you have to be consistent with framework that company is using. I have some recent experience with Payload framework https://payloadcms.com/, so I decided to use that as it will simplify a work and give more fun, as I think it is very logical and cool framework.

Payload takes care about users for me, allow to add and delete users, and let us know for each component what is the logged user.

I think they are only talking about integration with Next.js now. 

Back end:  I was considering AWS Lambda functions, Azure functions and Nodejs/Express. However, for simplicity, I decided to use Nodejs/Express and typescript for both frond and back end. It is easy to debug, same utilties could be used for both front end and back end and I put that into same repository.
I used Localstack for AWS Lambda functions, and serverless it may be better from many points of view, but I needed to finish that fast

Database: I decided to use MongoDB, put locally MongoDB Compass and did all development locally.

# Assumptions: 
I really need to talk to Advocates to make sure to follow what they want to see. For now, I decided to use email as unique key for each advocate. I also decided to have client property with email for client as unique key. 

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

# Setup
- Install Mongodb local - or create database
  - Install MongoD as a service
  - Choose Run service as local or domain user
    - Domain is `.`
    - Account Name and Password are your machine (windows/mac) login credentials
- Running Mongodb
  - After installation - mongodb should be running and automatically start when computer restarts
    MONGODB_URI=mongodb://127.0.0.1/solace
    PAYLOAD_SECRET=944ea28fc5e41854c20feb63
- Clone repository, install dependencies and start yarn dev
- It should ask you to put email and password, it will be used as create notes

# Production
This is just a local version. We might put that in cloud, but this is beyond this task.
