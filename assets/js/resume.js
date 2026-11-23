const resumeData = {
  title: "Resume",
  education: [
    {
      title: "Self-Learning",
      year: "2020",
      description:
        "",
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
    {
      title: "Freelance Developer & Consultant",
      year: "2023 - Present",
      description:
        "Took on independent development and consulting projects alongside my other commitments.",
    },
    {
      title: "Founder — MarketerZ Hub",
      year: "2023 - Present",
      description:
        "Launched a venture aimed at helping businesses connect, trade, and grow.",
    },
    {
      title: "Odoo Internship — Synergy Business Solutions",
      year: "2025",
      description:
        "Completed a structured internship covering Odoo onboarding, Python development, and client support — leading directly to a full-time offer.",
    },
    {
      title: "Systems & Solutions Developer — Synergy Business Solutions",
      year: "2025 - Present",
      description: `
        Customizing and extending client Odoo deployments and integrating POS hardware for SME clients, with work including:
        `,
      points: [
        "Built a .NET EDI solution that ingests purchase orders from major retail chains (Shoprite, Metro, Woermann Brock) — retrieved from their trading portals or posted directly to our server — and validates each order through a multi-step algorithm before creating it as a sales order in Odoo.",
        "Odoo Studio customization — report templates, custom fields, scheduled & server actions.",
        "Thermal label and receipt printer integration (Bixolon, Argox, Urovo) with Odoo POS & Inventory.",
        "CustomPOS — a Flutter Android app bridging Odoo POS data to native printer SDKs via a local HTTPS server and JSON-RPC.",
        "Standalone Flutter apps that live outside Odoo but integrate with it via its APIs, delivering custom analytics and reporting beyond Odoo's native capabilities.",
      ],
      additionalInfo:
        "Supporting multiple clients end-to-end, from on-site hardware setup to remote troubleshooting.",
    },
    {
      title: "Founder — Save the Chat",
      year: "2026 - Present",
      description:
        "Built and deployed a lead-generation platform that turns saved Zoom chat text into structured contacts, helping users follow up on connections made during calls. Built with Next.js (web app) and Flutter (mobile and macOS apps).",
    },
  ],
};



document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("resume-container");

    // Order entries newest -> oldest (present day back to the start).
    const yearKey = (s) => {
        const nums = (String(s).match(/\d{4}/g) || []).map(Number);
        const start = nums.length ? Math.min(...nums) : 0;
        let end = nums.length ? Math.max(...nums) : 0;
        if (/present/i.test(s)) end = 9999;
        return { start, end };
    };
    const byRecent = (a, b) => {
        const ka = yearKey(a.year), kb = yearKey(b.year);
        return (kb.start - ka.start) || (kb.end - ka.end);
    };

    const sectionTitle = `
    <div class="section-title" data-aos="fade-up">
      <span class="section-eyebrow">My journey</span>
      <h2>${resumeData.title}</h2>
      <p>From my present day back to my "Hello World" days — scroll each track to explore.</p>
    </div>
  `;

    // A single timeline card
    const itemHTML = (exp) => `
      <div class="resume-item">
        <h5>${exp.year}</h5>
        <h4>${exp.title}</h4>
        ${exp.description && exp.description.trim() ? `<p>${exp.description}</p>` : ""}
        ${exp.points
                ? `<ul>${exp.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
                : ""
            }
        ${exp.additionalInfo ? `<p>${exp.additionalInfo}</p>` : ""}
        ${exp.link
                ? `<ul class="resume-link"><li>${exp.link.text}
                <a href="${exp.link.url}" target="_blank" rel="noopener noreferrer">${exp.link.subtext}</a><i class="${exp.link.icon}"></i>
             </li></ul>`
                : ""
            }
      </div>
    `;

    // A horizontal timeline track (Education / Experience)
    const block = (title, icon, list) => `
    <div class="resume-block" data-aos="fade-up">
      <div class="resume-block-head">
        <h3 class="resume-title"><i class="${icon}"></i> ${title}</h3>
        <div class="track-nav">
          <button class="track-btn" data-dir="-1" aria-label="Scroll ${title} left">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button class="track-btn" data-dir="1" aria-label="Scroll ${title} right">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="resume-track">
        ${list.slice().sort(byRecent).map(itemHTML).join("")}
      </div>
    </div>
  `;

    container.innerHTML = `
    ${sectionTitle}
    ${block("Education", "bi bi-mortarboard-fill", resumeData.education)}
    ${block("Experience", "bi bi-briefcase-fill", resumeData.experience)}
  `;

    // Wire the horizontal scroll arrows + enable/disable at the ends
    container.querySelectorAll(".resume-block").forEach((blk) => {
        const track = blk.querySelector(".resume-track");
        const btns = blk.querySelectorAll(".track-btn");

        const updateBtns = () => {
            const maxScroll = track.scrollWidth - track.clientWidth - 2;
            btns[0].classList.toggle("is-disabled", track.scrollLeft <= 2);
            btns[1].classList.toggle("is-disabled", track.scrollLeft >= maxScroll);
        };

        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const dir = parseInt(btn.getAttribute("data-dir"), 10);
                const step = Math.min(track.clientWidth * 0.85, 360);
                track.scrollBy({ left: dir * step, behavior: "smooth" });
            });
        });

        track.addEventListener("scroll", updateBtns, { passive: true });
        window.addEventListener("load", updateBtns);
        updateBtns();
    });
});

