import { Link } from "react-router-dom";
import useLogin from "./useLogin";

const Login = () => {
  const {
    allowValid,
    handleEmail,
    handlePw,
    onClickConfirmButton,
    email,
    pw,
    emailValid,
    pwValid,
  } = useLogin();

  return (
    <div className="page">
      <div className="titleWrap">
        <br />
        로그인 바부는 성욱이
      </div>
      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>
        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요. </div>
          )}
        </div>
      </div>
      <div className="buttonWrap">
        <button onClick={onClickConfirmButton} disabled={!allowValid}>
          로그인
        </button>
      </div>
      <hr shade="true" />
      <div className="registerWrap">
        <div className="registerTitle">
          계정이 없으신가요? <Link to="/register">가입하기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
