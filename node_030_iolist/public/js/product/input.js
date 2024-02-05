document.addEventListener("DOMContentLoaded", function () {
  const imageUpload = document.getElementById("image-upload");
  const fileUpload = document.getElementById("file-upload");

  imageUpload.addEventListener("click", function () {
    fileUpload.click();
  });
});
