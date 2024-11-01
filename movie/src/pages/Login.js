import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { validateLogin } from '../utils/validate';

const Con = styled.div`
    background-color: black;
    font-size: 20px;
    font-weight: 600;
    color: white;
    height: 100vh; 
    width: 100vw; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const InputCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  margin: 5px 0px;
  border-radius: 7px;
  border: ${props=>props.error ? '2px solid red' : '1px solid #ccc'};
`

const Button = styled.button`
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  background-color: #FA0049;
  border-radius: 7px;
  margin: 5px 0px;
  border: 0px;
`
const ErrorText = styled.h1`
  color: red;
  font-size: 12px;
`

//여기서 value는 onchange되는 값들 e.target.value
function Login() {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin
  })


 
  return (
    <Con>
      로그인
      <InputCon>
        <Input error={login.touched.email && login.errors.email} type={'email'} {...login.getTextInputProps('email')} placeholder={'  이메일을 입력하세요'} />
        {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
        <Input error={login.touched.password && login.errors.password} type={'password'} {...login.getTextInputProps('password')} placeholder={"  비밀번호를 입력하세요"} />
        {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}
        <Button>로그인</Button>
      </InputCon>
    </Con>
  );
}

export default Login;
