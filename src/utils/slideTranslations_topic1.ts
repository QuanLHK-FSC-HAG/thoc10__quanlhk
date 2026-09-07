import { Slide } from '../types';

export const TOPIC1_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 1: OVERVIEW OF INFORMATION AND INFORMATION PROCESSING
  // =========================================================================
  'b1-s1': {
    id: 'b1-s1',
    slideNumber: 1,
    type: 'title',
    title: 'OVERVIEW OF INFORMATION AND DATA PROCESSING',
    subtitle: 'Topic 1: Computers and Information Society | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish the nature of information and data, and understand their relative independence' },
      { text: 'Describe the 3-step information processing cycle using electronic computers' },
      { text: 'Master storage capacity units (powers of 2) and conversion methods' },
      { text: 'Recognize the superior advantages of digital devices in modern society' },
    ],
    badge: 'Lesson 1 • Standard Lesson Plan',
  },
  'b1-s2': {
    id: 'b1-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: WHAT DOES DATA CONVEY?',
    subtitle: 'Observation activity: Numerical data "39°C" in real-world scenarios',
    lead: 'Given the same data "39°C", what distinct information does it convey in two different contexts?',
    cardsGrid: [
      {
        title: 'Context 1: Summer Weather',
        desc: 'Outdoor ambient temperature data reading of 39°C.',
        tag: 'Weather Forecast',
        points: [
          'Information: The weather is scorchingly hot and sunny',
          'Action: Limit going outdoors at midday; drink plenty of water',
        ],
      },
      {
        title: 'Context 2: Healthcare & Medical Exam',
        desc: 'Patient body temperature data reading of 39°C.',
        tag: 'Body Temperature',
        points: [
          'Information: The patient is suffering from a dangerous high fever',
          'Action: Administer antipyretic medication and seek urgent medical monitoring',
        ],
      },
    ],
  },
  'b1-s3': {
    id: 'b1-s3',
    slideNumber: 3,
    type: 'content',
    title: 'CONCEPTS OF DATA AND INFORMATION',
    subtitle: 'Task 1: Analyzing the fundamental nature and causal relationship',
    lead: 'Data is the foundation that generates information; information is the meaning derived by humans from data.',
    compareColumns: {
      left: {
        title: 'Data',
        subtitle: 'The object processed by computers',
        badge: 'Objective',
        points: [
          'Signals, numbers, characters, images, and audio recorded from the objective world.',
          'Encoded into bit sequences (0 and 1) so computers can store and process them.',
          'Does not carry complete meaning until placed within a specific context.',
        ],
      },
      right: {
        title: 'Information',
        subtitle: 'Meaning comprehended by humans',
        badge: 'Subjective',
        points: [
          'The meaning and understanding derived by humans after receiving data.',
          'Subjective in nature, depending on the awareness, knowledge, and context of the receiver.',
          'Helps humans increase knowledge and make rational decisions.',
        ],
      },
    },
  },
  'b1-s4': {
    id: 'b1-s4',
    slideNumber: 4,
    type: 'content',
    title: 'RELATIVE INDEPENDENCE OF INFORMATION AND DATA',
    subtitle: 'Two-way relationship between information and data representation formats',
    lead: 'A single piece of information can be expressed across multiple data formats, and conversely a single datum can convey multiple layers of meaning:',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Microprocessors convert binary signal data into digital information',
    bullets: [
      {
        title: 'One piece of information ➜ Multiple data representations:',
        text: 'The information "it is raining today" can be expressed via written text "Rainy", a weather icon with raindrops, sound of falling rain, or a TV news clip.',
      },
      {
        title: 'Single datum ➜ Multiple meanings depending on context:',
        text: 'The numerical datum "10" could represent a student\'s Informatics test score, 10:00 AM clock time, or a soccer player\'s jersey number.',
      },
    ],
  },
  'b1-s5': {
    id: 'b1-s5',
    slideNumber: 5,
    type: 'remember',
    title: 'CORE CONCLUSION ON INFORMATION AND DATA',
    subtitle: 'Core scientific definition according to Informatics 10 Textbook (Page 7)',
    lead: 'Fundamental principle governing the entire domain of Computer Science:',
    highlightBox: {
      type: 'remember',
      title: 'CORE CONCLUSION (TEXTBOOK P. 7)',
      content: 'Information is the meaning of data. Data is information in the form of signals fed into computers for storage and processing.',
    },
    bullets: [
      {
        title: 'Data is the carrier of information:',
        text: 'Data exists objectively as sequences of bits 0 and 1, encoded for storage on hard drives, memory cards, or transmission across network cables.',
      },
      {
        title: 'Information is understanding:',
        text: 'Received and processed within human cognition to expand awareness and serve as the basis for decision-making and action.',
      },
    ],
  },
  'b1-s6': {
    id: 'b1-s6',
    slideNumber: 6,
    type: 'diagram',
    title: 'COMPUTER INFORMATION PROCESSING CYCLE',
    subtitle: 'Three fundamental stages of a computer system (Figure 1.1 Textbook page 7)',
    svgType: 'data-lifecycle',
    sourceCitation: 'Figure 1.1 Informatics 10 Textbook (Page 7) • Connecting Knowledge to Life',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Data Input',
          desc: 'Input devices (keyboard, mouse, camera, sensors) capture real-world signals and encode them into bit sequences.',
          tag: 'Input',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Data Processing',
          desc: 'The Central Processing Unit (CPU) executes arithmetic and logical operations according to programmed instructions.',
          tag: 'Process',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Information Output',
          desc: 'Output devices (monitor, speakers, printer) decode bit streams back into human-perceivable information.',
          tag: 'Output',
        },
      ],
    },
  },
  'b1-s7': {
    id: 'b1-s7',
    slideNumber: 7,
    type: 'table',
    title: 'DATA STORAGE CAPACITY UNITS CONVERSION TABLE',
    subtitle: 'Standard capacity scale: Each successive unit equals 1,024 times the preceding unit (2¹⁰)',
    lead: 'The fundamental atomic unit is Bit (0 or 1). Byte is the standard unit of storage measurement (1 Byte = 8 bits).',
    tableData: {
      caption: 'Standard binary capacity prefixes according to Informatics 10 textbook',
      headers: ['Unit Name', 'Symbol', 'Byte Equivalent', 'Power of 2'],
      rows: [
        ['Byte', 'B', '1 Byte = 8 bits', '2⁰ B'],
        ['Kilobyte', 'KB', '1,024 B', '2¹⁰ B'],
        ['Megabyte', 'MB', '1,024 KB = 1,048,576 B', '2²⁰ B'],
        ['Gigabyte', 'GB', '1,024 MB = 1,073,741,824 B', '2³⁰ B'],
        ['Terabyte', 'TB', '1,024 GB', '2⁴⁰ B'],
        ['Petabyte', 'PB', '1,024 TB', '2⁵⁰ B'],
      ],
    },
  },
  'b1-s8': {
    id: 'b1-s8',
    slideNumber: 8,
    type: 'content',
    title: 'REAL-WORLD STORAGE CAPACITY EXAMPLES',
    subtitle: 'Intuitive perspective on everyday digital data sizes',
    bullets: [
      {
        title: 'Standard compressed MP3 audio track:',
        text: 'Approximately 3 - 5 MB (Megabytes), equivalent to 3 to 5 million plain text characters.',
      },
      {
        title: 'High-resolution digital photograph:',
        text: 'Approximately 4 - 8 MB depending on smartphone camera sensor resolution (12MP - 48MP).',
      },
      {
        title: '120-minute Full HD feature film:',
        text: 'Approximately 3 - 5 GB (Gigabytes), equivalent to thousands of compressed MP3 songs combined.',
      },
      {
        title: 'Hyperscale Cloud Data Center capacity:',
        text: 'Global server farms from Google and Microsoft store exabytes (EB) and petabytes (PB) of data.',
      },
    ],
  },
  'b1-s9': {
    id: 'b1-s9',
    slideNumber: 9,
    type: 'remember',
    title: 'QUICK MEMORY RULES & BINARY CONVERSION FORMULAS',
    subtitle: 'Principles of capacity calculation in computer architecture',
    lead: 'Why do data measurement units scale by 1,024 instead of 1,000 like decimal metric units?',
    bullets: [
      {
        title: 'Powers of 2 (Binary system):',
        text: 'Computers operate via semiconductor transistors with two electrical states (ON and OFF, 0 and 1). Consequently, storage prefixes scale exponentially by powers of 2: 2¹⁰ = 1,024.',
      },
      {
        title: 'Difference from decimal metric system:',
        text: 'In everyday decimal metrics: 1 km = 1,000 m, 1 kg = 1,000 g (factors of 10³ = 1,000). In Informatics (binary): 1 KB = 1,024 B (factors of 2¹⁰ = 1,024).',
      },
    ],
    highlightBox: {
      type: 'note',
      title: 'GOLDEN CONVERSION RULE',
      content: 'Converting from LARGER to adjacent SMALLER unit: MULTIPLY by 1,024. Converting from SMALLER to adjacent LARGER unit: DIVIDE by 1,024.',
    },
  },
  'b1-s10': {
    id: 'b1-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'PRACTICE: DATA UNIT CONVERSION CALCULATIONS',
    subtitle: 'Worksheet: Applying conversion formulas across digital prefixes',
    lead: 'Execute unit conversion calculations and verify step-by-step results:',
    bullets: [
      {
        title: 'Problem 1: Convert 3 MB to Kilobytes (KB)',
        text: 'Calculation: 3 × 1,024 = 3,072 KB',
        badge: '1-Step Multiplication',
      },
      {
        title: 'Problem 2: Convert 2 GB to Kilobytes (KB)',
        text: 'Calculation: 2 × 1,024 × 1,024 = 2,097,152 KB',
        badge: '2-Step Multiplication',
      },
      {
        title: 'Problem 3: Convert 2,048 Bytes to Kilobytes (KB)',
        text: 'Calculation: 2,048 : 1,024 = 2 KB',
        badge: 'Inverse Division',
      },
    ],
  },
  'b1-s11': {
    id: 'b1-s11',
    slideNumber: 11,
    type: 'practice',
    title: 'QUIZ: PRACTICAL STORAGE CAPACITY CALCULATION',
    subtitle: 'Quick check of storage problem-solving competence',
    quiz: {
      question: 'A MicroSD card has a capacity of 16 GB. How many digital photos can this card store at maximum, assuming each photo averages 4 MB in size?',
      options: [
        'A. 400 photos',
        'B. 4,096 photos',
        'C. 4,000 photos',
        'D. 1,024 photos',
      ],
      answer: 'Option B: 4,096 photos (16 GB = 16 × 1,024 = 16,384 MB; 16,384 : 4 = 4,096 photos).',
      explanation: 'Conversion steps: 16 GB = 16 × 1,024 = 16,384 MB. Number of photos stored = 16,384 : 4 = 4,096 photos.',
    },
  },
  'b1-s12': {
    id: 'b1-s12',
    slideNumber: 12,
    type: 'content',
    title: 'SUPERIOR ADVANTAGES OF DIGITAL DEVICES (PART 1)',
    subtitle: 'Task 3: Breakthroughs in storage capacity and retrieval speed',
    cardsGrid: [
      {
        title: '1. Massive Storage Density',
        desc: 'Completely replaces traditional physical paper archives.',
        tag: 'Storage',
        points: [
          'A compact 1 TB SSD holds millions of digitized textbooks',
          'Requires zero warehouse square footage, immune to mold and physical decay',
        ],
      },
      {
        title: '2. Instantaneous & Intelligent Retrieval',
        desc: 'Locate information in milliseconds via smart indexing.',
        tag: 'Retrieval',
        points: [
          'Algorithms scan millions of document pages in milliseconds',
          'Supports semantic search by voice, image, and optical character recognition (OCR)',
        ],
      },
    ],
  },
  'b1-s13': {
    id: 'b1-s13',
    slideNumber: 13,
    type: 'content',
    title: 'SUPERIOR ADVANTAGES OF DIGITAL DEVICES (PART 2)',
    subtitle: 'Task 3: Computing velocity, 24/7 reliability, and global interconnectivity',
    cardsGrid: [
      {
        title: '3. Precision & High Computing Velocity',
        desc: 'CPUs execute billions of operations per second with zero fatigue.',
        tag: 'Processing',
        points: [
          'Enables complex weather forecasting and aerospace simulations',
          'Operates 24/7 reliably without human fatigue or distraction',
        ],
      },
      {
        title: '4. Instant Global Information Dissemination',
        desc: 'Global Internet connectivity transcends geographic boundaries.',
        tag: 'Transmission',
        points: [
          'Digitized packets travel through fiber-optic cables at near light-speed',
          'Share massive datasets across the globe with a single click',
        ],
      },
    ],
  },
  'b1-s14': {
    id: 'b1-s14',
    slideNumber: 14,
    type: 'table',
    title: 'COMPARISON: TRADITIONAL POSTAL MAIL VS EMAIL',
    subtitle: 'Concrete real-world evidence of the digital transformation revolution',
    tableData: {
      caption: 'Comparison of Postal Paper Mail vs Electronic Mail (Email)',
      headers: ['Criteria', 'Physical Postal Mail', 'Electronic Mail (Email)'],
      rows: [
        ['Transit Time', '1 to 7 days depending on geographic distance', 'Instantaneous (seconds) across the globe'],
        ['Delivery Cost', 'Postage stamps, envelopes, transport logistics', 'Free with an Internet connection'],
        ['Attachment Types', 'Physical paper text and printed still images only', 'Text, high-res photos, audio, video, compressed archives'],
        ['Archival Efficiency', 'Requires filing cabinets, susceptible to loss', 'Cloud storage with instantaneous full-text search'],
      ],
    },
  },
  'b1-s15': {
    id: 'b1-s15',
    slideNumber: 15,
    type: 'process',
    title: 'AI INTEGRATION & RESPONSIBLE DIGITAL CITIZENSHIP',
    subtitle: '3-Step methodology for leveraging AI in learning and factual verification',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Textbook Comprehension',
          desc: 'Carefully study pages 6-10, grasping fundamental definitions before consulting AI prompts.',
          tag: 'Foundation',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Targeted AI Inquiry',
          desc: 'Formulate precise prompts asking AI to explain illustrative examples and conversion problems.',
          tag: 'Tool',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Critical Verification',
          desc: 'Cross-examine AI output against official textbook standards, validating accuracy critically.',
          tag: 'Critical Thinking',
        },
      ],
    },
  },
  'b1-s16': {
    id: 'b1-s16',
    slideNumber: 16,
    type: 'practice',
    title: 'APPLICATION: SCHOOL LIBRARY DIGITIZATION CASE STUDY',
    subtitle: 'Real-world data analysis of school digital transformation',
    lead: 'Scenario: A high school needs to digitize its repository of 2,000 reference books for online student access.',
    bullets: [
      {
        title: 'Number of volumes to digitize:',
        text: 'A total of 2,000 textbooks and cross-curricular academic reference titles.',
      },
      {
        title: 'Digitized file size per book (Scanned PDF):',
        text: 'Each book scanned as high-resolution color PDF averages approximately 50 MB.',
      },
      {
        title: 'Problem statement to solve:',
        text: 'Calculate the total storage capacity required in Gigabytes (GB) and select the most compact digital storage medium.',
      },
    ],
  },
  'b1-s17': {
    id: 'b1-s17',
    slideNumber: 17,
    type: 'practice',
    title: 'GUIDED SOLUTION & PRACTICAL SIGNIFICANCE OF DIGITIZATION',
    subtitle: 'Step-by-step conversion procedure illustrating the immense power of digital technology',
    lead: 'Storage conversion calculation following standard textbook formulas:',
    bullets: [
      {
        title: 'Step 1: Calculate total book capacity in Megabytes (MB):',
        text: 'Calculation: 2,000 books × 50 MB = 100,000 MB.',
        badge: 'Step 1',
      },
      {
        title: 'Step 2: Convert from Megabytes (MB) to Gigabytes (GB):',
        text: 'Calculation: 100,000 MB : 1,024 = 97.65625 GB (approximately 97.66 GB).',
        badge: 'Step 2',
      },
      {
        title: 'Practical Conclusion & Storage Selection:',
        text: 'A fingernail-sized 128 GB MicroSD card (costing under $10) can store all 2,000 volumes of an entire school library!',
        badge: 'Digital Value',
      },
    ],
  },
  'b1-s18': {
    id: 'b1-s18',
    slideNumber: 18,
    type: 'summary',
    title: 'LESSON 1 SUMMARY & KEY TAKEAWAYS',
    subtitle: 'Systematizing essential core competencies to remember',
    bullets: [
      {
        title: '1. Information vs Data:',
        text: 'Information is the meaning of data. Computers process data exclusively in encoded binary bit sequences.',
      },
      {
        title: '2. Information Processing Cycle:',
        text: 'Data Input (Input) ➜ Data Processing (CPU) ➜ Result Delivery (Output).',
      },
      {
        title: '3. Storage Measurement Units:',
        text: '1 Byte = 8 bits. Scale hierarchy: B ➜ KB ➜ MB ➜ GB ➜ TB ➜ PB (each step scaling by 1,024).',
      },
      {
        title: '4. Digital Advantages:',
        text: 'High-density storage, instantaneous search, precision computing, and global instantaneous transmission.',
      },
    ],
  },

  // =========================================================================
  // LESSON 2: ROLE OF SMART DEVICES AND INFORMATICS IN SOCIETY
  // =========================================================================
  'b2-s1': {
    id: 'b2-s1',
    slideNumber: 1,
    type: 'title',
    title: 'IMPORTANCE OF INFORMATION TECHNOLOGY AND SMART DEVICES',
    subtitle: 'Topic 1: Computers and Information Society | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Concept of smart devices and core identifying criteria' },
      { text: 'The vital role of smart devices in the Internet of Things (IoT) ecosystem' },
      { text: 'Breakthrough achievements of Informatics and societal digital transformation' },
      { text: 'Digital citizenship responsibility and preventing technology dependence' },
    ],
    badge: 'Lesson 2 • Standard Lesson Plan',
  },
  'b2-s2': {
    id: 'b2-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: WHICH DEVICE IS TRULY SMART?',
    subtitle: 'Distinguishing traditional electronic appliances from smart devices (Textbook p. 11)',
    cardsGrid: [
      {
        title: 'Traditional Mechanical Rice Cooker',
        desc: 'Uses mechanical thermal relay switches; press cook and automatically flips to warm when dry.',
        tag: 'Electronic Device',
        points: [
          'No computational microprocessor',
          'Cannot connect to the Internet or support remote control',
        ],
      },
      {
        title: 'High-Frequency Induction Smart Rice Cooker',
        desc: 'Integrated with microprocessors, intelligent microchips, and multi-point thermal sensors.',
        tag: 'Smart Device',
        points: [
          'Automatically selects optimal heating curves by rice grain type',
          'Wi-Fi connected with voice notifications sent to smartphones',
        ],
      },
    ],
  },
  'b2-s3': {
    id: 'b2-s3',
    slideNumber: 3,
    type: 'content',
    title: 'CONCEPT OF SMART DEVICES',
    subtitle: 'Scientific definition according to Informatics 10 Textbook (Page 11)',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Smart devices connect wirelessly and process data autonomously',
    bullets: [
      {
        title: 'Core Definition:',
        text: 'A Smart Device is an electronic device capable of autonomous operation to a certain degree, capable of network connectivity, and interacting with other devices or users.',
      },
      {
        title: 'The Device Heart:',
        text: 'Inside every smart device is a microprocessor or digital signal processor acting as the executive "brain".',
      },
      {
        title: 'Wireless Connectivity:',
        text: 'Supports network communication protocols like Bluetooth, Wi-Fi, 4G/5G, and Zigbee to exchange real-time data.',
      },
    ],
  },
  'b2-s4': {
    id: 'b2-s4',
    slideNumber: 4,
    type: 'remember',
    title: 'THREE CORE IDENTIFYING CRITERIA OF SMART DEVICES',
    subtitle: 'Standardized textbook criteria to distinguish ordinary devices from smart devices',
    lead: 'A device is classified as smart when it converges all 3 foundational elements:',
    highlightBox: {
      type: 'remember',
      title: 'CORE CRITERIA (TEXTBOOK P. 11)',
      content: 'Smart Device = Microprocessor (autonomous data processing) + Environmental Sensors + Network Connectivity for interaction.',
    },
    bullets: [
      {
        title: '1. Autonomy:',
        text: 'Automatically analyzes environmental inputs and makes decisions without step-by-step human intervention.',
      },
      {
        title: '2. Multi-dimensional Interactivity:',
        text: 'Communicates with users via touchscreens, natural voice, gestures, or push notifications.',
      },
      {
        title: '3. Interconnected Connectivity:',
        text: 'Synchronizes data seamlessly with IoT ecosystems and cloud servers.',
      },
    ],
  },
  'b2-s5': {
    id: 'b2-s5',
    slideNumber: 5,
    type: 'diagram',
    title: 'OPERATING MECHANISM OF SMART DEVICES',
    subtitle: 'Sensing, computing, and actuation feedback cycle model',
    svgType: 'smart-devices',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: '1',
          title: 'Sensors',
          desc: 'Collect environmental telemetry (temperature, ambient light, motion, fingerprint biometric).',
          tag: 'Capture',
        },
        {
          stepNumber: '2',
          title: 'Microprocessor',
          desc: 'Analyzes sensor data based on embedded algorithms to make rational operational decisions.',
          tag: 'Decision',
        },
        {
          stepNumber: '3',
          title: 'Actuators',
          desc: 'Executes actions (turns on lighting, unlocks doors, regulates fan speed) or emits alerts.',
          tag: 'Actuation',
        },
      ],
    },
  },
  'b2-s6': {
    id: 'b2-s6',
    slideNumber: 6,
    type: 'content',
    title: 'THE INTERNET OF THINGS (IoT) ECOSYSTEM',
    subtitle: 'When everyday objects become intelligently connected',
    cardsGrid: [
      {
        title: 'Smart Home',
        desc: 'Automated lights activate upon entering rooms; smart blinds open at dawn; AI cameras detect strangers and notify smartphones.',
        tag: 'Residential',
        points: [
          'Optimized intelligent power conservation',
          'Comprehensive automated home security',
        ],
      },
      {
        title: 'Smart Agriculture',
        desc: 'Sensors measure soil moisture and pH; automated drip irrigation pumps water when soil dries; drones spray crops.',
        tag: 'Agriculture',
        points: [
          'Maximizes crop yield and quality',
          'Minimizes arduous manual labor for farmers',
        ],
      },
    ],
  },
  'b2-s7': {
    id: 'b2-s7',
    slideNumber: 7,
    type: 'content',
    title: 'BREAKTHROUGH ACHIEVEMENTS OF INFORMATICS (PART 1)',
    subtitle: 'Task 2: Personal Computers, the Global Internet, and Cloud Computing',
    bullets: [
      {
        title: '1. Miniature & Ultra-Powerful Computing:',
        text: 'From multi-ton ENIAC vacuum machines, modern pocket-sized smartphones and microchips possess millions of times more computing power.',
      },
      {
        title: '2. Global Internet Infrastructure:',
        text: 'Transformed the world into a "global village", eliminating geographical borders and connecting over 5 billion users worldwide.',
      },
      {
        title: '3. Cloud Computing:',
        text: 'Data and software hosted on centralized data servers (Google Drive, OneDrive) enable seamless collaboration anytime, anywhere on any device.',
      },
    ],
  },
  'b2-s8': {
    id: 'b2-s8',
    slideNumber: 8,
    type: 'content',
    title: 'BREAKTHROUGH ACHIEVEMENTS: BIG DATA & AI',
    subtitle: 'Task 2: Artificial Intelligence (AI) and Big Data',
    bullets: [
      {
        title: '4. Big Data Analytics:',
        text: 'Aggregates and computes massive datasets from social networks and financial transactions to forecast market trends, predict weather, and aid healthcare.',
      },
      {
        title: '5. Artificial Intelligence (AI):',
        text: 'Computers learn from data, perform computer vision, natural voice recognition, assist clinical medical diagnosis, and navigate autonomous vehicles.',
      },
    ],
  },
  'b2-s9': {
    id: 'b2-s9',
    slideNumber: 9,
    type: 'remember',
    title: 'INFORMATICS AND THE FOURTH INDUSTRIAL REVOLUTION (4.0)',
    subtitle: 'Profound scope and impact of Informatics on the knowledge economy',
    lead: 'Informatics has become the fundamental driving engine of human progress:',
    highlightBox: {
      type: 'remember',
      title: 'IMPACT OF INFORMATICS (TEXTBOOK P. 14)',
      content: 'Informatics is not just a scientific discipline, but the pivotal engine propelling the 4th Industrial Revolution (Industry 4.0), fundamentally transforming production and human life.',
    },
    bullets: [
      {
        title: 'Comprehensive Digital Transformation:',
        text: 'Every sphere from healthcare, education, agriculture to public administration is digitized across digital platforms.',
      },
      {
        title: 'Digital Economy & Digital Society:',
        text: 'E-commerce, cashless digital payments, and online public administrative portals save millions of working hours.',
      },
    ],
  },
  'b2-s10': {
    id: 'b2-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'QUIZ: IDENTIFYING SMART DEVICES',
    subtitle: 'Checking student comprehension against standardized textbook criteria',
    quiz: {
      question: 'Which of the following devices is NOT considered a smart device?',
      options: [
        'A. Smartphone',
        'B. Smartwatch with heart rate monitor',
        'C. Basic handheld pocket calculator (Casio fx-500MS)',
        'D. Robot vacuum cleaner with autonomous laser room mapping',
      ],
      answer: 'Option C: Basic handheld pocket calculator (lacks network connectivity, executes fixed arithmetic logic only).',
      explanation: 'A basic calculator operates strictly through fixed hardwired logic circuits, with no network connectivity or autonomous decision-making capabilities like modern smart devices.',
    },
  },
  'b2-s11': {
    id: 'b2-s11',
    slideNumber: 11,
    type: 'content',
    title: 'CIVILIZED ETIQUETTE WITH DIGITAL DEVICES',
    subtitle: 'Educational scenario on digital citizen attitude and responsibility',
    situation: {
      context: 'During family meals or in-class lectures, continuous smartphone usage diminishes direct interpersonal connection and engagement.',
      question: 'How should students cultivate digital device habits that balance technological benefits with social and familial connection?',
      options: [
        {
          label: 'Option A',
          action: 'Mute ringers or activate focus mode during family meals and instructional class time',
          consequence: 'Fosters deeper family bonding and sharpens academic focus on lectures',
          isRecommended: true,
        },
        {
          label: 'Option B',
          action: 'Continuously browse social media and watch short videos while eating meals',
          consequence: 'Causes distraction, impairs digestion, and creates emotional distance from family',
          isRecommended: false,
        },
      ],
    },
  },
  'b2-s12': {
    id: 'b2-s12',
    slideNumber: 12,
    type: 'summary',
    title: 'LESSON 2 SUMMARY & KEY TAKEAWAYS',
    subtitle: 'Systematizing knowledge on the role of Informatics in the digital era',
    mindmap: {
      center: 'SMART DEVICES & INFORMATICS',
      centerSubtitle: 'Core Takeaways of Lesson 2',
      branches: [
        {
          title: 'Core Concept',
          subItems: ['Microprocessor embedded', 'Autonomous to a degree', 'Networked & interactive'],
        },
        {
          title: 'Ecosystem',
          subItems: ['Internet of Things (IoT)', 'Smart Home', 'Smart Cities & Agriculture'],
        },
        {
          title: 'Achievements',
          subItems: ['Microcomputers', 'Global Internet', 'Cloud Computing & AI'],
        },
        {
          title: 'Responsibility',
          subItems: ['Master technology', 'Civilized etiquette', 'Protect personal privacy'],
        },
      ],
    },
  },

  // =========================================================================
  // LESSON 7: PRACTICAL DIGITAL DEVICE EXPLOITATION SKILLS
  // =========================================================================
  'b7-s1': {
    id: 'b7-s1',
    slideNumber: 1,
    type: 'title',
    title: 'PRACTICAL SKILLS IN EXPLOITING COMMON DIGITAL DEVICES',
    subtitle: 'Topic 1: Computers and Information Society | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Familiarize with personal digital devices: Smartphone, Tablet, Smartwatch' },
      { text: 'Practice 4 core skills: Hardware buttons, Screen gestures, Apps, and Files' },
      { text: 'Folder directory hierarchy management and secure cloud backup practices' },
      { text: 'Connecting mobile devices to computers via USB cables and Wi-Fi' },
    ],
    badge: 'Lesson 7 • Standard Practical Workshop',
  },
  'b7-s2': {
    id: 'b7-s2',
    slideNumber: 2,
    type: 'content',
    title: 'PERSONAL DIGITAL ASSISTANTS (PDA) AND SMARTPHONE EVOLUTION',
    subtitle: 'History of mobile digital device evolution (Textbook p. 33)',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Smartphones — the most ubiquitous personal digital devices today',
    bullets: [
      {
        title: 'Concept of PDA (Personal Digital Assistant):',
        text: 'Early handheld electronic organizers offering basic note-taking, address books, calendar schedules, and pocket calculators.',
      },
      {
        title: 'Evolution into Modern Smartphones:',
        text: 'Integrated with 4G/5G telecommunications, high-res cameras, GPS satellite navigation, and millions of applications on Android and iOS.',
      },
      {
        title: 'Key Characteristic:',
        text: 'Pocket-sized, accompanies users 24/7, maintaining persistent high-speed Internet connectivity.',
      },
    ],
  },
  'b7-s3': {
    id: 'b7-s3',
    slideNumber: 3,
    type: 'process',
    title: 'FOUR CORE CLASSROOM PRACTICAL TASKS (TEXTBOOK P. 34 - 36)',
    subtitle: '4-Stage methodology for mastering mobile digital devices',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: '1',
          title: 'Power & Buttons',
          desc: 'Power/lock keys, volume controls, and safe reboot/shutdown operations.',
          tag: 'Task 1',
        },
        {
          stepNumber: '2',
          title: 'Interface',
          desc: 'Home screen layout, status bar (battery, signal, time), dock bar, and swipe gestures.',
          tag: 'Task 2',
        },
        {
          stepNumber: '3',
          title: 'Applications',
          desc: 'Installing and managing educational apps, calculators, maps, and cloud storage.',
          tag: 'Task 3',
        },
        {
          stepNumber: '4',
          title: 'File Management',
          desc: 'Accessing File Manager, locating DCIM/Download folders, copying and moving files.',
          tag: 'Task 4',
        },
      ],
    },
  },
  'b7-s4': {
    id: 'b7-s4',
    slideNumber: 4,
    type: 'content',
    title: 'DIRECTORY HIERARCHY MANAGEMENT ON MOBILE DEVICES',
    subtitle: 'Hierarchical file tree architecture identical to personal computer operating systems',
    cardsGrid: [
      {
        title: 'DCIM Folder (Digital Camera Images)',
        desc: 'Dedicated storage location for photos and videos captured via the device camera.',
        tag: 'Media',
        points: [
          'Automatically organized by date and capture timestamp',
          'Recommended to back up periodically to Google Photos or iCloud',
        ],
      },
      {
        title: 'Download Folder',
        desc: 'Contains study materials, PDFs, and files downloaded from web browsers and messaging apps.',
        tag: 'Documents',
        points: [
          'Should be categorized into specific subject study folders',
          'Clean up unneeded downloaded installers to conserve flash storage',
        ],
      },
    ],
  },
  'b7-s5': {
    id: 'b7-s5',
    slideNumber: 5,
    type: 'content',
    title: 'CORE FILE MANAGEMENT OPERATIONS',
    subtitle: 'Professional digital literacy workflows on smartphones and tablets',
    imageUrl: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Managing, moving, and organizing files on mobile smart devices',
    bullets: [
      {
        title: 'Touch and Hold (Long-press):',
        text: 'Hold finger on a file for ~1 second to summon contextual operations: Copy, Move, Rename, Share, or Delete.',
      },
      {
        title: 'Creating Organized Subject Folders:',
        text: 'Tap the plus (+) icon or 3-dot menu, select "Create New Folder", and apply clear naming such as "Informatics10_QuanLHK".',
      },
      {
        title: 'Regular Data Backups:',
        text: 'Connect the device to a PC to archive vital records, or enable automated cloud backups to prevent data loss upon hardware failure.',
      },
    ],
  },
  'b7-s6': {
    id: 'b7-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'QUIZ: DIGITAL DEVICE OPERATION SKILLS',
    subtitle: 'Verifying practical operating competence on mobile operating systems',
    quiz: {
      question: 'When capturing photographs using a smartphone camera, which internal memory directory do photos save to by default?',
      options: [
        'A. Documents folder',
        'B. DCIM folder',
        'C. Download folder',
        'D. Android folder',
      ],
      answer: 'Option B: DCIM folder (Digital Camera Images).',
      explanation: 'DCIM is the universal international standard file directory for digital camera image storage across smartphones, cameras, and tablets.',
    },
  },
  'b7-s7': {
    id: 'b7-s7',
    slideNumber: 7,
    type: 'summary',
    title: 'LESSON 7 SUMMARY: THREE CORE DIGITAL COMPETENCIES',
    subtitle: 'Essential practical skills for mastering smart devices for academic learning',
    bullets: [
      {
        title: '1. Hardware Interfaces & Ports:',
        text: 'Proficiency in power management, volume adjustments, battery charging safety, and USB data connectivity to preserve hardware longevity.',
      },
      {
        title: '2. Educational App Exploitation:',
        text: 'Proficiency in locating, evaluating, and securely using online learning platforms, digital dictionaries, and scientific calculators.',
      },
      {
        title: '3. Scientific File Organization:',
        text: 'Maintaining clean folder hierarchies, storing camera captures in DCIM, syncing to cloud storage, and safely tethering to desktop computers.',
      },
    ],
  },
  'b7-s8': {
    id: 'b7-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'APPLICATION TASK & HOMEWORK ASSIGNMENT',
    subtitle: 'Cultivating systematic, neat digital file organization habits',
    lead: 'Students execute 2 practical assignments on personal or family smart devices:',
    bullets: [
      {
        title: 'Task 1: Create an Academic Folder Structure',
        text: 'Open the File Manager app on your device, create a root directory named "Study_Grade10", and create a subfolder named "Informatics".',
        badge: 'File Operations',
      },
      {
        title: 'Task 2: Capture and Archive Study Notes',
        text: 'Use your smartphone camera to photograph mind maps from Lessons 1 and 2 in your notebook, then move the images from DCIM to the "Informatics" folder.',
        badge: 'Backup Practice',
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'DATA SAFETY TIP',
      content: 'Enable automated cloud backup to Google Drive or iCloud so that your academic notes and assignments are never lost when changing devices.',
    },
  },
};
