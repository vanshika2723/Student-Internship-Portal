/* =========================================================
   INTERNHUB — STUDENT INTERNSHIP PORTAL
   Complete JavaScript
   ========================================================= */


/* ================= INTERNSHIP DATA ================= */

const internships = [

    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechNova Solutions",
        category: "Web Development",
        location: "Remote",
        type: "Remote",
        stipend: 15000,
        duration: "6 Months",
        deadline: "2026-10-15",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        logo: "TN",
        description:
            "Work with our frontend engineering team to build responsive and accessible web applications.",
        responsibilities: [
            "Develop responsive user interfaces",
            "Convert designs into reusable components",
            "Work with REST APIs",
            "Fix UI bugs and improve performance"
        ],
        requirements: [
            "Basic knowledge of HTML, CSS and JavaScript",
            "Understanding of React",
            "Good problem-solving skills"
        ]
    },

    {
        id: 2,
        title: "MERN Stack Developer Intern",
        company: "CodeCraft Labs",
        category: "Web Development",
        location: "Bangalore",
        type: "Hybrid",
        stipend: 18000,
        duration: "6 Months",
        deadline: "2026-10-08",
        skills: ["React", "Node.js", "MongoDB", "Express"],
        logo: "CC",
        description:
            "Join our development team and work on real-world full-stack web applications.",
        responsibilities: [
            "Build React frontend applications",
            "Develop REST APIs",
            "Work with MongoDB",
            "Participate in code reviews"
        ],
        requirements: [
            "JavaScript fundamentals",
            "Basic MERN stack knowledge",
            "Git and GitHub knowledge"
        ]
    },

    {
        id: 3,
        title: "UI/UX Design Intern",
        company: "PixelWorks",
        category: "UI/UX Design",
        location: "Remote",
        type: "Remote",
        stipend: 12000,
        duration: "4 Months",
        deadline: "2026-10-20",
        skills: ["Figma", "UI Design", "UX Research"],
        logo: "PW",
        description:
            "Create user-friendly interfaces and help improve digital product experiences.",
        responsibilities: [
            "Create wireframes and prototypes",
            "Design responsive interfaces",
            "Conduct basic user research",
            "Collaborate with developers"
        ],
        requirements: [
            "Knowledge of Figma",
            "Understanding of UI/UX principles",
            "Creative thinking"
        ]
    },

    {
        id: 4,
        title: "Data Science Intern",
        company: "DataSphere Analytics",
        category: "Data Science",
        location: "Hyderabad",
        type: "On-site",
        stipend: 20000,
        duration: "6 Months",
        deadline: "2026-09-30",
        skills: ["Python", "Pandas", "SQL", "Machine Learning"],
        logo: "DS",
        description:
            "Analyze real-world datasets and help build data-driven business solutions.",
        responsibilities: [
            "Clean and analyze datasets",
            "Create data visualizations",
            "Build basic ML models",
            "Prepare analytical reports"
        ],
        requirements: [
            "Python knowledge",
            "Basic statistics",
            "SQL fundamentals"
        ]
    },

    {
        id: 5,
        title: "AI/ML Engineering Intern",
        company: "NeuralByte AI",
        category: "AI & ML",
        location: "Delhi",
        type: "Hybrid",
        stipend: 22000,
        duration: "6 Months",
        deadline: "2026-10-05",
        skills: ["Python", "Machine Learning", "AI", "TensorFlow"],
        logo: "NB",
        description:
            "Work with an AI engineering team on machine learning and intelligent automation projects.",
        responsibilities: [
            "Prepare training datasets",
            "Experiment with ML models",
            "Evaluate model performance",
            "Build AI-powered prototypes"
        ],
        requirements: [
            "Python programming",
            "Basic machine learning knowledge",
            "Understanding of data structures"
        ]
    },

    {
        id: 6,
        title: "Digital Marketing Intern",
        company: "GrowthBridge",
        category: "Marketing",
        location: "Jaipur",
        type: "On-site",
        stipend: 10000,
        duration: "3 Months",
        deadline: "2026-10-25",
        skills: ["SEO", "Content", "Social Media"],
        logo: "GB",
        description:
            "Help our marketing team create content and execute digital campaigns.",
        responsibilities: [
            "Assist with social media campaigns",
            "Create digital content",
            "Perform keyword research",
            "Track campaign performance"
        ],
        requirements: [
            "Good communication skills",
            "Basic SEO knowledge",
            "Creative writing"
        ]
    },

    {
        id: 7,
        title: "Backend Developer Intern",
        company: "CloudMatrix",
        category: "Web Development",
        location: "Mumbai",
        type: "Hybrid",
        stipend: 16000,
        duration: "5 Months",
        deadline: "2026-10-12",
        skills: ["Node.js", "Express", "MongoDB", "API"],
        logo: "CM",
        description:
            "Build scalable backend services and APIs for modern web applications.",
        responsibilities: [
            "Develop REST APIs",
            "Work with databases",
            "Implement authentication",
            "Test backend services"
        ],
        requirements: [
            "JavaScript",
            "Node.js basics",
            "Database fundamentals"
        ]
    },

    {
        id: 8,
        title: "Business Development Intern",
        company: "LaunchPeak",
        category: "Business",
        location: "Delhi",
        type: "On-site",
        stipend: 9000,
        duration: "3 Months",
        deadline: "2026-11-01",
        skills: ["Communication", "Sales", "Research"],
        logo: "LP",
        description:
            "Support the business development team with market research and client communication.",
        responsibilities: [
            "Research potential customers",
            "Prepare business reports",
            "Assist sales activities",
            "Maintain client information"
        ],
        requirements: [
            "Strong communication",
            "Research skills",
            "Basic business knowledge"
        ]
    }
];


