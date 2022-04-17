import React, { useState } from "react";

export default function Userhobies({ SelectedUser }) {
  const [hobbies, sethobbies] = useState([])

  const [PassionVal, setPassionVal] = useState();
  const [Hobby_YearVal, setHobyYear] = useState();
  const [HobbyNameVal, setHobbyName] = useState();

  React.useEffect(() => {
    if(SelectedUser){
    fetch("http://localhost:4000/user_hobbies/" + SelectedUser).then(
      (res) => {
        res.json().then((hobbies) => {
          console.log(hobbies, SelectedUser);
          sethobbies(hobbies);
        });
      }
    );}
  }, [SelectedUser]);
  return (
    <div className="col">
      <table className="table">
        <tr>
          <th>
            <select value={PassionVal}  onChange={(e) => {
            
                    setPassionVal(e.target.value);
                    console.log(PassionVal,e.target.value);
                  }}>
              <option value={"Low"}>Low</option>
              <option value={"Medium"}>Medium</option>
              <option value={"High"}>High</option>
            </select>
          </th>
          <th>
            <input placeholder="Enter User Hobby"  value={HobbyNameVal}
                  onChange={(e) => {
                    setHobbyName(e.target.value);
                  }}></input>
          </th>
          <th>
            <input placeholder="Enter Year" value={Hobby_YearVal}
                  onChange={(e) => {
                    setHobyYear(e.target.value);
                  }}></input>
          </th>
          <th>
          <button
                  onClick={() => {
                    fetch("http://localhost:4000/add_hobbies", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                      },
                      body: JSON.stringify({ HobbyName: HobbyNameVal,Hobby_Year:Hobby_YearVal,Passion:PassionVal,UserId:SelectedUser }),
                    }).then(res=>{
                      if(res.status===200){
                        sethobbies([...hobbies,{HobbyName: HobbyNameVal,Hobby_Year:Hobby_YearVal,Passion:PassionVal,UserId:SelectedUser}]);
                      }
                    });
                  }}
                >Add</button>
          </th>
        </tr>
        {hobbies.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Passion}</td>
              <td>{val.HobbyName}</td>
              <td>{val.Hobby_Year}</td>
              <td>
              <button
                  onClick={() => {
                    fetch("http://localhost:4000/remove_hobby/"+val.HobbyId, {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                      },
                      // body: JSON.stringify({ HobbyName: HobbyNameVal,Hobby_Year:Hobby_YearVal,Passion:PassionVal,UserId:SelectedUser }),
                    }).then(res=>{
                      if(res.status===200){
                        // sethobbies([...hobbies,{HobbyName: HobbyNameVal,Hobby_Year:Hobby_YearVal,Passion:PassionVal,UserId:SelectedUser}]);
                      }
                    });
                  }}
                >Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
