document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.memolist");
  const btn_submit = document.querySelector("button.save");
  const form = document.querySelector("form.memoform");


  table.addEventListener("click", (e) => {
    const target = e.target;
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      const m_seq = tds[2].innerText;
    //   alert(m_seq);
      location.replace(`/memo/${m_seq}/detail`);
    
  });
  btn_submit?.addEventListener("click", () => {
    const author = document.querySelector("input.author");
    const content = document.querySelector("input.content");
    if (!author.value) {
      alert("제목 혹은 작성자 이메일을 입력해주세요");
      author.select();
      return false;
    }
    if (!content.value) {
      alert("내용을 입력해주세요");
      content.select();
      return false;
    }
    form.submit();


});
});