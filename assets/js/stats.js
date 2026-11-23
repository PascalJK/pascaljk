// Stats data
const stats = [
    {
        icon: "bi bi-clock-fill",
        value: 61000,
        label: "~ Hours",
        detail: "invested in my work."
    },
    {
        icon: "bi bi-briefcase-fill",
        value: 118,
        label: "Projects",
        detail: "demos, tests and other projects."
    },
    {
        icon: "bi bi-check-circle-fill",
        value: 24,
        label: "Projects Completed",
        detail: "fully functional applications."
    },
    {
        icon: "bi bi-emoji-smile-fill",
        value: 28,
        label: "Clients",
        detail: "and SMEs I've worked or partnered with."
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
