# Selecting technology for this project
As I understand, the main condition to have fun with that, so I selected approaches that I would have fun for sure!

Front end: I selected React. Usually, when you join any company, you have to be consistent with framework that company is using. I have some recent experience with Payload framework https://payloadcms.com/, it verylogical and cool framework. 

For Next.js - Payload team is working on it and it's in alpha phase right now. May be next step! 

Back end:  I was considering AWS Lambda functions, Azure functions and Nodejs/Express. However, for simplicity, I decided to use Nodejs/Express and Typescript for both frond and back end. 

Between REST API and GraphQL, I used simple REST API, as there is no over-fetching here - endpoints for GET, POST and DELETE.

Database: I used MongoDB, installed locally MongoDB Compass and did all development locally.

# Development process
I am using Chrome degugger for REACT front end. 
To debug serves side nodejs, I am using configuration "Debug Server" in Launch.json.
I am using yarn "lint:fix" and "yarn tsc" fix and report issues in a code.  

# Unit tests
I usually write a lot of unit test and using TDD approach with testing-library or vitest ( testing-library is my favorite). 
I do that mostly for some busines logic to cover all edge cases and make sure that code is always stable. For this project it is over-engineering.

# Assumptions 
I am using email as unique key for each advocate.  
I added fields that could be usefull to add more filtering or create unique keys:
id (internal id for MongoDB), advocate ( email), client (email), title (title of the mote), note (text of the note), 
type ( contract or appoinment), createBy (email of logged advocate), createAt 

Currently, I allow creating duplicate notes for same title, client and etc ( It will have different ID). 

I also add server side filtering for advocate to see only related notes. We may have admin user who see all messages. We also may add some roles based modules that allows some people only see notes, for some people edit, delete and etc.

For error conditions, I just logged error messages into console. 

Currently, there is no confirmation dialog when deleting a note.

# Setup database
- Install Mongodb locally
  - Install MongoD as a service
  - Choose Run service as local or domain user
  Running Mongodb locally
  - After installation - mongodb should be running and automatically start when computer restarts.
 
- Running with local Mongodb or MongoDB Atlas
    MongoDB Atlas is a fully managed cloud database service provided by MongoDB, Inc. It allows users to deploy, manage, and scale MongoDB databases in the cloud, without the need for extensive administrative work.
    For Atlas:
    MONGODB_URI = mongodb+srv://agolovan:JakeMila1234@cluster0.taibgev.mongodb.net/solace
    For local:
    MONGODB_URI = "mongodb://127.0.0.1/solace";
- Usually, each deployment solution allows setting env variables, but for this app I just use constants file.   
- solace is the name of database in MongoDB

# Running localy 
- Clone repository, install dependencies and start "yarn start"
- Use url http://localhost:3000/admin 
