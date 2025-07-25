// Toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll highlight and sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky header
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close navbar when link is clicked
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
function sendEmail() {
  emailjs.send("service_id", "template_id", {
    from_name: document.querySelector("input[name='name']").value,
    from_email: document.querySelector("input[name='email']").value,
    message: document.querySelector("textarea[name='message']").value
  }, "YOUR_PUBLIC_KEY")
  .then(function(response) {
     alert("Message sent successfully!");
  }, function(error) {
     alert("Failed to send message.");
  });
}
