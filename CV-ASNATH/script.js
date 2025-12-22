// Mode sombre / clair


// Formulaire
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg"); 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Message envoyé avec succès ";
  form.reset();
});