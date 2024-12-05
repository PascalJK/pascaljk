const aboutData = {
    sectionTitle: "About Me",
    description: `A self-taught software developer with over 5 years of experience,
                I have always been driven by an insatiable curiosity and a
                deep-seated passion for technology. My journey in the tech
                industry began with a single line of code and has since evolved
                into a fulfilling career where I've had the opportunity to work on
                a diverse range of projects. Innovation is at the heart of
                everything I do. I'm constantly looking for ways to improve, to
                grow, and to make a real impact in the tech industry. I'm not just
                writing code, I'm creating the digital future.`,
    profileImage: "./assets/img/profile.jpg",
    role: "Innovator",
    quote: `As a software engineer that's passionate about my work, I enjoy
          spending my time developing prototypes that I believe could
          solve real-world problems then presenting my work to interested
          parties/investors.`,
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
