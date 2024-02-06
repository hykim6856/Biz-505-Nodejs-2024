document.addEventListener("DOMContentLoaded", () => {
  const pro_table = document.querySelector("table.products");
  /**
   * table. products 선택자는 상품리스트 화면에서는 유효한 선택자 이다.
   * 하지만 디테일, 인서트 등의 화면에서는 해당 선택자는 없는 상태이다.
   * 디테일, 인서트 화면 등에서는 pro_table 객체가 null 인 상태가 된다는 것이ㅏ.
   * pro_table 객체가 null인 상태일때. .add() 등의 method 를 실행하면
   * null pointer exception 이 발생하고 HTML JS 에서는 이후의 JS 코드가 모두 실행이 안된다.
   *
   * 그래서 pro_table 객체가 null일때는 다른 동작을 건너 뛰도록 해 주어야 한다.
   * 이때 사용하는 기호가 객체? 이다. 이러한 코드를 null safe 코드 라고 한다.
   */
  pro_table?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const p_code = tr.dataset.pcode;
      document.location.replace(`/products/${p_code}/detail`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn_insert = document.querySelector("#btn_insert");
  btn_insert?.addEventListener("click", () => {
    document.location.href = "/products/insert";
  });
});

const imagePreView = (event) => {
  const img_add = document.querySelector("img.img_add");
  /**
   * 여러개의 파일을 선택할 수 있다.
   * 현재는 한개의 파일만 선택하므로, 0번째 파일만 추출하여 사용한다.
   */
  const file = event.target.files[0];
  const fileReader = new FileReader();
  //파일을 읽었으면 할일 미리 지정하기 (이벤트 핸들러)
  fileReader.onload = (e) => {
    const fileURL = e.target.result;
    img_add.src = fileURL;
  };
  /**
   * 스토리지에서 파일을 읽으라는 지시
   * 지시를 받음녀 비동기로 파일 읽기
   * 파일이 모두 읽히면 온로드 이벤트 발생
   */
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
  //
  //

  div_img.addEventListener("paste", async (e) => {
    const items = e.clipboardData.items;
    const item = items[0];
    const img_add = document.querySelector("img.img_add");
    const input_image = document.querySelector("#p_image");

    if (item.type.indexof("image") === 0) {
      const blob = item.getAsfile();
      if (!blob) return false;

      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const fileURL = e.target.result;
        img_add.src = fileURL;
      };

      //복사 붙이기 한 파일을 input(타입=파일)태그에 포함하기
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(blob);
      input_image.files = dataTransfer.files;
    }
  });
});
