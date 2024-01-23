document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("table.books tbody");
  tbody.addEventListener("click", (e) => {
    //target은 td태그
    const target = e.target;
    if (target.tagName === "TD") {
      //클릭된 부모를 선택하라
      const paTr = target.closest("TR");
      const isbn = paTr.dataset.isbn;
      //   alert(isbn);
      //   document.location.href = `/books/${isbn}/detail`
      document.location.replace(`/books/${isbn}/detail`);
    }
  });
});
