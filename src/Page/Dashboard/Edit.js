import React, { useState } from "react";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { updateEmployee } from "../../redux";

function Edit({ selectedEmployee, setIsEditing }) {
  const dispatch = useDispatch();

  // Destructuring props for cleaner code
  const {
    id,
    firstName: initialFirstName,
    lastName: initialLastName,
  } = selectedEmployee;

  // State variables for form inputs
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  // Handle the form submission to update employee data
  const handleUpdate = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!firstName || !lastName || !birthdate || !department || !experience) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    // Create an updated employee object
    const updatedEmployee = {
      id,
      firstName,
      lastName,
      birthdate,
      department,
      experience,
    };

    // Dispatch the Redux action to update employee data
    dispatch(updateEmployee(id, updatedEmployee));

    // Exit the edit mode
    setIsEditing(false);

    // Display a success message using SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${updatedEmployee.firstName} ${updatedEmployee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        {/* Input fields for editing employee information */}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
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
        <label htmlFor="experience">Experience(In Years)</label>
        <input
          id="experience"
          type="number"
          name="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          {/* Submit and Cancel buttons */}
          <input type="submit" value="Update" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
