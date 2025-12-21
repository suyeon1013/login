import { useState } from "react";

const User = {
  email: "", //abc@naver.com
  pw: "", //abc123!!
};

const useJoinMember = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [domain, setDomain] = useState("");

  const allowValid = idValid && pwValid;

  const handleId = (e) => {
    const value = e.target.value;
    setId(value);
    //영문+숫자 조합 5~16자
    const regex = /^[a-zA-Z0-9]{5,16}$/;
    setIdValid(regex.test(value));
  };

  const handlEmail = (e) => {
    console.log("handlEmail");
    const value = e.target.value;

    setEmail(value);
  };

  const handleDomain = (e) => {
    setDomain(e.target.value);
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
    handleId,
    handlEmail,
    handlePw,
    handleDomain,
    email,
    domain,
    id,
    pw,
    idValid,
    pwValid,
    handleSubmit,
    handleKeyDown,
  };
};
export default useJoinMember;
