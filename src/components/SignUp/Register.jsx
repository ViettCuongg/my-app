import { useEffect, useRef, useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../HomePage/header/Navbar";
import * as Components from "./RegisterForm";
import "./Register.module.css";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Register = () => {
  const [signIn, toggle] = useState(true);

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd]);
  const handleSignUp = async (e) => {
    e.preventDefault();
    //if button enabled with js hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(email, pwd);
    try {
      const response = await axios.post();
    } catch (error) {}
  };
  return (
    <div>
      {success ? (
        <>
          <Navbar />
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4 py-10">Sign Up Success</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              <Link to="/">Sign in to continue</Link>
            </button>
          </section>
        </>
      ) : (
        <>
          <Navbar />
          <Components.Container>
            <Components.SignUpContainer>
              <Components.Form onSubmit={handleSignUp}>
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <Components.Title>Create Account</Components.Title>
                <Components.SignUpTitle>
                  Name:
                  <Components.ValidationIcon
                    valid={validName && user && user.trim() !== ""}
                  >
                    <FontAwesomeIcon icon={validName ? faCheck : faTimes} />
                  </Components.ValidationIcon>
                </Components.SignUpTitle>
                <Components.Input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="Name"
                />

                <Components.Instructions
                  isVisible={userFocus && user && !validName}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters and no special words!
                  <br />
                </Components.Instructions>

                <Components.SignUpTitle>
                  Email:
                  <Components.ValidationIcon
                    valid={validEmail && email && email.trim() !== ""}
                  >
                    <FontAwesomeIcon icon={validEmail ? faCheck : faTimes} />
                  </Components.ValidationIcon>
                </Components.SignUpTitle>
                <Components.Input
                  type="email"
                  id="email" // Add this line
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Email"
                />
                <Components.Instructions
                  isVisible={emailFocus && email && !validEmail}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Enter a valid email address.
                  <br />
                </Components.Instructions>
                <Components.SignUpTitle>
                  Password:
                  <Components.ValidationIcon
                    valid={validPwd && pwd && pwd.trim() !== ""}
                  >
                    <FontAwesomeIcon icon={validPwd ? faCheck : faTimes} />
                  </Components.ValidationIcon>
                </Components.SignUpTitle>
                <Components.Input
                  type="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  aria-invalid={validPwd ? "false" : "true"}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="Password"
                />
                <Components.Instructions
                  isVisible={pwdFocus && pwd && !validPwd}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters, at least one lowercase letter, one
                  uppercase letter, one digit, and one special character.
                  <br />
                </Components.Instructions>
                <Components.Button
                  disabled={
                    !validName || !validEmail || !validPwd ? true : false
                  }
                >
                  Sign Up
                </Components.Button>
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
              <Components.Form onSubmit={handleSignIn}>
                <Components.Title>Sign in</Components.Title>
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.ForgetPwd href="#">
                  Forgot your password?
                </Components.ForgetPwd>
                <Components.Button>Sigin In</Components.Button>
              </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>
                <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                    To keep connected with us please login with your personal
                    info
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                  </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>Hello, Friend!</Components.Title>
                  <Components.Paragraph>
                    Enter Your personal details and start journey with us
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                    Sigin Up
                  </Components.GhostButton>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
          </Components.Container>

          <Components.Footer>
            <Footer2 />
          </Components.Footer>
        </>
      )}
    </div>
  );
};

export default Register;
