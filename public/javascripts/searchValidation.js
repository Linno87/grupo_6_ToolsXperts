const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("search").addEventListener("focus", function (e) {
    $("msg-search").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("search").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-search").innerHTML = "Debes ingresar el producto a buscar...";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 3:
        $("msg-search").innerHTML = "Como minimo debes ingresar tres letras";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9]*$/.test(this.value.trim()):
        $("msg-search").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-search").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formSearch").addEventListener("submit", function (e) {
    e.preventDefault();
    let error = false;
    if(!$("search").value.trim() || $("search").classList.contains("is-invalid")){
      error = true;
    }
    !error && this.submit()

  });
};
