import { Slide } from '../types';

export const TOPIC2_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 8: ROLE OF COMPUTER NETWORK SYSTEMS IN MODERN ERA
  // =========================================================================
  'b8-s1': {
    id: 'b8-s1',
    slideNumber: 1,
    type: 'title',
    title: 'THE ROLE OF COMPUTER NETWORK SYSTEMS IN THE MODERN ERA',
    subtitle: 'Topic 2: Computer Networks and the Internet | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Accurately distinguish Local Area Networks (LAN) from the global Internet' },
      { text: 'Understand the nature and service models of Cloud Computing' },
      { text: 'Explore the Internet of Things (IoT) and smart connectivity in daily life' },
      { text: 'Recognize the foundational role of network infrastructure in Industry 4.0' },
    ],
    badge: 'Lesson 8 • Standard Lesson Plan',
  },
  'b8-s2': {
    id: 'b8-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: IDENTIFYING NETWORK CONNECTION SCOPES',
    subtitle: 'Distinguishing Local Area Networks (LAN) from the Internet (Textbook p. 38)',
    cardsGrid: [
      {
        title: 'Scenario 1: Office Document Printing',
        desc: 'A computer transmits print commands directly to an in-room printer via network cable or local Wi-Fi.',
        tag: 'LAN Network',
        points: [
          'No external Internet connection required',
          'Ultra-high transmission speed, local security',
        ],
      },
      {
        title: 'Scenario 2: National Exam Scores Lookup',
        desc: 'A smartphone connects via the Internet to access the electronic portal of the Ministry of Education.',
        tag: 'Internet Network',
        points: [
          'Global cross-national connection scope',
          'Millions of concurrent active users',
        ],
      },
    ],
  },
  'b8-s3': {
    id: 'b8-s3',
    slideNumber: 3,
    type: 'content',
    title: 'DISTINGUISHING LOCAL AREA NETWORK (LAN) AND INTERNET',
    subtitle: 'Task 1: Comparing two foundational network paradigms (Textbook p. 39)',
    compareColumns: {
      left: {
        title: 'Local Area Network (LAN)',
        subtitle: 'Local Area Network',
        badge: 'Local',
        points: [
          'Geographic Scope: Narrow (within a classroom, building, or school).',
          'Administration: Owned by a specific agency, school, or private household.',
          'Purpose: Sharing shared hardware resources (printers, shared file servers).',
        ],
      },
      right: {
        title: 'The Internet',
        subtitle: 'Global Network of Networks',
        badge: 'Global',
        points: [
          'Geographic Scope: Global worldwide scale, connecting billions of nodes via TCP/IP.',
          'Administration: Not owned by any single individual, enterprise, or government.',
          'Purpose: Global information exchange, web services, email, and live video conferencing.',
        ],
      },
    },
  },
  'b8-s4': {
    id: 'b8-s4',
    slideNumber: 4,
    type: 'content',
    title: 'CLOUD COMPUTING',
    subtitle: 'On-demand delivery of computing services over the Internet (Textbook p. 40)',
    lead: 'Cloud computing represents a revolutionary paradigm shift in the Information Technology industry:',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Fiber-optic network infrastructure and cloud-connected data centers',
    bullets: [
      {
        title: 'Nature of Cloud Computing:',
        text: 'The on-demand distribution of computing resources (servers, storage, software, networking, databases) over the Internet with pay-as-you-go pricing.',
      },
      {
        title: 'Everyday Examples Around Us:',
        text: 'Google Drive, Microsoft OneDrive, and Dropbox for storage; Google Docs and Canva for cloud collaboration; Gmail and Outlook for email.',
      },
      {
        title: 'Real-time Online Collaboration:',
        text: 'Multiple users can simultaneously edit documents or spreadsheets in real-time regardless of their geographic location.',
      },
    ],
  },
  'b8-s5': {
    id: 'b8-s5',
    slideNumber: 5,
    type: 'remember',
    title: 'CORE ADVANTAGES OF CLOUD COMPUTING',
    subtitle: 'Why individuals and enterprises are rapidly migrating to the Cloud',
    lead: 'Practical advantages liberating users from traditional hardware constraints:',
    highlightBox: {
      type: 'remember',
      title: 'CORE ADVANTAGE (TEXTBOOK P. 40)',
      content: 'Data is securely stored across global provider data centers, eliminating the fear of local hard drive crashes or hardware failures.',
    },
    bullets: [
      {
        title: '1. Infrastructure Cost Savings:',
        text: 'Eliminates massive upfront capital expenditure on physical servers, maintenance teams, and server room electricity bills.',
      },
      {
        title: '2. Ubiquitous Access (Anytime, Anywhere):',
        text: 'Users need only an Internet-connected device (PC, tablet, or smartphone) to seamlessly access work files.',
      },
      {
        title: '3. Automated Backup & Disaster Recovery:',
        text: 'Data is replicated across redundant cluster servers with automated backups, shielding files from physical damage or malware.',
      },
    ],
  },
  'b8-s6': {
    id: 'b8-s6',
    slideNumber: 6,
    type: 'content',
    title: 'THREE PROMINENT CLOUD SERVICE MODELS',
    subtitle: 'Categorizing cloud services from end-users to software developers',
    cardsGrid: [
      {
        title: 'SaaS: Software as a Service',
        desc: 'End-users access complete applications directly via web browsers.',
        tag: 'SaaS',
        points: [
          'Examples: Gmail, Google Docs, Canva, Zoom',
          'Zero installation required; automated rolling feature updates',
        ],
      },
      {
        title: 'IaaS: Infrastructure as a Service',
        desc: 'Leasing virtual servers, storage blocks, and network configurations.',
        tag: 'IaaS',
        points: [
          'Examples: Google Cloud, Amazon Web Services (AWS)',
          'Designed for enterprises needing flexible horizontal scalability',
        ],
      },
    ],
  },
  'b8-s7': {
    id: 'b8-s7',
    slideNumber: 7,
    type: 'diagram',
    title: 'INTERNET OF THINGS (IoT) IN MODERN LIFE',
    subtitle: 'End-to-end architecture pipeline from sensor capture to cloud computation',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: '1',
          title: 'Data Collection',
          desc: 'Sensor devices (temperature, camera, GPS) continuously monitor real-time metrics.',
          tag: 'Sensor',
        },
        {
          stepNumber: '2',
          title: 'Network Transmission',
          desc: 'Telemetry is transmitted via wireless protocols (Wi-Fi, 5G, Zigbee) to cloud servers.',
          tag: 'Network',
        },
        {
          stepNumber: '3',
          title: 'Processing & Automation',
          desc: 'Analytics engines process telemetry, issuing automated commands or alerts to users.',
          tag: 'Action',
        },
      ],
    },
  },
  'b8-s8': {
    id: 'b8-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'QUIZ: CLOUD COMPUTING & NETWORKS',
    subtitle: 'Consolidating core concepts from Lesson 8',
    quiz: {
      question: 'Which of the following services is a quintessential example of Software as a Service (SaaS)?',
      options: [
        'A. Purchasing a software installer DVD to install locally on a PC',
        'B. An external hard drive connected via USB port',
        'C. Google Docs web app used for online word processing in a browser',
        'D. An SD card inserted inside a home digital video camera',
      ],
      answer: 'Option C: Google Docs web app used for online word processing in a browser.',
      explanation: 'Google Docs operates fully in the cloud; users do not install local applications, and files automatically sync to Google cloud servers.',
    },
  },
  'b8-s9': {
    id: 'b8-s9',
    slideNumber: 9,
    type: 'summary',
    title: 'LESSON 8 SUMMARY & KEY TAKEAWAYS',
    subtitle: 'Systematizing knowledge of Computer Networks and the Internet',
    bullets: [
      {
        title: '1. LAN vs Internet:',
        text: 'LAN operates within a localized boundary; the Internet is a borderless global network connecting billions.',
      },
      {
        title: '2. Cloud Computing:',
        text: 'Delivers scalable computing power and software over the web, driving high agility and cost efficiency.',
      },
      {
        title: '3. Internet of Things (IoT):',
        text: 'Connects smart hardware devices to automate homes, smart transportation, and industrial manufacturing.',
      },
    ],
  },

  // =========================================================================
  // LESSON 9: FUNDAMENTALS OF CYBERSECURITY AND INFORMATION SAFETY
  // =========================================================================
  'b9-s1': {
    id: 'b9-s1',
    slideNumber: 1,
    type: 'title',
    title: 'FUNDAMENTALS OF CYBERSECURITY AND INFORMATION SAFETY',
    subtitle: 'Topic 2: Computer Networks and the Internet | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Identify security threats and hazards across modern cyberspace' },
      { text: 'Distinguish major categories of malware: Viruses, Worms, and Trojans' },
      { text: 'Master robust password principles and Two-Factor Authentication (2FA)' },
      { text: 'Prevent phishing scams and effectively safeguard personal private data' },
    ],
    badge: 'Lesson 9 • Standard Lesson Plan',
  },
  'b9-s2': {
    id: 'b9-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: CYBER THREAT ALERTS',
    subtitle: 'Real-world case studies of social engineering scams and malicious code (Textbook p. 44)',
    cardsGrid: [
      {
        title: 'Fraudulent Lottery Prize Email',
        desc: 'Scam message stating: "You won a luxury motorcycle! Click the link below to claim your prize immediately".',
        tag: 'Phishing Scam',
        points: [
          'Deceptively requests bank account credentials and OTP codes',
          'Aims to hijack bank accounts and steal funds',
        ],
      },
      {
        title: 'Cracked Pirated Software Installation',
        desc: 'Downloading unauthorized free games or cracked utilities from suspicious third-party portals.',
        tag: 'Malware',
        points: [
          'Bundled with ransomware that encrypts hard drive data',
          'Results in permanent data loss and corrupted personal photos',
        ],
      },
    ],
  },
  'b9-s3': {
    id: 'b9-s3',
    slideNumber: 3,
    type: 'content',
    title: 'CLASSIFICATION OF COMMON MALWARE',
    subtitle: 'The 3 most widespread malware classes threatening computer users (Textbook p. 45)',
    cardsGrid: [
      {
        title: '1. Computer Viruses',
        desc: 'Code snippets that infect host program files and self-replicate whenever the host is executed.',
        tag: 'Virus',
        points: [
          'Corrupts files and degrades system operating performance',
          'Requires human action to execute the infected carrier file',
        ],
      },
      {
        title: '2. Computer Worms',
        desc: 'Standalone programs capable of propagating automatically across computer networks without host files.',
        tag: 'Worm',
        points: [
          'Exploits network vulnerabilities autonomously',
          'Consumes massive bandwidth to paralyze networks',
        ],
      },
    ],
  },
  'b9-s4': {
    id: 'b9-s4',
    slideNumber: 4,
    type: 'content',
    title: 'TROJAN HORSES AND SPYWARE',
    subtitle: 'Sophisticated disguised threats deceiving end-users (Textbook p. 46)',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Cybersecurity, malware protection, and user data privacy safeguards',
    bullets: [
      {
        title: 'Trojan (Trojan Horse):',
        text: 'Malicious code disguised as an attractive game or useful tool. Once installed, it secretly opens a backdoor for unauthorized remote hacker access.',
      },
      {
        title: 'Spyware (Surveillance Software):',
        text: 'Silently logs keystrokes (keylogger), intercepts passwords, captures screens, and exfiltrates confidential credentials to hacker command servers.',
      },
      {
        title: 'Ransomware (Extortion Malware):',
        text: 'Encrypts storage drives with mathematical ciphers and demands cryptocurrency ransom payments for decryption keys.',
      },
    ],
  },
  'b9-s5': {
    id: 'b9-s5',
    slideNumber: 5,
    type: 'content',
    title: 'PASSWORD SECURITY PRINCIPLES & TWO-FACTOR AUTHENTICATION (2FA)',
    subtitle: 'Golden rules for impregnable digital account security',
    bullets: [
      {
        title: 'Strong Password Composition:',
        text: 'Minimum 10 - 12 characters, combining uppercase, lowercase, numbers, and symbols (!@#$%^&*). Never use birthdays or phone numbers.',
      },
      {
        title: 'Never Reuse Passwords:',
        text: 'Every critical service (Email, Banking, Social Media) must use a distinct password to avoid cascading credential leaks.',
      },
      {
        title: 'Enable Two-Factor Authentication (2FA):',
        text: 'Requires a temporary one-time password (OTP) or Authenticator prompt alongside password entry, neutralizing 99% of unauthorized attacks.',
      },
    ],
  },
  'b9-s6': {
    id: 'b9-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'QUIZ: CYBERSPACE SAFETY HABITS',
    subtitle: 'Testing anti-phishing defense and digital security awareness',
    quiz: {
      question: 'Upon receiving an email from an unfamiliar sender claiming your account is locked with a link demanding instant login, what is the best course of action?',
      options: [
        'A. Click the link immediately and submit your credentials to check',
        'B. Forward the email to all classmates to warn them',
        'C. Do NOT click the link; verify sender domain and flag as spam/phishing',
        'D. Download the attached zip file to run an antivirus scan',
      ],
      answer: 'Option C: Do NOT click the link; verify sender domain and flag as spam/phishing.',
      explanation: 'This is a classic Phishing attack designed to steal user passwords via fabricated credential-harvesting login portals.',
    },
  },
  'b9-s7': {
    id: 'b9-s7',
    slideNumber: 7,
    type: 'summary',
    title: 'LESSON 9 SUMMARY & CYBER SAFETY PRINCIPLES',
    subtitle: 'Equipping students to become vigilant and responsible digital citizens',
    bullets: [
      {
        title: '1. Vigilance with Suspicious Links:',
        text: 'Never click on unverified links from unexpected text messages, social chats, or emails.',
      },
      {
        title: '2. Maintain Licensed Antivirus Software:',
        text: 'Keep OS firewalls active and apply Windows/Android security patches promptly.',
      },
      {
        title: '3. Guard Digital Identity:',
        text: 'Never share national ID numbers, home addresses, or private passwords publicly on the web.',
      },
    ],
  },

  // =========================================================================
  // LESSON 10: PRACTICAL SKILLS IN SEARCHING AND EXPLOITING INTERNET RESOURCES
  // =========================================================================
  'b10-s1': {
    id: 'b10-s1',
    slideNumber: 1,
    type: 'title',
    title: 'PRACTICAL SKILLS IN SEARCHING AND EXPLOITING INTERNET RESOURCES',
    subtitle: 'Topic 2: Computer Networks and the Internet | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Advanced search syntax using Boolean operators and specialized filters on Google' },
      { text: 'Exploiting multilingual AI translation tools like Google Translate effectively' },
      { text: 'Accessing accredited Open Educational Resources (OER) and digital academic video' },
      { text: 'Methodology for critically assessing credibility of online digital sources' },
    ],
    badge: 'Lesson 10 • Digital Literacy Practical',
  },
  'b10-s2': {
    id: 'b10-s2',
    slideNumber: 2,
    type: 'process',
    title: 'ADVANCED GOOGLE SEARCH SYNTAX OPERATORS',
    subtitle: 'Precision search techniques for pinpointing study materials in seconds',
    cardsGrid: [
      {
        title: 'Exact Phrase Match: "..."',
        desc: 'Enclose terms inside double quotation marks.',
        tag: 'Operator ""',
        points: [
          'Example: "Informatics 10 Connecting Knowledge"',
          'Displays strictly pages containing the exact phrase',
        ],
      },
      {
        title: 'Filter by File Extension: filetype:...',
        desc: 'Filters queries specifically for PDF, PPTX, or DOCX formats.',
        tag: 'filetype',
        points: [
          'Example: python lecture filetype:pdf',
          'Instantly downloads authoritative academic textbooks',
        ],
      },
    ],
  },
  'b10-s3': {
    id: 'b10-s3',
    slideNumber: 3,
    type: 'process',
    title: 'EXPLOITING MULTILINGUAL TRANSLATION (GOOGLE TRANSLATE)',
    subtitle: '3 versatile translation modes empowering academic learning (Textbook p. 50 - 51)',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: '1',
          title: 'Direct Text Input',
          desc: 'Type or paste excerpts; the engine detects source tongue and translates instantly.',
          tag: 'Text',
        },
        {
          stepNumber: '2',
          title: 'Voice Translation',
          desc: 'Speak via microphone to practice pronunciation and hear natural native spoken audio.',
          tag: 'Voice',
        },
        {
          stepNumber: '3',
          title: 'Full Document Translation',
          desc: 'Upload Word or PDF files to translate documents while preserving formatting.',
          tag: 'Document',
        },
      ],
    },
  },
  'b10-s4': {
    id: 'b10-s4',
    slideNumber: 4,
    type: 'content',
    title: 'EVALUATING ONLINE SOURCE CREDIBILITY',
    subtitle: 'Criteria for validating content quality before citing in academic research',
    bullets: [
      {
        title: '1. Author & Publishing Institution:',
        text: 'Prioritize accredited domains: .gov (government agencies), .edu (universities and research institutes), and recognized educational publishers.',
      },
      {
        title: '2. Currency & Publication Date:',
        text: 'Check publication timestamps to ensure data, statistics, and legal policies are fully up to date.',
      },
      {
        title: '3. Cross-Source Multi-Verification:',
        text: 'Never accept single unverified blog claims; corroborate findings across at least 2 to 3 independent reputable sources.',
      },
    ],
  },
  'b10-s5': {
    id: 'b10-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'QUIZ: DIGITAL LEARNING SEARCH SYNTAX',
    subtitle: 'Testing advanced search operator proficiency',
    quiz: {
      question: 'To locate PowerPoint slide presentations on Python hosted exclusively on university academic domains, which syntax is most effective?',
      options: [
        'A. best python presentation of the year',
        'B. python filetype:pptx site:edu.vn',
        'C. please find me python lecture slides',
        'D. free python pptx downloads without viruses',
      ],
      answer: 'Option B: python filetype:pptx site:edu.vn.',
      explanation: 'filetype:pptx isolates presentation slide decks, combined with site:edu.vn restricting search scope to accredited academic institutions.',
    },
  },
  'b10-s6': {
    id: 'b10-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 10 SUMMARY & INTERNET CITIZENSHIP',
    subtitle: 'Empowering students as autonomous, ethical digital learners',
    bullets: [
      {
        title: '1. Smart Search Practices:',
        text: 'Combine concise keywords with syntax operators to target academic file types and trustworthy domains.',
      },
      {
        title: '2. Critical Translation Exploitation:',
        text: 'Leverage Google Translate for international papers, always cross-referencing with technical glossaries.',
      },
      {
        title: '3. Copyright Respect & Attribution:',
        text: 'When referencing external online text, statistics, or imagery, always cite original authors and source URLs.',
      },
    ],
  },
};
