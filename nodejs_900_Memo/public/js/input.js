const imagePreView = (event) => {
  const img_add = document.querySelector("img.img_add");
  // input(type=file) 은 여러개의 파일을 선택(담기)할수 있다
  // 현재는 한개의 파일만 선택하므로
  // 0 번째 파일만 추출하여 사용한다
  const file = event.target.files[0];

  const fileReader = new FileReader();
  // 파일을 읽었으면 할일 미리 지정하기(event handler)
  fileReader.onload = (e) => {
    const fileURL = e.target.result;
    img_add.src = fileURL;
  };
  // storage 에서 파일을 읽어라 라는 지시
  // 지시를 받고 비동기적으로 파일을 읽기 시작
  // 파일이 모두 읽혀 지면 onload 이벤트를 발생시킨다
  fileReader.readAsDataURL(file);
};

document.addEventListener("DOMContentLoaded", () => {
  const img_add = document.querySelector("img.img_add");
  const input_img = document.querySelector("#p_image");
  const div_img = document.querySelector("div.img_box");
  const input_focus = document.querySelector("#img_focus");
  img_add?.addEventListener("click", () => {
    input_img.click();
  });
  input_img?.addEventListener("change", imagePreView);
  div_img?.addEventListener("click", () => {
    input_focus.focus();
  });

  pro_table?.addEventListener("change", imagePreView);
  div_img?.addEventListener("click", () => {
    input_focus.focus();
  });
});
