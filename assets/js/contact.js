document.addEventListener("DOMContentLoaded", () => {
    const contactData = {
        title: "Contact",
        description: `If you'd like us to work together or have any queries, feel free to reach me on my contact details provided below.😉`,
        email: "pascal.santos@hotmail.com",
        phone: "+264 81720 1880",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528786.7422437554!2d16.991753705964626!3d-22.43553304395651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b5cb30c01ed%3A0xe4b84940cc445d3b!2sWindhoek!5e0!3m2!1sen!2sna!4v1733306367724!5m2!1sen!2sna"
    };

    document.getElementById("contact-title").textContent = contactData.title;
    document.getElementById("contact-description").textContent = contactData.description;
    document.getElementById("contact-email").textContent = contactData.email;
    document.getElementById("contact-phone").textContent = contactData.phone;
    document.getElementById("contact-map").src = contactData.mapUrl;

    // Click actions
    document.querySelector(".button i.bi-envelope").parentElement.addEventListener("click", () => {
        window.location.href = `mailto:${contactData.email}`;
    });

    document.querySelector(".button i.bi-phone").parentElement.addEventListener("click", () => {
        window.location.href = `tel:${contactData.phone}`;
    });
});
