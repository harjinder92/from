import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Experience() {
  const [val, setVal] = useState([
    { companyName: "", position: "", address: "", startDate: "", endDate: "" },
  ]);
  const navigate = useNavigate();
  const onHandle = (e, index) => {
    let newForm = [...val];
    newForm[index][e.target.name] = e.target.value;
    setVal(newForm);
  };
  const next = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <div>
      <form onSubmit={next}>
        <h1>Work Experience</h1>
        {val.map((input, index) => {
          return (
            <div key={index}>
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={input.companyName}
                onChange={(e) => onHandle(e, index)}
              ></input>
              <label htmlFor="">Position</label>
              <input
                type="text"
                name="position"
                value={input.position}
                onChange={(e) => onHandle(e, index)}
              ></input>
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                value={input.address}
                onChange={(e) => onHandle(e, index)}
              ></input>
              <label htmlFor="">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={input.startDate}
                onChange={(e) => onHandle(e, index)}
              ></input>
              <label htmlFor="">End Date</label>
              <input
                type="date"
                name="endDate"
                value={input.endDate}
                onChange={(e) => onHandle(e, index)}
              ></input>
            </div>
          );
        })}
        <button onClick={next}>Next</button>
      </form>
    </div>
  );
}
export default Experience;
