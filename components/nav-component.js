// <title> of html files
const projectPages = [
    "Cary Library Foundation Student Website Tutorial And Competition",
    "Fundraising Website Construction",
    "Harrington PTA Website",
    "CEL Data Analysis",
    "Patriots’ Day Virtual Event: Miles and Smiles",
    "Hotspots Project",
    "Dr. Ting's Talk Project",
    "Helpful Hands",
    "Lexington Heroes",
    "Lunar New Year Gala Website",
    "Photography Exhibition",
    "Team Website Improvement",
    "LexYouthSTEM Team Logo Voting",
    "AAPI Heritage Month Website",
    "Lunar Arts Website Restoration Project",
    "Volleyball Website",
    "Lexington Observer",
    "LHS Senior Seminar 2023",
    "Lexington Lyceum Project"
];

const homepage = "Lexington Youth STEAM Team";

// "on-page" class prevents page reload when already on page (when user clicks in navbar again)
// "active" styles the current page link in the navbar (highlights when on that page)

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="index.html">Lexington Youth STEAM Team</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0">
                            <li class="nav-item"><a class="nav-link ${document.title === homepage ? "on-page" : ""}" href="${document.title === homepage ? "#Mission" : "index.html#Mission"}">Our Mission</a></li>
                            <li class="nav-item"><a class="nav-link ${document.title === "About Us" ? "active on-page" : ""}" href="aboutus.html">About Us</a></li>
                            <li class="nav-item">
                            <li class="nav-item"><a class="nav-link ${document.title === "Projects" ? "active on-page" : ""}" href="projects.html">Projects</a></li>    
                            </li>
                            <li class="nav-item"><a class="nav-link ${document.title === "Team Activities" ? "active on-page" : ""}" href="activity.html">Team Activity</a></li>
                            <li class="nav-item"><a class="nav-link ${document.title === "Learning Center" ? "active on-page" : ""}" href="learning-center.html">Learning Center</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("nav-component", Nav);
