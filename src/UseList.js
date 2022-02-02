import {React, useState,useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const UseList = () => {
  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => setuserlist(e.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="caard">
        {userlist.map((el) =>(
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
           {el.username}
          </Card.Subtitle>
          <Card.Text>
           {el.address.street}
          </Card.Text>
          <Card.Link href="#">{el.email}</Card.Link>
          
        </Card.Body>
      </Card>
         ) )}
    </div>
  );
};

export default UseList;
