document.addEventListener("DOMContentLoaded", () => {
  const item_table = document.querySelector("table.iolist");
  item_table.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const seq = target.closest("TR").dataset.seq;
      alert(seq);
    }
  });
});
