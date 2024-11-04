import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  height: 35px;
  background-color: black;
  padding: 8px 20px;
`;

const NavLink = styled(Link)`
  color: #FA0049;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: lightgray;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* 버튼 그룹을 오른쪽 끝으로 이동 */
`;

const Button = styled.button`
  background: none;
  width: 70px;
  height: 30px;
  color: white;
  border: 2px solid white;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 20px; 
  cursor: pointer;
  font-size: 12px;
  outline: none; 
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const LogBtn = styled(Button)`
  background-color: black;
  color: white;
  border-color: white; /* 테두리 색상을 white로 설정 */
`;

const SignBtn = styled(Button)`
  background-color: #FA0049;
  color: white;
  border-color: #FA0049; /* 테두리 색상을 pink로 설정 */
`;

const LogoutBtn = styled(Button)`
  background-color: #FA0049;
  color: white;
`;

const Text = styled.p`
  color: white;
`;

export default function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken); // accessToken이 있으면 로그인 상태로 설정
  }, []);

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleSignUpClick = () => {
    navigate('/SignUp');
  };

  const handleLogoutClick = () => {
    // 로그아웃 시 토큰 삭제 및 상태 업데이트
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate('/'); 
  };

  const emailPrefix = localStorage.getItem("emailPrefix");

  return (
    <Nav>
      <NavLink to="/Home">youngcha</NavLink>
      <ButtonGroup> 
        {isLoggedIn ? (
          <>
            <Text>{emailPrefix}님 반갑습니다.</Text>
            <LogoutBtn onClick={handleLogoutClick}>로그아웃</LogoutBtn>
          </>
        ) : (
          <>
            <LogBtn onClick={handleLoginClick}>로그인</LogBtn>
            <SignBtn onClick={handleSignUpClick}>회원가입</SignBtn>
          </>
        )}
      </ButtonGroup>
    </Nav>
  );
}
