// ChangeLocation.js
import React,{useState, useEffect} from 'react';
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
const ChangeLocation = () => {
const [newaddress,setNewAddress] = useState("Bay Area, San Francisco, CA");

 

const handlesetNewAddress = (e) => {
  setNewAddress(e.target.value);
};
  
useEffect(() => {
  console.log("The New Address:", newaddress);
}, [newaddress, handlesetNewAddress]);
  return (
    <>
      <h1>Change Location</h1>
      <p>This is the Change Location tab</p>
      <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Previous Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>New Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" >
                    <input className=" border-0" name="new address" value={newaddress} onChange={handlesetNewAddress} 
                    />{/*</input>*/}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

    </>
  );
};

export default ChangeLocation;
