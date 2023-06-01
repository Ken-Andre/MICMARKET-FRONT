import { React, useState, useEffect, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../components/BreadCrumb";
import { NavLink } from "react-router-dom";
//import axf from '../utils/axios';
import axios from "axios";
import Meta from "../components/Meta";
//const axios = axf();

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
const NAME_REGEX = /^(?=.{2,32}$)[a-zA-Z0-9]+([ ][a-zA-Z0-9]+|[ -][a-zA-Z0-9]+)*$/u;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;
const MAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
const TEL_REGEX = /^((?=.{8,}$)[2-3-6]{1}((\s)|(-)?){0,1}([0-9]{2})((\s)|(-)?){0,1}([0-9]{2})((\s)|(-)?){0,1}([0-9]{2})((\s)|(-)?){0,1}([0-9]{2}))$/

const REGISTER_URL = 'http://127.0.0.1:5000/api/user/register';
const Signin = () => {
    //Toutes mes useState +useEffect debut

    const userRef = useRef();
    const nameRef = useRef();
    const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);


    const [nameUser, setNameUser] = useState('');
    const [validnameUser, setValidnameUser] = useState(false);
    const [nameuserFocus, setNameUserFocus] = useState(false);


    const [lastnameUser, setLastNameUser] = useState('');
    const [validlastnameUser, setValidlastnameUser] = useState(false);
    const [lastnameUserFocus, setLastnameUserFocus] = useState(false);

    const [mailuser, setMailUser] = useState('');
    const [validMail, setValidMail] = useState(false);
    const [mailUserFocus, setMailUserFocus] = useState(false);

    const [mobile, setMobile] = useState('');
    const [validMobile, setValidMobile] = useState(false);
    const [mobileFocus, setMobileFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    //Etat pour le success d'une action ou l'echec
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Username section start
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // //Function to validate Username
    // useEffect(() => {
    //     const result = USER_REGEX.test(user);
    //     console.log(result);
    //     console.log(user);
    //     setValidName(result);
    // }, [user])
    // Username section ends

    // Name (first,last) section start
    // useEffect(() => {
    //     nameRef.current.focus();
    // }, [])

    // Function to validate Name Firstname and Lastname
    useEffect(() => {
        const result = NAME_REGEX.test(nameUser);
        const result2 = NAME_REGEX.test(lastnameUser);
        console.log(result, " &", result2);
        console.log(nameUser, " ", lastnameUser);
        setValidnameUser(result);
        setValidlastnameUser(result2);
    }, [nameUser, lastnameUser])

    //Function to validate E-mail (mail username)
    useEffect(() => {
        const result = MAIL_REGEX.test(mailuser);
        console.log(result);
        console.log(mailuser);
        setValidMail(result);
    }, [mailuser])

    //Function to validate Phone number
    useEffect(() => {
        const result = TEL_REGEX.test(mobile);
        console.log(result);
        console.log(mobile);
        setValidMobile(result);
    }, [mobile])

    //Function to validate passwords
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])



    useEffect(() => {
        setErrMsg('');
    }, [nameUser, lastnameUser, mailuser, mobile, pwd, matchPwd])
    // Je dois ajouter user, en haut
    //Toutes mes useState +useEffect debut

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        //const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = NAME_REGEX.test(nameUser);
        const v4 = NAME_REGEX.test(lastnameUser);
        const v5 = MAIL_REGEX.test(mailuser);
        const v6 = TEL_REGEX.test(mobile);
        if (!v2 || !v3 || !v4 || !v5 || !v6) {
            setErrMsg("Invalid Entry");
            return;
        }
        // try {
        //     const response = await axios.post(REGISTER_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(response?.data);
        //     console.log(response?.accessToken);
        //     console.log(JSON.stringify(response))
        //     setSuccess(true);
        //     //clear state and controlled inputs
        //     //need value attrib on inputs for this
        //     setUser('');
        //     setPwd('');
        //     setMatchPwd('');
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 409) {
        //         setErrMsg('Username Taken');
        //     } else {
        //         setErrMsg('Registration Failed')
        //     }
        //     errRef.current.focus();
        // }
        //else {
        const payload = {
            // user: user,
            firstname: nameUser,
            lastname: lastnameUser,
            password: pwd,
            email: mailuser,
            mobile: mobile,
        };
        // "https://9b72679d267b125061efb8f853d5901f.m.pipedream.net"
        fetch(REGISTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // extract JSON response from response object
            })
            .then(data => {
                console.log('Server response:', data); // log JSON response
            })
            .catch(err => {
                console.error('Error:', err); // log error
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 409) {
                    setErrMsg('Username Taken');
                } else {
                    setErrMsg('Registration Failed')
                }
                errRef.current.focus();
            });
        //}

    }

    return (
        <>
            <Meta title={"Signin"} />

            <div className="login-wrapper py-5 home-wrapper-2">
                <Meta className={"Register"} />
                <BreadCrumb title="Register" />
                {/* Ici */}
                <div className="row">
                    <div className="col-12">
                        <div className=" form-signin  m-auto w-75">
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                {errMsg}
                            </p>
                            <h1>Register</h1>
                            <form className="m-auto " onSubmit={handleSubmit}>
                                {/* Debut Input Username  */}
                                {/* <label htmlFor="username">
                        Username:

                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />


                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />

                    </label>
                    <input
                        type="text"
                        name="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters <br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p> */}
                                {/* Fin Input Username */}

                                {/* Debut Input Firstname */}
                                <div className="mb-1">
                                    <label htmlFor="firstname" className="">
                                        Firstname:
                                        <FontAwesomeIcon icon={faCheck} className={validnameUser ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validnameUser || !nameUser ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setNameUser(e.target.value)}
                                        required
                                        aria-aria-invalid={validnameUser ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setNameUserFocus(true)}
                                        onBlur={() => setNameUserFocus(false)}
                                    />
                                    <p id="uidnote" className={nameuserFocus && nameUser && !validnameUser ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        2 à 32 caractères <br />
                                        Doit commencer par une lettre. <br />
                                        Lettres, chiffres, tirets et espaces autorisés. <br />
                                    </p>
                                </div>
                                {/* Fin Input Firstname */}


                                {/* Debut Input Lastname */}

                                <div className="mb-1">
                                    <label htmlFor="lastname" className="">
                                        Lastname:
                                        <FontAwesomeIcon icon={faCheck} className={validlastnameUser ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validlastnameUser || !lastnameUser ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setLastNameUser(e.target.value)}
                                        required
                                        aria-aria-invalid={validlastnameUser ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setLastnameUserFocus(true)}
                                        onBlur={() => setLastnameUserFocus(false)}
                                    />
                                    <p id="uidnote" className={lastnameUserFocus && lastnameUser && !validlastnameUser ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        2 à 32 caractères <br />
                                        Doit commencer par une lettre. <br />
                                        Lettres, chiffres, tirets et espaces autorisés. <br />
                                    </p>
                                </div>
                                {/* Fin Input Lastname */}

                                {/* Debut Input Mail */}
                                <div className="mb-1">
                                    <label htmlFor="mail" className="">
                                        Mail:
                                        <FontAwesomeIcon icon={faCheck} className={validMail ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMail || !mailuser ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="mail"
                                        name="mail"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setMailUser(e.target.value)}
                                        required
                                        aria-aria-invalid={validMail ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setMailUserFocus(true)}
                                        onBlur={() => setMailUserFocus(false)}
                                    />
                                    <p id="uidnote" className={mailUserFocus && mailuser && !validMail ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        name@domain.com <br />
                                    </p>
                                </div>
                                {/* Fin Input Mail */}
                                {/* Debut Input Password */}
                                <div className="mb-1">
                                    <label htmlFor="password">
                                        Password:
                                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}

                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        8 to 24 characters.<br />
                                        Must include uppercase and lowercase letters, a number and a special character.<br />
                                        Allowed special characters: <span aria-label="exclamation mark">!</span>
                                        <span aria-label="at symbol">@</span>
                                        <span aria-label="hashtag">#</span>
                                        <span aria-label="dollar sign">$</span>
                                        <span aria-label="percent">%</span>
                                    </p>
                                </div>
                                {/* Fin Input Password */}
                                {/* Debut Input Confirm P */}
                                <div className="mb-1">
                                    <label htmlFor="confirm_pwd">
                                        Confirm Password:
                                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Must match the first password input field.
                                    </p>
                                </div>

                                {/* Debut Input Tel | Mobile */}
                                <div className="mb-1">
                                    <label htmlFor="mobile" className="">
                                        Mobile:
                                        <FontAwesomeIcon icon={faCheck} className={validMobile ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMobile || !mobile ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        aria-aria-invalid={validMobile ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setMobileFocus(true)}
                                        onBlur={() => setMobileFocus(false)}
                                    />
                                    <p id="uidnote" className={mobileFocus && mobile && !validMobile ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />

                                        chiffres, autorisés. <br />
                                    </p>
                                </div>
                                {/* Fin Input Mobile */}

                                <button className="btn btn-lg btn-primary form-control border-0" disabled={!validPwd || !validMatch ? true : false}>Sign Up</button>
                                {/* !validName || */}
                            </form>
                            <p>
                                Already registered?<br />
                                <span className="line">
                                    {/*put router link here*/}
                                    <NavLink to="/login" className="fw-medium text-primary text-opacity-75 left-gap">Login</NavLink>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;
