import React, { useState } from "react";

export default function UserTable({ setSelectedUser }) {
  const [users, setusers] = useState([]);
  const [UserName, setUserName] = useState();
  React.useEffect(() => {
    fetch("http://localhost:4000/all_users").then((res) => {
      res.json().then((User) => {
        setusers(User);
      });
    });
  }, []);

  return (
    <div className="container">
      <h1>User Hobbies</h1>
      <div className="row">
        <div className="col">
          <table className="table">
            <tr>
              <th>
                <input
                  placeholder="Enter UserName"
                  value={UserName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                ></input>
                <button
                  onClick={() => {
                    fetch("http://localhost:4000/add_user", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                      },
                      body: JSON.stringify({ UserName: UserName }),
                    }).then(res=>{
                      if(res.status===200){
                        setusers([...users,{UserId:6,UserName:UserName}]);
                      }
                    });
                  }}
                >
                  Add
                </button>
              </th>
            </tr>
            {users.map((val, key) => {
              return (
                <tr
                  key={key}
                  onClick={() => {
                    setSelectedUser(val.UserId);
                  }}
                >
                  <td>{key+1}</td>
                  <td>{val.UserName}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
