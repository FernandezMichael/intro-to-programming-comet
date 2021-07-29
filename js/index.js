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

const messageForm = document.getElementById('leave_message');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name")
    console.log(nameInput.value);
    const emailInput = document.getElementById("email");
    console.log(emailInput.value);
    const messageInput = document.getElementById("message");
    console.log(messageInput.value);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=\"mailto:${emailInput.value}\">${nameInput.value}</a>`+
        `<span> wrote: ${messageInput.value} </span>`;
    console.log(newMessage.innerHTML);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentElement;
        entry.remove();
        // optional stretch goal 1
        if (!messageList.children.length) messageSection.style.display = 'none';
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.style.display = 'block'; // optional stretch goal 1

    // reset
    nameInput.value='';
    emailInput.value='';
    messageInput.value='';         
    
})