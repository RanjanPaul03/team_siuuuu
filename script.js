// Career assessment questions
const questions = [
    {
        question: "What type of work environment do you prefer?",
        options: [
            "Remote work with flexible hours",
            "Office-based with team collaboration",
            "Hybrid (mix of remote and office)",
            "Field work or travel-based"
        ]
    },
    {
        question: "What are your primary interests?",
        options: [
            "Technology and innovation",
            "Creative arts and design",
            "Business and finance",
            "Healthcare and helping others",
            "Education and research",
            "Engineering and problem-solving"
        ]
    },
    {
        question: "What skills do you enjoy using most?",
        options: [
            "Analytical thinking and data analysis",
            "Creative problem-solving",
            "Communication and leadership",
            "Technical programming/coding",
            "Design and visual creativity",
            "Research and writing"
        ]
    },
    {
        question: "What is your preferred work style?",
        options: [
            "Independent and self-directed",
            "Collaborative team projects",
            "Leading and managing others",
            "Structured and organized tasks",
            "Fast-paced and dynamic",
            "Detail-oriented and methodical"
        ]
    },
    {
        question: "What are your career goals?",
        options: [
            "High salary and financial stability",
            "Work-life balance",
            "Making a positive impact",
            "Continuous learning and growth",
            "Creative freedom",
            "Job security and stability"
        ]
    },
    {
        question: "What level of education are you willing to pursue?",
        options: [
            "High school diploma or equivalent",
            "Associate's degree or certification",
            "Bachelor's degree",
            "Master's degree",
            "Doctorate or professional degree",
            "Open to any level"
        ]
    }
];

