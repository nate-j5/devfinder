import React from "react";

function ErrorMessage(props) {
  return (
    <div className="container-0-error">
      <h4>User {props.message}</h4>
    </div>
  );
}

export default ErrorMessage;
