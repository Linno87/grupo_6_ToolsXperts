const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("first_name").addEventListener("focus", function (e) {
    $("msgError-first_name").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("first_name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-first_name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-first_name").innerHTML = "Minimo dos letras";
        this.classList.add("is-invalid");
        break;
      case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
        $("msgError-first_name").innerHTML = "Solo se permite letras";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-first_name").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("last_name").addEventListener("focus", function (e) {
    $("msgError-last_name").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("last_name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-last_name").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-last_name").innerHTML = "Minimo dos letras";
        this.classList.add("is-invalid");
        break;
      case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
        $("msgError-last_name").innerHTML = "Solo se permite letras";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-last_name").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("email").addEventListener("focus", function (e) {
    $("msgError-email").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-email").innerHTML = "El email es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
        $("msgError-email").innerHTML = "El formato es inválido";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-email").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("email").addEventListener("change", async function (e) {
    try {
      const response = await fetch(
        `/apis/check-email?email=${this.value.trim()}`
      );
      const result = await response.json();

      if (result.data) {
        $("msgError-email").innerHTML = "El email ya esta registrado";
        this.classList.add("is-invalid");
      }
    } catch (error) {
      console.log(error);
    }
  });

  $("password").addEventListener("focus", function (e) {
    $("msgError-password").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("password").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-password").innerHTML = "la contraseña es obligatoria";
        this.classList.add("is-invalid");
        break;
      case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(this.value.trim()):
        $("msgError-password").innerHTML =
          "Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-password").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("viewPassword").addEventListener("click", function (e) {
    $("msgError-password").innerHTML = null;
    $("password").classList.remove("is-invalid");
    $("password").classList.remove("is-valid");

    $("password").type = $("password").type === "text" ? "password" : "text";

    this.classList.toggle("fa");
    this.classList.toggle("fa-eye");

    this.classList.toggle("fa-solid");
    this.classList.toggle("fa-eye-slash");
  });

  $("password_confirmation").addEventListener("focus", function (e) {
    $("msgError-password_confirmation").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("password_confirmation").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-password_confirmation").innerHTML =
          "la contraseña es obligatoria";
        this.classList.add("is-invalid");
        break;
      case this.value.trim() !== $("password").value.trim():
        $("msgError-password_confirmation").innerHTML =
          "Las contraseñas no coinciden";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-password_confirmation").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("viewPassword2").addEventListener("click", function (e) {
    $("msgError-password").innerHTML = null;
    $("password_confirmation").classList.remove("is-invalid");
    $("password_confirmation").classList.remove("is-valid");

    $("password_confirmation").type =
      $("password_confirmation").type === "text" ? "password" : "text";

    this.classList.toggle("fa");
    this.classList.toggle("fa-eye");

    this.classList.toggle("fa-solid");
    this.classList.toggle("fa-eye-slash");
  });

  $("date").addEventListener("focus", function (e) {
    $("msgError-date").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  
  $("date").addEventListener("blur", function (e) {
    const birthDate = new Date(this.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    switch (true) {
      case !this.value.trim():
        $("msgError-date").innerHTML = "La fecha de nacimiento es obligatoria";
        this.classList.add("is-invalid");
        break;
      case age < 18:
        $("msgError-date").innerHTML = "Debes tener al menos 18 años";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-date").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("gender").addEventListener("focus", function (e) {
    $("msgError-gender").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  
  $("gender").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-gender").innerHTML = "El género es obligatorio";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-gender").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formRegister").addEventListener("submit", function (event) {
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
        $("msgError-empty").innerHTML = "El formulario tiene errores";
      }
    }

    !error && this.submit()
  });
  
};
