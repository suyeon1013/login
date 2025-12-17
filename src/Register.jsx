import React, { useInsertionEffect, userState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
            placeholder="you@example.com"
            // value={email}
            // onChange={handleEmail}
          />
        </div>
        <div className="error-m-wrap">
          {/* {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )} */}
        </div>
        <div style={{ marginTop: "26px" }} className="input-title">
          비밀번호
        </div>
        <div className="input-wrap">
          <input
            type="password"
            className="input-txt"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            // value={pw}
            // onChange={handlePw}
          />
        </div>
        <div className="error-m-wrap">
          {/* {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요. </div>
          )} */}
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="button-wrap">
        <button>가입하기</button>
      </div>
    </div>
  );
};

export default Register;
