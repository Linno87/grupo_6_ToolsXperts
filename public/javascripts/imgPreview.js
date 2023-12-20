document.getElementById("avatar").addEventListener("change", function (e) {
  const preview = document.getElementById("previewAvatar");
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      preview.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }
});
