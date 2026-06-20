import React from "react";

const Certificate = ({
  studentName,
  score,
}) => {

  return (
    <div
      className="certificate"
    >

      <h1>
        Certificate of Completion
      </h1>

      <h2>
        {studentName}
      </h2>

      <p>
        Successfully completed
      </p>

      <h3>
        React Learning Platform
      </h3>

      <p>
        Final Score :
        {score}
      </p>

    </div>
  );
};

export default Certificate;