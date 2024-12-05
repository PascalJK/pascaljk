const resumeData = {
    title: "Resume",
    downloadText: "Click here to download a copy of my resume (PDF).😉",
    downloadLink:
        "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/Resume%2FMyCV.pdf?alt=media&token=8fbab353-ff7d-45eb-bfa4-9c1cc9ddacc6",
    education: [
        {
            title: "Online",
            year: "2020",
            description:
                "Started teaching myself how to develop cross-platform mobile applications using C#.",
        },
        {
            title: "Udemy",
            year: "2018",
            description: `
        <b>-</b> Took a beginner to expert course on C# programming.<br/>
        <b>-</b> Took a beginners course on developing games with Unity.
      `,
        },
        {
            title: "Acacia H.S",
            year: "2016 - 2017",
            description: "Completed my Grade 11 & 12.",
        },
        {
            title: "Jan Mohr S.S",
            year: "2012 - 2014",
            description: "Studied my grade 8-10.",
        },
    ],
    experience: [
        {
            title: ".Net Development",
            year: "2017 - 2023",
            description:
                "From 2017 I started teaching myself how to write code by watching online videos and reading online blogs, I've also taken an online course to help me hone my C# skills.",
        },
        {
            title: "Game Development",
            year: "2018 - 2021",
            description:
                "From 2018 I started learning how to develop games using Unity. During this time, I learned how to develop 2D, 3D, and 2.5D games for mobile and PC platforms.",
        },
        {
            title: "Xamarin Development",
            year: "2020 - 2023",
            description:
                "From 2020 I started learning how to develop cross-platform mobile applications using Xamarin. During this time, I’ve learned how to develop apps that can:",
            points: [
                "Save data on a local database whilst also able to sync data to a cloud database.",
                "QR and Barcode scanning and also being able to decode data on a QR image uploaded.",
                "Receive local and push notifications.",
                "Consume RestAPI’s in applications.",
            ],
            additionalInfo:
                "With the experience gained so far, I have developed apps for students and Startups.",
        },
        {
            title: "App Development Course",
            year: "30 Nov 2021 - 2 Dec 2021",
            description:
                "I gave a 4-day course to students at Dololo where the basics of C# and .Net was covered and practical work was done using console apps. Eventually, we developed an application that could perform CRUD operations and save data locally.",
            link: {
                icon: "bx bxl-github",
                text: "Project source-code can be found",
                subtext: "here",
                url: "https://github.com/PascalJK/CodeCave",
            },
        },
        {
            title: "Maui Development",
            year: "2022 - 2022",
            description:
                "Started building apps using .NET Maui. Transitioning to Maui was seamless since it was an upgrade from Xamarin.",
        },
        {
            title: "Flutter Development",
            year: "2022 - Present",
            description:
                "Transitioned into building web and mobile applications using Flutter. During this time, I have created 13 mobile applications related to various sectors from e-commerce, agri to community safety.",
        },
    ],
};


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("resume-container");

    // Create the section title
    const sectionTitle = `
    <div class="section-title">
      <h2>${resumeData.title}</h2>
      <p>
        Click
        <a
          href="${resumeData.downloadLink.url}"
          download="my_resume_pdf_file"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${resumeData.downloadLink.text}
        </a>
        to download a copy of my resume (PDF).😉
      </p>
    </div>
  `;

    // Create the experiences section
    const pList = (list) => list
        .map(
            (exp) => `
      <div class="resume-item">
        <h4>${exp.title}</h4>
        <h5>${exp.year}</h5>
        <p>${exp.description}</p>
        ${exp.points
                    ? `<ul>${exp.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
                    : ""
                }
        ${exp.additionalInfo ? `<p>${exp.additionalInfo}</p>` : ""}
        ${exp.link
                    ? `<ul><li>${exp.link.text}
                  <a href="${exp.link.url}" target="_blank" rel="noopener noreferrer">${exp.link.subtext}</a><i class="${exp.link.icon}"></i>
               </li></ul>`
                    : ""
                }
      </div>
    `
        )
        .join("");

    // Add everything to the container
    container.innerHTML = `
    ${sectionTitle}
    <div class="row">
      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 class="resume-title">Education</h3>
        ${pList(resumeData.education)}
      </div>
      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 class="resume-title">Experience</h3>
        ${pList(resumeData.experience)}
      </div>
    </div>
  `;
});

