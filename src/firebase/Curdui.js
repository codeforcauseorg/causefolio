import React from "react";

export default function Curdui(props) {
    const {userData,setuserData,fetchdata,loading,AddUser,editRow,deleteRow}=props
  return (
    <div className="container">
      <form id="addUpdateUser" className="container border border-4 my-4 w-50">
          <h4 className="py-2 my-2">Add/Update User</h4>
        <div className="my-3">
          <input
            type="text"
            placeholder="First name"
            value={userData.FirstName}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
                userData.FirstName = e.target.value;
                setuserData({ ...userData });
            }}
            required
            min='2'
            />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Last name"
            value={userData.LastName}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
                userData.LastName = e.target.value;
                setuserData({ ...userData });
            }}
            required
            min="2"
            />
        </div>
        <div className="py-3">
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={(e) => {
              e.preventDefault();
              AddUser();
            }}
            >
          Add User
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          onClick={(e) => {
              e.preventDefault();
              editRow();
            }}
            >
          Update User
        </button>
        </div>
      </form>
        {loading ? <>loading...</> : null}
            <h3>User Detail</h3>
      <div className="container border border-4" style={{height:300,overflow:"scroll"}}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">sno</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody className="">
            {fetchdata?.map((row, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{id + 1}</th>
                  <td>{row.FirstName}</td>
                  <td>{row.LastName}</td>
                  <td>
                    <button
                      className="btn btn-info mx-1"
                      onClick={() => {
                        setuserData({
                          FirstName: row.FirstName,
                          LastName: row.LastName,
                          id: row.id,
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => deleteRow(row.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
