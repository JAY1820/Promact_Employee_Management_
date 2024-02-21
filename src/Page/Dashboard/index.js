import React, { useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../../redux";

/**
 * Renders the main dashboard component for the Employee Details application.
 *
 * @returns {JSX.Element} The dashboard component JSX element.
 */
function Dashboard() {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employees);

  // Log the employees data for debugging purposes (can be removed in production)
  console.log("TEST", employees);

  // State variables to manage the visibility of modals
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Handles opening the edit modal for the specified employee.
   *
   * @param {number} id
   */
  const handleEdit = (id) => {
    // Find the employee object from the list based on the ID
    const employee = employees.filter((employee) => employee.id === id)[0];

    // Set the selected employee and open the edit modal
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  /**
   * Handles deleting an employee after confirmation from the user.
   *
   * @param {object} employee - The employee object to be deleted.
   */

  // Show a confirmation dialog using SweetAlert
  const handleDelete = (employee) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        // Show a success message after deletion
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        // Dispatch the deleteEmployee action to remove the employee from the store
        dispatch(deleteEmployee(employee.id));
      }
    });
  };

  return (
    <div className="container">
      {/* Conditionally render Header and List components */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {/* Conditionally render Add component */}
      {isAdding && <Add employees={employees} setIsAdding={setIsAdding} />}

      {/* Conditionally render Edit component */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
