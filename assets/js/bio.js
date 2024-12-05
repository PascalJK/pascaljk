const aboutData = {
  sectionTitle: "About Me",
  description: `I am a self-taught software developer with over 5 years of experience, driven by a deep passion for technology and innovation. My journey began with a single line of code, sparking an insatiable curiosity that has guided me through a fulfilling career. I've had the privilege of working on diverse projects, from mobile applications to hybrid platforms that bridge e-commerce and business spaces. For me, innovation is not just a goal—it's a way of life. I aim to craft solutions that address real-world challenges, shaping a digital future where technology meets meaningful impact.`,
  profileImage: "./assets/img/profile.jpg",
  role: "Innovator & Developer",
  quote: `As a software engineer passionate about my craft, I thrive on creating innovative prototypes and solutions that address real-world challenges. Sharing my work with stakeholders and investors is part of my mission to bring impactful ideas to life.`,
  personalInfo: {
    birthYear: 1998,
    phone: "+264 81 720 1880",
    email: "pascal.santos@hotmail.com",
    city: "Windhoek, Namibia"
  }
};


const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};


document.addEventListener("DOMContentLoaded", () => {
    const aboutContainer = document.getElementById("about-container");

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    sectionTitle.innerHTML = `
    <h2>${aboutData.sectionTitle}</h2>
    <p>${aboutData.description}</p>
  `;

    const row = document.createElement("div");
    row.className = "row";

    const imageCol = document.createElement("div");
    imageCol.className = "col-lg-4";
    imageCol.setAttribute("data-aos", "fade-right");
    imageCol.innerHTML = `<img src="${aboutData.profileImage}" class="img-fluid" alt="Profile Image" />`;

    const contentCol = document.createElement("div");
    contentCol.className = "col-lg-8 pt-4 pt-lg-0 content";
    contentCol.setAttribute("data-aos", "fade-left");
    const age = calculateAge(aboutData.personalInfo.birthYear);
    contentCol.innerHTML = `
    <h3>${aboutData.role}</h3>
    <p class="fst-italic">${aboutData.quote}</p>
    <div class="row">
      <div class="col-lg-6">
        <ul>
          <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>${age}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>${aboutData.personalInfo.phone}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>${aboutData.personalInfo.email}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>${aboutData.personalInfo.city}</span></li>
        </ul>
      </div>
    </div>
  `;

    row.appendChild(imageCol);
    row.appendChild(contentCol);

    aboutContainer.appendChild(sectionTitle);
    aboutContainer.appendChild(row);
});
