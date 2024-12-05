const resumeData = {
  title: "Resume",
  downloadText: "Download my complete resume (PDF).",
  downloadLink:
    "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/Resume%2FMyCV.pdf?alt=media&token=8fbab353-ff7d-45eb-bfa4-9c1cc9ddacc6",
  education: [
    {
      title: "Self-Learning",
      year: "2020",
      description:
        "Began self-teaching cross-platform mobile application development with C#, driven by a passion for innovation.",
    },
    {
      title: "Udemy Courses",
      year: "2018",
      description: `
        <b>-</b> Completed a beginner-to-expert course on C# programming.<br/>
        <b>-</b> Acquired foundational knowledge of game development with Unity.
      `,
    },
    {
      title: ".NET Development",
      year: "2017 - 2023",
      description:
        "Enhanced C# skills through self-learning and online courses, building applications and honing backend and frontend capabilities.",
    },
    {
      title: "HTML & CSS",
      year: "2017",
      description:
        "Learned the basics of building static websites, gaining foundational web development skills.",
    },
    {
      title: "Acacia High School",
      year: "2016 - 2017",
      description: "Successfully completed Grades 11 and 12.",
    },
    {
      title: "Jan Mohr Secondary School",
      year: "2012 - 2014",
      description: "Completed Grades 8 to 10.",
    },
  ],
  experience: [
    {
      title: "Java & Android Studio",
      year: "2017 - 2018",
      description:
        "Explored Java programming and developed several Android apps for practice. Delivered a calculator application for a student using NetBeans.",
    },
    {
      title: "Game Development",
      year: "2018 - 2021",
      description:
        "Learned 2D, 3D, and 2.5D game development using Unity for mobile and PC platforms, cultivating strong design and programming skills.",
    },
    {
      title: "Xamarin Development",
      year: "2020 - 2023",
      description: `
        Mastered cross-platform app development using Xamarin, creating applications with features such as:
        `,
      points: [
        "Local and cloud database synchronization.",
        "QR and Barcode scanning with data decoding.",
        "Integration of local and push notifications.",
        "Consumption of REST APIs for seamless connectivity.",
      ],
      additionalInfo:
        "Gained experience building apps for students and startups.",
    },
    {
      title: "App Development Course Instructor",
      year: "Nov 30 - Dec 2, 2021",
      description:
        "Conducted a 4-day course for students at Dololo covering C# and .NET basics. Led the development of a CRUD application with local data storage.",
      link: {
        icon: "bx bxl-github",
        text: "Source code available",
        subtext: "here",
        url: "https://github.com/PascalJK/CodeCave",
      },
    },
    {
      title: ".NET MAUI Development",
      year: "2022",
      description:
        "Seamlessly transitioned to .NET MAUI from Xamarin, leveraging advanced features for app development.",
    },
    {
      title: "Flutter Development",
      year: "2022 - Present",
      description:
        "Expanded into Flutter, developing over 13 mobile applications spanning e-commerce, agriculture, and community safety sectors. Specialized in creating responsive, cross-platform solutions.",
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
          href="${resumeData.downloadLink}"
          download="my_resume_pdf_file"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
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

