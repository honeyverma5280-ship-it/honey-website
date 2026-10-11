/* NEXUS ESPORTS - script.js
   Used by index.html and contact.html.
   Put this file in the same folder as index.html and style.css. */

// Called by the three forms on contact.html: onsubmit="showMessage(event)"
function showMessage(event) {
  event.preventDefault(); // stop the page from reloading

  var form = event.target;
  var box = document.getElementById("messageBox");
  if (!box) return;

  // Pick a message based on the form's heading
  var section = form.closest("section");
  var heading = section ? section.querySelector("h2") : null;
  var title = heading ? heading.textContent.toUpperCase() : "";
  var text = "Thank you! Your message has been received. ⚡";

  if (title.indexOf("REGISTRATION") > -1) {
    text = "Application received! We will contact you soon. 🎮";
  } else if (title.indexOf("ENQUIRY") > -1) {
    text = "Enquiry sent! Our team will get back to you. 🎯";
  } else if (title.indexOf("FEEDBACK") > -1) {
    text = "Thanks for your feedback! 💜";
  }

  box.textContent = text;
  form.reset();
  box.scrollIntoView({ behavior: "smooth", block: "center" });

  // Hide the message after 6 seconds
  clearTimeout(box._timer);
  box._timer = setTimeout(function () {
    box.textContent = "";
  }, 6000);
}