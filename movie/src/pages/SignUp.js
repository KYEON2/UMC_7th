import React from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { validateSignUp } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  margin: 5px 0px;
  border-radius: 7px;
  border: ${props => props.error ? '2px solid red' : '1px solid #ccc'};
`;

const Button = styled.button`
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  background-color: #FA0049;
  border-radius: 7px;
  margin: 5px 0px;
  border: 0px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

function Signup() {
  const signup = useForm({
    initialValue: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate: (values) => {
      const errors = validateSignUp(values);
      return errors;
    }
  });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (Object.keys(signup.errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/auth/register", {
          email: signup.values.email,
          password: signup.values.password,
          passwordCheck: signup.values.confirmPassword
        });
  
        if (response.status === 200 || response.status === 201) {
          alert("회원가입 성공!");
          navigate("/login");
        }
      } catch (error) {
        if (error.response) {
          alert(`회원가입 실패: ${error.response.data.message}`);
        } else {
          alert("회원가입 중 오류가 발생했습니다.");
          console.error(error);
        }
      }
    }
  };
  

  return (
    <Con>
      회원가입
      <InputCon>
        <Input
          error={signup.touched.name && signup.errors.name}
          type="text"
          {...signup.getTextInputProps("name")}
          placeholder="이름을 입력하세요"
        />
        {signup.touched.name && signup.errors.name && (<ErrorText>{signup.errors.name}</ErrorText>)}
        <Input
          error={signup.touched.email && signup.errors.email}
          type="email"
          {...signup.getTextInputProps("email")}
          placeholder="이메일을 입력하세요"
        />
        {signup.touched.email && signup.errors.email && (<ErrorText>{signup.errors.email}</ErrorText>)}
        <Input
          error={signup.touched.password && signup.errors.password}
          type="password"
          {...signup.getTextInputProps("password")}
          placeholder="비밀번호를 입력하세요"
        />
        {signup.touched.password && signup.errors.password && (<ErrorText>{signup.errors.password}</ErrorText>)}
        <Input
          error={signup.touched.confirmPassword && signup.errors.confirmPassword}
          type="password"
          {...signup.getTextInputProps("confirmPassword")}
          placeholder="비밀번호 확인"
        />
        {signup.touched.confirmPassword && signup.errors.confirmPassword && (<ErrorText>{signup.errors.confirmPassword}</ErrorText>)}
        <Button onClick={handleSubmit}>회원가입</Button>
      </InputCon>
    </Con>
  );
}

export default Signup;
