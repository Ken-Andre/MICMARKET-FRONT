// ChangePassword.js
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
const ChangePassword = () => {
const [newPassword,setNewPassword] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");
const [pwdMatched,setpwdMatched] = useState(true);
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handlenewPassword = (e) => {
  setNewPassword(e.target.value);
};
const handleConfirmPassword = (e) => {
  setConfirmPassword(e.target.value);
};
function handleMatchedPwd ()  {
  if (newPassword === confirmPassword) {
    setpwdMatched(true);
  } else {
    setpwdMatched(false);
  }
};
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
    const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <h1>Change Password</h1>
      <p>This is the Change Password tab</p>
      <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>New Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <div className="input-group">
  <input
    className="form-control border-0"
    type={showPassword ? "text" : "password"}
    name="new password"
    value={newPassword}
    onChange={handlenewPassword}
  />
  <button
    className="btn btn-outline-secondary"
    type="button"
    onClick={toggleShowPassword}
  >
    {showPassword ? (
      <MDBIcon icon="eye-slash" />
    ) : (
      <MDBIcon icon="eye" />
    )}
  </button>
</div>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Confirm New Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" >
<div className="input-group">
  <input
    className="form-control border-0"
    type={showConfirmPassword ? "text" : "password"}
    name="confirm password"
    value={confirmPassword}
    onChange={handleConfirmPassword}
  />
  <button
    className="btn btn-outline-secondary"
    type="button"
    onClick={toggleShowConfirmPassword}
  >
    {showPassword ? (
      <MDBIcon icon="eye-slash" />
    ) : (
      <MDBIcon icon="eye" />
    )}
  </button>
</div>
                    
                    {!pwdMatched && (
                <MDBCardText className="text-danger">Passwords do not match</MDBCardText>
              )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
    </>
  );
};

export default ChangePassword;
