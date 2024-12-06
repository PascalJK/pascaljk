const portfolioItems = [
    {
        filter: "filter-app",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/plannurx-logo.png?alt=media&token=bb986330-2509-4515-bdbc-58c5d6ad0837",
        title: "PlannurX",
        subtitle: "Mobile App (Xamarin)",
        description:
            "An app for managing notes, projects, and to-do lists, with added fun: 2 games and a built-in webview feature.👀",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.lpTech.plannurx",
                icon: "bx bxl-play-store",
            },
        ],
    },
    {
        filter: "filter-app",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/whatsstatus.png?alt=media&token=09bd9b79-82de-4617-ab94-05bb15a0f8c7",
        title: "WhatsStatusApp",
        subtitle: "Mobile + Windows App (Maui)",
        description:
            "Replicates WhatsApp Status with added functionality: text with clickable URLs that open in a WebView popup.",
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
            "A fun and educational game where players avoid COVID obstacles and collect masks to earn power-ups, raising awareness during the pandemic.",
        links: [
            // {
            //     href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
            //     icon: "bx bxl-youtube",
            // },
        ],
    },
    {
        filter: "filter-game",
        img: "https://firebasestorage.googleapis.com/v0/b/iportfolio-70a2f.appspot.com/o/zigzag.png?alt=media&token=8542e43c-fbbf-4fe0-b2c6-05b50ad9d017",
        title: "ZigZag Level",
        subtitle: "Game (Unity)",
        description:
            "A challenging game where players avoid traps and keep the ball on the platform, unlocking new levels with matching colors.",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.lacsapGames.ZigZagLevel",
                icon: "bx bxl-play-store",
            },
            // {
            //     href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
            //     icon: "bx bxl-youtube",
            // },
        ],
    },
    {
        filter: "filter-game",
        img: "https://img.icons8.com/fluency/500/null/unity.png",
        title: "Argon Assault",
        subtitle: "PC Game (Unity)",
        description:
            "A space shooter where players navigate through space, follow a story, and battle enemy ships.",
        links: [
            // {
            //     href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
            //     icon: "bx bxl-youtube",
            // },
        ],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/color/500/null/xamarin.png",
        title: "JsonApp",
        subtitle: "Mobile App (Xamarin)",
        description:
            "An educational app for learning how to consume REST APIs, with local data storage and bugs to fix as part of the learning process.",
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
            "A rocket maneuvering game with five levels and cheat codes to enhance the gameplay experience.",
        links: [
            // {
            //     href: "https://www.youtube.com/watch?v=vORQBy_1vnA&ab_channel=gameranx",
            //     icon: "bx bxl-youtube",
            // },
        ],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/fluency/100/flutter.png",
        title: "Budget App",
        subtitle: "Mobile App (Flutter)",
        description:
            "A simple budgeting app that helps users track their income and expenses with ease.",
        links: [],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/fluency/100/flutter.png",
        title: "Vigilance",
        subtitle: "Mobile App (Flutter)",
        description:
            "A community safety app allowing users to report real-time safety concerns and alerts.",
        links: [],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/fluency/100/flutter.png",
        title: "AgriApp",
        subtitle: "Mobile App (Flutter)",
        description:
            "A concept app for viewing and bidding on livestock at auctions, designed for the agricultural market.",
        links: [],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/fluency/100/flutter.png",
        title: "Food Delivery",
        subtitle: "Mobile App (Flutter)",
        description:
            "A food delivery app that lets users order meals, simulate payments, and track their order history.",
        links: [],
    },
    {
        filter: "filter-app",
        img: "https://img.icons8.com/fluency/100/flutter.png",
        title: "Digital Wallet App",
        subtitle: "Mobile App (Flutter)",
        description:
            "A concept digital wallet app for managing payments, with features like fund top-up simulations.",
        links: [],
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


