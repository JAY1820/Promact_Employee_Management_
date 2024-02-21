import React from "react";

/**
 * Renders the header component for the Employee Details application.
 *
 * - A function to set the state for adding a new employee.
 * @param {function} setIsAdding 
 * @returns {JSX.Element} 
 */
function Header({ setIsAdding }) {
  return (
    <header>
      <h1 style={{ textAlign: "center", fontSize: "2em" }}>Employee Details</h1>
      <div style={{ marginTop: "25px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Button
        </button>
      </div>
    </header>
  );
}

export default Header;
