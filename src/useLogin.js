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
  console.log(">>????");

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

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.");
    }
  };

  return {
    allowValid,
    handleEmail,
    handlePw,
    onClickConfirmButton,
    email,
    pw,
    emailValid,
    pwValid,
  };
};

export default useLogin;
