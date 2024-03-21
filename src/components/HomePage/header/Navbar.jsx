import styled from 'styled-components';

import logoTDT from '../../../assets/logo-TDT.png';
import avatar from '../../../assets/avatar.jpg';
import './../../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    const [isLogin, setIsLogin] = useState(false);
    const handleOpenMenu = () => {
        setToggle(!toggle);
    };
    const navigate = useNavigate();
    // const handleClick = () => {
    //   setToggle(!toggle);
    // };
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLogin(true);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };
    return (
        <div className="w-full shadow-lg">
            <StyledContainer className="container">
                <StyledLogo className="logo">
                    <Link to="/">
                        <StyledLogoImg src={logoTDT} alt={logoTDT} />
                    </Link>
                </StyledLogo>

                <StyledRight className="right pr-4">
                    <StyledMenuComponent className="menu">
                        <StyledMenuUl className="menu">
                            <StyledListMenu to="/">Trang chủ</StyledListMenu>
                            <StyledListMenu to="/CalculateScore">Tính điểm </StyledListMenu>
                            <StyledListMenu to="/baseScore">Điểm chuẩn</StyledListMenu>
                            <StyledListMenu to="/QuizzPersonality">MBTI</StyledListMenu>
                        </StyledMenuUl>
                    </StyledMenuComponent>
                </StyledRight>

                {isLogin ? (
                    <StyledMenuComponent className="relative ">
                        <img
                            onClick={handleOpenMenu}
                            src={avatar}
                            alt=""
                            className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
                        />
                        { }
                        {toggle && (
                            <div className="z-1000000 absolute -right-full mt-2 h-[90px] top-full w-48 bg-white rounded-md shadow-lg">
                                <Link
                                    to={`profile`}
                                    className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-silver"
                                >
                                    Thông tin cá nhân
                                </Link>
                                <li
                                    onClick={handleLogout}
                                    className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-silver"
                                >
                                    Đăng xuất
                                </li>
                            </div>
                        )}
                    </StyledMenuComponent>
                ) : (
                    <StyledMenuComponent className="">
                        <Link to="/register">
                            <button className="px-8 py-3 rounded-md bg-[#20B486]">Sign Up</button>
                        </Link>
                    </StyledMenuComponent>
                )}
            </StyledContainer>
        </div>
    );
};

export default Navbar;
