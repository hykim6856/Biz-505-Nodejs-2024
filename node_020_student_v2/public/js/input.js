document.addEventListener("DOMContentLoaded", () => {
  const ST_INDEX = {
    ST_NUM: 0,
    ST_NAME: 1,
    ST_THREE: 3,
  };

  //   const st_num = document.querySelector("#st_num");
  //   const st_name = document.querySelector("#st_name");
  //   const st_dept = document.querySelector("#st_dept");
  //   const btn_submit = document.querySelector("form.student button");
  const form = document.querySelector("form.student");
  //   const st_num = form.querySelector(#st_num)
  //   const st_name = form.querySelector(#st_name)
  //   const st_dept = form.querySelector(#st_ndept)
  const btn_submit = form.querySelector("button");
  const inputs = form.querySelectorAll("input");
  const st_num = inputs[ST_INDEX.ST_NUM];
  const st_name = inputs[ST_INDEX.ST_NAME];
  const st_dept = inputs[ST_INDEX.ST_DEPT];

  const error_divs = document.querySelectorAll("#div.student.error");
  //먼저 버튼_서브밋(버튼) 의 클릭 이벤트를 최소한으로 테스트를 하고 이후에 ㅂ투_서브밋 널 포인터 익셉션을 일으키는 현상을 방지하기위하여 ?형식으로 이후코드를 사용한다.
  btn_submit?.addEventListener("click", () => {
    //표시된 에러 메세지를 모두 클리어하면,
    error_divs.forEach((item) => (item.innerHTML = ""));

    // alert("전송");
    if (!st_num.value) {
      error_divs[ST_INDEX.ST_NUM].innerHTML = "학번은 반드시 입력하세요";
      st_num.select();
      return false;
    }
    if (!st_name.value) {
      error_divs[ST_INDEX.ST_NAME].innerHTML = "학생이름은 반드시 입력해야합니다.";
      st_name.select();
      return false;
    }
    if (!st_dept.value) {
      error_divs[ST_INDEX.st_dept].innerHTML = "학과는 반드시 입력해야합니다.";
      st_dept.select();
      return false;
    }

    //유횽성
    form.submit();
  });
});
