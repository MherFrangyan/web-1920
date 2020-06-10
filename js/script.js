/*---Bootstrap validator---*/

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');


      }, false);
    });
  }, false);
})();

/*----Validator password---*/

var validationCustom03 = document.querySelector("#validationCustom03"),
  validationCustom04 = document.querySelector("#validationCustom04"),
  needsValidation = document.querySelector("#needs-validation"),
  validationPassword = document.querySelector("#validation-password");
addEventListener("submit", function () {
  if (validationCustom03.value !== validationCustom04.value) {
    this.validationPassword.style.display = "block";
    this.validationCustom03.style.borderColor = "red";
    this.validationCustom04.style.borderColor = "red";
  }
});

/*---Modal----*/

$(document).ready(function () {
  $(".forgot_password").click(function () {
    $(".form-row, .modal_button_none").addClass("d-none");
    $(".block_forgot").removeClass("d-none");
    $(".forgot_title").removeClass("d-none");
    $("#exampleModalLabel").text("Forgot your password ?");
    $(".modal-header").addClass("mb-0");
  });

  $(".sign_up_modal").click(function () {
    $(".forgot_title").addClass("d-none");
    $(".block_forgot").addClass("d-none");
    $("#exampleModalLabel").text("Sign Up");
    $(".sign_up, .modal_button_none").removeClass("d-none");



  });
  $("#sign_up").click(function () {
    $(".sign_in").addClass("d-none");
    $(".sign_up").removeClass("d-none");
    $("#exampleModalLabel").text("Sign Up");
    $(".modal-header").addClass("mb-0");
    $(".forgot_title").addClass("d-none");
  })
  $("#sign_in").click(function () {
    $(".sign_in").removeClass("d-none");
    $(".sign_up").addClass("d-none");
    $("#exampleModalLabel").text("Sign In");
    $(".modal-header").addClass("mb-2");
    $(".form-row, .modal_button_none").removeClass("d-none");

  });

  $("#close_modal").click(function () {
    setTimeout(function () {
      $(".form-row, .modal_button_none").removeClass("d-none");
      $(".block_forgot").addClass("d-none");
      $(".sign_up").addClass("d-none");
      $(".sign_in").removeClass("d-none");
      $("#exampleModalLabel").text("Sign In");
      $(".forgot_title").addClass("d-none");


    }, 900)
  });


  /*----Carusel----*/

  $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.pagination').html(carousel.relative(carousel.current()) + 1 + ' /' + '<span>' + carousel.items().length + '</span>')
  }).owlCarousel({
    items: 1,
    center: true,
    stagePadding: 50,
    autoWidth: true,
    nav: true,
    margin: 80,
    loop: true,
    responsive: {
      480: {
        stagePadding: 0,
      },
      576: {
        stagePadding: 0,
      },
      767: {
        stagePadding: 0,
      },
      992: {

      }
    }
  });
});