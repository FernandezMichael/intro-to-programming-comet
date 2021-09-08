let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('footer');            // footer will have 'copyright_social' section
const copyright_social = document.createElement("section"); // section will receive/parent copyright info and social media links
footer.appendChild(copyright_social);

// Copyright information
const copyright = document.createElement('div');
copyright.className = "copyright";
copyright.innerHTML = `<strong>&copy; Michael Fernandez ${thisYear}</strong>`;
copyright_social.appendChild(copyright);

// Social Media links
let social_link =["https://www.linkedin.com/", "https://github.com/FernandezMichael", 'https://slack.com/', 'https://twitter.com/', 'https://www.facebook.com/', 'https://www.tiktok.com/en/', 'https://www.instagram.com/?hl=en', 'https://www.youtube.com/', 'https://www.salesforce.com/','https://www.snapchat.com/', 'https://www.skype.com/en/'];
let fa_class = ["fa fa-linkedin", "fab fa-github", "fa fa-slack", "fa fa-twitter", "fa fa-facebook", "fab fa-tiktok", "fa fa-instagram", "fa fa-youtube", "fab fa-salesforce", "fa fa-snapchat-ghost", "fa fa-skype", "fa fa-reddit", "fa fa-rss" ];
const social_ul = document.createElement('ul');
for (let i=0; i<fa_class.length; i++ ) {
    let a = document.createElement('a');
    a.href= social_link[i] ? social_link[i] : "#";
    a.setAttribute("target", "_blank");
    let fa_i = document.createElement('i');
    fa_i.className = fa_class[i];
    fa_i.setAttribute("aria-hidden", "true");
    a.appendChild(fa_i);
    let social_li = document.createElement('li');
    social_li.appendChild(a);
    social_ul.appendChild(social_li);
}
copyright_social.appendChild(social_ul);

// Skills
let skills = ["JavaScript", "HTML", "Java", "C#", "C++", "SQL", "VBA"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Leave a Message section
document.getElementById('messages').style.display = 'none';
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
    newMessage.innerHTML = `<a class="message" href=\"mailto:${emailInput.value}\">${nameInput.value}</a>`+
        `<span class="message"> wrote: ${messageInput.value} </span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentElement;
        entry.remove();
        // optional stretch goal 1
        if (!messageList.children.length) messageSection.style.display = 'none';
    })

    // optional stretch goal 2
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.addEventListener('click', (e) => {
        const span = editButton.parentElement.querySelector('span');
        let editMsg = prompt('Please enter edited Message', span.textContent.slice(8));
        if (editMsg) span.textContent = ` wrote: ${editMsg} `;
    })

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.style.display = 'block'; // optional stretch goal 1

    // reset
    nameInput.value='';
    emailInput.value='';
    messageInput.value='';
})

// Projects (Refactored code)

fetch("https://api.github.com/users/FernandezMichael/repos")
  .then(statusCheck)
  .then(response => response.json())
  .then(manipulateRepos)  // .then(repositories => manipulateRepos(repositories))
  .catch(error => console.log('Looks like there was a problem!', error));   // Optional at Lesson 6.2

function manipulateRepos(repositories) {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
    for (let i=0; i < repositories.length; i++) {
        let project = document.createElement('li');
        let repositoryName = repositories[i]['name'];
        if (repositoryName.startsWith('intro-to-programming')) {    // CTD projects only
            let anchor = document.createElement('a');               // Optional at Lesson 6.1
            anchor.innerText = repositoryName;
            anchor.href = repositories[i]['html_url'];
            project.appendChild(anchor);
            projectList.appendChild(project);            
        }
    }
}

function statusCheck(response) {    // stack trace error helper function
    return response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
  }
