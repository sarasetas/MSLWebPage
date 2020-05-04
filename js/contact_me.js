$(function () {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      ///////////////////////


      var form_id = "contactForm";

      var data = {
        "access_token": "k4tpb3tnwb9b4i6kl4zxxd21"
      };

      function onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
      }

      function onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
      }

      var sendButton = $("#" + form_id + " [name='send']");

      function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled', true);


        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var subject = "Email de Contacto WebSite";
        data['subject'] = subject;
        data['text'] = name + " \n " + email + " \n " + phone + " \n " + message;

        $.post('https://postmail.invotes.com/send',
          data,
          onSuccess
        ).fail(onError);

        return false;
      }

      sendButton.on('click', send);

      var $form = $("#" + form_id);
      $form.submit(function (event) {
        event.preventDefault();
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});
