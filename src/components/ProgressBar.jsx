import React from "react";

const ProgressBar = ({
  progress,
}) => {

  return (
    <div className="progress">

      <div
        className="progress-fill"
        style={{
          width: `${progress}%`
        }}
      >
        {progress}%
      </div>

    </div>
  );
};

export default ProgressBar;