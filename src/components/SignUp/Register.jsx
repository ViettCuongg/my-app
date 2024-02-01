import { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../HomePage/header/Navbar";
import * as Components from "./RegisterForm";
const Register = () => {
  const [signIn, toggle] = useState(true);
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="color-[red]">
      <Navbar />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            <Components.Title>Create Account</Components.Title>
            <Components.Name>Name:</Components.Name>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
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
                To keep connected with us please login with your personal info
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
    </div>
  );
};

export default Register;
