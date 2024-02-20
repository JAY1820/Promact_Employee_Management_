import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../redux";

function Add({ setIsAdding }) {
  // React hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // React hook to access state from the Redux store
  const { employees } = useSelector((state) => state.employees);

  // State variables to store employee information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  // useRef hook to store a reference to the first name input field
  const textInput = useRef(null);

  // useEffect hook to focus on the first name input field when the component mounts
  useEffect(() => {
    textInput.current.focus();
  }, []);

  // Function to handle the form submission
  const handleAdd = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!firstName || !lastName || !birthdate || !department || !experience) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
      return;
    }

    // Generate a unique ID for the new employee
    const id = employees.length + 1;

    // Create a new employee object
    const newEmployee = {
      id,
      firstName,
      lastName,
      birthdate,
      department,
      experience,
    };

    // Dispatch the addEmployee action to add the new employee to the store
    dispatch(addEmployee(newEmployee));

    // Close the add employee modal
    setIsAdding(false);

    // Show a success message using SweetAlert
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="birthdate">Birthdate</label>
        <input
          id="birthdate"
          type="date"
          name="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <label htmlFor="experience">Experience (In Years)</label>
        <input
          id="experience"
          type="number"
          name="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
