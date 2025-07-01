const CV_DATA = {
    // 개인 정보
    personalInfo: {
        name: { ko: "홍길동", en: "Gildong Hong" },
        tagline: { ko: "열정적인 풀스택 소프트웨어 엔지니어", en: "A Passionate Full-Stack Software Engineer" },
        contact: [
            { type: 'email', icon: 'fa-solid fa-envelope', value: 'gildong.hong@email.com', link: 'mailto:gildong.hong@email.com' },
            { type: 'phone', icon: 'fa-solid fa-phone', value: '010-1234-5678', link: 'tel:010-1234-5678' },
            { type: 'location', icon: 'fa-solid fa-location-dot', value: { ko: '대한민국, 서울', en: 'Seoul, South Korea' } }
        ],
        keywords: {
            title: { ko: "주요 키워드", en: "Keywords" },
            tags: [
                { ko: "풀스택 개발", en: "Full-Stack Dev" }, { ko: "문제 해결", en: "Problem Solving" }, 
                { ko: "애자일", en: "Agile" }, { ko: "팀워크", en: "Teamwork" },
                { ko: "클라우드", en: "Cloud" }, { ko: "CI/CD", en: "CI/CD" }
            ]
        },
        summary: {
            title: { ko: "주요 자격 요약", en: "Qualification Summary" },
            content: { ko: "정보처리기사, AWS Certified Developer 자격 보유. 다수의 해커톤 수상 경력으로 기술 역량과 협업 능력 입증.", en: "Holder of Engineer Information Processing and AWS Certified Developer. Proven technical and collaborative skills through multiple hackathon awards." }
        },
        externalLinks: [
            { name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/example' },
            { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://linkedin.com/in/example' },
            { name: 'Blog', icon: 'fa-solid fa-blog', url: 'https://velog.io/example' }
        ],
    },
    // 네비게이션 메뉴 및 섹션 제목
    sections: {
        introduction: { menu: { ko: "소개", en: "About" }, title: { ko: "소개", en: "Introduction" }, icon: "assets/icons/introduction.svg" },
        education: { menu: { ko: "학력", en: "Education" }, title: { ko: "학력", en: "Education" }, icon: "assets/icons/education.svg" },
        experience: { menu: { ko: "경력", en: "Experience" }, title: { ko: "경력", en: "Work Experience" }, icon: "assets/icons/experience.svg" },
        projects: { menu: { ko: "프로젝트", en: "Projects" }, title: { ko: "주요 프로젝트", en: "Projects" }, icon: "assets/icons/projects.svg" },
        skills: { menu: { ko: "기술", en: "Skills" }, title: { ko: "보유 기술", en: "Skills" }, icon: "assets/icons/skills.svg" },
        research: { menu: { ko: "연구", en: "Research" }, title: { ko: "연구 및 논문", en: "Research & Publications" }, icon: "assets/icons/research.svg" },
        awards: { menu: { ko: "수상/자격증", en: "Awards" }, title: { ko: "수상 및 자격증", en: "Awards & Certs" }, icon: "assets/icons/awards.svg" }
    },
    // 소개
    introduction: {
        about: {
            title: { ko: "자기소개", en: "About Me" },
            content: { ko: "컴퓨터공학 학사 및 소프트웨어공학 석사 학위를 바탕으로 탄탄한 전공 지식을 갖춘 4년차 풀스택 개발자 홍길동입니다. 웹 기술의 발전에 깊은 관심을 가지고 있으며, 특히 대규모 트래픽을 처리하는 서비스와 클라우드 네이티브 아키텍처에 대한 경험을 쌓아왔습니다. 복잡한 문제를 분석하고, 효율적인 해결책을 설계하며, 팀원들과의 원활한 소통을 통해 최상의 결과물을 만들어내는 과정에서 큰 보람을 느낍니다. 새로운 기술을 학습하고 적용하는 데에 두려움이 없으며, 지속적인 성장을 통해 조직과 함께 발전하는 개발자가 되고자 합니다.", en: "I am Gildong Hong, a 4th-year full-stack developer with a solid foundation in computer science, holding both a Bachelor's and a Master's degree in Software Engineering. I am deeply passionate about the evolution of web technologies, with specific experience in handling large-scale traffic services and cloud-native architectures. I find great satisfaction in analyzing complex problems, designing efficient solutions, and achieving optimal outcomes through seamless collaboration with team members. I am eager to learn and apply new technologies, striving to become a developer who grows together with the organization." }
        },
        goal: {
            title: { ko: "목표", en: "Career Goals" },
            content: { ko: "저의 단기적인 목표는 현재의 기술 스택에 대한 깊이를 더하고, DevOps 문화를 팀에 성공적으로 정착시켜 개발부터 배포까지의 파이프라인을 자동화하고 안정성을 높이는 것입니다. 특히 Kubernetes와 같은 컨테이너 오케스트레이션 도구에 대한 전문성을 키워 마이크로서비스 아키텍처(MSA) 환경에서의 개발 및 운영 효율을 극대화하고 싶습니다. 장기적으로는 기술적인 리더십을 발휘하여 프로젝트의 기술 방향성을 제시하고, 주니어 개발자들의 성장을 돕는 멘토 역할을 수행하는 테크 리더 혹은 솔루션 아키텍트가 되는 것을 목표로 하고 있습니다. 사용자의 삶에 긍정적인 영향을 미치는 혁신적인 서비스를 만드는 데 기여하고 싶습니다.", en: "My short-term goal is to deepen my expertise in my current tech stack and successfully establish a DevOps culture within the team to automate the development-to-deployment pipeline and enhance its stability. I am particularly focused on strengthening my skills in container orchestration tools like Kubernetes to maximize development and operational efficiency in a Microservices Architecture (MSA) environment. In the long run, I aim to become a tech lead or solutions architect, providing technical direction for projects and mentoring junior developers to foster their growth. I aspire to contribute to creating innovative services that positively impact users' lives." }
        }
    },
    // 학력
    education: [
        {
            period: "2019.03 - 2021.02",
            degree: { ko: "소프트웨어공학 석사", en: "Master of Science in Software Engineering" },
            institution: { ko: "한국대학교 대학원", en: "Hanguk University, Graduate School" },
            description: { ko: "논문: 분산 시스템에서의 효율적인 데이터 일관성 유지 기법 연구", en: "Thesis: A Study on Efficient Data Consistency Maintenance Techniques in Distributed Systems" }
        },
        {
            period: "2015.03 - 2019.02",
            degree: { ko: "컴퓨터공학 학사", en: "Bachelor of Science in Computer Science" },
            institution: { ko: "한국대학교", en: "Hanguk University" },
            description: { ko: "- 수석 졸업\n- 교내 프로그래밍 경진대회 1위", en: "- Graduated Summa Cum Laude\n- 1st Place in University Programming Contest" }
        }
    ],
    // 경력
    experience: [
        {
            period: "2023.03 - 현재",
            position: { ko: "시니어 소프트웨어 엔지니어", en: "Senior Software Engineer" },
            company: { ko: "넥스트 테크", en: "Next Tech Inc." },
            tasks: [
                { ko: "글로벌 이커머스 플랫폼 백엔드 시스템 설계 및 개발", en: "Designed and developed backend systems for a global e-commerce platform." },
                { ko: "MSA 기반 아키텍처 전환 주도 및 CI/CD 파이프라인 구축", en: "Led the transition to a Microservices Architecture (MSA) and established CI/CD pipelines." },
                { ko: "대용량 트래픽 처리를 위한 성능 최적화 및 시스템 모니터링", en: "Optimized performance for handling large-scale traffic and implemented system monitoring." }
            ]
        },
        {
            period: "2021.03 - 2023.02",
            position: { ko: "소프트웨어 엔지니어", en: "Software Engineer" },
            company: { ko: "코드크래프트", en: "CodeCraft Ltd." },
            tasks: [
                { ko: "SaaS 기반 협업 툴 프론트엔드 및 백엔드 개발 참여", en: "Participated in developing both frontend and backend for a SaaS collaboration tool." },
                { ko: "React와 TypeScript를 활용한 컴포넌트 기반 UI 개발", en: "Developed component-based UI using React and TypeScript." },
                { ko: "Node.js와 Express를 이용한 REST API 서버 개발", en: "Developed REST API server using Node.js and Express." }
            ]
        },
        {
            period: "2019.01 - 2019.02",
            position: { ko: "백엔드 개발 인턴", en: "Backend Development Intern" },
            company: { ko: "스타트업 밸리", en: "Startup Valley" },
            tasks: [
                { ko: "사내 어드민 페이지 기능 개선 및 버그 수정", en: "Improved features and fixed bugs for the internal admin page." },
                { ko: "Python, Django 프레임워크를 사용한 개발", en: "Development using Python and Django framework." }
            ]
        }
    ],
    // 프로젝트
    projects: [
        { id: 1, thumbnail: 'assets/images/project-1.png', name: { ko: "실시간 협업 화이트보드", en: "Real-time Collaborative Whiteboard" }, period: "2023", tags: ["WebSocket", "React", "Canvas"], description: { ko: "여러 사용자가 동시에 그림을 그리고 아이디어를 공유할 수 있는 웹 기반 화이트보드 애플리케이션입니다.", en: "A web-based whiteboard application that allows multiple users to draw and share ideas simultaneously." }, details: { ko: "WebSocket을 이용한 실시간 통신 구현. Canvas API를 활용하여 드로잉 기능 및 객체 관리. 상태 관리 라이브러리(Zustand)를 사용하여 복잡한 UI 상태를 효율적으로 관리함.", en: "Implemented real-time communication using WebSockets. Utilized the Canvas API for drawing features and object management. Efficiently managed complex UI states using a state management library (Zustand)." }, links: { github: "#", live: "#"} },
        { id: 2, thumbnail: 'assets/images/project-2.png', name: { ko: "레시피 추천 AI 챗봇", en: "AI Recipe Recommendation Chatbot" }, period: "2022", tags: ["Python", "NLP", "Docker"], description: { ko: "사용자가 가진 재료를 입력하면 AI가 적절한 레시피를 추천해주는 챗봇 서비스입니다.", en: "A chatbot service where an AI recommends suitable recipes based on ingredients provided by the user." }, details: { ko: "자연어 처리(NLP) 모델을 파인튜닝하여 사용자의 의도를 파악. FastAPI를 사용해 서빙 API를 구축하고 Docker로 패키징하여 배포 용이성을 확보함.", en: "Fine-tuned a Natural Language Processing (NLP) model to understand user intent. Built a serving API with FastAPI and packaged it with Docker for easy deployment." }, links: { github: "#", live: "#"} },
        { id: 3, thumbnail: 'assets/images/project-3.png', name: { ko: "클라우드 스토리지 CLI", en: "Cloud Storage CLI" }, period: "2022", tags: ["Go", "CLI", "AWS S3"], description: { ko: "터미널 환경에서 AWS S3와 같은 클라우드 스토리지에 파일을 쉽게 업로드/다운로드할 수 있는 CLI 도구입니다.", en: "A CLI tool that allows easy uploading/downloading of files to cloud storage like AWS S3 from the terminal." }, details: { ko: "Go 언어와 Cobra 라이브러리를 사용하여 강력한 CLI 애플리케이션 개발. 병렬 처리를 통해 대용량 파일 전송 속도를 최적화함.", en: "Developed a robust CLI application using the Go language and the Cobra library. Optimized large file transfer speeds through parallel processing." }, links: { github: "#", live: "#"} },
        { id: 4, thumbnail: 'assets/images/project-4.png', name: { ko: "개인화 뉴스피드 서비스", en: "Personalized News Feed Service" }, period: "2021", tags: ["NestJS", "GraphQL", "PostgreSQL"], description: { ko: "사용자의 관심사를 분석하여 맞춤형 뉴스 기사를 제공하는 웹 서비스입니다.", en: "A web service that provides customized news articles by analyzing user interests." }, details: { ko: "NestJS 프레임워크와 GraphQL을 사용하여 유연하고 효율적인 API를 구축. 사용자 활동 로그를 수집하여 콘텐츠 추천 알고리즘에 활용.", en: "Built a flexible and efficient API using the NestJS framework and GraphQL. Collected user activity logs to feed into the content recommendation algorithm." }, links: { github: "#", live: "#"} },
        { id: 5, thumbnail: 'assets/images/project-5.png', name: { ko: "회의실 예약 시스템", en: "Meeting Room Reservation System" }, period: "2021", tags: ["Vue.js", "Firebase", "PWA"], description: { ko: "사내 회의실을 실시간으로 예약하고 관리할 수 있는 시스템입니다. PWA로 개발되어 모바일 설치가 가능합니다.", en: "A system for reserving and managing company meeting rooms in real time. Developed as a PWA for mobile installation." }, details: { ko: "Vue.js와 Vuetify를 사용하여 직관적인 UI를 구현. Firebase Realtime Database를 통해 데이터의 실시간 동기화를 지원함.", en: "Implemented an intuitive UI using Vue.js and Vuetify. Supported real-time data synchronization through Firebase Realtime Database." }, links: { github: "#", live: "#"} },
        { id: 6, thumbnail: 'assets/images/project-6.png', name: { ko: "코드 스니펫 관리 툴", en: "Code Snippet Management Tool" }, period: "2020", tags: ["Electron", "TypeScript", "SQLite"], description: { ko: "개발자들이 자주 사용하는 코드 조각을 저장하고, 태그로 검색하며, 쉽게 복사할 수 있는 데스크톱 애플리케이션입니다.", en: "A desktop application for developers to save, search by tag, and easily copy frequently used code snippets." }, details: { ko: "Electron과 TypeScript를 사용하여 크로스플랫폼 데스크톱 앱으로 개발. 로컬 DB(SQLite)를 사용하여 데이터를 안전하게 보관.", en: "Developed as a cross-platform desktop app using Electron and TypeScript. Securely stored data using a local database (SQLite)." }, links: { github: "#", live: "#"} },
        { id: 7, thumbnail: 'assets/images/project-7.png', name: { ko: "블로그 마크다운 에디터", en: "Markdown Editor for Bloggers" }, period: "2020", tags: ["JavaScript", "Markdown", "LocalStorage"], description: { ko: "마크다운 문법을 실시간으로 미리 보여주는 웹 기반 에디터입니다. 작성 내용은 브라우저에 자동 저장됩니다.", en: "A web-based editor that provides a real-time preview of Markdown syntax. Content is automatically saved to the browser." }, details: { ko: "순수 JavaScript, HTML, CSS로만 구현하여 경량화에 초점. LocalStorage API를 활용하여 자동 저장 및 복원 기능을 구현함.", en: "Focused on being lightweight by implementing with pure JavaScript, HTML, and CSS. Implemented auto-save and restore features using the LocalStorage API." }, links: { github: "#", live: "#"} },
        { id: 8, thumbnail: 'assets/images/project-8.png', name: { ko: "서버 상태 모니터링 대시보드", en: "Server Status Monitoring Dashboard" }, period: "2019", tags: ["Python", "Flask", "Chart.js"], description: { ko: "여러 서버의 CPU, 메모리, 디스크 사용량을 실시간으로 시각화하여 보여주는 웹 대시보드입니다.", en: "A web dashboard that visualizes CPU, memory, and disk usage of multiple servers in real time." }, details: { ko: "Python(Flask)으로 데이터 수집 API를 만들고, 프론트엔드에서는 Chart.js를 이용하여 데이터를 동적으로 시각화함.", en: "Created a data collection API with Python (Flask) and dynamically visualized the data on the frontend using Chart.js." }, links: { github: "#", live: "#"} }
    ],
    // 보유 기술
    skills: {
        categories: [
            {
                name: { ko: "프로그래밍 언어", en: "Programming Languages" },
                skills: [ { name: "JavaScript / TypeScript", level: 95 }, { name: "Python", level: 90 }, { name: "Go", level: 75 }, { name: "Java", level: 70 } ]
            },
            {
                name: { ko: "프론트엔드", en: "Frontend" },
                skills: [ { name: "React", level: 95 }, { name: "Vue.js", level: 80 }, { name: "HTML5 / CSS3", level: 90 }, { name: "State Management (Redux, Zustand)", level: 85 } ]
            },
            {
                name: { ko: "백엔드", en: "Backend" },
                skills: [ { name: "Node.js (Express, NestJS)", level: 95 }, { name: "Django / Flask", level: 85 }, { name: "GraphQL", level: 80 }, { name: "WebSocket", level: 75 } ]
            },
            {
                name: { ko: "인프라 / DevOps", en: "Infra / DevOps" },
                skills: [ { name: "AWS / GCP", level: 85 }, { name: "Docker / Kubernetes", level: 80 }, { name: "CI/CD (GitHub Actions, Jenkins)", level: 90 }, { name: "Nginx", level: 70 } ]
            }
        ]
    },
    // 연구 및 논문
    research: [
        {
            date: "2021.02",
            title: { ko: "분산 시스템에서의 효율적인 데이터 일관성 유지 기법 연구", en: "A Study on Efficient Data Consistency Maintenance Techniques in Distributed Systems" },
            publication: { ko: "한국대학교 소프트웨어공학 석사 학위논문", en: "Master's Thesis, Dept. of Software Engineering, Hanguk University" },
            link: "http://sol-link.com/sample-paper-1"
        },
        {
            date: "2020.11",
            title: { ko: "경량 컨테이너 환경에서의 서비스 메쉬 성능 비교 분석", en: "A Comparative Performance Analysis of Service Meshes in Lightweight Container Environments" },
            publication: { ko: "대한정보과학회 추계학술대회", en: "KIPS Fall Conference" },
            link: "http://sol-link.com/sample-paper-2"
        }
    ],
    // 수상 및 자격증
    awards: [
        { date: "2022.08", name: { ko: "AWS Certified Developer – Associate", en: "AWS Certified Developer – Associate" }, issuer: "Amazon Web Services" },
        { date: "2020.05", name: { ko: "정보처리기사", en: "Engineer Information Processing" }, issuer: { ko: "한국산업인력공단", en: "HRD Korea" } },
        { date: "2019.07", name: { ko: "전국 대학생 코딩 챌린지 대상", en: "Grand Prize, National University Coding Challenge" }, issuer: { ko: "코딩 챌린지 조직위원회", en: "Coding Challenge Committee" } }
    ],
    // 기타 UI 텍스트
    uiText: {
        contactButton: { ko: "연락하기", en: "CONTACT ME" },
        contactModalTitle: { ko: "문의하기", en: "Contact Me" },
        formName: { ko: "이름", en: "Name" },
        formEmail: { ko: "이메일", en: "Email" },
        formCompany: { ko: "회사", en: "Company" },
        formMessage: { ko: "메시지", en: "Message" },
        formSubmit: { ko: "보내기", en: "Submit" },
        viewProjectButton: { ko: "프로젝트 보기", en: "View Project" },
        viewPaperButton: { ko: "논문 보기", en: "View Paper" },
        footerText: { ko: "© 2025 홍길동. All Rights Reserved.", en: "© 2025 Gildong Hong. All Rights Reserved." },
        projectModal: {
            description: { ko: "상세 설명", en: "Description" },
            links: { ko: "관련 링크", en: "Links" }
        }
    }
};
