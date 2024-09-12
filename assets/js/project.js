// Initialize AOS (Animate on Scroll library)
AOS.init();

// Select the container for project cards
const projectcards = document.querySelector(".projectcards");

// Array of objects for projects
const projects = [
  {
    title: "Simplicity",
    description:
      "A platform to post & read poetry. Connect through likes & maintain collections.",
    tags: ["Next js", "Convex dev", "TailwindCSS", "Typescript", "Clerk js"],
    tagimg:
      "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    Previewlink: "https://simplicity-poetries.vercel.app/",
    Githublink: "https://github.com/akadeepesh/Simplicity",
  },
  {
    title: "Pizza Theatre",
    description: "A frontend heavy pizza application",
    tags: ["Next js", "Convex dev", "TailwindCSS", "Typescript", "Clerk js"],
    tagimg:
      "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    Previewlink: "https://pizza-theater.vercel.app/",
    Githublink: "https://github.com/akadeepesh/PizzaTheatre",
  },
  {
    title: "Personal Voice Assistant",
    description: "Python & AI Project | October 2022 | Personal Project",
    tags: ["Python", "SpeechRecognition", "React.js"],
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/akadeepesh/VirtualAssistant",
    Githublink: "https://github.com/akadeepesh/VirtualAssistant",
  },
  {
    title: "Python Automation Projects",
    description: "Automation Tools | July 2023 | Personal Projects",
    tags: ["Python", "Automation"],
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-3521655.png",
    Previewlink: "https://github.com/akadeepesh/",
    Githublink: "https://github.com/akadeepesh/",
  },
];

// Function for rendering project cards
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, description, tags, tagimg, Previewlink, Githublink }) => {
      output += `
        <div class="project-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <div class="project-image">
            <div class="project-overlay">
              <div class="project-header">
                <div class="project-thumb">
                  <img class="project-thumb-img" src="${tagimg}" alt="${title} icon">
                </div>
                <div class="project-details">
                  <h3 class="project-title">${title}</h3>
                  <h4 class="project-tags">${tags.join(" | ")}</h4>
                </div>
              </div>
              <p class="project-description">${description}</p>
              <div class="project-links">
                <a href="${Previewlink}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Preview
                </a>
                <a href="${Githublink}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>`;
    }
  );
  projectcards.innerHTML = output;
};

// Call showCards when the DOM content is loaded
document.addEventListener("DOMContentLoaded", showCards);

// Function to filter projects based on search input
function filterProjects() {
  const input = document.getElementById("myInput").value.toUpperCase();
  const cards = document.getElementsByClassName("project-card");

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector(".project-title");
    const description = cards[i].querySelector(".project-description");
    const tags = cards[i].querySelector(".project-tags");
    const titleText = title.textContent || title.innerText;
    const descText = description.textContent || description.innerText;
    const tagsText = tags.textContent || tags.innerText;

    if (
      titleText.toUpperCase().indexOf(input) > -1 ||
      descText.toUpperCase().indexOf(input) > -1 ||
      tagsText.toUpperCase().indexOf(input) > -1
    ) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Add event listener to search input
document.getElementById("myInput").addEventListener("keyup", filterProjects);
