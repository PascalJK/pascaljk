const portfolioItems = [
    {
        filter: "filter-app",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/plannurx-logo.png?alt=media&token=bb986330-2509-4515-bdbc-58c5d6ad0837",
        title: "PlannurX",
        subtitle: "Mobile App (Xamarin)",
        description:
            "A simple application for saving notes, projects and a todo-list. Did I mention the 2 games and a build-in webview?👀",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.lpTech.plannurx",
                icon: "bx bxl-play-store",
            },
        ],
    },
    {
        filter: "filter-game",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/namquiz.png?alt=media&token=d37ba850-f002-46d6-9ef9-8380bb9205a4",
        title: "NamQuiz",
        subtitle: "Game (Unity)",
        description:
            "My first Unity game I developed and published on the Google Play Store for testing purposes. The game was populated with simple (hard coded) quiz questions. Users received rewards at the completion of a level. However, the user could also purchase power-ups.",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.jokiesGameDev.NamQuiz",
                icon: "bx bxl-play-store",
            },
            {
                href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
                icon: "bx bxl-youtube",
            },
        ],
    },
    {
        filter: "filter-app",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/whatsstatus.png?alt=media&token=09bd9b79-82de-4617-ab94-05bb15a0f8c7",
        title: "WhatsStatusApp",
        subtitle: "Mobile + Windows App (Maui)",
        description:
            "A replication of the WhatsApp Status. Users can add text with URLs that the application detects and opens in a WebView popup.",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.lacsapTech.whatsstatusapp",
                icon: "bx bxl-play-store",
            },
            {
                href: "https://github.com/PascalJK/WhatsStatusApp",
                icon: "bx bxl-github",
            },
        ],
    },
    {
        filter: "filter-game",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/covidrun.png?alt=media&token=63a8f2fd-3667-4704-96f4-dd820afb2ae3",
        title: "Covid Run",
        subtitle: "Game (Unity)",
        description:
            "A game similar to Subway Surfers where the player must avoid COVID obstacles and collect masks to buy power-ups. Developed during the early weeks of COVID to raise awareness while also being entertaining.",
        links: [
            {
                href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
                icon: "bx bxl-youtube",
            },
        ],
    },
    {
        filter: "filter-game",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/zigzag.png?alt=media&token=8542e43c-fbbf-4fe0-b2c6-05b50ad9d017",
        title: "ZigZag Level",
        subtitle: "Game (Unity)",
        description:
            "A game where you evade platforms with traps while trying to keep the ball from falling off. Reaching the platform that matches the starting platform's color unlocks a new level.",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.lacsapGames.ZigZagLevel",
                icon: "bx bxl-play-store",
            },
            {
                href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
                icon: "bx bxl-youtube",
            },
        ],
    },
    {
        filter: "filter-game",
        img: "https://img.icons8.com/fluency/500/null/unity.png",
        title: "Argon Assault",
        subtitle: "PC Game (Unity)",
        description:
            "A space shooter game where you fly through space, follow a timeline, and shoot enemy ships.",
        links: [
            {
                href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
                icon: "bx bxl-youtube",
            },
        ],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/color/500/null/xamarin.png",
        title: "JsonApp",
        subtitle: "Mobile App (Xamarin)",
        description:
            "A mobile application designed to teach students how to consume REST API services. The fetched data could be saved locally. The app contained bugs for students to identify and fix as part of their learning process.",
        links: [
            {
                href: "https://github.com/PascalJK/JsonApp",
                icon: "bx bxl-github",
            },
        ],
    },
    {
        filter: "filter-game",
        img: "https://img.icons8.com/fluency/500/null/unity.png",
        title: "Project Boost",
        subtitle: "PC Game (Unity)",
        description:
            "A game where you maneuver a rocket from one platform to another without crashing. Includes cheat codes and five levels of increasing difficulty.",
        links: [
            {
                href: "https://github.com/pascaljk",
                icon: "bx bxl-github",
            },
            {
                href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
                icon: "bx bxl-youtube",
            },
        ],
    },
];


const portfolioContainer = document.getElementById("portfolio-container");

portfolioItems.forEach((item) => {
    const linksHtml = item.links
        .map(
            (link) => `
        <a href="${link.href}" target="_blank" rel="noopener noreferrer">
          <i class="${link.icon}"></i>
        </a>`
        )
        .join("");

    const portfolioItemHtml = `
    <div class="col-lg-4 col-md-6 portfolio-item ${item.filter}">
      <div class="portfolio-wrap">
        <div class="portfolio-links">
          <img src="${item.img}" class="img-fluid" />
          ${linksHtml}
        </div>
        <h6 class="title">${item.title}</h6>
        <h6 class="subtitle">${item.subtitle}</h6>
        <p class="description">${item.description}</p>
      </div>
    </div>
  `;

    portfolioContainer.innerHTML += portfolioItemHtml;
});


// Function to filter portfolio items
// function filterPortfolio(filter) {
//     if (filter === "all") {
//         renderPortfolio(portfolioItems);
//     } else {
//         const filteredItems = portfolioItems.filter((item) => item.filter === filter);
//         renderPortfolio(filteredItems);
//     }
// }

// Initial render
// filterPortfolio("all");


