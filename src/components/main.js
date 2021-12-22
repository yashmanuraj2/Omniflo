import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Table, Button } from "react-bootstrap";
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


  let requestData = new Array(userData.requests);
  const { user } = useContext(AuthContext);
  const created = user.phone;

  const updateOne = async () => {
    const newData = {
      phone: created,
      amount: amount,
      reason: reason,
      duration: duration,
      upi: upi,
    };

    axios.put("http://localhost:5000/requests/" + phone, newData);
  };

  useEffect(() => {
    const getRequests = async () => {
      const sol = await axios.get(
        "http://localhost:5000/myRequests/" + user.phone
      );
      setUserData(sol.data);
    };
    getRequests();
  }, [user.phone]);
  
  const ViewRequests = (props) => {
    if (!props.show) return null;
    else {
      return (
        <div>
          <Table striped bordered hover>
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
              {requestData.map((request) => (
                <tr key={request.id}>
                  <td>{request.phone}</td>
                  <td>{request.reason}</td>
                  <td>{request.amount}</td>
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
      <Button
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
      <Button
        onClick={() => {
          changeShow2();
        }}
      >
        View Requests
      </Button>
      <ViewRequests show={Show2} />
    </div>
  );
}
