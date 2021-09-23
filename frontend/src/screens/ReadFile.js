import React from "react";

function ReadFile({ readExcel }) {

  return (
    <div className="sub">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </div>
  );
}

export default ReadFile;