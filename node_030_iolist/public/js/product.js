document.addEventListener("DOMContentLoaded", () => {
  const pro_table = document.querySelector("table.products");
  pro_table.addEventListener("click", (e) => {
    alert("클릭됨");
    const target = e.target;
    if (target.tagname === "TD") {
      const tr = target.closest("TR");
      const p_code = tr.dataset.pcode;
      document.location.replace(`/products/${p_code}/detail`);
    }
  });
});
