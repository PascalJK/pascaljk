const skills = [
    { name: "C#", value: 63 },
    { name: "Xamarin", value: 69 },
    { name: ".Net Maui", value: 62 },
    { name: "Html & Css", value: 47 },
    { name: "Firebase Cloud Services", value: 67 },
    { name: "Game Development (Unity)", value: 68 },
    { name: "Flutter & Dart", value: 83 },
    { name: "Problem Solving & Logical Thinking", value: 82 },
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
