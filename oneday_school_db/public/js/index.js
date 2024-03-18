document.addEventListener("DOMContentLoaded", () => {
  const codeClick = document.querySelector("table.list.student");
  codeClick?.addEventListener("click", (e) => {
    const target = e.target;
    const paTR = target.closest("TR");
    const tds = paTR.querySelectorAll("TD");
    const s_code = tds[0].innerText;
    location.replace(`/detail/${s_code}`);
  });
});
