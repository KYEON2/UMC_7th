import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: black;
  padding: 10px 20px;
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
  margin-left: auto; /* 버튼 그룹을 오른쪽 끝으로 이동 */
`;

const Button = styled.button`
  background: none;
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

export default function NavBar() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLoginClick = () => {
    navigate('/Login'); // 로그인 버튼 클릭 시 /login 경로로 이동
  };

  const handleSignUpClick = () => {
    navigate('/SignUp'); // 회원가입 버튼 클릭 시 /signup 경로로 이동 (필요 시 추가)
  };

  return (
    <Nav>
      <NavLink to="/Home">youngcha</NavLink>
      <ButtonGroup> 
        <LogBtn onClick={handleLoginClick}>로그인</LogBtn>
        <SignBtn onClick={handleSignUpClick}>회원가입</SignBtn>
      </ButtonGroup>
    </Nav>
  );
}
