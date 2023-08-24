import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useNavigate, Link } from "react-router-dom";

import DisplayJSONDataCheckbox from "./DisplayJSONDataCheckbox";
import InvalidUser from "./InvalidUser";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "userId", headerName: "User-Id", width: 90 },
  { field: "id", headerName: "ID", width: 90 },
  { field: "title", headerName: "Title", width: 250 },
  { field: "body", headerName: "Body", width: 600 },
];

const DisplayJSONDataByAPI: React.FC = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const navigate = useNavigate();

  const Logout = () => {
    let logout = confirm("Are you sure you want to logout...");

    if (logout) {
      navigate("/");
      // localStorage.removeItem("formData");
      localStorage.clear();
    } else {
      navigate("/api");
    }
  };

  const getData = localStorage.getItem("formData");

  return (
    <>
      {getData ? (
        <>
          <h1 style={{ textAlign: "center" }}> JSON Data By Api - </h1>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={posts}
              columns={columns}
              pageSizeOptions={[5, 10, 20, 50, 100]}
            />
          </div>

          <div>
            <h1 style={{ textAlign: "center" }}> Another JSON Data - </h1>
            <DisplayJSONDataCheckbox />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2%",
              marginLeft: "50%",
            }}
          >
            <Button
              style={{ padding: "5px", width: "10%" }}
              variant="contained"
              component={Link}
              to="/home"
            >
              Home
            </Button>

            <Button
              style={{ padding: "2px", width: "12%", marginLeft: "50px" }}
              variant="contained"
              onClick={Logout}
            >
              Logout
            </Button>
          </div>
        </>
      ) : (
        <InvalidUser />
      )}
    </>
  );
};

export default DisplayJSONDataByAPI;







/*
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>User-ID</TableCell>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Body</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {posts.map((post) => (
        <TableRow key={post.id}>
          <TableCell>{post.userId}</TableCell>
          <TableCell>{post.id}</TableCell>
          <TableCell>{post.title}</TableCell>
          <TableCell>{post.body}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>;


Another Json -
import Data from "./data.json";

const listdata = Data;
console.log(listdata);

<div>
  {listdata.map((item) => {
    return (
      <ul>
        {item.department}
        <li>{item.sub_departments}</li>
      </ul>
    );
  })}
</div>;

Extra alert -
const alertLogout = () => {
  alert("You have been logged out successfully...");
};
alertLogout();

if (logout) {
  navigate("/");
  // const timeout = setTimeout(alertLogout, 5000)
} else {
  navigate("/api");
}
};

// const nav1 = navigate('/api');
// const nav2 = navigate('/');

const userData = JSON.parse(localStorage.getItem("formData") || "{}");
// console.log(userData);

if (userData.name && userData.email && userData.phoneNo) {
// return nav1;
navigate("/api");
} else {
// return nav2;
navigate("/");
}
*/
