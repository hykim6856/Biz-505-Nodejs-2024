document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.student.list");
  table.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "TD") {
      //   alert(target.innerText);
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      const st_num = tds[1].innerText;
      alert(st_num);
      document.location.href = `/student/${st_num}/detail`;
    }
  });
});
