import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
    localStorage.removeItem("formData");
    alert("You have been logged out successfully...");
    navigate("/");
  };

  return (
    <>
      <h1 style = {{textAlign: "center"}}> JSON Data By Api - </h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={posts} columns={columns} />
      </div>

      <Button style = {{marginLeft: '50%', marginTop: '10%', padding: '7px'}} variant="contained" onClick={Logout}>
        Logout
      </Button>
    </>
  );
};

export default DisplayJSONDataByAPI;

/*
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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
      </TableContainer>
*/
