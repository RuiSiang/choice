document.addEventListener('DOMContentLoaded', function () {
  var choices = document.querySelectorAll('.choice');

  choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
          // Remove 'active' class from all choices
          choices.forEach(function(c) { c.classList.remove('active'); c.style.backgroundColor = 'lightgray'; });

          // Add 'active' class to clicked choice
          this.classList.add('active');
          this.style.backgroundColor = this.getAttribute('data-color');
      });
  });
});