// Career paths database
const careerPaths = {
    "Software Developer": {
        description: "Design and develop software applications and systems",
        matchScore: 0,
        skills: ["Programming", "Problem-solving", "Software design", "Version control"],
        roadmap: [
            {
                title: "Foundation (Months 1-3)",
                duration: "3 months",
                description: "Learn programming fundamentals and basic computer science concepts",
                skills: ["HTML/CSS", "JavaScript basics", "Git", "Command line"],
                resources: [
                    "FreeCodeCamp - JavaScript course",
                    "Codecademy - Web Development",
                    "GitHub - Learn Git"
                ]
            },
            {
                title: "Core Skills (Months 4-9)",
                duration: "6 months",
                description: "Master a programming language and build projects",
                skills: ["JavaScript/React", "Node.js", "Databases", "APIs"],
                resources: [
                    "The Odin Project",
                    "Full Stack Open",
                    "Build 3-5 portfolio projects"
                ]
            },
            {
                title: "Specialization (Months 10-15)",
                duration: "6 months",
                description: "Choose a specialization and deepen your expertise",
                skills: ["Advanced frameworks", "System design", "Testing", "DevOps basics"],
                resources: [
                    "Specialized courses in your chosen stack",
                    "Contribute to open source",
                    "Build a complex project"
                ]
            },
            {
                title: "Job Preparation (Months 16-18)",
                duration: "3 months",
                description: "Prepare for interviews and start applying",
                skills: ["Interview prep", "Resume building", "Portfolio website", "Networking"],
                resources: [
                    "LeetCode - Algorithm practice",
                    "Mock interviews",
                    "LinkedIn optimization",
                    "Apply to 50+ positions"
                ]
            }
        ]
    },
    "Data Scientist": {
        description: "Analyze complex data to help organizations make decisions",
        matchScore: 0,
        skills: ["Statistics", "Python", "Machine Learning", "Data visualization"],
        roadmap: [
            {
                title: "Foundation (Months 1-4)",
                duration: "4 months",
                description: "Learn Python, statistics, and data manipulation",
                skills: ["Python", "Pandas", "NumPy", "Basic statistics"],
                resources: [
                    "Python for Data Science - Coursera",
                    "Kaggle Learn - Python",
                    "Statistics Fundamentals course"
                ]
            },
            {
                title: "Data Analysis (Months 5-8)",
                duration: "4 months",
                description: "Master data analysis and visualization",
                skills: ["SQL", "Data visualization", "Exploratory data analysis", "Jupyter notebooks"],
                resources: [
                    "SQL for Data Science",
                    "Matplotlib/Seaborn tutorials",
                    "Complete 5+ Kaggle datasets"
                ]
            },
            {
                title: "Machine Learning (Months 9-14)",
                duration: "6 months",
                description: "Learn machine learning algorithms and models",
                skills: ["Scikit-learn", "Machine learning algorithms", "Model evaluation", "Feature engineering"],
                resources: [
                    "Andrew Ng's ML Course",
                    "Hands-On Machine Learning book",
                    "Build ML projects"
                ]
            },
            {
                title: "Advanced & Portfolio (Months 15-18)",
                duration: "4 months",
                description: "Deep learning and portfolio building",
                skills: ["Deep learning", "TensorFlow/PyTorch", "Deployment", "Portfolio"],
                resources: [
                    "Deep Learning Specialization",
                    "Build 3-5 portfolio projects",
                    "Publish on GitHub",
                    "Start applying to positions"
                ]
            }
        ]
    },
    "UX/UI Designer": {
        description: "Design user experiences and interfaces for digital products",
        matchScore: 0,
        skills: ["Design thinking", "Figma", "User research", "Prototyping"],
        roadmap: [
            {
                title: "Design Fundamentals (Months 1-3)",
                duration: "3 months",
                description: "Learn design principles and tools",
                skills: ["Color theory", "Typography", "Figma basics", "Design principles"],
                resources: [
                    "Google UX Design Certificate",
                    "Figma tutorials",
                    "Design theory courses"
                ]
            },
            {
                title: "UX Research (Months 4-6)",
                duration: "3 months",
                description: "Learn user research and testing methods",
                skills: ["User interviews", "Personas", "User journeys", "Usability testing"],
                resources: [
                    "UX Research courses",
                    "Practice with real projects",
                    "Build case studies"
                ]
            },
            {
                title: "Portfolio Building (Months 7-12)",
                duration: "6 months",
                description: "Create a strong portfolio with real projects",
                skills: ["Prototyping", "Interaction design", "Design systems", "Portfolio"],
                resources: [
                    "Complete 3-5 case studies",
                    "Redesign existing apps",
                    "Build personal brand"
                ]
            },
            {
                title: "Job Search (Months 13-15)",
                duration: "3 months",
                description: "Network and apply to design positions",
                skills: ["Portfolio presentation", "Interview prep", "Networking", "Freelance projects"],
                resources: [
                    "Dribbble/Behance portfolio",
                    "Design communities",
                    "Apply to 30+ positions"
                ]
            }
        ]
    },
    "Digital Marketer": {
        description: "Promote brands and products through digital channels",
        matchScore: 0,
        skills: ["SEO", "Social media", "Content marketing", "Analytics"],
        roadmap: [
            {
                title: "Marketing Fundamentals (Months 1-2)",
                duration: "2 months",
                description: "Learn marketing basics and digital landscape",
                skills: ["Marketing principles", "Digital marketing overview", "Consumer behavior"],
                resources: [
                    "Google Digital Marketing Certificate",
                    "HubSpot Academy",
                    "Marketing blogs"
                ]
            },
            {
                title: "Core Channels (Months 3-6)",
                duration: "4 months",
                description: "Master SEO, social media, and content marketing",
                skills: ["SEO", "Social media marketing", "Content creation", "Email marketing"],
                resources: [
                    "SEO courses",
                    "Social media certifications",
                    "Create content for practice"
                ]
            },
            {
                title: "Analytics & Tools (Months 7-9)",
                duration: "3 months",
                description: "Learn analytics and marketing tools",
                skills: ["Google Analytics", "Facebook Ads", "Marketing automation", "A/B testing"],
                resources: [
                    "Google Analytics certification",
                    "Facebook Blueprint",
                    "Practice with real campaigns"
                ]
            },
            {
                title: "Specialization & Job Search (Months 10-12)",
                duration: "3 months",
                description: "Choose specialization and start job search",
                skills: ["Specialized skills", "Portfolio", "Certifications", "Networking"],
                resources: [
                    "Specialize in one area",
                    "Build portfolio of campaigns",
                    "Get certified",
                    "Apply to positions"
                ]
            }
        ]
    },
    "Product Manager": {
        description: "Lead product development and strategy",
        matchScore: 0,
        skills: ["Product strategy", "Agile/Scrum", "Stakeholder management", "Data analysis"],
        roadmap: [
            {
                title: "Product Fundamentals (Months 1-3)",
                duration: "3 months",
                description: "Learn product management basics",
                skills: ["Product lifecycle", "User research", "Market analysis", "Agile/Scrum"],
                resources: [
                    "Product Management courses",
                    "Read 'Inspired' by Marty Cagan",
                    "Join PM communities"
                ]
            },
            {
                title: "Tools & Frameworks (Months 4-6)",
                duration: "3 months",
                description: "Master PM tools and methodologies",
                skills: ["Jira", "Roadmapping", "Analytics tools", "A/B testing"],
                resources: [
                    "Product management tools training",
                    "Analytics courses",
                    "Practice with case studies"
                ]
            },
            {
                title: "Experience Building (Months 7-12)",
                duration: "6 months",
                description: "Gain experience through projects or internships",
                skills: ["Product strategy", "Feature prioritization", "Stakeholder communication", "Portfolio"],
                resources: [
                    "Work on side projects",
                    "PM internships",
                    "Build product case studies",
                    "Network with PMs"
                ]
            },
            {
                title: "Job Search (Months 13-15)",
                duration: "3 months",
                description: "Prepare for PM interviews",
                skills: ["Case study prep", "Interview skills", "Portfolio", "Networking"],
                resources: [
                    "PM interview prep",
                    "Practice case studies",
                    "LinkedIn networking",
                    "Apply to PM positions"
                ]
            }
        ]
    },
    "Graphic Designer": {
        description: "Create visual concepts to communicate ideas",
        matchScore: 0,
        skills: ["Adobe Creative Suite", "Typography", "Branding", "Layout design"],
        roadmap: [
            {
                title: "Design Basics (Months 1-3)",
                duration: "3 months",
                description: "Learn design principles and software",
                skills: ["Adobe Illustrator", "Adobe Photoshop", "Design principles", "Color theory"],
                resources: [
                    "Adobe tutorials",
                    "Design courses on Skillshare",
                    "Practice daily design challenges"
                ]
            },
            {
                title: "Specialization (Months 4-8)",
                duration: "5 months",
                description: "Choose and master a design specialization",
                skills: ["Branding", "Print design", "Digital design", "Typography"],
                resources: [
                    "Specialized design courses",
                    "Study design trends",
                    "Create personal projects"
                ]
            },
            {
                title: "Portfolio Development (Months 9-12)",
                duration: "4 months",
                description: "Build a professional portfolio",
                skills: ["Portfolio design", "Case studies", "Client work", "Personal brand"],
                resources: [
                    "Build 10-15 portfolio pieces",
                    "Take on freelance projects",
                    "Create Behance/Dribbble profile"
                ]
            },
            {
                title: "Career Launch (Months 13-15)",
                duration: "3 months",
                description: "Network and apply to design positions",
                skills: ["Networking", "Interview prep", "Portfolio presentation", "Freelance"],
                resources: [
                    "Design communities",
                    "Attend design events",
                    "Apply to 40+ positions",
                    "Consider freelance"
                ]
            }
        ]
    }
};

