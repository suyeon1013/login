import useJoinMember from "./useJoinMember";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    allowValid,
    handleId,
    handleEmail,
    handlePw,
    handleDomain,
    domain,
    email,
    id,
    pw,
    idValid,
    emailValid,
    pwValid,
    handleSubmit,
    handleKeyDown,
  } = useJoinMember();
  return (
    <div className="login-page">
      <div className="title-wrap">
        <br />

        <h2>회원가입</h2>
      </div>
      <div className="content-wrap" role="form">
        <div className="input-title">이메일 주소</div>
        <div className="input-wrap">
          <input
            type="text"
            className="input-txt"
            // placeholder="영문, 숫자 포함 5~16자"
            value={id}
            onChange={handleId}
            onKeyDown={handleKeyDown}
          />
          @
          <input
            type="email"
            className="input-txt"
            value={domain}
            onChange={handleDomain}
          />
          <select value={domain} onChange={handleDomain}>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="daum.net">daum.net</option>
            <option value="">직접입력</option>
          </select>
        </div>
        <div className="error-m-wrap">
          {!idValid && id.length > 0 && (
            <div>영문, 숫자 포함 5~16자 입력해주세요. </div>
          )}
        </div>
        <div style={{ marginTop: "26px" }} className="input-title">
          비밀번호
        </div>
        <div className="input-wrap">
          <input
            type="password"
            className="input-txt"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="error-m-wrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요. </div>
          )}
        </div>
      </div>
      <div className="button-wrap">
        <button onClick={handleSubmit} disabled={!allowValid}>
          가입하기
        </button>
      </div>
      <br />
    </div>
  );
};

export default Register;
