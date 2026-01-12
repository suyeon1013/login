import { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const allowValid = emailValid && pwValid;

  // console.log(JSON.parse(localStorage.getItem("users")));

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
    //유저 정보 가져와 비교
    const stored = JSON.parse(localStorage.getItem("users") || "[]");
    const user = stored.find((u) => u.email === email);

    if (!user) {
      alert("등록되지 않은 이메일입니다.");
      return;
    }
    if (user.pw !== pw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("로그인에 성공했습니다.");
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

export default useLogin;
