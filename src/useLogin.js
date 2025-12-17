import { useState } from "react";

const User = {
  email: "abc@naver.com",
  pw: "abc123!!",
};

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const allowValid = emailValid && pwValid;

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    setEmailValid(regex.test(value));
  };

  const handlePw = (e) => {
    const value = e.target.value;
    setPw(value);

    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    setPwValid(regex.test(value));
  };

  const handleSubmit = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
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

export default useLogin;
