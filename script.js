// Awards Navigation
function scrollAwards(direction) {
    const awardsGrid = document.querySelector('.awards-grid');
    if (!awardsGrid) return;
    
    const scrollAmount = 300;
    const currentScroll = awardsGrid.scrollLeft;
    
    if (direction === 'left') {
        awardsGrid.scrollTo({
            left: currentScroll - scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        awardsGrid.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Ultimate India Career Dataset
const indiaCareerData = {
  streams: {
    pcm: {
      name: "Science PCM",
      careers: [
        "Software Developer", "AI Engineer", "ML Engineer", "Data Scientist", 
        "Full Stack Developer", "Cloud Engineer", "Cybersecurity Expert", 
        "Ethical Hacker", "Mechanical Engineer", "Civil Engineer", 
        "Electrical Engineer", "Electronics Engineer", "Chemical Engineer", 
        "Mining Engineer", "Architect", "Aviation", "Defence (NDA)"
      ],
      exams: [
        "JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE", 
        "COMEDK", "MHT-CET", "WBJEE", "AP EAMCET", "TS EAMCET", "NDA"
      ]
    },
    pcb: {
      name: "Science PCB",
      careers: [
        "Doctor (MBBS)", "Dentist (BDS)", "BAMS", "BHMS", "Nursing", 
        "Pharmacy", "Physiotherapy", "Biotechnology", "Microbiology", 
        "Lab Technician", "Radiologist", "Optometrist", "Biotech Scientist"
      ],
      exams: [
        "NEET", "AIIMS Nursing", "JIPMER", "CMC Entrance", "State Medical CETs"
      ]
    },
    commerce: {
      name: "Commerce",
      careers: [
        "Chartered Accountant (CA)", "Company Secretary (CS)", "CMA", 
        "Banking Executive", "Investment Banker", "Financial Analyst", 
        "Accountant", "Economist", "B.Com", "BBA", "Stock Market Analyst"
      ],
      exams: [
        "CA Foundation", "CS Foundation", "CMA Foundation", "DU JAT", 
        "IPMAT", "CUET Commerce", "Banking PO Exams (SBI PO, IBPS PO)"
      ]
    },
    arts: {
      name: "Arts/Humanities",
      careers: [
        "Lawyer", "Journalist", "UPSC Aspirant", "Teacher", "Psychologist", 
        "Fashion Designer", "Interior Designer", "Social Worker", 
        "Graphic Designer", "UI/UX Designer", "Video Editor", "Photographer", 
        "Animator", "Content Creator", "Digital Marketer", "Game Designer", 
        "Hotel Management"
      ],
      exams: [
        "CLAT", "AILET", "NIFT", "NID", "CUET Arts", "NCHMCT JEE", 
        "BFA Entrance", "UPSC CSE", "TET/CTET"
      ]
    }
  },
  
  careers: {
    // Engineering Careers
    "Software Developer": {
      stream: "pcm",
      description: "Design and develop software applications and systems for various platforms and industries.",
      exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE"],
      colleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIIT Hyderabad", "NIT Trichy", "BITS Pilani"],
      roadmap: [
        { title: "11-12 PCM", description: "Focus on Mathematics, Physics, Chemistry. Prepare for JEE Main/Advanced. Build programming foundation with Python/Java.", skills: ["Mathematics", "Physics", "Chemistry", "Programming Basics"], resources: ["JEE Coaching", "Online Programming Courses", "Practice Coding"] },
        { title: "JEE Preparation", description: "Clear JEE Main → JEE Advanced → Get admission in top engineering colleges (IITs/NITs/IIITs)", skills: ["Problem Solving", "Time Management", "Test Strategy"], resources: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE"] },
        { title: "B.Tech (CSE/IT)", description: "Learn: C/Python → DSA → Web Dev → Projects → Internship. Build portfolio with real projects.", skills: ["Data Structures", "Algorithms", "Web Development", "Database Management"], resources: ["Coursera", "LeetCode", "GitHub Projects", "Internships"] },
        { title: "Job/Placement", description: "Campus placement or apply to tech companies. Build portfolio with projects. Prepare for technical interviews.", skills: ["System Design", "Interview Prep", "Portfolio Building"], resources: ["Campus Placements", "LinkedIn", "Tech Companies", "Startups"] }
      ]
    },
    "AI Engineer": {
      stream: "pcm",
      description: "Develop artificial intelligence systems and machine learning models for various applications.",
      exams: ["JEE Main", "JEE Advanced", "BITSAT"],
      colleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIIT Hyderabad", "IIT Hyderabad"],
      roadmap: [
        { title: "11-12 PCM", description: "Strong foundation in Mathematics and Physics. Start learning Python basics.", skills: ["Mathematics", "Physics", "Python Basics"], resources: ["Python Tutorials", "Math Practice"] },
        { title: "JEE → B.Tech", description: "Get into top engineering college (CSE/AI specialization). Focus on AI/ML courses.", skills: ["Machine Learning", "Deep Learning", "Statistics"], resources: ["IITs", "IIITs", "AI Specialization"] },
        { title: "Learn AI/ML", description: "Python → Maths → ML → DL → Kaggle Projects → Internship. Build AI projects.", skills: ["TensorFlow", "PyTorch", "Neural Networks", "NLP"], resources: ["Kaggle", "Coursera ML", "Research Papers", "Internships"] },
        { title: "Career", description: "AI Engineer, ML Engineer, Data Scientist roles in tech companies and research labs.", skills: ["Model Deployment", "Research", "Industry Experience"], resources: ["Tech Companies", "Research Labs", "Startups"] }
      ]
    },
    "Mechanical Engineer": {
      stream: "pcm",
      description: "Design, develop, and maintain mechanical systems and machinery.",
      exams: ["JEE Main", "JEE Advanced", "BITSAT", "MHT-CET"],
      colleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "NIT Trichy", "BITS Pilani"],
      roadmap: [
        { title: "11-12 PCM", description: "Strong foundation in Physics and Mathematics. Prepare for JEE.", skills: ["Physics", "Mathematics", "Chemistry"], resources: ["JEE Coaching"] },
        { title: "JEE → B.Tech", description: "Get admission in Mechanical Engineering program at top colleges.", skills: ["Engineering Drawing", "Thermodynamics"], resources: ["JEE Main", "JEE Advanced"] },
        { title: "B.Tech Mechanical", description: "Learn: Design → Manufacturing → CAD/CAM → Projects → Internship", skills: ["CAD", "Manufacturing", "Design", "Automation"], resources: ["Industry Internships", "Projects", "Workshops"] },
        { title: "Career", description: "Mechanical Engineer in manufacturing, automotive, aerospace, or design firms.", skills: ["Industry Knowledge", "Problem Solving"], resources: ["Core Companies", "Automotive", "Aerospace"] }
      ]
    },
    "Architect": {
      stream: "pcm",
      description: "Design buildings and structures, combining creativity with technical knowledge.",
      exams: ["JEE Main", "NATA", "JEE Paper 2"],
      colleges: ["IIT Kharagpur", "SPA Delhi", "CEPT Ahmedabad", "NIT Trichy"],
      roadmap: [
        { title: "11-12 PCM", description: "Strong in Mathematics and Physics. Develop drawing and design skills.", skills: ["Mathematics", "Drawing", "Design Sense"], resources: ["NATA Coaching", "Drawing Practice"] },
        { title: "NATA/JEE Paper 2", description: "Clear NATA or JEE Paper 2 for admission in architecture colleges.", skills: ["Drawing", "Aptitude", "Mathematics"], resources: ["NATA", "JEE Paper 2"] },
        { title: "B.Arch (5 years)", description: "Learn: Design → CAD → Building Technology → Internship → Thesis", skills: ["AutoCAD", "Revit", "Design", "Construction"], resources: ["Architecture Colleges", "Internships", "Design Competitions"] },
        { title: "Career", description: "Architect in firms, start own practice, or work in urban planning.", skills: ["Design Portfolio", "Client Management"], resources: ["Architecture Firms", "Government", "Private Practice"] }
      ]
    },
    "Doctor (MBBS)": {
      stream: "pcb",
      description: "Medical practitioner providing healthcare services and treatment to patients.",
      exams: ["NEET"],
      colleges: ["AIIMS Delhi", "CMC Vellore", "JIPMER Puducherry", "AFMC Pune", "KMC Manipal"],
      roadmap: [
        { title: "11-12 PCB", description: "Focus on Biology, Chemistry, Physics. Strong NEET preparation with regular practice.", skills: ["Biology", "Chemistry", "Physics"], resources: ["NEET Coaching", "NCERT Books", "Practice Tests"] },
        { title: "NEET Exam", description: "Clear NEET with good rank (aim for <5000 rank for top colleges). Minimum 50th percentile required.", skills: ["Time Management", "Concept Clarity", "Practice"], resources: ["NEET", "Mock Tests", "Previous Papers"] },
        { title: "MBBS (5.5 years)", description: "4.5 years study + 1 year clinical internship. Learn anatomy, physiology, pathology, medicine, surgery.", skills: ["Medical Knowledge", "Clinical Skills", "Patient Care"], resources: ["Medical Colleges", "Hospitals", "Internships"] },
        { title: "Practice/PG", description: "Start practice or pursue PG (MD/MS) for specialization in specific medical field.", skills: ["Specialization", "Research", "Clinical Practice"], resources: ["PG Entrance", "Hospitals", "Private Practice"] }
      ]
    },
    "Dentist (BDS)": {
      stream: "pcb",
      description: "Dental care professional specializing in oral health and dental treatments.",
      exams: ["NEET"],
      colleges: ["Maulana Azad Dental College", "Manipal College", "SRM Dental College"],
      roadmap: [
        { title: "11-12 PCB", description: "Strong foundation in Biology and Chemistry. Prepare for NEET.", skills: ["Biology", "Chemistry"], resources: ["NEET Coaching"] },
        { title: "NEET", description: "Clear NEET for admission in dental colleges.", skills: ["NEET Preparation"], resources: ["NEET"] },
        { title: "BDS (5 years)", description: "Learn dental procedures, oral health, and patient care.", skills: ["Dental Procedures", "Oral Health"], resources: ["Dental Colleges"] },
        { title: "Career", description: "Dentist in clinics, hospitals, or start own practice.", skills: ["Clinical Skills"], resources: ["Dental Clinics", "Hospitals"] }
      ]
    },
    "Chartered Accountant (CA)": {
      stream: "commerce",
      description: "Financial expert providing accounting, auditing, and tax services to individuals and businesses.",
      exams: ["CA Foundation", "CA Intermediate", "CA Final"],
      colleges: ["SRCC", "Hindu College", "St Xavier's Mumbai", "Christ University"],
      roadmap: [
        { title: "11-12 Commerce", description: "Strong foundation in Accountancy, Business Studies, Economics. Excel in mathematics.", skills: ["Accountancy", "Business Studies", "Economics"], resources: ["Commerce Coaching", "CA Foundation Prep"] },
        { title: "CA Foundation", description: "Clear CA Foundation exam after 12th. Register with ICAI.", skills: ["Accounting", "Law", "Economics", "Maths"], resources: ["ICAI", "CA Coaching", "Study Material"] },
        { title: "CA Intermediate + Articleship", description: "Clear Intermediate → 3 years articleship training with practicing CA.", skills: ["Auditing", "Taxation", "Practical Training"], resources: ["Articleship", "ICAI", "Practical Training"] },
        { title: "CA Final", description: "Clear CA Final → Become Chartered Accountant. Can work in firms or start practice.", skills: ["Advanced Accounting", "Auditing", "Taxation"], resources: ["CA Final", "ICAI", "Professional Practice"] }
      ]
    },
    "Banking Executive": {
      stream: "commerce",
      description: "Probationary Officer or banking professional in public/private sector banks.",
      exams: ["SBI PO", "IBPS PO", "RBI Grade B"],
      colleges: ["Any Graduation", "SRCC", "Hindu College", "B.Com/BBA"],
      roadmap: [
        { title: "Graduation", description: "Complete any Bachelor's degree (B.Com/BBA preferred). Maintain good academics.", skills: ["Graduation", "General Knowledge"], resources: ["B.Com", "BBA", "Any Graduation"] },
        { title: "Aptitude Prep", description: "Quantitative Aptitude, Reasoning, English, General Awareness. Practice mock tests.", skills: ["Quantitative Aptitude", "Reasoning", "English", "GK"], resources: ["Banking Coaching", "Mock Tests", "Previous Papers"] },
        { title: "Banking Exams", description: "Prelims → Mains → Interview → Get selected as PO/Executive.", skills: ["Exam Strategy", "Interview Skills"], resources: ["SBI PO", "IBPS PO", "RBI Grade B"] },
        { title: "Career Growth", description: "PO → Manager → Senior Manager → AGM → DGM. Can specialize in different banking areas.", skills: ["Banking Operations", "Customer Service"], resources: ["Banking Sector", "Promotions"] }
      ]
    },
    "Lawyer": {
      stream: "arts",
      description: "Legal professional providing legal advice and representation in courts.",
      exams: ["CLAT", "AILET"],
      colleges: ["NLSIU Bangalore", "NLU Delhi", "NLU Hyderabad", "NLU Jodhpur"],
      roadmap: [
        { title: "11-12 Arts", description: "Strong in English, History, Political Science. Develop logical reasoning and communication skills.", skills: ["English", "History", "Political Science", "Logic"], resources: ["CLAT Coaching", "Reading", "Debate"] },
        { title: "CLAT Exam", description: "Clear CLAT for admission in top law colleges (NLUs). Focus on legal aptitude and reasoning.", skills: ["Legal Aptitude", "Reasoning", "English"], resources: ["CLAT", "AILET", "Mock Tests"] },
        { title: "LLB (5 years)", description: "BA LLB or BBA LLB integrated course. Learn constitutional law, criminal law, corporate law.", skills: ["Legal Research", "Mooting", "Legal Writing"], resources: ["Law Colleges", "Internships", "Moot Courts"] },
        { title: "Court Internship", description: "Internship with lawyers/judges → Practice law. Can specialize in corporate, criminal, or civil law.", skills: ["Court Practice", "Client Management"], resources: ["Law Firms", "Courts", "Legal Practice"] }
      ]
    },
    "UPSC Aspirant": {
      stream: "arts",
      description: "Civil services officer (IAS, IPS, IFS, IRS) serving the nation through administrative roles.",
      exams: ["UPSC CSE"],
      colleges: ["Any Graduation", "JNU", "Presidency University", "DU"],
      roadmap: [
        { title: "Graduation", description: "Complete any Bachelor's degree (Arts preferred: History, Polity, Geography). Maintain good academics.", skills: ["History", "Geography", "Polity", "Current Affairs"], resources: ["Graduation", "Reading", "Newspapers"] },
        { title: "UPSC Preparation", description: "Prelims → Mains → Interview preparation (1-2 years). Comprehensive study of all subjects.", skills: ["Comprehensive Study", "Answer Writing", "Current Affairs"], resources: ["UPSC Coaching", "NCERT Books", "Current Affairs"] },
        { title: "UPSC CSE", description: "Clear Prelims → Mains → Interview → Get selected. Choose optional subject wisely.", skills: ["Strategy", "Time Management", "Answer Writing"], resources: ["UPSC CSE", "Mock Tests", "Previous Papers"] },
        { title: "Training & Service", description: "LBSNAA training → Join as IAS/IPS/IFS/IRS. Serve in various administrative roles.", skills: ["Administration", "Leadership"], resources: ["LBSNAA", "Government Service"] }
      ]
    },
    "UI/UX Designer": {
      stream: "arts",
      description: "Design user interfaces and experiences for digital products and applications.",
      exams: ["NIFT", "NID", "BFA Entrance"],
      colleges: ["NIFT", "NID", "Pearl Academy", "UID"],
      roadmap: [
        { title: "12th Arts", description: "Strong in Arts, Design, Creativity. Develop visual design skills.", skills: ["Design Sense", "Creativity", "Visual Arts"], resources: ["Design Courses", "Art Practice"] },
        { title: "Design Entrance", description: "Clear NIFT/NID/BFA entrance exams for design colleges.", skills: ["Design Aptitude", "Drawing"], resources: ["NIFT", "NID", "BFA Entrance"] },
        { title: "B.Des/BFA", description: "Learn: Figma → Design Theory → Portfolio → Internship. Build design portfolio.", skills: ["Figma", "Design Theory", "Prototyping"], resources: ["Design Colleges", "Internships", "Portfolio"] },
        { title: "Career", description: "UI/UX Designer, Graphic Designer, Product Designer in tech companies and design agencies.", skills: ["User Research", "Prototyping", "Design Systems"], resources: ["Tech Companies", "Design Agencies", "Startups"] }
      ]
    },
    "Data Scientist": {
      stream: "pcm",
      description: "Analyze complex data to extract insights and help organizations make data-driven decisions.",
      exams: ["JEE Main", "JEE Advanced", "BITSAT"],
      colleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIIT Hyderabad"],
      roadmap: [
        { title: "11-12 PCM", description: "Strong foundation in Mathematics and Statistics. Learn Python basics.", skills: ["Mathematics", "Statistics", "Python"], resources: ["Python Tutorials", "Math Practice"] },
        { title: "JEE → B.Tech", description: "Get into top engineering college (CSE/IT/Data Science). Focus on data science courses.", skills: ["Programming", "Statistics", "Data Analysis"], resources: ["IITs", "IIITs", "Data Science Courses"] },
        { title: "Learn Data Science", description: "Python → Pandas → ML → Statistics → Projects → Kaggle → Internship", skills: ["Machine Learning", "Data Visualization", "SQL", "Statistics"], resources: ["Kaggle", "Coursera", "Data Science Projects"] },
        { title: "Career", description: "Data Scientist, Data Analyst, ML Engineer in tech companies, startups, and research.", skills: ["Data Analysis", "ML Models", "Business Intelligence"], resources: ["Tech Companies", "Startups", "Research Labs"] }
      ]
    },
    "Civil Engineer": {
      stream: "pcm",
      description: "Design and construct infrastructure projects like buildings, roads, bridges, and dams.",
      exams: ["JEE Main", "JEE Advanced", "BITSAT", "MHT-CET"],
      colleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "NIT Trichy"],
      roadmap: [
        { title: "11-12 PCM", description: "Strong in Physics and Mathematics. Prepare for JEE.", skills: ["Physics", "Mathematics", "Chemistry"], resources: ["JEE Coaching"] },
        { title: "JEE → B.Tech", description: "Get admission in Civil Engineering program at top colleges.", skills: ["Engineering Drawing", "Structural Analysis"], resources: ["JEE Main", "JEE Advanced"] },
        { title: "B.Tech Civil", description: "Learn: Structural Design → Construction → Surveying → Projects → Internship", skills: ["AutoCAD", "Structural Design", "Construction", "Surveying"], resources: ["Industry Internships", "Projects", "Site Visits"] },
        { title: "Career", description: "Civil Engineer in construction companies, government projects, or infrastructure firms.", skills: ["Project Management", "Design", "Construction"], resources: ["Construction Companies", "Government", "Infrastructure"] }
      ]
    },
    "Company Secretary (CS)": {
      stream: "commerce",
      description: "Corporate governance expert ensuring legal compliance and corporate secretarial functions.",
      exams: ["CS Foundation", "CS Executive", "CS Professional"],
      colleges: ["ICSI", "SRCC", "Hindu College"],
      roadmap: [
        { title: "11-12 Commerce", description: "Strong foundation in Commerce subjects. Prepare for CS Foundation.", skills: ["Accountancy", "Business Studies", "Economics"], resources: ["CS Foundation Prep"] },
        { title: "CS Foundation", description: "Clear CS Foundation exam. Register with ICSI.", skills: ["Business Law", "Economics", "Accountancy"], resources: ["ICSI", "CS Coaching"] },
        { title: "CS Executive + Training", description: "Clear CS Executive → Practical training → CS Professional", skills: ["Corporate Law", "Secretarial Practice", "Compliance"], resources: ["ICSI", "Practical Training"] },
        { title: "Career", description: "Company Secretary in corporates, law firms, or start own practice.", skills: ["Corporate Governance", "Compliance", "Legal"], resources: ["Corporates", "Law Firms", "Practice"] }
      ]
    },
    "Journalist": {
      stream: "arts",
      description: "News reporter and media professional covering events and creating content for various media platforms.",
      exams: ["CUET Arts", "Mass Communication Entrance"],
      colleges: ["Jamia Millia", "DU", "Xavier's", "Symbiosis"],
      roadmap: [
        { title: "11-12 Arts", description: "Strong in English, History, Current Affairs. Develop writing and communication skills.", skills: ["English", "Writing", "Current Affairs"], resources: ["Reading", "Writing Practice", "Newspapers"] },
        { title: "Entrance Exams", description: "Clear CUET or Mass Communication entrance exams.", skills: ["General Knowledge", "English", "Aptitude"], resources: ["CUET", "Mass Comm Entrances"] },
        { title: "BA Journalism/Mass Comm", description: "Learn: Reporting → Editing → Media Production → Internship", skills: ["Reporting", "Editing", "Video Production", "Writing"], resources: ["Journalism Colleges", "Media Internships"] },
        { title: "Career", description: "Journalist in newspapers, TV channels, digital media, or freelance journalism.", skills: ["News Reporting", "Content Creation", "Media Production"], resources: ["Media Houses", "TV Channels", "Digital Media"] }
      ]
    }
  },
  
  colleges: {
    engineering: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Hyderabad", "IIT Guwahati", "NIT Trichy", "NIT Surathkal", "NIT Warangal", "IIIT Hyderabad", "IIIT Delhi", "BITS Pilani"],
    medical: ["AIIMS Delhi", "CMC Vellore", "JIPMER Puducherry", "AFMC Pune", "PGI Chandigarh", "KMC Manipal"],
    commerce: ["SRCC", "Hindu College", "Hansraj College", "St Xavier's Mumbai", "Christ University", "NMIMS"],
    arts: ["LSR", "St Stephen's", "Miranda House", "JNU", "Presidency University"],
    law: ["NLSIU Bangalore", "NLU Delhi", "NLU Hyderabad", "NLU Jodhpur"],
    design: ["NIFT", "NID", "Pearl Academy", "UID"]
  }
};

// Handle stream selection
function handleStreamSelection() {
  const streamSelect = document.getElementById('stream-select');
  const careerSelect = document.getElementById('career-select');
  
  if (!streamSelect || !careerSelect) return;
  
  streamSelect.addEventListener('change', function() {
    const selectedStream = this.value;
    careerSelect.innerHTML = '<option value="">First select a stream...</option>';
    
    if (selectedStream && indiaCareerData.streams[selectedStream]) {
      const streamData = indiaCareerData.streams[selectedStream];
      streamData.careers.forEach(career => {
        const option = document.createElement('option');
        option.value = career;
        option.textContent = career;
        careerSelect.appendChild(option);
      });
    }
  });
}

// Generate roadmap function
function generateRoadmap() {
  const streamSelect = document.getElementById('stream-select');
  const careerSelect = document.getElementById('career-select');
  const roadmapContainer = document.getElementById('roadmap-container');
  const careerInfo = document.getElementById('career-info');
  const examInfo = document.getElementById('exam-info');
  const collegeInfo = document.getElementById('college-info');
  const roadmapTimeline = document.querySelector('.roadmap-timeline');
  
  if (!streamSelect || !careerSelect || !roadmapContainer) return;
  
  const selectedStream = streamSelect.value;
  const selectedCareer = careerSelect.value;
  
  if (!selectedStream) {
    alert('Please select a stream first!');
    return;
  }
  
  if (!selectedCareer) {
    alert('Please select a career path!');
    return;
  }
  
  // Get career data
  const careerData = indiaCareerData.careers[selectedCareer];
  const streamData = indiaCareerData.streams[selectedStream];
  
  if (!careerData) {
    alert('Career information not found. Please try another career.');
    return;
  }
  
  // Show container
  roadmapContainer.classList.remove('hidden');
  
  // Display career information
  if (careerInfo) {
    careerInfo.innerHTML = `
      <div class="info-card">
        <h3>${selectedCareer}</h3>
        <p><strong>Stream:</strong> ${streamData.name}</p>
        <p><strong>Description:</strong> ${careerData.description || 'Career path information'}</p>
      </div>
    `;
  }
  
  // Display exam information
  const exams = careerData.exams || streamData.exams || [];
  if (examInfo) {
    examInfo.innerHTML = `
      <div class="info-card">
        <h3>Entrance Exams</h3>
        <div class="exam-list">
          ${exams.map(exam => `<span class="exam-tag">${exam}</span>`).join('')}
        </div>
        <p class="info-note"><strong>Note:</strong> Prepare well for these exams to get admission in top colleges.</p>
      </div>
    `;
  }
  
  // Display college information
  let colleges = [];
  if (careerData.colleges) {
    colleges = careerData.colleges;
  } else if (selectedStream === 'pcm') {
    colleges = indiaCareerData.colleges.engineering;
  } else if (selectedStream === 'pcb') {
    colleges = indiaCareerData.colleges.medical;
  } else if (selectedStream === 'commerce') {
    colleges = indiaCareerData.colleges.commerce;
  } else if (selectedStream === 'arts') {
    colleges = [...indiaCareerData.colleges.arts, ...indiaCareerData.colleges.law, ...indiaCareerData.colleges.design];
  }
  
  if (collegeInfo) {
    collegeInfo.innerHTML = `
      <div class="info-card">
        <h3>Top Colleges</h3>
        <ul class="college-list">
          ${colleges.map(college => `<li>${college}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  // Display roadmap
  const roadmap = careerData.roadmap || [];
  if (roadmapTimeline) {
    if (roadmap.length === 0) {
      roadmapTimeline.innerHTML = `
        <div class="roadmap-step">
          <div class="step-header">
            <h4 class="step-title">${streamData.name} Roadmap</h4>
          </div>
          <p class="step-description">Follow the stream-specific roadmap for ${selectedCareer} career path.</p>
        </div>
      `;
    } else {
      const roadmapHTML = roadmap.map((step, index) => `
        <div class="roadmap-step">
          <div class="step-header">
            <h4 class="step-title">${step.title || `Step ${index + 1}`}</h4>
          </div>
          <p class="step-description">${step.description}</p>
          ${step.skills ? `
            <div class="step-skills">
              ${step.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          ` : ''}
          ${step.resources ? `
            <div class="step-resources">
              <h5>Recommended Resources:</h5>
              <ul>
                ${step.resources.map(resource => `<li>• ${resource}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `).join('');
      roadmapTimeline.innerHTML = roadmapHTML;
    }
  }
  
  // Scroll to roadmap
  roadmapContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Scroll to Discover section
function scrollToDiscover() {
    const discoverSection = document.querySelector('#discover');
    if (discoverSection) {
        discoverSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to Explore section
function scrollToExplore() {
    const exploreSection = document.querySelector('#explore');
    if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle Explore button click - scroll to roadmap and auto-fill stream
function handleExploreClick(stream) {
    // Scroll to roadmap section
    const roadmapSection = document.querySelector('#roadmap');
    if (roadmapSection) {
        roadmapSection.scrollIntoView({ behavior: 'smooth' });
        
        // Auto-fill stream selection after scroll
        setTimeout(() => {
            const streamSelect = document.getElementById('stream-select');
            const careerSelect = document.getElementById('career-select');
            
            if (streamSelect) {
                streamSelect.value = stream;
                
                // Trigger change event to populate career options
                const changeEvent = new Event('change', { bubbles: true });
                streamSelect.dispatchEvent(changeEvent);
                
                // Also manually update career dropdown if event doesn't work
                if (careerSelect && indiaCareerData.streams[stream]) {
                    const streamData = indiaCareerData.streams[stream];
                    careerSelect.innerHTML = '<option value="">First select a stream...</option>';
                    streamData.careers.forEach(career => {
                        const option = document.createElement('option');
                        option.value = career;
                        option.textContent = career;
                        careerSelect.appendChild(option);
                    });
                }
            }
        }, 500); // Wait for scroll to complete
    }
}

// Initialize when DOM is loaded
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
    
    // Handle stream selection
    handleStreamSelection();
    
    // Discover section "Get Started" button - scroll to explore
    const discoverGetStartedBtn = document.getElementById('discover-get-started');
    if (discoverGetStartedBtn) {
        discoverGetStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToExplore();
        });
    }
    
    // Roadmap section "Generate Roadmap" button
    const roadmapGenerateBtn = document.getElementById('generate-roadmap');
    if (roadmapGenerateBtn) {
        roadmapGenerateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateRoadmap();
        });
    }
    
    // Add shadow-lg variable if missing
    if (!document.documentElement.style.getPropertyValue('--shadow-xl')) {
        document.documentElement.style.setProperty('--shadow-xl', '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)');
    }
    
    // Initialize chat widget
    initChatWidget();
});

// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyApFp2isVRFw_1RerDfel42WPvUetqfzzw';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// Chat Widget Functions
let chatHistory = [];

function initChatWidget() {
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    
    if (chatInput && chatSendBtn) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        chatSendBtn.addEventListener('click', sendMessage);
    }
}

function toggleChatWidget() {
    const chatWidget = document.getElementById('chat-widget');
    const chatButton = document.getElementById('chat-button');
    
    if (chatWidget && chatButton) {
        if (chatWidget.classList.contains('hidden')) {
            chatWidget.classList.remove('hidden');
            chatWidget.classList.add('show');
            chatButton.classList.add('hidden');
        } else {
            chatWidget.classList.remove('show');
            chatWidget.classList.add('hidden');
            chatButton.classList.remove('hidden');
        }
    }
}

function toggleChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatToggle = document.getElementById('chat-toggle');
    const chatButton = document.getElementById('chat-button');
    
    if (chatWidget) {
        chatWidget.classList.toggle('collapsed');
        if (chatWidget.classList.contains('collapsed')) {
            chatToggle.textContent = '+';
        } else {
            chatToggle.textContent = '−';
        }
    }
}

function closeChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatButton = document.getElementById('chat-button');
    
    if (chatWidget && chatButton) {
        chatWidget.classList.remove('show');
        chatWidget.classList.add('hidden');
        chatButton.classList.remove('hidden');
    }
}

function addMessage(content, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'assistant-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? '👤' : '🤖';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    messageContent.appendChild(paragraph);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant-message';
    typingDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';
    
    const typingContent = document.createElement('div');
    typingContent.className = 'typing-indicator';
    typingContent.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(typingContent);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    
    if (!chatInput || !chatSendBtn) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Disable input and button
    chatInput.disabled = true;
    chatSendBtn.disabled = true;
    
    // Add user message
    addMessage(message, true);
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Add to chat history
    chatHistory.push({
        role: 'user',
        parts: [{ text: message }]
    });
    
    try {
        // Prepare context for Gemini
        const systemContext = `You are Career Architect, a helpful AI assistant specializing in career guidance, path discovery, and roadmap creation for students in India. 
        
Your expertise includes:
- Career paths after 10th and 12th (Science PCM/PCB, Commerce, Arts/Humanities)
- Entrance exams (JEE, NEET, CLAT, CA, UPSC, etc.)
- College recommendations (IITs, NITs, AIIMS, NLUs, etc.)
- Step-by-step roadmaps for various careers
- Stream selection guidance
- Skill development recommendations

Always provide helpful, accurate, and encouraging advice. Be conversational and friendly.`;

        const requestBody = {
            contents: [
                {
                    role: 'user',
                    parts: [{ text: `${systemContext}\n\nUser Question: ${message}` }]
                }
            ]
        };
        
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Remove typing indicator
        removeTypingIndicator();
        
        // Extract response text
        let assistantMessage = 'I apologize, but I encountered an error processing your request. Please try again.';
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            assistantMessage = data.candidates[0].content.parts[0].text;
        }
        
        // Add assistant message
        addMessage(assistantMessage, false);
        
        // Add to chat history
        chatHistory.push({
            role: 'model',
            parts: [{ text: assistantMessage }]
        });
        
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        removeTypingIndicator();
        addMessage('I apologize, but I\'m having trouble connecting right now. Please try again in a moment.', false);
    } finally {
        // Re-enable input and button
        chatInput.disabled = false;
        chatSendBtn.disabled = false;
        chatInput.focus();
    }
}
