import React from "react";

/**
 * Renders the header component for the employee management application.
 *
 * - A function to set the state for adding a new employee.
 * @param {function} setIsAdding 
 * @returns {JSX.Element} 
 */
function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Employee Management</h1>
      <div style={{ marginTop: "25px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Button
        </button>
      </div>
    </header>
  );
}

export default Header;
