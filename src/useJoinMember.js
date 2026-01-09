import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useJoinMember = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const allowValid = idValid && emailValid && pwValid;
  const navigate = useNavigate();

  //아이디
  const handleId = (e) => {
    const value = e.target.value;
    setId(value);
    //영문+숫자 조합 5~16자
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,16}$/; ///^[a-zA-Z0-9]{5,16}$/;
    setIdValid(regex.test(value));
  };

  const handleEmail = (e) => {
    console.log("handlEmail");
    const value = e.target.value;

    setEmail(value);
  };

  const handleDomain = (e) => {
    const value = e.target.value;
    setDomain(value);

    const regex = /[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
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

  //실제 저장
  const saveUserInfo = () => {
    const user = {
      email: `${id}@${domain}`,
      pw,
    };

    //기존 유저 불러오기 (없으면 빈 배열)
    const stored = JSON.parse(localStorage.getItem("users") || "[]");

    //중복 체크
    const exists = stored.find((u) => u.email === user.email);
    if (exists) {
      alert("이미 가입된 이메일입니다.");
      return;
    }

    stored.push(user);
    localStorage.setItem("users", JSON.stringify(stored));

    console.log(JSON.parse(localStorage.getItem("users")));
  };

  const handleSubmit = () => {
    saveUserInfo();
    alert("회원가입이 완료되었습니다.");
    //로그인 페이지 이동
    // navigate("/");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && allowValid) handleSubmit();
  };

  return {
    allowValid,
    handleId,
    handleEmail,
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
