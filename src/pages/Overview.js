import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

const Overview = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        setUserInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        const fakeData = {
    "firstname" : "Johnatan Smith",
    "lastname" : "Dohicou Kopse",
    "email" : "jonathan.dohicou@mail.com",
    "mobile" : "+237 687654321",
    "address" : "Bay Area, San Francisco, USA"
};
        setUserInfo(fakeData);
      }
    };

    fetchUserInfo();
  }, []);

  const handleEditUser = async () => {
    try {
      const response = await axios.put('http://localhost:5000/api/user/edit-user');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, an error occurred: {error.message}</p>;
  }

  return (
    <div>
      <h1>Overview</h1>
      <p>This is the Overview page.</p>
      <MDBCard className="mb-4">
        <MDBCardBody>
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Firstname</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{userInfo.firstname}</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Lastname</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{userInfo.lastname}</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Email</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{userInfo.email}</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Mobile</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{userInfo.mobile}</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Address</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{userInfo.address}</MDBCardText>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBBtn color="primary" onClick={handleEditUser}>
        Edit User
        <MDBIcon fas icon="edit" className="ms-2" />
      </MDBBtn>
    </div>
  );
};

export default Overview;
