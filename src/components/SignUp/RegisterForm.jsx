import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transform: translate(-50%, 20%);
  overflow: hidden;
  width: 678px;
  margin-left: 50%;
  margin-bottom: 5%;
  max-width: 100%;
  min-height: 400px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const SignUpTitle = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Footer = styled.div`
  margin-top: auto;
`;
export const Name = styled.label``;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid red;
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  &:focus {
    border: 2px solid #00008b;
    outline: none;
  }
`;
export const ValidationIcon = styled.span`
  display: inline-block;
  margin-left: 0.25rem;
  color: ${(props) => (props.valid ? "green" : "red")};
  display: ${(props) =>
    props.valid === null || !props.valid ? "none" : "inline-block"};
`;

export const Instructions = styled.p`
  font-size: 0.75rem;
  color: red;
  margin: 0; /* Reset default margin */
  display: ${(props) => (props.isVisible ? "flex" : "none")};

  > svg {
    margin-right: 0.25rem;
  }
`;

export const Offscreen = styled.p`
  position: absolute;
  left: -9999px;
  /* Add any other styles as needed */
`;
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5; 
    cursor: not-allowed;
  `}

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const ForgetPwd = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  &:hover {
    color: red;
  }
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
