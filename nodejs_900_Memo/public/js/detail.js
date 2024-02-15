document.addEventListener('DOMContentLoaded', () => {
const btn_delete = document.querySelector("button.delete");
btn_delete?.addEventListener("click", () => {
  if (confirm("정말 메모를 삭제할까요?")) {
    const currentUrl = window.location.href;
      const deleteUrl = currentUrl + "/delete";
      location.replace(deleteUrl);
  } else {
    return false;
  }
});
const btn_update = document.querySelector("button.edit");
btn_update?.addEventListener("click", () => {
    const currentUrl = window.location.href;
      const updateUrl = currentUrl + "/update";
      location.replace(updateUrl);

});

  })
  