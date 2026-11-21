// The only script on the site: dark mode and the resume's print button.
// Loaded at the top of <body> so the saved theme applies before anything paints.
(function () {
  var match = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/);
  var dark = match ? match[1] === 'dark' : false;

  function apply() {
    document.body.dataset.theme = dark ? 'dark' : 'light';
    var toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  apply();

  document.addEventListener('DOMContentLoaded', function () {
    apply();

    var toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        dark = !dark;
        document.cookie = 'theme=' + (dark ? 'dark' : 'light') + '; SameSite=Strict; Path=/';
        apply();
      });
    }

    var print = document.querySelector('.download-btn');
    if (print) {
      print.addEventListener('click', function () {
        window.print();
      });
    }
  });
})();
