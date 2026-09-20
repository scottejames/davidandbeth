document.getElementById('notify-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var email = document.getElementById('email').value.trim();
  var hint = document.getElementById('notify-hint');

  if (!email) return;

  var subject = encodeURIComponent('Notify me — David & Beth');
  var body = encodeURIComponent('Please let me know when there are updates to the wedding site.\n\nMy email: ' + email);

  window.location.href = 'mailto:scottejames@gmail.com?subject=' + subject + '&body=' + body;

  hint.hidden = false;
  hint.textContent = 'Opening your email app to confirm — thank you.';
});