/* ================= STORAGE ================= */

const STORAGE_KEYS = {
    saved: "internhub_saved",
    applications: "internhub_applications",
    profile: "internhub_profile",
    theme: "internhub_theme"
};


let savedInternships =
    JSON.parse(localStorage.getItem(STORAGE_KEYS.saved)) || [];

let applications =
    JSON.parse(localStorage.getItem(STORAGE_KEYS.applications)) || [];

let profile =
    JSON.parse(localStorage.getItem(STORAGE_KEYS.profile)) || null;


/* ================= DOM HELPER ================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) =>
    [...document.querySelectorAll(selector)];


/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    setupNavigation();

    renderFeatured();

    renderInternships();

    renderSaved();

    renderApplications();

    loadProfile();

    setupFilters();

    setupApplicationTabs();

    setupForms();

    setupNotifications();

    setupMobileMenu();

    setupResumeUpload();

    updateStats();

});


/* ================= NAVIGATION ================= */

function setupNavigation() {

    $$(".nav-link").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const section =
                link.dataset.section;

            showSection(section);

        });

    });

}


function showSection(sectionId) {

    $$(".page-section").forEach(section => {
        section.classList.remove("active-section");
    });

    const section =
        document.getElementById(sectionId);

    if (section) {
        section.classList.add("active-section");
    }

    $$(".nav-link").forEach(link => {

        link.classList.toggle(
            "active",
            link.dataset.section === sectionId
        );

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (sectionId === "saved") {
        renderSaved();
    }

    if (sectionId === "applications") {
        renderApplications();
        updateStats();
    }

    if (sectionId === "internships") {
        renderInternships();
    }

    if (window.innerWidth <= 760) {
        $(".navbar")?.classList.remove("open");
    }
}


/* ================= HOME SEARCH ================= */

function searchFromHome() {

    const value =
        $("#homeSearch").value.trim();

    showSection("internships");

    $("#searchInput").value = value;

    renderInternships();
}


function filterCategory(category) {

    showSection("internships");

    $("#categoryFilter").value = category;

    renderInternships();
}


/* ================= FEATURED ================= */

function renderFeatured() {

    const container =
        $("#featuredInternships");

    if (!container) return;

    container.innerHTML =
        internships
            .slice(0, 3)
            .map(createInternshipCard)
            .join("");

}


/* ================= CARD ================= */

function createInternshipCard(internship) {

    const isSaved =
        savedInternships.includes(internship.id);

    const days =
        getDaysLeft(internship.deadline);

    const urgent =
        days <= 7;

    return `
        <article class="internship-card">

            <div class="card-top">

                <div class="card-company">

                    <div class="company-avatar">
                        ${internship.logo}
                    </div>

                    <div>
                        <h3>${internship.company}</h3>
                        <p>${internship.category}</p>
                    </div>

                </div>

                <button
                    class="save-btn ${isSaved ? "saved" : ""}"
                    onclick="toggleSave(${internship.id})"
                    title="Save internship"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>

            <h2 class="internship-title">
                ${internship.title}
            </h2>

            <div class="card-tags">

                ${internship.skills
                    .slice(0, 3)
                    .map(skill => `
                        <span class="tag">
                            ${skill}
                        </span>
                    `)
                    .join("")}

                <span class="tag">
                    ${internship.type}
                </span>

            </div>

            <div class="card-meta">

                <div class="meta-item">
                    <span>Location</span>
                    <strong>
                        📍 ${internship.location}
                    </strong>
                </div>

                <div class="meta-item">
                    <span>Stipend</span>
                    <strong>
                        ₹${internship.stipend.toLocaleString()}/mo
                    </strong>
                </div>

                <div class="meta-item">
                    <span>Duration</span>
                    <strong>
                        ${internship.duration}
                    </strong>
                </div>

                <div class="meta-item">
                    <span>Deadline</span>
                    <strong>
                        ${formatDate(internship.deadline)}
                    </strong>
                </div>

            </div>

            <div class="card-bottom">

                <span class="deadline ${urgent ? "urgent" : ""}">
                    ${days > 0
                        ? `⏰ ${days} days left`
                        : "⏰ Deadline passed"}
                </span>

                <button
                    class="view-btn"
                    onclick="openInternship(${internship.id})"
                >
                    View Details →
                </button>

            </div>

        </article>
    `;
}


/* ================= INTERNSHIP RENDER ================= */

function renderInternships() {

    const container =
        $("#internshipList");

    if (!container) return;

    let filtered =
        filterInternships();

    filtered =
        sortInternships(filtered);

    container.innerHTML =
        filtered.map(createInternshipCard).join("");

    $("#resultCount").textContent =
        `${filtered.length} internship${filtered.length !== 1 ? "s" : ""} found`;

    $("#activeFilterText").textContent =
        filtered.length === internships.length
            ? "All internships"
            : `${filtered.length} matching opportunities`;

    $("#emptyState")
        .classList.toggle(
            "hidden",
            filtered.length !== 0
        );

}


/* ================= FILTER ================= */

function filterInternships() {

    const search =
        ($("#searchInput")?.value || "")
            .toLowerCase()
            .trim();

    const category =
        $("#categoryFilter")?.value || "all";

    const location =
        $("#locationFilter")?.value || "all";

    const stipend =
        $("#stipendFilter")?.value || "all";

    const workTypes =
        $$(".work-type:checked")
            .map(input => input.value);

    return internships.filter(internship => {

        const searchable = `
            ${internship.title}
            ${internship.company}
            ${internship.category}
            ${internship.location}
            ${internship.skills.join(" ")}
        `.toLowerCase();

        const matchesSearch =
            !search ||
            searchable.includes(search);

        const matchesCategory =
            category === "all" ||
            internship.category === category;

        const matchesLocation =
            location === "all" ||
            internship.location === location;

        const matchesStipend =
            stipend === "all" ||
            internship.stipend >= Number(stipend);

        const matchesType =
            workTypes.length === 0 ||
            workTypes.includes(internship.type);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesLocation &&
            matchesStipend &&
            matchesType
        );

    });
}


/* ================= SORT ================= */

function sortInternships(list) {

    const sort =
        $("#sortSelect")?.value || "latest";

    const copy = [...list];

    if (sort === "stipendHigh") {

        return copy.sort(
            (a, b) => b.stipend - a.stipend
        );

    }

    if (sort === "deadline") {

        return copy.sort(
            (a, b) =>
                new Date(a.deadline) -
                new Date(b.deadline)
        );

    }

    return copy;
}


/* ================= FILTER EVENTS ================= */

function setupFilters() {

    [
        "#searchInput",
        "#categoryFilter",
        "#locationFilter",
        "#stipendFilter",
        "#sortSelect"
    ].forEach(selector => {

        const element = $(selector);

        if (!element) return;

        element.addEventListener(
            "input",
            renderInternships
        );

        element.addEventListener(
            "change",
            renderInternships
        );

    });


    $$(".work-type").forEach(checkbox => {

        checkbox.addEventListener(
            "change",
            renderInternships
        );

    });

}


/* ================= CLEAR FILTER ================= */

function clearFilters() {

    if ($("#searchInput")) {
        $("#searchInput").value = "";
    }

    if ($("#categoryFilter")) {
        $("#categoryFilter").value = "all";
    }

    if ($("#locationFilter")) {
        $("#locationFilter").value = "all";
    }

    if ($("#stipendFilter")) {
        $("#stipendFilter").value = "all";
    }

    if ($("#sortSelect")) {
        $("#sortSelect").value = "latest";
    }

    $$(".work-type").forEach(
        checkbox => checkbox.checked = false
    );

    renderInternships();
}


/* ================= SAVE ================= */

function toggleSave(id) {

    if (savedInternships.includes(id)) {

        savedInternships =
            savedInternships.filter(
                item => item !== id
            );

        showToast(
            "Internship removed from saved.",
            "success"
        );

    } else {

        savedInternships.push(id);

        showToast(
            "Internship saved successfully!",
            "success"
        );

    }

    localStorage.setItem(
        STORAGE_KEYS.saved,
        JSON.stringify(savedInternships)
    );

    renderFeatured();

    renderInternships();

    renderSaved();

}


/* ================= SAVED ================= */

function renderSaved() {

    const container =
        $("#savedInternships");

    if (!container) return;

    const saved =
        internships.filter(
            internship =>
                savedInternships.includes(internship.id)
        );

    container.innerHTML =
        saved.map(createInternshipCard).join("");

    $("#savedCount").textContent =
        saved.length;

    $("#savedEmpty")
        .classList.toggle(
            "hidden",
            saved.length !== 0
        );

}


/* ================= DETAILS ================= */

function openInternship(id) {

    const internship =
        internships.find(
            item => item.id === id
        );

    if (!internship) return;

    const alreadyApplied =
        applications.some(
            app => app.internshipId === id
        );

    $("#internshipDetails").innerHTML = `

        <div class="detail-company">

            <div class="company-avatar">
                ${internship.logo}
            </div>

            <div>
                <h2>${internship.title}</h2>
                <p>${internship.company} • ${internship.category}</p>
            </div>

        </div>


        <div class="detail-meta">

            <div>
                <span>Location</span>
                <strong>📍 ${internship.location}</strong>
            </div>

            <div>
                <span>Work Type</span>
                <strong>${internship.type}</strong>
            </div>

            <div>
                <span>Stipend</span>
                <strong>₹${internship.stipend.toLocaleString()}/month</strong>
            </div>

            <div>
                <span>Duration</span>
                <strong>${internship.duration}</strong>
            </div>

            <div>
                <span>Deadline</span>
                <strong>${formatDate(internship.deadline)}</strong>
            </div>

            <div>
                <span>Skills</span>
                <strong>${internship.skills.length} required</strong>
            </div>

        </div>


        <div class="detail-section">

            <h3>About the Internship</h3>

            <p>
                ${internship.description}
            </p>

        </div>


        <div class="detail-section">

            <h3>Responsibilities</h3>

            <ul>
                ${internship.responsibilities
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

        </div>


        <div class="detail-section">

            <h3>Requirements</h3>

            <ul>
                ${internship.requirements
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

        </div>


        <div class="detail-section">

            <h3>Required Skills</h3>

            <div class="card-tags">

                ${internship.skills
                    .map(skill => `
                        <span class="tag">
                            ${skill}
                        </span>
                    `)
                    .join("")}

            </div>

        </div>


        <div class="detail-actions">

            <button
                class="secondary-btn"
                onclick="toggleSave(${internship.id})"
            >
                ${savedInternships.includes(id)
                    ? "♥ Saved"
                    : "♡ Save Internship"}
            </button>

            <button
                class="primary-btn"
                ${alreadyApplied ? "disabled" : ""}
                onclick="openApplyModal(${internship.id})"
            >
                ${alreadyApplied
                    ? "✓ Already Applied"
                    : "Apply Now →"}
            </button>

        </div>
    `;

    $("#internshipModal")
        .classList.add("show");

}


/* ================= APPLY ================= */

function openApplyModal(id) {

    const internship =
        internships.find(
            item => item.id === id
        );

    if (!internship) return;

    const alreadyApplied =
        applications.some(
            app => app.internshipId === id
        );

    if (alreadyApplied) {

        showToast(
            "You have already applied for this internship.",
            "error"
        );

        return;
    }

    $("#applyInternshipId").value = id;

    $("#applyCompanyName").textContent =
        `${internship.title} • ${internship.company}`;

    closeModal("internshipModal");

    $("#applyModal")
        .classList.add("show");

}


/* ================= APPLICATION FORM ================= */

function setupForms() {

    $("#applicationForm")
        ?.addEventListener(
            "submit",
            submitApplication
        );


    $("#profileForm")
        ?.addEventListener(
            "submit",
            saveProfile
        );

}


function submitApplication(event) {

    event.preventDefault();

    const internshipId =
        Number($("#applyInternshipId").value);

    const internship =
        internships.find(
            item => item.id === internshipId
        );

    if (!internship) return;

    const application = {

        id: Date.now(),

        internshipId,

        title: internship.title,

        company: internship.company,

        category: internship.category,

        location: internship.location,

        stipend: internship.stipend,

        applicantName:
            $("#applicantName").value.trim(),

        email:
            $("#applicantEmail").value.trim(),

        phone:
            $("#applicantPhone").value.trim(),

        coverLetter:
            $("#coverLetter").value.trim(),

        portfolio:
            $("#portfolioUrl").value.trim(),

        status: "Applied",

        appliedAt: new Date().toISOString()

    };

    applications.unshift(application);

    localStorage.setItem(
        STORAGE_KEYS.applications,
        JSON.stringify(applications)
    );

    $("#applicationForm").reset();

    closeModal("applyModal");

    showToast(
        "Application submitted successfully! 🎉",
        "success"
    );

    renderApplications();

    updateStats();

}


/* ================= APPLICATIONS ================= */

function renderApplications(status = "all") {

    const container =
        $("#applicationList");

    if (!container) return;

    let list = [...applications];

    if (status !== "all") {

        list =
            list.filter(
                app => app.status === status
            );

    }

    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>📋</div>

                <h3>No applications yet</h3>

                <p>
                    Start exploring internships and
                    apply to opportunities that match
                    your skills.
                </p>

                <button
                    class="primary-btn"
                    onclick="showSection('internships')"
                >
                    Find Internships
                </button>

            </div>

        `;

        return;
    }


    container.innerHTML =
        list.map(createApplicationCard).join("");

}


function createApplicationCard(application) {

    const internship =
        internships.find(
            item => item.id === application.internshipId
        );

    const logo =
        internship?.logo || "IN";

    const statusClass =
        application.status.replaceAll(" ", "-");

    return `

        <div class="application-item">

            <div class="application-info">

                <div class="company-avatar">
                    ${logo}
                </div>

                <div>

                    <h3>
                        ${application.title}
                    </h3>

                    <p>
                        ${application.company}
                        • ${application.location}
                    </p>

                    <span
                        class="application-status status-${statusClass}"
                    >
                        ${getStatusIcon(application.status)}
                        ${application.status}
                    </span>

                    <p>
                        Applied on
                        ${formatDateTime(application.appliedAt)}
                    </p>

                </div>

            </div>


            <div class="application-actions">

                <button
                    class="small-btn"
                    onclick="openInternship(${application.internshipId})"
                >
                    View
                </button>

                <button
                    class="small-btn danger"
                    onclick="removeApplication(${application.id})"
                >
                    Remove
                </button>

            </div>

        </div>

    `;
}


/* ================= APPLICATION TABS ================= */

function setupApplicationTabs() {

    $$(".application-tab")
        .forEach(tab => {

            tab.addEventListener(
                "click",
                () => {

                    $$(".application-tab")
                        .forEach(item =>
                            item.classList.remove("active")
                        );

                    tab.classList.add("active");

                    renderApplications(
                        tab.dataset.status
                    );

                }
            );

        });

}


/* ================= REMOVE APPLICATION ================= */

function removeApplication(id) {

    const confirmed =
        confirm(
            "Remove this application from your tracker?"
        );

    if (!confirmed) return;

    applications =
        applications.filter(
            app => app.id !== id
        );

    localStorage.setItem(
        STORAGE_KEYS.applications,
        JSON.stringify(applications)
    );

    renderApplications();

    updateStats();

    showToast(
        "Application removed.",
        "success"
    );

}


/* ================= STATS ================= */

function updateStats() {

    const total =
        applications.length;

    const pending =
        applications.filter(
            app => app.status === "Under Review"
        ).length;

    const shortlisted =
        applications.filter(
            app => app.status === "Shortlisted"
        ).length;

    const selected =
        applications.filter(
            app => app.status === "Selected"
        ).length;

    $("#totalApplications").textContent = total;

    $("#pendingApplications").textContent =
        pending;

    $("#shortlistedApplications").textContent =
        shortlisted;

    $("#selectedApplications").textContent =
        selected;

}


/* ================= PROFILE ================= */

function saveProfile(event) {

    event.preventDefault();

    profile = {

        name: $("#profileName").value,

        email: $("#profileEmail").value,

        phone: $("#profilePhone").value,

        education: $("#profileEducation").value,

        skills: $("#profileSkills").value,

        about: $("#profileAbout").value

    };

    localStorage.setItem(
        STORAGE_KEYS.profile,
        JSON.stringify(profile)
    );

    showToast(
        "Profile updated successfully!",
        "success"
    );

}


function loadProfile() {

    if (!profile) return;

    if ($("#profileName")) {
        $("#profileName").value =
            profile.name || "";
    }

    if ($("#profileEmail")) {
        $("#profileEmail").value =
            profile.email || "";
    }

    if ($("#profilePhone")) {
        $("#profilePhone").value =
            profile.phone || "";
    }

    if ($("#profileEducation")) {
        $("#profileEducation").value =
            profile.education || "";
    }

    if ($("#profileSkills")) {
        $("#profileSkills").value =
            profile.skills || "";
    }

    if ($("#profileAbout")) {
        $("#profileAbout").value =
            profile.about || "";
    }

}


function scrollToProfileForm() {

    $("#profileForm")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= RESUME ================= */

function setupResumeUpload() {

    $("#resumeInput")
        ?.addEventListener(
            "change",
            event => {

                const file =
                    event.target.files[0];

                if (!file) return;

                if (file.size > 5 * 1024 * 1024) {

                    showToast(
                        "File must be smaller than 5 MB.",
                        "error"
                    );

                    event.target.value = "";

                    return;
                }

                $("#resumeName").textContent =
                    file.name;

                showToast(
                    "Resume selected successfully!",
                    "success"
                );

            }
        );

}


/* ================= THEME ================= */

function loadTheme() {

    const theme =
        localStorage.getItem(
            STORAGE_KEYS.theme
        );

    if (theme === "dark") {

        document.documentElement
            .setAttribute(
                "data-theme",
                "dark"
            );

        $("#themeToggle").textContent = "☀️";

    }

}


$("#themeToggle")
    ?.addEventListener(
        "click",
        () => {

            const dark =
                document.documentElement
                    .getAttribute("data-theme") === "dark";

            if (dark) {

                document.documentElement
                    .removeAttribute("data-theme");

                localStorage.setItem(
                    STORAGE_KEYS.theme,
                    "light"
                );

                $("#themeToggle").textContent = "🌙";

            } else {

                document.documentElement
                    .setAttribute(
                        "data-theme",
                        "dark"
                    );

                localStorage.setItem(
                    STORAGE_KEYS.theme,
                    "dark"
                );

                $("#themeToggle").textContent = "☀️";

            }

        }
    );


/* ================= NOTIFICATIONS ================= */

function setupNotifications() {

    $("#notificationBtn")
        ?.addEventListener(
            "click",
            () => {

                $("#notificationPanel")
                    .classList.toggle("show");

            }
        );

    $("#closeNotifications")
        ?.addEventListener(
            "click",
            () => {

                $("#notificationPanel")
                    .classList.remove("show");

            }
        );

}


document.addEventListener(
    "click",
    event => {

        const panel =
            $("#notificationPanel");

        const button =
            $("#notificationBtn");

        if (
            panel &&
            !panel.contains(event.target) &&
            !button.contains(event.target)
        ) {

            panel.classList.remove("show");

        }

    }
);


/* ================= MOBILE MENU ================= */

function setupMobileMenu() {

    $("#menuBtn")
        ?.addEventListener(
            "click",
            () => {

                $(".navbar")
                    .classList.toggle("open");

            }
        );

}


/* ================= MODALS ================= */

function closeModal(id) {

    const modal =
        document.getElementById(id);

    modal?.classList.remove("show");

}


$$(".modal-overlay")
    .forEach(overlay => {

        overlay.addEventListener(
            "click",
            event => {

                if (event.target === overlay) {

                    overlay.classList.remove("show");

                }

            }
        );

    });


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            $$(".modal-overlay")
                .forEach(modal =>
                    modal.classList.remove("show")
                );

            $("#notificationPanel")
                ?.classList.remove("show");

        }

    }
);


/* ================= TOAST ================= */

function showToast(
    message,
    type = "success"
) {

    const container =
        $("#toastContainer");

    const toast =
        document.createElement("div");

    toast.className =
        `toast ${type}`;

    const icon =
        type === "success"
            ? "✓"
            : "⚠";

    toast.innerHTML = `
        <strong>${icon}</strong>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.transform =
            "translateX(30px)";

        setTimeout(
            () => toast.remove(),
            250
        );

    }, 3000);

}


