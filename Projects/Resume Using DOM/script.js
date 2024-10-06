const body = document.querySelector('body');

const main = document.createElement('main');

const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'Naman Nayak - Resume';
header.appendChild(title);

const personalDetailsSection = document.createElement('section');
const personalHeading = document.createElement('h2');
personalHeading.textContent = 'Personal Details';
personalDetailsSection.appendChild(personalHeading);

const personalDetailsList = document.createElement('ul');
const email = document.createElement('li');
email.textContent = 'Email: namannayak.16@gmail.com';
const phone = document.createElement('li');
phone.textContent = 'Phone: +1234567890';
const address = document.createElement('li');
address.textContent = 'Address: 123';

personalDetailsList.appendChild(email);
personalDetailsList.appendChild(phone);
personalDetailsList.appendChild(address);
personalDetailsSection.appendChild(personalDetailsList);

const educationSection = document.createElement('section');
const educationHeading = document.createElement('h2');
educationHeading.textContent = 'Education';
educationSection.appendChild(educationHeading);

const educationList = document.createElement('ul');
const education1 = document.createElement('li');
education1.textContent = 'Bachelor of Science in Computer Science, Chitkara University';

educationList.appendChild(education1);
educationSection.appendChild(educationList);


const workExperienceSection = document.createElement('section');
const workExperienceHeading = document.createElement('h2');
workExperienceHeading.textContent = 'Work Experience';
workExperienceSection.appendChild(workExperienceHeading);

const workExperienceList = document.createElement('ul');
const job1 = document.createElement('li');
job1.textContent = 'Software Developer, Tech Solutions (2022 - Present)';
const job2 = document.createElement('li');
job2.textContent = 'Intern, Web Dev Inc. (2021 - 2022)';

workExperienceList.appendChild(job1);
workExperienceList.appendChild(job2);
workExperienceSection.appendChild(workExperienceList);

const skillsSection = document.createElement('section');
const skillsHeading = document.createElement('h2');
skillsHeading.textContent = 'Skills';
skillsSection.appendChild(skillsHeading);

const skillsList = document.createElement('ul');
const skill1 = document.createElement('li');
skill1.textContent = 'JavaScript';
const skill2 = document.createElement('li');
skill2.textContent = 'React';
const skill3 = document.createElement('li');
skill3.textContent = 'HTML & CSS';

skillsList.appendChild(skill1);
skillsList.appendChild(skill2);
skillsList.appendChild(skill3);
skillsSection.appendChild(skillsList);

main.appendChild(header);
main.appendChild(personalDetailsSection);
main.appendChild(educationSection);
main.appendChild(workExperienceSection);
main.appendChild(skillsSection);

body.appendChild(main);
