'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Change the 'Blog' button text to 'Skills'
navigationLinks[3].innerText = 'Skills';  // 3rd index is 'Blog' button

// Update the page navigation
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}


// Chat bot 
const chatContent = document.getElementById('chat-content');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


document.getElementById("send-btn").addEventListener("click", function() {
const userInput = document.getElementById("user-input").value;
if (userInput) {
// Create a new user message element
const userMessage = document.createElement("div");
userMessage.classList.add("chat-message", "user-message");

// Add the user icon
const userIcon = document.createElement("img");
userIcon.src = "./assets/images/icons8-user-100.png"; // Replace with the user logo URL
userIcon.alt = "User Logo";
userIcon.classList.add("message-icon");

// Add the message text
const messageText = document.createElement("p");
messageText.textContent = userInput;

userMessage.appendChild(userIcon);
userMessage.appendChild(messageText);

// Append the user message to chat content
document.getElementById("chat-content").appendChild(userMessage);

// Clear the input field
document.getElementById("user-input").value = "";

// Scroll to the bottom to show the new message
scrollToBottom();
}
});

// Function to automatically scroll to the bottom of the chat content
function scrollToBottom() {
const chatContent = document.getElementById("chat-content");
chatContent.scrollTop = chatContent.scrollHeight;
}

// Send message when Enter key is pressed
userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

// Send message when send button is clicked
sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const userText = userInput.value.trim();

  if (userText) {
    // Create user message with user logo
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.innerHTML = `
      <img src="./assets/images/icons8-user-100.png" alt="User Logo" class="message-icon">
      <p>${userText}</p>
    `;
    chatContent.appendChild(userMessage);

    getBotResponse(userText.toLowerCase());
    userInput.value = '';
    chatContent.scrollTop = chatContent.scrollHeight;
  }
}

function getBotResponse(input) {
let response = '';

if (input.includes('experience') || input.includes('projects')) {
response = `I have hands-on experience in Python and Django, with projects like a job search app, portfolio website, and uniform detection system. Would you like more details on any specific project?`;
} else if (input.includes('why should we hire you') ||  input.includes('why should i hire you')) {
response = `With 1 year of focused experience, I bring strong problem-solving skills, a continuous learning mindset, and am motivated to innovate and enhance efficiency.`;
} else if (input.includes('notice period') || input.includes('availability')) {
response = `I'm available to join immediately, with no notice period required.`;
} else if (input.includes('contact') || input.includes('email') || input.includes('connect')) {
response = `You can reach me at aswin21092002@gmail.com or connect on LinkedIn: linkedin.com/in/aswin-n.`;
} else if (input.includes('hi') || input.includes('hai') || input.includes('hello')) {
response = `Hello! Hope you’re doing well! How can I assist you with my skills or projects today?`;
} else if (input.includes('thank you')) {
response = `You're very welcome! Thank you, and I'm looking forward to a positive response from your side. I’d be thrilled to share my experiences in a face-to-face session! Please feel free to reach out anytime at aswin21092002@gmail.com or call me at 6381517031. Have a great day!`;
} else if (input.includes('tell me about yourself')) {
response = `I'm Aswin N, a Software Engineer with expertise in Python and Django, and a passion for developing efficient solutions. I have hands-on experience with backend development, database optimization, and a strong commitment to continuous learning.`;
} else if (input.includes('interested in this position') || input.includes('company')) {
response = `I'm excited about this position because it aligns with my skills in Python and Django development, and your company's commitment to innovation and quality resonates with my career goals. I look forward to contributing to your team's success.`;
} else if (input.includes('strengths') || input.includes('weaknesses')) {
response = `My strengths include strong problem-solving skills, adaptability, and a continuous learning approach. As for weaknesses, I tend to be a perfectionist, but I've learned to balance quality with efficiency.`;
} else if (input.includes('proud of') || input.includes('describe a project')) {
response = `I'm particularly proud of my project on a house price prediction model, where I handled everything from data preprocessing to model evaluation. It was rewarding to see the accuracy and insights it provided for real estate investments.`;
} else if (input.includes('handle tight deadlines') || input.includes('high-pressure situations')) {
response = `I stay focused, prioritize tasks effectively, and break down the work into manageable steps. I also ensure communication with team members to address any challenges early on.`;
} else if (input.includes('prioritize tasks') || input.includes('multiple projects')) {
response = `I prioritize tasks based on deadlines and complexity. For multiple projects, I create a structured timeline and check off milestones to stay on track and meet all deadlines.`;
} else if (input.includes('five years')) {
response = `In five years, I see myself as a Senior Software Developer, having contributed significantly to impactful projects and leading a team of developers to achieve technical and business goals.`;
} else if (input.includes('leaving current job') || input.includes('left last job')) {
response = `I'm seeking new challenges and opportunities to grow my technical skills further. My last role provided a strong foundation, and now I'm ready to take the next step in my career.`;
} else if (input.includes('significant challenge') || input.includes('overcame')) {
response = `I faced a significant challenge in a previous project involving complex data processing. Through researching new approaches and collaborating with team members, I was able to implement an optimized solution that enhanced efficiency.`;
} else if (input.includes('questions for us')) {
response = `Yes, I'd love to know more about the team I'll be working with and the opportunities for professional growth within your company.`;
} else {
response = `I'm here to help! If I can't answer right now, please reach out via email: aswin21092002@gmail.com.`;
}

// Display bot response
const botMessage = document.createElement('div');
botMessage.classList.add('chat-message', 'bot-message');
botMessage.innerHTML = `<img src="./assets/images/bot.png" alt="Bot Logo" class="message-icon"><p>${response}</p>`;
chatContent.appendChild(botMessage);
chatContent.scrollTop = chatContent.scrollHeight;
}