/* ================= HELPERS ================= */

function formatDate(dateString) {

    return new Date(dateString)
        .toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );

}


function formatDateTime(dateString) {

    return new Date(dateString)
        .toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );

}


function getDaysLeft(dateString) {

    const deadline =
        new Date(dateString);

    const today =
        new Date();

    today.setHours(0, 0, 0, 0);

    const difference =
        deadline - today;

    return Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
    );

}


function getStatusIcon(status) {

    const icons = {

        "Applied": "📤",

        "Under Review": "⏳",

        "Shortlisted": "⭐",

        "Selected": "🎉"

    };

    return icons[status] || "📋";

}


/* ================= DEMO STATUS UPDATE ================= */

/*
   Demo purpose:
   Applications automatically move through
   sample statuses after refresh if needed.
*/

function simulateApplicationUpdates() {

    let changed = false;

    applications =
        applications.map(app => {

            const age =
                Date.now() -
                new Date(app.appliedAt).getTime();

            const hours =
                age /
                (1000 * 60 * 60);

            let newStatus =
                app.status;

            if (
                hours >= 48 &&
                app.status === "Applied"
            ) {
                newStatus = "Under Review";
            }

            if (
                hours >= 96 &&
                app.status === "Under Review"
            ) {
                newStatus = "Shortlisted";
            }

            if (newStatus !== app.status) {

                changed = true;

                return {
                    ...app,
                    status: newStatus
                };

            }

            return app;

        });

    if (changed) {

        localStorage.setItem(
            STORAGE_KEYS.applications,
            JSON.stringify(applications)
        );

    }

}

simulateApplicationUpdates();