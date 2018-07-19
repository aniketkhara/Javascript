var $form = $("form"),
  $successMsg = $(".alert");

$.validator.addMethod("checkletters", function(value, element) {
 return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);

$.validator.addMethod("Regex", function(value, element, param) {
    return value.match(new RegExp("^" + param + "$"));
}, "Please enter a valid number");

});
$form.validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
      checkletters: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      maxlength: 10,
      minlength:10,
      phone: true,
    },
    dob: {
      required: true,
      date :true,
    },
    marks: {
      required: true,
      minlength: 8,
      maxlength: 11,
      Regex:"[0-9,]+",
      marks: true,
    }
  },
  messages: {
    name: "Please specify your name (only letters and spaces are allowed)",
    email: "Please specify a valid email address",
    phone: "Please enter a valid phone no",
      dob: "Please enter a valid birthdate",
    marks: "Please enter valid marks",
  },
  submitHandler: function() {
    $successMsg.show();
  }
});