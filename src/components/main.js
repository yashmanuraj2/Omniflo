import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Table, Button , Row,Col} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import AddModal from "./addModal";
export default function Main() {
  const [phone, setPhone] = useState("");
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);
  const [amount, setAmount] = useState("");

  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState("");
  const [upi, setUpi] = useState("");
  const [userData, setUserData] = useState("");

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };
  const changeShow1 = () => {
    setShow1(true);
  };
  const changeShow2 = () => {
    setShow2(true);
  };
  const changeReason = (e) => {
    setReason(e.target.value);
  };
  const changeDuration = (e) => {
    setDuration(e.target.value);
  };
  const changeUpi = (e) => {
    setUpi(e.target.value);
  };

  
  const { user } = useContext(AuthContext);
  const created = user.phone;

  const updateOne = async () => {
    const BorrowData = {
      phone: created,
      amount: amount,
      reason: reason,
      duration: duration,
      upi: upi,
    };
    try {
      await axios.put("http://localhost:5000/requests/" + phone,BorrowData)
      
        // if you use token
        .then((res) => {
          console.log(res.data);
         console.log(phone)
          console.log("true");
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/myRequests/" + user.phone);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  let requestData = new Array(userData.requests);
  
  const ViewRequests = (props) => {
    if (!props.show) return null;
    else {
      return (
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>By</th>
                <th>Amount</th>
                <th>Reason</th>
                <th>Duration</th>
                <th>UPI ID</th>
              </tr>
            </thead>
            <tbody>
              {requestData[0].map((request) => (
                <tr key={request.id}>
                  <td>{request.phone}</td>
                  <td>{request.amount}</td>
                  <td>{request.reason}</td>
                  <td>{request.duration}</td>
                  <td>{request.upi}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container">
        <div className="centre">
          <div className="centre-div">
            <Col md={8}>
     <h3>{` Welcome ${user.name}, ${user.phone}`}</h3> 
      <Button variant ="primary"
        onClick={() => {
          changeShow1();
        }}
      >
        {" "}
        Request Money
      </Button>
      <AddModal
        show={Show1}
        onClose={() => setShow1(false)}
        changePhone={changePhone}
        changeAmount={changeAmount}
        changeReason={changeReason}
        changeDuration={changeDuration}
        changeUPI={changeUpi}
        onSubmit={updateOne}
      />

      <Button variant ="primary"
        onClick={() => {
          changeShow2();
        }}
      >
        View Requests
      </Button>
      <ViewRequests show={Show2} />
      </Col>
      </div>
      </div>
      </div>
      
    </div>
  );
}