let currentQuestion = 0;
let answers = [];
let selectedCareers = [];

// Initialize the assessment
function initAssessment() {
    currentQuestion = 0;
    answers = [];
    selectedCareers = [];
    updateProgress();
    showQuestion();
}

// Show current question
function showQuestion() {
    const container = document.getElementById('question-container');
    const question = questions[currentQuestion];
    
    container.innerHTML = `
        <div class="question-card">
            <h3 class="question-title">Question ${currentQuestion + 1} of ${questions.length}</h3>
            <h4 class="question-title">${question.question}</h4>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectOption(${index})">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="navigation-buttons">
                ${currentQuestion > 0 ? `<button class="btn btn-secondary" onclick="previousQuestion()">Previous</button>` : '<div></div>'}
                ${currentQuestion < questions.length - 1 ? `<button class="btn btn-primary" onclick="nextQuestion()" id="next-btn" disabled>Next</button>` : `<button class="btn btn-primary" onclick="showResults()" id="submit-btn" disabled>See Results</button>`}
            </div>
        </div>
    `;
}

// Select an option
function selectOption(index) {
    // Remove previous selection
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Mark selected option
    event.target.classList.add('selected');
    answers[currentQuestion] = index;
    
    // Enable next/submit button
    const nextBtn = document.getElementById('next-btn') || document.getElementById('submit-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateProgress();
        showQuestion();
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateProgress();
        showQuestion();
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Calculate career matches based on answers
function calculateMatches() {
    // Reset match scores
    Object.keys(careerPaths).forEach(career => {
        careerPaths[career].matchScore = 0;
    });
    
    // Simple matching algorithm based on answer patterns
    // Question 0: Work environment
    if (answers[0] === 0 || answers[0] === 2) {
        careerPaths["Software Developer"].matchScore += 2;
        careerPaths["Data Scientist"].matchScore += 2;
        careerPaths["UX/UI Designer"].matchScore += 2;
    }
    
    // Question 1: Interests
    if (answers[1] === 0) {
        careerPaths["Software Developer"].matchScore += 3;
        careerPaths["Data Scientist"].matchScore += 3;
    } else if (answers[1] === 1) {
        careerPaths["UX/UI Designer"].matchScore += 3;
        careerPaths["Graphic Designer"].matchScore += 3;
    } else if (answers[1] === 2) {
        careerPaths["Product Manager"].matchScore += 3;
        careerPaths["Digital Marketer"].matchScore += 2;
    }
    
    // Question 2: Skills
    if (answers[2] === 0) {
        careerPaths["Data Scientist"].matchScore += 3;
        careerPaths["Product Manager"].matchScore += 2;
    } else if (answers[2] === 1) {
        careerPaths["UX/UI Designer"].matchScore += 3;
        careerPaths["Graphic Designer"].matchScore += 2;
    } else if (answers[2] === 3) {
        careerPaths["Software Developer"].matchScore += 3;
    } else if (answers[2] === 4) {
        careerPaths["Graphic Designer"].matchScore += 3;
        careerPaths["UX/UI Designer"].matchScore += 2;
    }
    
    // Question 3: Work style
    if (answers[3] === 0) {
        careerPaths["Software Developer"].matchScore += 2;
        careerPaths["Data Scientist"].matchScore += 2;
    } else if (answers[3] === 1) {
        careerPaths["UX/UI Designer"].matchScore += 2;
        careerPaths["Product Manager"].matchScore += 2;
    } else if (answers[3] === 2) {
        careerPaths["Product Manager"].matchScore += 3;
    }
    
    // Question 4: Career goals
    if (answers[4] === 0) {
        careerPaths["Software Developer"].matchScore += 2;
        careerPaths["Product Manager"].matchScore += 2;
    } else if (answers[4] === 2) {
        careerPaths["Digital Marketer"].matchScore += 2;
    } else if (answers[4] === 3) {
        careerPaths["Data Scientist"].matchScore += 2;
        careerPaths["Software Developer"].matchScore += 2;
    }
    
    // Question 5: Education
    // All careers can work with various education levels
    
    // Sort careers by match score
    selectedCareers = Object.keys(careerPaths)
        .map(career => ({
            name: career,
            ...careerPaths[career]
        }))
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 4); // Top 4 matches
}

// Show results
function showResults() {
    calculateMatches();
    
    const questionContainer = document.getElementById('question-container');
    const resultsContainer = document.getElementById('results-container');
    
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const resultsHTML = selectedCareers.map((career, index) => {
        const percentage = Math.min(95, 60 + (career.matchScore * 5));
        return `
            <div class="career-card" onclick="selectCareerForRoadmap('${career.name}')">
                <h4>${career.name}</h4>
                <p>${career.description}</p>
                <span class="match-score">${percentage}% Match</span>
            </div>
        `;
    }).join('');
    
    document.getElementById('career-results').innerHTML = resultsHTML;
    
    // Populate career select dropdown
    const careerSelect = document.getElementById('career-select');
    careerSelect.innerHTML = '<option value="">Select a career path...</option>' +
        Object.keys(careerPaths).map(career => 
            `<option value="${career}">${career}</option>`
        ).join('');
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Select career for roadmap
function selectCareerForRoadmap(careerName) {
    document.getElementById('career-select').value = careerName;
    scrollToRoadmap();
}

// Generate roadmap
function generateRoadmap() {
    const careerName = document.getElementById('career-select').value;
    
    if (!careerName || !careerPaths[careerName]) {
        alert('Please select a career path');
        return;
    }
    
    const career = careerPaths[careerName];
    const roadmapContainer = document.getElementById('roadmap-container');
    const roadmapTimeline = document.querySelector('.roadmap-timeline');
    
    roadmapContainer.classList.remove('hidden');
    
    const roadmapHTML = career.roadmap.map((step, index) => `
        <div class="roadmap-step">
            <div class="step-header">
                <h3 class="step-title">${step.title}</h3>
                <span class="step-duration">${step.duration}</span>
            </div>
            <p class="step-description">${step.description}</p>
            <div class="step-skills">
                ${step.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="step-resources">
                <h5>Recommended Resources:</h5>
                <ul>
                    ${step.resources.map(resource => `<li>• ${resource}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    
    roadmapTimeline.innerHTML = roadmapHTML;
    
    // Scroll to roadmap
    roadmapContainer.scrollIntoView({ behavior: 'smooth' });
}

// Scroll functions
function scrollToDiscover() {
    document.getElementById('discover').scrollIntoView({ behavior: 'smooth' });
    setTimeout(initAssessment, 500);
}

function scrollToRoadmap() {
    document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Generate roadmap button
    document.getElementById('generate-roadmap').addEventListener('click', generateRoadmap);
    
    // Initialize assessment when page loads
    initAssessment();
});
