/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      'service_c78upsy',
      'template_of239v4',
      '#contact-form',
      'M3nsEd67A7IrnRtZ-'
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
