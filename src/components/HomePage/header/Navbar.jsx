import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import logoTDT from "../../../assets/logo-TDT.png";
import "./../../../App.css";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  padding: 1.5rem;
  display: flex;
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const StyledLogoImg = styled.img`
  width: 5rem;
  height: 2.5rem;
`;

const StyledRight = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const StyledMenu = `
  display: flex;
  gap: 2rem;
  font-weight: 500;
  list-style: none;
`;
const StyledMenuComponent = styled.div`
  ${StyledMenu}
`;

const StyledMenuUl = styled.ul`
  ${StyledMenu}
`;
const StyledListMenu = styled(Link)`
  &:hover {
    color: #fe956f;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <StyledContainer className="container">
      <StyledLogo className="logo">
        <Link to="/Homepage">
          <StyledLogoImg src={logoTDT} alt={logoTDT} />
        </Link>
      </StyledLogo>

      <StyledRight className="right pr-4">
        <StyledMenuComponent className="menu">
          <StyledMenuUl className="menu">
            <StyledListMenu to="/Homepage">Trang chủ</StyledListMenu>
            <StyledListMenu to="/CalculateScore">Tính điểm </StyledListMenu>
            <StyledListMenu>Điểm chuẩn</StyledListMenu>
            <StyledListMenu to="/QuizzPersonality">Công cụ</StyledListMenu>
          </StyledMenuUl>
        </StyledMenuComponent>
      </StyledRight>

      <StyledMenuComponent className="">
        <button className="flex justify-between items-center bg-transparent gap-2">
          <FontAwesomeIcon className="w-4 h-6 " icon={faUser} />
          Login
        </button>
        <Link to="/register">
          <button className="px-8 py-3 rounded-md bg-[#20B486]">
            Signup for free
          </button>
        </Link>
      </StyledMenuComponent>

      <div className="md:hidden" onClick={handleClick}>
        <FontAwesomeIcon icon={toggle ? faClose : faBars} />
      </div>
    </StyledContainer>
  );
};

export default Navbar;
