
// app.js
// Dynamically renders the About Me page content.
// No images used; light theme only.

const aboutData = {
  name: "Khushbu Rani",
  title: "Software Engineer",
  location: "Pune, Haryana",
  intro: `I am a <strong>Software Engineer</strong> based in <strong>Pune, Haryana</strong>. 
           I specialize in building web applications and have a strong interest in backend technologies like 
           <em>Java</em> and <em>Spring Boot</em>. I am passionate about creating scalable and efficient solutions.`,

  skillsTitle: "Skills & Expertise",
  skills: [
    "Java, Spring Boot, REST APIs",
    "HTML, CSS, JavaScript",
    "Database Management (MySQL, PostgreSQL)",
    "Version Control (Git, GitHub)"
  ],

  projectsTitle: "Projects",
  projects: [
    {
      title: "User Portfolio Feature",
      description:
        "Completed the backend and currently working on the frontend. Focused on clean architecture, API design, and maintainability."
    }
  ],

  interestsTitle: "Interests",
  interests:
    `In my free time, I love learning new technologies, coding, and working on creative projects. 
     Currently preparing for <strong>Spring and Spring Boot interviews</strong> and exploring advanced concepts.`,

  contactTitle: "Contact",
  contacts: [
    { type: "Email", label: "khushbu@example.com", href: "mailto:khushbu@example.com" },
    { type: "LinkedIn", label: "linkedin.com/in/khushburani", href: "https://linkedin.com/in/khushburani" }
  ],

  year: "2025"
};

// Utility: create element with classes and optional HTML/content
function el(tag, { className, html, text, attrs } = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  if (text) node.textContent = text;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

// Render Functions
function renderHeader() {
  const subtitle = document.getElementById("page-subtitle");
  subtitle.textContent = `${aboutData.title} • ${aboutData.location}`;
}

function renderIntro() {
  document.getElementById("intro-title").textContent = `Hello, I'm ${aboutData.name}`;
  document.getElementById("intro-text").innerHTML = aboutData.intro;
}

function renderSkills() {
  document.getElementById("skills-title").textContent = aboutData.skillsTitle;
  const list = document.getElementById("skills-list");
  aboutData.skills.forEach(skill => {
    list.appendChild(el("li", { text: skill }));
  });
}

function renderProjects() {
  document.getElementById("projects-title").textContent = aboutData.projectsTitle;
  const wrap = document.getElementById("projects");
  aboutData.projects.forEach(p => {
    const item = el("div", { className: "project" });
    item.appendChild(el("p", { className: "project-title", text: p.title }));
    item.appendChild(el("p", { html: p.description }));
    wrap.appendChild(item);
  });
}

function renderInterests() {
  document.getElementById("interests-title").textContent = aboutData.interestsTitle;
  document.getElementById("interests-text").innerHTML = aboutData.interests;
}

function renderContact() {
  document.getElementById("contact-title").textContent = aboutData.contactTitle;
  const list = document.getElementById("contact-list");

  aboutData.contacts.forEach(c => {
    const li = el("li");
    const a = el("a", { html: `${c.label}`, attrs: { href: c.href, target: "_blank", rel: "noopener noreferrer" } });
    li.appendChild(el("span", { className: "text-muted", text: `${c.type}: ` }));
    li.appendChild(a);
    list.appendChild(li);
  });
}

function renderFooter() {
  document.getElementById("copyright").textContent = `© ${aboutData.year} ${aboutData.name}`;
}

// Initialize once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderIntro();
  renderSkills();
  renderProjects();
  renderInterests();
  renderContact();
  renderFooter();
});
