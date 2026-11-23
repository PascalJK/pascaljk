const aboutData = {
  sectionTitle: "About Me",
  description: `I am a self-taught software engineer with over 8 years of hands-on experience, driven by a deep passion for technology and innovation. My journey began with a single line of code and has grown from game development, into cross-platform mobile apps, and most recently into ERP and business-systems consulting. I currently work as a Systems & Solutions Developer at Synergy Business Solutions, building applications with Flutter and customizing Odoo deployments—including hardware and thermal-printer integrations—for SME clients. Alongside my employed work I've founded two ventures, driven by a love of building things that work and taking ownership of what I ship. For me, innovation is not just a goal—it's a way of life.`,
  profileImage: "./assets/img/profile.jpg",
  role: "Solutions Developer & Technical Consultant",
  quote: `As a software engineer and technical consultant, I thrive on solving real-world problems end-to-end—from writing the code to setting up the hardware on-site. Sharing my work with stakeholders and clients is part of my mission to bring impactful ideas to life.`,
  personalInfo: {
    birthDate: "1998-06-18",
    phone: "+264 81 720 1880",
    email: "pascal.santos@hotmail.com",
    city: "Windhoek, Namibia"
  }
};


const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
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
    const age = calculateAge(aboutData.personalInfo.birthDate);
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
