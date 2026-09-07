import { Slide } from '../types';

export const TOPIC3_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 11: ETHICS, LAW AND CULTURE IN DIGITAL ENVIRONMENT & COPYRIGHT
  // =========================================================================
  'b11-s1': {
    id: 'b11-s1',
    slideNumber: 1,
    type: 'title',
    title: 'CIVILIZED CYBERSPACE ETIQUETTE AND COPYRIGHT RESPONSIBILITIES',
    subtitle: 'Topic 3: Ethics, Law and Culture in Digital Environment | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Identify ethical, cultural, and legal violations in cyberspace' },
      { text: 'Understand how internet characteristics amplify the severity of misconduct' },
      { text: 'Master the 3-step fact-checking process before posting or sharing content' },
      { text: 'Distinguish copyright, moral rights, economic rights, and digital intellectual property' },
    ],
    badge: 'Lesson 11 • Standard Lesson Plan',
  },
  'b11-s2': {
    id: 'b11-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: ONE SHARE, PROFOUND CONSEQUENCES',
    subtitle: 'Case study analysis based on Textbook opening scenario (p. 55)',
    lead: 'Scenario: A group of students quarrel outside the school gate. A bystander films a video clip with their smartphone and uploads it to social media with an inflammatory caption.',
    cardsGrid: [
      {
        title: 'The Violation',
        desc: 'Filming and broadcasting violent imagery that humiliates and defames individuals online.',
        tag: 'Misconduct',
        points: [
          'Severe violation of student ethics and moral standards',
          'Breaches legal regulations under Decree 15/2020/ND-CP',
        ],
      },
      {
        title: 'Unforeseen Consequences',
        desc: 'Victim suffers mental distress; the poster faces academic suspension and legal penalties.',
        tag: 'Consequences',
        points: [
          'Digital footprints remain permanently across the Internet',
          'Viral global velocity makes content impossible to retract',
        ],
      },
    ],
  },
  'b11-s3': {
    id: 'b11-s3',
    slideNumber: 3,
    type: 'content',
    title: 'CYBERSPACE MALPRACTICE AND HARMFUL BEHAVIOR (PART 1)',
    subtitle: 'Task 1: Recognizing harmful actions according to Textbook standards (p. 56-57)',
    cardsGrid: [
      {
        title: '1. Fabricating False News (Fake News)',
        desc: 'Publishing untrue fabricated stories on epidemics or disasters to gain clicks and likes.',
        tag: 'Fake News',
        points: [
          'Instills widespread panic and public unrest across society',
          'Subject to heavy administrative fines from 10 to 20 million VND',
        ],
      },
      {
        title: '2. Doxxing & Violating Privacy',
        desc: 'Arbitrarily posting phone numbers, home addresses, grades, or private chats without consent.',
        tag: 'Privacy Violation',
        points: [
          'Gross infringement of constitutional personal privacy rights',
          'Exposes victims to real-world harassment, stalking, and threats',
        ],
      },
    ],
  },
  'b11-s4': {
    id: 'b11-s4',
    slideNumber: 4,
    type: 'content',
    title: 'CYBERSPACE MALPRACTICE AND HARMFUL BEHAVIOR (PART 2)',
    subtitle: 'Task 1: Cyberbullying and Invasive Electronic Spam',
    cardsGrid: [
      {
        title: '3. Electronic Spam & Unsolicited Ads',
        desc: 'Broadcasting mass unsolicited advertising via spam emails or automated instant messages.',
        tag: 'Spam',
        points: [
          'Congests communication inboxes and annoys users',
          'Often harbors malicious links and deceptive phishing lures',
        ],
      },
      {
        title: '4. Cyberbullying',
        desc: 'Using defamatory language, body shaming, and orchestrating peer group ostracization.',
        tag: 'Verbal Violence',
        points: [
          'Inflicts severe psychological trauma and depression on victims',
          'Subject to criminal prosecution if causing grave consequences',
        ],
      },
    ],
  },
  'b11-s5': {
    id: 'b11-s5',
    slideNumber: 5,
    type: 'table',
    title: 'PRACTICE: CIVILIZED ONLINE COMMUNICATION',
    subtitle: 'Task 2: Transforming toxic verbal attacks into respectful dialogue (Worksheet 2)',
    tableData: {
      caption: 'Contrasting uncivilized verbal harassment with standard constructive etiquette',
      headers: ['Scenario', 'Toxic Phrasing (STRICTLY AVOID)', 'Civilized Phrasing (RECOMMENDED)'],
      rows: [
        ['Disagreeing on an Informatics problem', '"You\'re so clueless, shut up!"', '"I believe this approach might not be optimal yet; have you checked the formula on textbook page 12?"'],
        ['Critiquing a peer\'s class photo submission', '"This photo looks like garbage, absolutely horrible!"', '"The lighting in this angle is slightly dim; if our team balances natural light next time it will look stunning."'],
        ['Noticing a peer sharing unverified news', '"This person keeps dumping trash into the group, report them!"', '"I checked this claim on official news outlets and it hasn\'t been verified; please remove it temporarily to avoid misunderstandings."'],
      ],
    },
  },
  'b11-s6': {
    id: 'b11-s6',
    slideNumber: 6,
    type: 'process',
    title: 'THE 3-STEP FACT-CHECKING PROTOCOL BEFORE SHARING',
    subtitle: 'Self-defense skills against unintentionally propagating disinformation (Worksheet 3)',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Verify Source',
          desc: 'Is the report from mainstream news (VTV, Official Press) or an anonymous clickbait page?',
          tag: 'Source',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Inspect Content',
          desc: 'Are there signs of doctored photos, sensationalist headlines, or missing publication dates?',
          tag: 'Validation',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Assess Impact',
          desc: 'Does this violate personal dignity, breach privacy laws, or disrupt social order?',
          tag: 'Responsibility',
        },
      ],
    },
  },
  'b11-s7': {
    id: 'b11-s7',
    slideNumber: 7,
    type: 'remember',
    title: 'GOLDEN RULE & RESPONSIBILITY WHEN SHARING INFORMATION',
    subtitle: 'Conscientious digital citizenship and legal liabilities of propagating fake news',
    lead: 'A thoughtless single click can trigger disastrous, irreversible consequences:',
    highlightBox: {
      type: 'warning',
      title: 'GOLDEN RULE ON SOCIAL MEDIA',
      content: 'IF YOU ARE NOT 100% CERTAIN OF THE FACTUAL ACCURACY -> STOP, ABSOLUTELY DO NOT CLICK SHARE!',
    },
    bullets: [
      {
        title: 'Permanent Digital Footprint:',
        text: 'Even after deleting a post, screenshot archives and ISP server traffic logs constitute undeniable evidence under the law.',
      },
      {
        title: 'Penalties under Decree 15/2020/ND-CP:',
        text: 'Supplying and disseminating fraudulent information, falsehoods, or defamation carries administrative fines of 10 to 20 million VND.',
      },
    ],
  },
  'b11-s8': {
    id: 'b11-s8',
    slideNumber: 8,
    type: 'diagram',
    title: 'COPYRIGHT: MORAL RIGHTS AND ECONOMIC RIGHTS',
    subtitle: 'Task 5: Structure of copyright under Vietnam Intellectual Property Law',
    svgType: 'copyright-cc',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'GROUP 1',
          title: 'Moral Rights',
          desc: 'Title the work; claim authorship; have name credited upon dissemination; protect the integrity of the work.',
          tag: 'Non-transferable',
        },
        {
          stepNumber: 'GROUP 2',
          title: 'Economic Rights',
          desc: 'Create derivative works; reproduce; distribute originals/copies; lease or license usage of the work.',
          tag: 'Transferable / Commercial',
        },
      ],
    },
  },
  'b11-s9': {
    id: 'b11-s9',
    slideNumber: 9,
    type: 'content',
    title: 'SOFTWARE COPYRIGHT & END-USER LICENSES (EULA)',
    subtitle: 'Distinguishing between "Copyright Ownership" and "Right of Use"',
    lead: 'Computer software is an intellectual creation strictly protected under intellectual property legislation:',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Respecting intellectual property rights, software copyright, and digital ethics',
    bullets: [
      {
        title: 'Who owns software copyright?:',
        text: 'The individual developer or the software enterprise that authored the codebase and program design.',
      },
      {
        title: 'End-User License Agreement (EULA):',
        text: 'Purchasing commercial software only buys the conditional "right to use" according to terms, not source code ownership.',
      },
      {
        title: 'Severe Software Copyright Infringements:',
        text: 'Using cracked software, sharing pirated license keys online, or duplicating commercial installation media for resale.',
      },
    ],
  },
  'b11-s10': {
    id: 'b11-s10',
    slideNumber: 10,
    type: 'remember',
    title: 'ADVICE FOR STUDENTS: FREE & OPEN-SOURCE SOFTWARE (FOSS)',
    subtitle: 'Modern, cost-effective academic solutions that fully respect copyright laws',
    lead: 'Students can leverage world-class creative tools completely legally without violating copyright:',
    highlightBox: {
      type: 'remember',
      title: 'RECOMMENDATION FOR STUDENTS',
      content: 'Prioritize Free and Open-Source Software (FOSS) like Inkscape, GIMP, and LibreOffice to study effectively while fully respecting intellectual property laws.',
    },
    bullets: [
      {
        title: 'Vector Graphics: Use Inkscape instead of Adobe Illustrator',
        text: 'Comprehensive vector drafting tools, international SVG standard support, lightweight footprint, and zero monthly subscription costs.',
      },
      {
        title: 'Photo Editing: Use GIMP instead of Photoshop',
        text: 'Free open-source code, advanced professional multi-layer manipulation, and smooth performance on classroom computers.',
      },
    ],
  },
  'b11-s11': {
    id: 'b11-s11',
    slideNumber: 11,
    type: 'table',
    title: 'IDENTIFYING DIGITAL COPYRIGHT INFRINGEMENTS',
    subtitle: 'Analyzing real-world classroom scenarios (Textbook p. 61-62)',
    tableData: {
      caption: 'Evaluating the legality of common digital copyright practices',
      headers: ['Real-World Practice', 'Evaluation', 'Infringed Right & Legal Justification'],
      rows: [
        ['Buying 1 licensed movie USB and copying it to a friend\'s laptop', 'Infringement', 'Violates exclusive reproduction and distribution rights of the author'],
        ['Purchasing single-PC antivirus license and installing it on 3 other PCs', 'Infringement', 'Exceeds authorized terms granted by the end-user software license'],
        ['Incorporating online photos into classroom slides while citing author sources', 'Legal', 'Fair use for non-commercial educational instruction'],
        ['Downloading cracked software or pirated product keys from internet forums', 'Severe Infringement', 'Violates copyright and poses extreme risk of Trojan and spyware infection'],
      ],
    },
  },
  'b11-s12': {
    id: 'b11-s12',
    slideNumber: 12,
    type: 'practice',
    title: 'QUIZ: ETHICS & LAW IN DIGITAL ENVIRONMENTS',
    subtitle: 'Assessing comprehension of copyright and digital communication etiquette',
    quiz: {
      question: 'Which of the following practices does NOT violate ethical codes or copyright law when exploiting online internet resources?',
      options: [
        'A. Copying an online digital painting and erasing the artist\'s signature to claim authorship',
        'B. Downloading an online essay for presentation slides while attributing the original author and source URL',
        'C. Sharing cracked pirated software into the class chat group for classmates to install',
        'D. Secretly filming a peer\'s embarrassing moment and posting it to social media to mock them',
      ],
      answer: 'Option B: Downloading an essay while citing the author name and legitimate reference link.',
      explanation: 'Using materials for non-commercial educational purposes accompanied by proper author attribution conforms strictly to fair use legal doctrines.',
    },
  },
  'b11-s13': {
    id: 'b11-s13',
    slideNumber: 13,
    type: 'summary',
    title: 'LESSON 11 SUMMARY & DIGITAL CITIZENSHIP MESSAGE',
    subtitle: 'Ethical communication etiquette and legal responsibilities in cyberspace',
    bullets: [
      {
        title: '1. Civilized Etiquette:',
        text: 'Cyberspace is a real-world community legally and morally. Treat others with dignity and respect.',
      },
      {
        title: '2. Information Sharing Responsibility:',
        text: 'Always verify source authenticity before posting or sharing. Never facilitate the spread of fake news.',
      },
      {
        title: '3. Respect Intellectual Property:',
        text: 'Honor both moral and economic rights of creators; always cite sources when referencing external works.',
      },
    ],
  },
};
