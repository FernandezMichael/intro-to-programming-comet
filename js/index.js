let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Michael Fernandez "+thisYear;
footer.appendChild(copyright);
let skills = ["JavaScript", "HTML", "Java", "C#", "C++", "SQL", "VBA"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
