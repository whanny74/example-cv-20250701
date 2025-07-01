document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'ko';
    const data = CV_DATA;

    // --- RENDER FUNCTIONS ---
    
    // Main render function to update the whole page
    function renderAll() {
        renderStaticText();
        renderNav();
        renderSummary();
        renderIntroduction();
        renderEducation();
        renderExperience();
        renderProjects();
        renderSkills();
        renderResearch();
        renderAwards();
    }

    // Render text for elements with data-lang-key attribute
    function renderStaticText() {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const keyPath = el.dataset.langKey.split('.');
            let text = getNestedData(data.personalInfo, keyPath) || getNestedData(data.uiText, keyPath);
            if (text) {
                el.textContent = getLocalized(text);
            }
        });
        document.title = `${getLocalized(data.personalInfo.name)} | CV`;
    }
    
    // Render navigation bar
    function renderNav() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.innerHTML = '';
        Object.keys(data.sections).forEach(key => {
            const section = data.sections[key];
            const li = document.createElement('li');
            li.innerHTML = `<a href="#${key}">${getLocalized(section.menu)}</a>`;
            navMenu.appendChild(li);
        });
    }

    // Render summary panel (left side)
    function renderSummary() {
        const { contact, keywords, externalLinks } = data.personalInfo;
        
        // Contact info
        const contactInfoContainer = document.querySelector('.contact-info');
        contactInfoContainer.innerHTML = contact.map(item => `
            <div>
                <i class="${item.icon}"></i>
                <span>${getLocalized(item.value) || item.value}</span>
            </div>
        `).join('');

        // Keywords
        document.querySelector('#keyword-tags').innerHTML = keywords.tags.map(tag => 
            `<span class="tag">${getLocalized(tag)}</span>`
        ).join('');
        
        // External Links
        document.querySelector('.external-links').innerHTML = externalLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                <i class="${link.icon}"></i>
                <span>${link.name}</span>
            </a>
        `).join('');
    }

    // Render sections
    function renderSection(sectionId, contentGenerator) {
        const section = document.getElementById(sectionId);
        const sectionData = data.sections[sectionId];
        section.innerHTML = `
            <h2 class="section-title">
                <img src="${sectionData.icon}" alt="${getLocalized(sectionData.title)} icon">
                ${getLocalized(sectionData.title)}
            </h2>
            ${contentGenerator()}
        `;
    }

    function renderIntroduction() {
        renderSection('introduction', () => `
            <div class="subsection">
                <h3 class="subsection-title">${getLocalized(data.introduction.about.title)}</h3>
                <p>${getLocalized(data.introduction.about.content)}</p>
            </div>
            <div class="subsection">
                <h3 class="subsection-title">${getLocalized(data.introduction.goal.title)}</h3>
                <p>${getLocalized(data.introduction.goal.content)}</p>
            </div>
        `);
    }

    function renderEducation() {
        renderSection('education', () => `
            <div class="timeline">
                ${data.education.map(edu => `
                    <div class="timeline-item">
                        <p class="timeline-period">${edu.period}</p>
                        <h4 class="timeline-title">${getLocalized(edu.degree)}</h4>
                        <p class="timeline-subtitle">${getLocalized(edu.institution)}</p>
                        <p>${getLocalized(edu.description).replace(/\n/g, '<br>')}</p>
                    </div>
                `).join('')}
            </div>
        `);
    }

    function renderExperience() {
        renderSection('experience', () => `
            <div class="card-list">
                ${data.experience.map(exp => `
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h4 class="card-title">${getLocalized(exp.position)}</h4>
                                <p class="card-subtitle">${getLocalized(exp.company)}</p>
                            </div>
                            <span class="card-period">${exp.period}</span>
                        </div>
                        <div class="card-content">
                            <ul>
                                ${exp.tasks.map(task => `<li>${getLocalized(task)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        `);
    }
    
    function renderProjects() {
        renderSection('projects', () => `
            <div class="projects-grid">
                ${data.projects.map(proj => `
                    <div class="project-card">
                        <img src="${proj.thumbnail}" alt="${getLocalized(proj.name)}" class="project-thumbnail">
                        <div class="project-card-body">
                            <h4 class="project-title">${getLocalized(proj.name)}</h4>
                            <div class="project-tags">
                                ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                            <p>${getLocalized(proj.description)}</p>
                            <button class="project-button" data-project-id="${proj.id}">
                                ${getLocalized(data.uiText.viewProjectButton)}
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `);
    }

    function renderSkills() {
        renderSection('skills', () => `
            <div class="skills-container">
                ${data.skills.categories.map(cat => `
                    <div class="skill-category">
                        <h3>${getLocalized(cat.name)}</h3>
                        ${cat.skills.map(skill => `
                            <div class="skill-item">
                                <div class="skill-item-name">
                                    <span>${skill.name}</span>
                                    <span>${skill.level}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-level" style="width: ${skill.level}%;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `);
    }
    
    function renderResearch() {
        renderSection('research', () => `
            <div class="list">
                ${data.research.map(item => `
                    <div class="list-item">
                        <div class="list-item-content">
                            <h4 class="item-title">${getLocalized(item.title)}</h4>
                            <p class="item-subtitle">${getLocalized(item.publication)} - ${item.date}</p>
                        </div>
                        <div class="list-item-action">
                             <button onclick="window.open('${item.link}', '_blank')">${getLocalized(data.uiText.viewPaperButton)}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `);
    }

    function renderAwards() {
        renderSection('awards', () => `
            <div class="list">
                ${data.awards.map(item => `
                    <div class="list-item">
                        <div class="list-item-content">
                            <h4 class="item-title">${getLocalized(item.name)}</h4>
                            <p class="item-subtitle">${getLocalized(item.issuer) || item.issuer} - ${item.date}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `);
    }

    // --- UTILITY FUNCTIONS ---

    function getLocalized(textObject) {
        if (typeof textObject === 'string') return textObject;
        return textObject[currentLanguage] || textObject['en']; // Fallback to English
    }
    
    function getNestedData(obj, pathArr) {
        return pathArr.reduce((acc, part) => acc && acc[part], obj);
    }
    
    // --- EVENT LISTENERS ---

    // Language Toggle
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const lang = e.target.dataset.lang;
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                langToggle.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                renderAll();
            }
        }
    });

    // Modals
    const contactModal = document.getElementById('contact-modal');
    const projectModal = document.getElementById('project-modal');
    const contactCtaButton = document.getElementById('contact-cta');
    const closeButtons = document.querySelectorAll('.close-button');

    contactCtaButton.addEventListener('click', () => contactModal.style.display = 'block');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            contactModal.style.display = 'none';
            projectModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === contactModal || e.target === projectModal) {
            contactModal.style.display = 'none';
            projectModal.style.display = 'none';
        }
    });
    
    // Project Modal Population
    document.getElementById('contents').addEventListener('click', (e) => {
        if (e.target.matches('.project-button')) {
            const projectId = parseInt(e.target.dataset.projectId);
            const project = data.projects.find(p => p.id === projectId);
            if (project) {
                const modalBody = document.getElementById('project-modal-body');
                modalBody.innerHTML = `
                    <img src="${project.thumbnail}" alt="${getLocalized(project.name)}">
                    <h2>${getLocalized(project.name)}</h2>
                    <p><strong>${project.period}</strong></p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <br>
                    <h3>${getLocalized(data.uiText.projectModal.description)}</h3>
                    <p>${getLocalized(project.details)}</p>
                    <br>
                    <h3>${getLocalized(data.uiText.projectModal.links)}</h3>
                    <div class="project-links">
                        <a href="${project.links.github}" target="_blank" title="GitHub Repository"><i class="fa-brands fa-github"></i></a>
                        <a href="${project.links.live}" target="_blank" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                `;
                projectModal.style.display = 'block';
            }
        }
    });

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert(currentLanguage === 'ko' ? '문의가 접수되었습니다. (실제 전송 기능은 구현되지 않았습니다)' : 'Your inquiry has been received. (Actual submission is not implemented)');
        contactModal.style.display = 'none';
        e.target.reset();
    });
    
    // Initial Render
    renderAll();
});
