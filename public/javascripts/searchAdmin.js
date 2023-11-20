const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("adminSearch").addEventListener("focus", function (e) {
    $("msg-AdminSearch").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("adminSearch").addEventListener("blur", function (e) {
    switch (true) {
      
      case !/^[a-zA-Z0-9]*$/.test(this.value.trim()):
        $("msg-AdminSearch").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-AdminSearch").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formAdminSearch").addEventListener("submit", function (e) {
    e.preventDefault();
    let error = false;
    if($("adminSearch").classList.contains("is-invalid")){
      error = true;
    }
    !error && this.submit()

  });
};