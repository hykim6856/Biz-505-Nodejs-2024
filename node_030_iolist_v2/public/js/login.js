document.addEventListener("DOMContentLoaded", () => {
  const login_form = document.querySelector("form.login");
  const input_userename = login_form.querySelector("input.userid");
  const input_password = login_form.querySelector("input.password");
  const btn_login = login_form.querySelector("input.btn_login");

  btn_login.addEventListener("click", () => {
    if (!input_userename.value) {
      alert("사용자 id는 반드시 입력해야합니다");
      input_userename.select();
      return false;
    }
    if (!input_password.value) {
      alert("비밀번호는 반드시 입력해야합니다");
      input_password.select();
      return false;
    }
    login_form.submit();
  });
});
