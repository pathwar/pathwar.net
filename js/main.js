$(function() {

// MAILCHIMP AJAX FORM
    $('#mc-embedded-subscribe-form').ajaxChimp({
        callback: function(resp) {
                ga('send', 'send', 'newsletter', 'Sign up', 'We Are All We Need');
                if (resp.result === 'success') {
                    $('.form-elements').hide();
                    $('.form-response').html('Thank you for signing up.<br>We have sent you a confirmation email').show();
        }
            }
    });
});

$(document).ready(function() {
    $("#mainHeader").lettering();
  });
