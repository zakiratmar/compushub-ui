# Course API Lab 6

## Student
Ahmad Zakir Sherzai

## Project
Enterprise Web App – Course API Integration

## Description
This project connects a React frontend with a Spring Boot backend.
The React application fetches course records from the backend REST API
and displays them in a course table.

## Backend

Technology:
- Java
- Spring Boot
- Spring Web

Backend URL:
http://localhost:8080

API Endpoint:
GET http://localhost:8080/api/v1/courses

## Frontend

Technology:
- React
- Vite
- Axios

Frontend URL:
http://localhost:5173

## How to Run

### Start Backend
1. Open the Spring Boot project in IntelliJ IDEA.
2. Run BookApiApplication.
3. Make sure the backend runs on port 8080.

### Start Frontend
Open a terminal in the React project and run:

npm install

npm run dev

Then open:

http://localhost:5173/courses

## API

The React application gets course data from:

GET /api/v1/courses

The API returns course information including:
- ID
- Code
- Title
- Credits

## Error Handling

The application displays an error message when the backend
is unavailable or the API request fails.

## Student Answers

### 1. Why use useEffect here?

useEffect is used to fetch course data when the Courses component
loads. The empty dependency array makes the request run when the
component is mounted.

### 2. What does setCourses do?

setCourses updates the React state with the course data received
from the backend. After the state is updated, React re-renders the
course table.

### 3. Why can Postman work while a browser request fails?

Postman can send API requests without the browser's same-origin
restrictions. A browser request can fail because of problems such
as CORS, an incorrect URL or port, or the backend not being available.