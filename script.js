const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu').querySelector('ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
      menuToggle.innerHTML = '&times;'; 
    } else {
      menuToggle.innerHTML = '&#9776;'; 
    }
  });
const form = document.getElementById("contact");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.table(firstName, lastName, email, message);
    alert(`Thank you ${firstName}! Your message has been submitted`);
    // form.reset() is not working
    form.reset();
})