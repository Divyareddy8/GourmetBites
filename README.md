## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (Ensure MongoDB is running on your local machine or provide a connection string to a remote MongoDB instance)

## Setup

1. Clone the Repository

enter command in terminal: gitclone http reposiatry link of project
then cd your-repo-name.

2. Install Dependencies
   Backend
   Navigate to the backend directory and install the dependencies:cd backend
   npm install

3. Frontend
   Navigate to the frontend directory and install the dependencies: cd frontend
   npm install
4. Set Up Environment Variables
   Create a .env file in the backend directory (if it does exist when you clone) with the following content:
   PORT = 4000
   FRONTEND_URL = http://localhost:5173
   MONGO_URI = mongodb+srv://divya:6FwPvG9mCFAeeJaM@cluster0.7khjbgr.mongodb.net/?retryWrites=true

5. Run the website
   Navigate to the forntend directory and run command : npm run dev
   then click on the url for local host in the terminal

 
 
