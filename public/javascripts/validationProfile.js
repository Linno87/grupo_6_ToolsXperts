const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("name").addEventListener("focus", function (e) {
    $("firstNameError").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("firstNameError").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;

      default:
        $("firstNameError").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("last_name").addEventListener("focus", function (e) {
    $("lastNameError").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("last_name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("lastNameError").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;

      default:
        $("lastNameError").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("email").addEventListener("focus", function (e) {
    $("emailError").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("emailError").innerHTML = "El correo electrónico es obligatorio";
        this.classList.add("is-invalid");
        break;

      default:
        $("emailError").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("date").addEventListener("focus", function (e) {
    $("dateError").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("date").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("dateError").innerHTML = "La fecha de nacimiento es obligatoria";
        this.classList.add("is-invalid");
        break;

      default:
        $("dateError").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("gender").addEventListener("change", function (e) {
    $("genderError").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  ["address", "city", "province"].forEach(function (field) {
    $(field).addEventListener("focus", function (e) {
      $("addressError").innerHTML = null;
      this.classList.remove("is-invalid");
      this.classList.remove("is-valid");
    });

    $(field).addEventListener("blur", function (e) {
      switch (true) {
        case !this.value.trim():
          $("addressError").innerHTML = "Este campo es obligatorio";
          this.classList.add("is-invalid");
          break;

        default:
          $("addressError").innerHTML = null;
          this.classList.add("is-valid");
          this.classList.remove("is-invalid");
          break;
      }
    });
  });

  $("floatingTextarea2").addEventListener("focus", function (e) {
    $("aboutError").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("floatingTextarea2").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("aboutError").innerHTML = "Este campo es obligatorio";
        this.classList.add("is-invalid");
        break;

      default:
        $("aboutError").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const elementsForm = this.elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 1; i++) {
      if (
        !elementsForm[i].value.trim() ||
        elementsForm[i].classList.contains("is-invalid")
      ) {
        error = true;
        elementsForm[i].classList.add("is-invalid");
        $("msgError-empty_profile").innerHTML = "El formulario tiene errores";
      }
    }

    !error && this.submit();
  });
};
