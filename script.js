// Dataset containing core technical fundamentals and curated documentation links
const resources = [
    {
        title: "Object-Oriented Programming (OOPS)",
        category: "Computer Science",
        description: "Deep dive into structural concepts including Abstraction, Encapsulation, Inheritance, and Polymorphism with practical runtime implementations.",
        docsLink: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming"
    },
    {
        title: "Database Management Systems (DBMS)",
        category: "Core Engineering",
        description: "Vetted blueprints on Relational Databases, SQL syntax structuring, ACID rules, normalization methods, and schema indices.",
        docsLink: "https://www.geeksforgeeks.org/dbms/"
    },
    {
        title: "Operating Systems Fundamentals (OS)",
        category: "Core Engineering",
        description: "Essential notes explaining process scheduling parameters, threading, deadlocks, memory virtualization, and file systems architecture.",
        docsLink: "https://www.tutorialspoint.com/operating_system/index.htm"
    },
    {
        title: "Web Development Foundations",
        category: "Full Stack",
        description: "Complete roadmap, references, and interactive tutorials covering modern HTML5, CSS3 layout schemes, and core JavaScript principles.",
        docsLink: "https://developer.mozilla.org/en-US/"
    },
    {
        title: "Introduction to Python Programming",
        category: "Programming",
        description: "Vetted introductory materials covering arrays, data structures, backend automation syntax, and standard programming logic basics.",
        docsLink: "https://docs.python.org/3/"
    },
    {
        title: "Data Structures & Algorithms (DSA)",
        category: "Computer Science",
        description: "Comprehensive collections of notes detailing time complexity evaluations, searching/sorting structures, optimization practices, and code arrays.",
        docsLink: "https://www.geeksforgeeks.org/data-structures/"
    }
];

// Document Object Selectors
const resourceGrid = document.getElementById('resourceGrid');
const searchInput = document.getElementById('searchInput');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Render resource cards dynamically into the DOM
function displayResources(items) {
    resourceGrid.innerHTML = "";
    
    if (items.length === 0) {
        resourceGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 2rem;">No matching learning resources found.</p>`;
        return;
    }

    items.forEach(item => {
        // Dynamically generate a tailored YouTube search URL using the card's title
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " full course tutorial")}`;

        const cardHTML = `
            <div class="card">
                <div class="card-body">
                    <span class="card-tag">${item.category}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="card-links">
                    <a href="${item.docsLink}" target="_blank">📖 Read Notes</a>
                    <a href="${youtubeSearchUrl}" target="_blank">📺 Watch Tutorials</a>
                </div>
            </div>
        `;
        resourceGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Live input query filter action
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredResources = resources.filter(item => {
        return (
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    });
    displayResources(filteredResources);
});

// Client-side simulation for contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    formSuccess.style.display = "block";
    setTimeout(() => { 
        formSuccess.style.display = "none"; 
    }, 5000);
});

// Initial application load execution
document.addEventListener('DOMContentLoaded', () => {
    displayResources(resources);
});