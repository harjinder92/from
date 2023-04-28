import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Education.css";

function Education() {
  const navigate = useNavigate();
  const [val, setVal] = useState([{ university: "", degree: "" }]);

  const submit = (e) => {
    e.preventDefault();
    navigate("/experience");
  };

  const addFields = () => {
    setVal([...val, { university: "", degree: "" }]);
  };
  const onHandle = (e, index) => {
    let newForm = [...val];
    newForm[index][e.target.name] = e.target.value;
    setVal(newForm);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h1>Education</h1>
        {val.map((input, index) => {
          return (
            <div key={index} className="container">
              <label htmlFor="">University</label>
              <input
                type="text"
                name="university"
                value={input.university}
                onChange={(e) => onHandle(e, index)}
              ></input>
              <label htmlFor="">Degree</label>
              <input
                type="text"
                name="degree"
                value={input.degree}
                onChange={(e) => onHandle(e, index)}
              ></input>
            </div>
          );
        })}
        <button onClick={submit}>Next</button>
      </form>
      <button onClick={addFields} style={{ alignItems: "center" }}>
        + Add Education
      </button>
    </div>
  );
}
export default Education;
