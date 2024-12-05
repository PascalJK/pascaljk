// Stats data
const stats = [
    {
        icon: "bi bi-clock-fill",
        value: 52594,
        label: "~ Hours",
        detail: "invested in my work."
    },
    {
        icon: "bi bi-briefcase-fill",
        value: 103,
        label: "Projects",
        detail: "demos, tests and other projects."
    },
    {
        icon: "bi bi-check-circle-fill",
        value: 19,
        label: "Projects Completed",
        detail: "fully functional applications."
    },
    {
        icon: "bi bi-emoji-smile-fill",
        value: 21,
        label: "Clients",
        detail: "(that I can remember)"
    }
];

// Populate stats section
const statsContainer = document.getElementById("stats-container");

stats.forEach((stat) => {
    const statItem = document.createElement("div");
    statItem.className = "col-lg-3 col-md-6";
    statItem.innerHTML = `
    <div class="stats-item">
      <i class="${stat.icon}"></i>
      <span
        data-purecounter-start="0"
        data-purecounter-end="${stat.value}"
        data-purecounter-duration="1"
        class="purecounter"
      ></span>
      <p>
        <strong>${stat.label}</strong> <span>${stat.detail}</span>
      </p>
    </div>
  `;
    statsContainer.appendChild(statItem);
});
