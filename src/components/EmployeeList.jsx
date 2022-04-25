import axios from "axios";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((data) => {
        return (
          <div className="employee_card">
            <img className="employee_image" src={data.image} />
            <span className="employee_name">{data.employee_name}</span>
            <span className="employee_title">{data.title}</span>
          </div>
        );
      })}
    </div>
  );
};
