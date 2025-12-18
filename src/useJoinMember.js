import { useState } from "react";

const User = {
  email: "", //abc@naver.com
  pw: "", //abc123!!
};

const useJoinMember = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const allowValid = emailValid && pwValid;

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    //영문+숫자 조합 5~16자
    const regex = /^[a-zA-Z0-9]{5,16}$/;
    setEmailValid(regex.test(value));
  };

  const handlePw = (e) => {
    const value = e.target.value;
    setPw(value);
    //영문+숫자+특수문자 조합 8자 이상
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    setPwValid(regex.test(value));
  };

  const handleSubmit = () => {
    alert("회원가입이 완료되었습니다.");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && allowValid) handleSubmit();
  };

  return {
    allowValid,
    handleEmail,
    handlePw,
    email,
    pw,
    emailValid,
    pwValid,
    handleSubmit,
    handleKeyDown,
  };
};
export default useJoinMember;
