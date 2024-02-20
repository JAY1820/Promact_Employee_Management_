# Employee Management Application

This application is built using React and Redux to manage employee information, offering functionalities for adding, listing, editing, and deleting employees. It leverages Redux for efficient state management and data handling.

# Live Demo  - [Live Page](https://employeesmanagment.netlify.app/)

## Features

- **Add Employee**: Create new employee entries with validated full name, birthdate, department, and experience.
- **List Employees**: View a comprehensive list of all added employees, including their details.
- **Edit Employee**: Modify existing employee information through a dedicated edit page.
- **Delete Employee**: Remove an employee from the list.

## Technology Stack

- **React**: The JavaScript library for building user interfaces.
- **Redux**: The state management library for predictable and centralized application state.
- **Redux Toolkit**: Simplifies the creation of Redux logic with reducers, actions, and middleware.
- **React Router**: Facilitates navigation between different application pages using routes.

## Installation

1. Clone the repository: `git clone https://github.com/JAY1820/Promact_Employee_Management_`
2. Install dependencies: `npm install` or `yarn install`

## Running the Application

1. Start the development server: `npm start` or `yarn start`
2. Access the application in your browser: `http://localhost:3000` (default port)

## Project Structure
<!DOCTYPE html>
<html>
<body>
<ul>
  <li>employee-management-app/
    <ul>
      <li>src/
        <ul>
          <li>Page
           <li>data/
            <ul>
              <li>index.js (optional, if used for mock data)</li>
            </ul>
          </li>
            <ul>
              <li>Add.js</li>
              <li>Edit.js</li>
              <li>index.js</li>
              <li>List.js</li>
            </ul>
          </li>
          <li>redux/
              <ul>Employee
               <li>employeeAction.js</li>
               <li>employeeReducer.js</li>
               <li>employeeTypes.js</li>
              </ul>
              <li>Router.js</li>
            </ul>
          </li>
          <li>App.css</li>
          <li>App.js</li>
          <li>App.test.js</li>
          <li>index.css</li>
          <li>index.js</li>
        </ul>
      </li>
      <li>package.json</li>
      <li>README.md</li>
    </ul>
  </li>
</ul>

</body>
</html>
