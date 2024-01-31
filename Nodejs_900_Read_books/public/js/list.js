document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.book.list");
  table?.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "TD") {
      // 클릭된 target(TD)을 감싸고 있는 가장 가까운 부모
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      const isbn = tds[1].innerText;
      document.location.href = `/bookList/${isbn}/detail`;
    }
  });
});