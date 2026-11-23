const skills = [
    { name: "Flutter & Dart", value: 85 },
    { name: "Odoo / ERP (Studio, Views, Scheduled Actions)", value: 72 },
    { name: "EDI & B2B Order Integration (.NET)", value: 74 },
    { name: "C#", value: 68 },
    { name: ".NET MAUI", value: 64 },
    { name: "Xamarin", value: 70 },
    { name: "POS & Hardware Integration (Thermal Printers, ZPL)", value: 70 },
    { name: "REST & JSON-RPC API Integration", value: 75 },
    { name: "Python", value: 58 },
    { name: "Firebase Cloud Services", value: 68 },
    { name: "Game Development (Unity)", value: 68 },
    { name: "Html & Css", value: 48 },
    { name: "Problem Solving & Logical Thinking", value: 83 },
];

const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
const rightSkills = skills.slice(Math.ceil(skills.length / 2));

const createSkillHTML = (skill) => `
  <div class="progress">
    <span class="skill">${skill.name} <i class="val">${skill.value}%</i></span>
    <div class="progress-bar-wrap">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="${skill.value}"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: ${skill.value}%"
      ></div>
    </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const leftCol = document.querySelector("#skills .skills-content .col-lg-6:first-child");
    const rightCol = document.querySelector("#skills .skills-content .col-lg-6:last-child");

    leftCol.innerHTML = leftSkills.map(createSkillHTML).join("");
    rightCol.innerHTML = rightSkills.map(createSkillHTML).join("");
});
