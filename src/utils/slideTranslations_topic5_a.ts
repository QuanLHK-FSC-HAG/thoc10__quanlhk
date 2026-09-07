import { Slide } from '../types';

export const TOPIC5_A_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 16: HIGH-LEVEL PROGRAMMING LANGUAGES AND PYTHON
  // =========================================================================
  'b16-s1': {
    id: 'b16-s1',
    slideNumber: 1,
    type: 'title',
    title: 'HIGH-LEVEL PROGRAMMING LANGUAGES AND PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish machine language, assembly language, and high-level languages' },
      { text: 'Understand the role of translators (Compilers vs Interpreters)' },
      { text: 'Familiarize with 2 working modes in Python: Interactive Mode & Script Mode' },
      { text: 'Write and execute your very first Python program (Program1.py)' },
    ],
    badge: 'Lesson 16 • Coding Foundations',
  },
  'b16-s2': {
    id: 'b16-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: WHICH LANGUAGE IS EASIER TO UNDERSTAND?',
    subtitle: 'Observing Figure 16.1 - Comparing three programming generations solving the same task',
    lead: 'Observe how three generations of programming languages express instructions:',
    bullets: [
      {
        title: '1. Machine Language:',
        text: 'Consists entirely of binary 0s and 1s (e.g., 10110000 01100001). Understood directly by CPU hardware, but extremely difficult for humans to read, remember, or debug.',
        badge: 'Generation 1',
      },
      {
        title: '2. Assembly Language:',
        text: 'Uses mnemonic English abbreviations (such as MOV, ADD, SUB). Easier to read than raw binary, but still tightly coupled to specific CPU architecture.',
        badge: 'Generation 2',
      },
      {
        title: '3. High-Level Language (Python, C++, Java):',
        text: 'Commands closely resemble natural human language and mathematics (e.g., print("Hello"), c = a + b). Human-friendly, portable, and hardware-independent.',
        badge: 'High-Level',
      },
    ],
  },
  'b16-s3': {
    id: 'b16-s3',
    slideNumber: 3,
    type: 'content',
    title: 'TRANSLATORS & THE ADVANTAGES OF PYTHON',
    subtitle: 'The bridge between human thought and computer hardware (Textbook pp. 86-87)',
    lead: 'Computers natively understand only binary machine code (0s and 1s). Thus, high-level code must pass through a translator:',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Python programming language - elegant, readable, and modern syntax',
    bullets: [
      {
        title: 'Translator (Compiler / Interpreter):',
        text: 'Converts source code written in a high-level language into machine code for CPU execution.',
      },
      {
        title: 'Why Python is the Global Standard in Education:',
        text: '• Extremely clean, concise syntax, eliminating cluttered punctuation symbols.\n• Completely free and open-source, running across Windows, macOS, and Linux.\n• The global #1 language in Artificial Intelligence (AI) and Data Science.',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'TEXTBOOK TAKEAWAY',
      content: 'Python is a high-level programming language characterized by simple, expressive syntax, ease of learning, and vast practical applications.',
    },
  },
  'b16-s4': {
    id: 'b16-s4',
    slideNumber: 4,
    type: 'table',
    title: 'TWO WORKING MODES IN PYTHON',
    subtitle: 'Task 2: Distinguishing Interactive Mode and Script Mode (Textbook pp. 88-89)',
    svgType: 'python-runtime',
    sourceCitation: 'Source: Figures 16.1 & 16.2 Informatics 10 Textbook (pp. 88-89) • Connecting Knowledge to Life Series',
    tableData: {
      caption: 'Comparison between Interactive Mode and Script Mode',
      headers: ['Feature', 'Interactive Mode (Direct Commands)', 'Script Mode (Source Code Editor)'],
      rows: [
        ['Identification', 'Displays three angle brackets prompt: >>>', 'Plain text editor window (such as IDLE editor or VS Code)'],
        ['Execution Method', 'Type each command and press Enter -> Machine executes and shows result immediately', 'Write multiple sequential lines, save as .py file, then execute (Run)'],
        ['Code Persistence', 'Cannot save code as a file (lost immediately upon closing window)', 'Permanently stored as a .py source code file on disk'],
        ['Intended Purpose', 'Quick calculations, testing syntax of a function or expression', 'Building complete applications, complex algorithmic programs'],
      ],
    },
  },
  'b16-s5': {
    id: 'b16-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE 1: RAPID CALCULATIONS IN INTERACTIVE MODE',
    subtitle: 'Task 1 based on textbook instructions (p. 89)',
    lead: 'Launch IDLE, type calculations directly at the >>> prompt and press Enter:',
    bullets: [
      {
        title: 'Command 1: Basic Arithmetic Expression',
        text: 'Type: >>> 15 * 4 + 120 / 6 -> Result: 80.0',
        badge: 'Arithmetic',
      },
      {
        title: 'Command 2: Outputting Text Strings',
        text: 'Type: >>> print("Hello Informatics 10!") -> Output: Hello Informatics 10!',
        badge: 'print()',
      },
      {
        title: 'Command 3: Power Operator (**)',
        text: 'Type: >>> 2 ** 10 -> Result: 1024 (calculating 2 to the power of 10 instantly)',
        badge: 'Exponent **',
      },
    ],
  },
  'b16-s6': {
    id: 'b16-s6',
    slideNumber: 6,
    type: 'process',
    title: 'PRACTICE 2: CREATING AND RUNNING YOUR FIRST PROGRAM',
    subtitle: 'Task 2: Complete workflow in Script Mode (Saving as Program1.py)',
    lead: 'Step-by-step procedure to write, save, and execute a complete Python program:',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Open New Window',
          desc: 'In Python Shell, select File -> New File (Shortcut: Ctrl + N) to launch script editor.',
          tag: 'Ctrl + N',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Type Code Lines',
          desc: 'Type: print("Welcome to Python programming!") and print("2026 - Coding the future")',
          tag: 'Coding',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Save Source File',
          desc: 'Select File -> Save As (Ctrl + S), choose student folder, and save file as "Program1.py".',
          tag: 'Save .py',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Execute (Run F5)',
          desc: 'Press F5 (or Run -> Run Module). View program execution output in the Python Shell.',
          tag: 'Run (F5)',
        },
      ],
    },
  },
  'b16-s7': {
    id: 'b16-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE: BASIC SYNTAX ERROR DEBUGGING',
    subtitle: 'Recognizing common beginner programming errors',
    quiz: {
      question: 'When executing print("Hello Python) in Script Mode, Python throws a SyntaxError: EOL while scanning string literal. What is the cause of this error?',
      options: [
        'A. Python does not support the print command.',
        'B. Missing a closing double quotation mark (") for the text string.',
        'C. Missing a semicolon at the end of the line.',
        'D. Capitalized the letter P in print.',
      ],
      answer: 'Option B: Missing a closing double quotation mark (") for the text string.',
      explanation: 'In Python, every string literal opened with a double quote must be closed with a corresponding double quote before the end of the line.',
    },
  },
  'b16-s8': {
    id: 'b16-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 16 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Essential foundational principles of programming in Python',
    bullets: [
      {
        title: '1. Three Language Generations:',
        text: 'Machine language (binary 0-1) -> Assembly (mnemonics) -> High-level languages (Python, clean, close to human language).',
      },
      {
        title: '2. Translators:',
        text: 'Translate high-level source code into binary machine instructions so that the computer processor can execute them.',
      },
      {
        title: '3. Two Working Modes:',
        text: 'Interactive Mode (>>> for instant testing) and Script Mode (writes persistent .py files for complete programs).',
      },
    ],
  },
  'b16-s9': {
    id: 'b16-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Consolidating Python environment setup and practice',
    lead: 'Students complete the following coding milestones at home:',
    bullets: [
      {
        title: 'Task 1: Self-Introduction Program',
        text: 'Create file "Intro_Fullname.py" with 4 print lines displaying: Full Name, Class, School, and Coding Goals.',
        badge: 'File .py',
      },
      {
        title: 'Task 2: Preview Lesson 17',
        text: 'Read ahead in Lesson 17: Understand how variables store data and how assignment statements (=) work.',
        badge: 'Preview',
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'STUDENT TIP',
      content: 'Install Python 3.10+ from python.org onto your home laptop or computer to practice coding daily!',
    },
    footerNote: 'Informatics 10 Textbook (pp. 86-90) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 17: VARIABLES AND ASSIGNMENT STATEMENTS
  // =========================================================================
  'b17-s1': {
    id: 'b17-s1',
    slideNumber: 1,
    type: 'title',
    title: 'VARIABLES AND ASSIGNMENT STATEMENTS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the concept of variables as named storage locations in memory' },
      { text: 'Master variable naming rules and distinguish Python reserved keywords' },
      { text: 'Perform assignment operations (=) and simultaneous variable assignments' },
      { text: 'Calculate circle perimeter and area using standard arithmetic operators' },
    ],
    badge: 'Lesson 17 • Standard Lesson Plan',
  },
  'b17-s2': {
    id: 'b17-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: THE BENEFITS OF USING VARIABLES',
    subtitle: 'Analyzing textbook problem scenario: Calculating circle area multiple times',
    lead: 'Calculate the area of 3 circular flowerbeds with radii r = 2.5m, 4.0m, and 7.2m:',
    bullets: [
      {
        title: 'Without Variables:',
        text: 'Must manually re-type 3.14159 * 2.5 * 2.5, then 3.14159 * 4.0 * 4.0. Tedious, error-prone, and painful if Pi precision changes.',
        badge: 'Manual Calculation',
      },
      {
        title: 'With Variables in Python:',
        text: 'Set pi = 3.14159. For any radius, simply compute: area = pi * r * r. Reusable, maintainable, and clear.',
        badge: 'With Variables',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CORE INSIGHT',
      content: 'Variables allow programs to store values dynamically, compute symbolically, and reuse data effortlessly!',
    },
  },
  'b17-s3': {
    id: 'b17-s3',
    slideNumber: 3,
    type: 'content',
    title: 'THE CONCEPT OF VARIABLES AND ASSIGNMENT STATEMENTS',
    subtitle: 'Naming storage memory slots to retain dynamic program values',
    lead: 'A variable in Python represents a labeled memory reference holding a value:',
    bullets: [
      {
        title: '1. Syntax of Assignment Statement:',
        text: 'variable_name = expression\n• Python evaluates the expression on the right-hand side first.\n• The resulting value is then assigned to the variable name on the left.',
      },
      {
        title: '2. Dynamic Typing in Python:',
        text: 'In Python, you do not need to declare data types in advance. When assigning x = 10, x is automatically an integer. When assigning x = "Hanoi", x becomes a string.',
      },
      {
        title: '3. Multi-Variable Assignment:',
        text: 'Python allows assigning multiple variables in a single elegant line: a, b = 5, 10 (a receives 5, b receives 10).',
      },
    ],
  },
  'b17-s4': {
    id: 'b17-s4',
    slideNumber: 4,
    type: 'content',
    title: 'VARIABLE NAMING RULES & PYTHON KEYWORDS',
    subtitle: 'Strict syntactic conventions enforced by the Python interpreter',
    lead: 'To be valid, variable identifiers in Python must strictly obey 3 rules:',
    bullets: [
      {
        title: 'Rule 1: Permitted Characters',
        text: 'Can only contain letters (a-z, A-Z), digits (0-9), and underscores (_). No spaces, hyphens, or special punctuation.',
      },
      {
        title: 'Rule 2: Starting Character',
        text: 'Must start with a letter or an underscore (_). Must NEVER start with a numerical digit (e.g. 1st_name is illegal).',
      },
      {
        title: 'Rule 3: Reserved Keywords & Case Sensitivity',
        text: 'Cannot use Python reserved keywords (if, else, for, while, def, class, return, etc.). Python is case-sensitive: total, Total, and TOTAL are 3 distinct variables!',
      },
    ],
  },
  'b17-s5': {
    id: 'b17-s5',
    slideNumber: 5,
    type: 'table',
    title: 'VALID VS INVALID VARIABLE NAMES CLASSIFICATION',
    subtitle: 'Task: Test comprehension of variable naming conventions',
    tableData: {
      caption: 'Classification and diagnostic explanation of variable names in Python',
      headers: ['Variable Name', 'Validity', 'Diagnostic Explanation'],
      rows: [
        ['ban_kinh', 'Valid', 'Uses letters and underscore; clean and expressive'],
        ['_tong_diem', 'Valid', 'Begins with an underscore; allowed in Python'],
        ['diem toan', 'Invalid', 'Contains an illegal whitespace character'],
        ['1st_player', 'Invalid', 'Starts with a numerical digit (1)'],
        ['for', 'Invalid', 'Conflicts with Python reserved keyword for loops'],
        ['chieu-dai', 'Invalid', 'Hyphen (-) is treated as a subtraction operator'],
      ],
    },
  },
  'b17-s6': {
    id: 'b17-s6',
    slideNumber: 6,
    type: 'table',
    title: 'ARITHMETIC OPERATORS IN PYTHON',
    subtitle: '7 fundamental arithmetic operators across numeric expressions',
    tableData: {
      caption: 'Table of basic Python arithmetic operators',
      headers: ['Operator', 'Name', 'Example Expression', 'Evaluated Result'],
      rows: [
        ['+', 'Addition', '12 + 5', '17'],
        ['-', 'Subtraction', '20 - 7', '13'],
        ['*', 'Multiplication', '6 * 7', '42'],
        ['/', 'Floating-Point Division', '15 / 4', '3.75 (Always returns float)'],
        ['//', 'Floor / Integer Division', '15 // 4', '3 (Discards decimal fraction)'],
        ['%', 'Modulus (Remainder)', '15 % 4', '1 (Remainder of 15 divided by 4)'],
        ['**', 'Exponentiation (Power)', '2 ** 5', '32 (2 to the power of 5)'],
      ],
    },
  },
  'b17-s7': {
    id: 'b17-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE: CIRCLE PERIMETER AND AREA PROGRAM',
    subtitle: 'Writing a script using variables, arithmetic operators, and print()',
    lead: 'Construct a complete Python script to compute circle metrics for radius r = 5.5:',
    bullets: [
      {
        title: 'Step 1: Declare Variables',
        text: 'r = 5.5\npi = 3.14159',
        badge: 'Variables',
      },
      {
        title: 'Step 2: Calculate Metrics',
        text: 'perimeter = 2 * pi * r\narea = pi * (r ** 2)',
        badge: 'Formulas',
      },
      {
        title: 'Step 3: Display Results',
        text: 'print("Circle Perimeter:", perimeter)\nprint("Circle Area:", area)',
        badge: 'Output',
      },
    ],
  },
  'b17-s8': {
    id: 'b17-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'PRACTICE 1: VARIABLE VALUE SWAPPING MECHANISM',
    subtitle: 'Classic computer science algorithmic problem: Swapping values of two variables',
    lead: 'Given a = 10 and b = 20. How to swap values so a = 20 and b = 10?',
    bullets: [
      {
        title: 'Traditional Approach (Using Temporary Variable):',
        text: 'temp = a\na = b\nb = temp\n(Requires 3 steps and an auxiliary variable memory space).',
        badge: 'Classic Method',
      },
      {
        title: 'Pythonic Simultaneous Assignment:',
        text: 'a, b = b, a\n(Python swaps values simultaneously in a single, elegant, and safe line!).',
        badge: 'Pythonic Magic',
      },
    ],
  },
  'b17-s9': {
    id: 'b17-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'PRACTICE 2: STRING OPERATIONS QUIZ',
    subtitle: 'Testing operator overloading on string literals in Python',
    quiz: {
      question: 'What is the output produced by the command: print("TinHoc" * 3)?',
      options: [
        'A. TinHoc 3',
        'B. TinHocTinHocTinHoc',
        'C. TypeError: Cannot multiply sequence by non-int',
        'D. TinHoc*3',
      ],
      answer: 'Option B: TinHocTinHocTinHoc.',
      explanation: 'In Python, multiplying a string by an integer n repeats the string sequence n consecutive times.',
    },
  },
  'b17-s10': {
    id: 'b17-s10',
    slideNumber: 10,
    type: 'summary',
    title: 'LESSON 17 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key insights into variables, assignments, and arithmetic operators',
    bullets: [
      {
        title: '1. Variables & Assignment:',
        text: 'Syntax: variable = expression. Variables store program values dynamically; Python supports simultaneous assignments.',
      },
      {
        title: '2. Naming Conventions:',
        text: 'Letters, numbers, underscores. Never start with a digit. Never clash with reserved keywords. Case-sensitive.',
      },
      {
        title: '3. Special Operators:',
        text: 'Remember // for integer division, % for modulus remainder, and ** for power exponentiation.',
      },
    ],
  },
  'b17-s11': {
    id: 'b17-s11',
    slideNumber: 11,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent programming exercises',
    lead: 'Complete the following exercises before the next session:',
    bullets: [
      {
        title: 'Task 1: Triangle Area Calculator',
        text: 'Given base a = 12.4 and height h = 8.5. Write a Python script to compute and print the triangle area (S = 0.5 * a * h).',
        badge: 'Exercise 1',
      },
      {
        title: 'Task 2: Time Converter',
        text: 'Given total seconds t = 3750. Use // and % operators to break t into hours, minutes, and remaining seconds.',
        badge: 'Exercise 2',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 91-96) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 18: BASIC INPUT AND OUTPUT STATEMENTS
  // =========================================================================
  'b18-s1': {
    id: 'b18-s1',
    slideNumber: 1,
    type: 'title',
    title: 'BASIC INPUT AND OUTPUT STATEMENTS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Master data input via input() and understand its string return type' },
      { text: 'Inspect data types using type() and perform type casting (int, float, str)' },
      { text: 'Master data output formatting with print() using sep and end parameters' },
      { text: 'Build interactive programs calculating sum and automated student age' },
    ],
    badge: 'Lesson 18 • Standard Lesson Plan',
  },
  'b18-s2': {
    id: 'b18-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: DATA IN AND DATA OUT',
    subtitle: 'The fundamental interactive communication loop between human and computer',
    lead: 'In Lesson 17, our programs had fixed variable values. Real applications require user interaction:',
    bullets: [
      {
        title: 'Input Data (Input):',
        text: 'The user enters names, scores, quantities from keyboard into the running program.',
        badge: 'Input',
      },
      {
        title: 'Program Processing:',
        text: 'The computer calculates formulas, verifies conditions, and transforms values.',
        badge: 'Process',
      },
      {
        title: 'Output Information (Output):',
        text: 'The program displays structured results onto the screen display.',
        badge: 'Output',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CORE QUESTION',
      content: 'Which commands in Python handle interactive keyboard input and screen output?',
    },
  },
  'b18-s3': {
    id: 'b18-s3',
    slideNumber: 3,
    type: 'content',
    title: 'THE INPUT() STATEMENT & STRING RETURN TYPE',
    subtitle: 'Syntax: variable = input("Prompt message...")',
    lead: 'The input() function pauses program execution to await keyboard input from the user:',
    bullets: [
      {
        title: '1. Mechanism:',
        text: 'Displays the prompt message on screen, waits until the user finishes typing and presses Enter.',
      },
      {
        title: '2. Golden Rule of input():',
        text: 'Everything returned by input() is ALWAYS a string of characters (str), even if the user types digits like 123!',
      },
      {
        title: '3. Pitfall Example:',
        text: 'If a = input() and b = input() where user enters 5 and 7, then a + b will evaluate to "57" (string concatenation), NOT 12!',
      },
    ],
  },
  'b18-s4': {
    id: 'b18-s4',
    slideNumber: 4,
    type: 'table',
    title: '4 BASIC DATA TYPES & THE TYPE() FUNCTION',
    subtitle: 'Table of fundamental data types in Python',
    tableData: {
      caption: 'Summary of 4 standard built-in data types in Python',
      headers: ['Type Name', 'Keyword', 'Example Values', 'Check Type Syntax'],
      rows: [
        ['Integer', 'int', '-15, 0, 2026', 'type(2026) -> <class \'int\'>'],
        ['Floating-point', 'float', '3.14, -0.5, 10.0', 'type(3.14) -> <class \'float\'>'],
        ['String', 'str', '"Hello", \'10A1\'', 'type("Hi") -> <class \'str\'>'],
        ['Boolean', 'bool', 'True, False', 'type(True) -> <class \'bool\'>'],
      ],
    },
  },
  'b18-s5': {
    id: 'b18-s5',
    slideNumber: 5,
    type: 'process',
    title: 'TYPE CASTING TECHNIQUES IN PYTHON',
    subtitle: 'Converting input strings into numeric values for mathematical operations',
    lead: 'To perform arithmetic on user inputs, wrap input() in a type conversion function:',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'INT CONVERSION',
          title: 'int(input())',
          desc: 'Converts input string into an integer. Example: age = int(input("Enter age: "))',
          tag: 'int()',
        },
        {
          stepNumber: 'FLOAT CONVERSION',
          title: 'float(input())',
          desc: 'Converts input string into a decimal float. Example: score = float(input("Score: "))',
          tag: 'float()',
        },
        {
          stepNumber: 'STR CONVERSION',
          title: 'str(value)',
          desc: 'Converts numbers back into text strings for concatenation or display.',
          tag: 'str()',
        },
      ],
    },
  },
  'b18-s6': {
    id: 'b18-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'PRACTICE: SUM OF 3 NATURAL NUMBERS PROGRAM',
    subtitle: 'Applying input(), int(), and formatted print() in a complete script',
    lead: 'Write a program prompting the user to enter 3 integers, then display their sum:',
    bullets: [
      {
        title: 'Source Code:',
        text: 'a = int(input("Enter 1st number: "))\nb = int(input("Enter 2nd number: "))\nc = int(input("Enter 3rd number: "))\ntotal = a + b + c\nprint("Total sum:", total)',
        badge: 'Python Script',
      },
      {
        title: 'Execution Trace:',
        text: 'Input: 10, 20, 30\nOutput: Total sum: 60',
        badge: 'Console Output',
      },
    ],
  },
  'b18-s7': {
    id: 'b18-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE 1: AUTOMATED STUDENT AGE CALCULATOR',
    subtitle: 'Interactive script calculating current age from birth year',
    bullets: [
      {
        title: 'Problem Description:',
        text: 'Prompt the student for their birth year, then calculate and print their current age in 2026.',
      },
      {
        title: 'Implementation Code:',
        text: 'birth_year = int(input("Enter your birth year: "))\nage = 2026 - birth_year\nprint("In 2026, you are", age, "years old!")',
      },
    ],
  },
  'b18-s8': {
    id: 'b18-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'PRACTICE 2: TYPE CONVERSION ERROR QUIZ',
    subtitle: 'Analyzing runtime conversion errors',
    quiz: {
      question: 'What happens when executing int("3.14") in Python?',
      options: [
        'A. Returns integer 3',
        'B. Returns integer 4',
        'C. Throws ValueError: invalid literal for int() with base 10: \'3.14\'',
        'D. Returns float 3.14',
      ],
      answer: 'Option C: Throws ValueError.',
      explanation: 'int() cannot directly parse strings with decimal points. To convert "3.14" to an integer, one must use int(float("3.14")).',
    },
  },
  'b18-s9': {
    id: 'b18-s9',
    slideNumber: 9,
    type: 'summary',
    title: 'LESSON 18 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Essential principles of input, output, and type casting',
    bullets: [
      {
        title: '1. input() Returns Strings:',
        text: 'Always returns str data. Must explicitly cast with int() or float() to perform calculations.',
      },
      {
        title: '2. print() Formatting:',
        text: 'Can output multiple arguments separated by commas; customize with sep=" " and end="\\n".',
      },
      {
        title: '3. Data Types:',
        text: 'Check types with type(x); fluently convert between int, float, and str.',
      },
    ],
  },
  'b18-s10': {
    id: 'b18-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent interactive programming exercises',
    lead: 'Complete the following homework challenges:',
    bullets: [
      {
        title: 'Task 1: Rectangle Perimeter and Area',
        text: 'Write a program prompting width and length as floating numbers, then compute perimeter and area.',
        badge: 'Task 1',
      },
      {
        title: 'Task 2: Shopping Bill Calculator',
        text: 'Input unit price and item quantity. Calculate total payment and display formatted invoice.',
        badge: 'Task 2',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 97-101) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 19: CONDITIONAL STATEMENT IF
  // =========================================================================
  'b19-s1': {
    id: 'b19-s1',
    slideNumber: 1,
    type: 'title',
    title: 'CONDITIONAL STATEMENT IF IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Construct Boolean logical expressions using comparison and logical operators' },
      { text: 'Master single-branch (if) and double-branch (if-else) control structures' },
      { text: 'Understand Python indentation rules (Indentation) and block structure' },
      { text: 'Solve practical problems: Odd/even check and tiered pricing calculations' },
    ],
    badge: 'Lesson 19 • Standard Lesson Plan',
  },
  'b19-s2': {
    id: 'b19-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: REAL-WORLD CONDITIONAL SCENARIOS',
    subtitle: 'From daily decision-making logic to algorithmic branching',
    lead: 'Human decisions naturally follow conditional branches:',
    bullets: [
      {
        title: 'Scenario 1 (Weather):',
        text: 'IF it rains tomorrow -> THEN we cancel outdoor sports -> ELSE we play football.',
        badge: 'If - Else',
      },
      {
        title: 'Scenario 2 (Shopping Discount):',
        text: 'IF total bill >= 500,000 VND -> THEN discount 10% -> ELSE pay full price.',
        badge: 'Discount Logic',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CORE QUESTION',
      content: 'How does Python implement conditional branching decisions in code?',
    },
  },
  'b19-s3': {
    id: 'b19-s3',
    slideNumber: 3,
    type: 'table',
    title: 'LOGICAL EXPRESSIONS & COMPARISON OPERATORS',
    subtitle: 'Operators evaluating to Boolean values (True or False)',
    tableData: {
      caption: 'Table of comparison and logical operators in Python',
      headers: ['Operator', 'Meaning', 'Example', 'Evaluated Result'],
      rows: [
        ['==', 'Equal to (Equality check)', '5 == 5', 'True'],
        ['!=', 'Not equal to', '5 != 3', 'True'],
        ['>', 'Greater than', '10 > 20', 'False'],
        ['<', 'Less than', '7 < 12', 'True'],
        ['>=', 'Greater than or equal to', '10 >= 10', 'True'],
        ['<=', 'Less than or equal to', '8 <= 5', 'False'],
        ['and', 'Logical AND (Both must be True)', '(5 > 2) and (3 < 1)', 'False'],
        ['or', 'Logical OR (Either is True)', '(5 > 2) or (3 < 1)', 'True'],
        ['not', 'Logical NOT (Inverts Boolean)', 'not (5 > 2)', 'False'],
      ],
    },
  },
  'b19-s4': {
    id: 'b19-s4',
    slideNumber: 4,
    type: 'diagram',
    title: 'SYNTAX OF THE IF STATEMENT: SINGLE & DOUBLE BRANCH',
    subtitle: 'Indentation syntax rules governing Python code blocks',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'FORM 1',
          title: 'Single-Branch (if condition:)',
          desc: 'if condition:\n    command_block\n(Executes block only if condition evaluates to True; otherwise skips).',
          tag: 'Single if',
        },
        {
          stepNumber: 'FORM 2',
          title: 'Double-Branch (if ... else:)',
          desc: 'if condition:\n    block_1\nelse:\n    block_2\n(Executes block_1 if True, otherwise executes block_2).',
          tag: 'if - else',
        },
      ],
    },
    highlightBox: {
      type: 'tip',
      title: 'INDENTATION RULE',
      content: 'In Python, code blocks inside if or else MUST be indented uniformly (typically 4 spaces or 1 Tab). Indentation replaces curly braces {}!',
    },
  },
  'b19-s5': {
    id: 'b19-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE 1: ODD OR EVEN INTEGER CHECKER',
    subtitle: 'Using the modulus remainder operator (%) with if-else',
    lead: 'Check whether an integer entered by the user is even or odd:',
    bullets: [
      {
        title: 'Program Logic:',
        text: 'A number n is even if its remainder when divided by 2 is 0 (n % 2 == 0); otherwise it is odd.',
      },
      {
        title: 'Python Implementation:',
        text: 'n = int(input("Enter an integer: "))\nif n % 2 == 0:\n    print(n, "is an EVEN number")\nelse:\n    print(n, "is an ODD number")',
      },
    ],
  },
  'b19-s6': {
    id: 'b19-s6',
    slideNumber: 6,
    type: 'apply',
    title: 'APPLICATION: ORANGE PURCHASE DISCOUNT PROBLEM',
    subtitle: 'Textbook Application Task (p. 104)',
    lead: 'Store policy: Oranges cost 30,000 VND/kg. If buying 5kg or more, the price drops to 25,000 VND/kg:',
    bullets: [
      {
        title: 'Algorithm Code:',
        text: 'kg = float(input("Enter weight of oranges (kg): "))\nif kg >= 5:\n    price = 25000\nelse:\n    price = 30000\ntotal = kg * price\nprint("Total payment:", total, "VND")',
        badge: 'Tiered Pricing',
      },
    ],
  },
  'b19-s7': {
    id: 'b19-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE: DETECTING INDENTATION ERRORS',
    subtitle: 'Analyzing IndentationError in Python',
    quiz: {
      question: 'When running the code below, what error does Python report?\nif a > 0:\nprint("Positive")',
      options: [
        'A. SyntaxError: missing colon',
        'B. IndentationError: expected an indented block',
        'C. NameError: print is not defined',
        'D. Runs without error',
      ],
      answer: 'Option B: IndentationError: expected an indented block.',
      explanation: 'Python requires statements inside the if block to be indented. Placing print() without indentation raises an IndentationError.',
    },
  },
  'b19-s8': {
    id: 'b19-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 19 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Essential principles of conditional statements',
    bullets: [
      {
        title: '1. Comparison & Logic:',
        text: 'Comparison operators (==, !=, >, <, >=, <=) and logical operators (and, or, not) produce Booleans (True / False).',
      },
      {
        title: '2. Indentation Structure:',
        text: 'The colon (:) ends the header line; commands in the subordinate branch must be indented uniformly.',
      },
      {
        title: '3. Single & Double Branch:',
        text: 'if condition: for one-sided checks; if-else for two mutually exclusive alternative paths.',
      },
    ],
  },
  'b19-s9': {
    id: 'b19-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent conditional branching exercises',
    lead: 'Students write Python scripts for the following problems:',
    bullets: [
      {
        title: 'Task 1: Maximum of 2 Numbers',
        text: 'Input two numbers a and b. Use if-else to find and print the maximum value.',
        badge: 'Max of 2',
      },
      {
        title: 'Task 2: Leap Year Verification',
        text: 'Input a year y. A leap year is divisible by 400, or divisible by 4 but not by 100. Check if y is a leap year.',
        badge: 'Leap Year',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 102-106) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 20: LOOP STATEMENT FOR
  // =========================================================================
  'b20-s1': {
    id: 'b20-s1',
    slideNumber: 1,
    type: 'title',
    title: 'LOOP STATEMENT FOR IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the concept of bounded definite loops (known iteration count)' },
      { text: 'Master the range() function with 1, 2, and 3 parameters' },
      { text: 'Trace loop execution and accumulation patterns (sum S, factorial P)' },
      { text: 'Practice finding divisors and counting proper divisors of integer N' },
    ],
    badge: 'Lesson 20 • Standard Lesson Plan',
  },
  'b20-s2': {
    id: 'b20-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: FROM REPETITIVE TASKS TO LOOP CONSTRUCTS',
    subtitle: 'Why write 100 repetitive lines when 2 lines of code suffice?',
    lead: 'Task: Print numbers from 1 to 10 onto the screen display:',
    bullets: [
      {
        title: 'Naive Approach (Without Loops):',
        text: 'Must write 10 separate print statements: print(1), print(2), ..., print(10). Extremely cumbersome if printing up to 1,000!',
        badge: '10 lines',
      },
      {
        title: 'Loop Approach (for loop):',
        text: 'for i in range(1, 11):\n    print(i)\n(Clean, scalable, and executes any number of iterations effortlessly).',
        badge: '2 lines',
      },
    ],
  },
  'b20-s3': {
    id: 'b20-s3',
    slideNumber: 3,
    type: 'content',
    title: 'SYNTAX OF THE FOR LOOP & THE RANGE() FUNCTION',
    subtitle: 'Syntax: for variable in range(...):',
    lead: 'The for statement iterates over a generated sequence of numerical values:',
    bullets: [
      {
        title: '1. range(stop):',
        text: 'Generates numbers from 0 up to stop - 1. Example: range(5) produces 0, 1, 2, 3, 4.',
      },
      {
        title: '2. range(start, stop):',
        text: 'Generates numbers from start up to stop - 1. Example: range(1, 6) produces 1, 2, 3, 4, 5.',
      },
      {
        title: '3. range(start, stop, step):',
        text: 'Generates numbers stepping by step. Example: range(1, 10, 2) produces 1, 3, 5, 7, 9.',
      },
    ],
  },
  'b20-s4': {
    id: 'b20-s4',
    slideNumber: 4,
    type: 'table',
    title: 'SIMULATING ACCUMULATION LOOP: S = 0 + 1 + ... + 9',
    subtitle: 'Tracing variable states across loop iterations',
    tableData: {
      caption: 'Step-by-step trace of loop accumulating S = S + i',
      headers: ['Iteration', 'Loop Variable i', 'Accumulator S Before', 'S = S + i (After)'],
      rows: [
        ['Start', '-', '-', 'S = 0'],
        ['Turn 1', 'i = 0', '0', 'S = 0 + 0 = 0'],
        ['Turn 2', 'i = 1', '0', 'S = 0 + 1 = 1'],
        ['Turn 3', 'i = 2', '1', 'S = 1 + 2 = 3'],
        ['Turn 4', 'i = 3', '3', 'S = 3 + 3 = 6'],
        ['Turn ...', '...', '...', '...'],
        ['Final', 'i = 9', '36', 'S = 36 + 9 = 45'],
      ],
    },
  },
  'b20-s5': {
    id: 'b20-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE: PRINT ALL DIVISORS OF INTEGER N',
    subtitle: 'Combining the for loop with a conditional if test',
    lead: 'Print all positive integers that evenly divide N:',
    bullets: [
      {
        title: 'Algorithm:',
        text: 'Iterate i from 1 to N. If N % i == 0, then i is a divisor of N.',
      },
      {
        title: 'Python Script:',
        text: 'n = int(input("Enter N: "))\nprint("Divisors of", n, "are:")\nfor i in range(1, n + 1):\n    if n % i == 0:\n        print(i, end=" ")\nprint()',
      },
    ],
  },
  'b20-s6': {
    id: 'b20-s6',
    slideNumber: 6,
    type: 'apply',
    title: 'APPLICATION: COUNTING PROPER DIVISORS OF N',
    subtitle: 'Enhancing the loop with an accumulator counter variable',
    lead: 'Count how many divisors an integer N has:',
    bullets: [
      {
        title: 'Code Implementation:',
        text: 'n = int(input("Enter N: "))\ncount = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        count = count + 1\nprint("Total count of divisors:", count)',
        badge: 'Counter Pattern',
      },
    ],
  },
  'b20-s7': {
    id: 'b20-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE: FACTORIAL CALCULATION 1 × 2 × ... × N',
    subtitle: 'Multiplicative accumulation pattern',
    quiz: {
      question: 'To calculate N! = 1 * 2 * ... * N, what initial value must the accumulator variable P have before the loop?',
      options: [
        'A. P = 0',
        'B. P = 1',
        'C. P = -1',
        'D. P = N',
      ],
      answer: 'Option B: P = 1.',
      explanation: 'In multiplicative accumulation, the accumulator must start at 1. If initialized to 0, any multiplication will result in 0.',
    },
  },
  'b20-s8': {
    id: 'b20-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 20 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of definite for loops',
    bullets: [
      {
        title: '1. Definite Loops:',
        text: 'Used when the number of repetitions is known in advance.',
      },
      {
        title: '2. range(start, stop, step):',
        text: 'Iterates up to stop - 1. Stop value is NEVER included!',
      },
      {
        title: '3. Accumulation Patterns:',
        text: 'Sum initialization: S = 0. Product initialization: P = 1. Counter initialization: count = 0.',
      },
    ],
  },
  'b20-s9': {
    id: 'b20-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent for loop challenges',
    lead: 'Write Python programs for the following tasks:',
    bullets: [
      {
        title: 'Task 1: Sum of Squares',
        text: 'Compute S = 1^2 + 2^2 + ... + N^2 for integer N entered from keyboard.',
        badge: 'Sum of Squares',
      },
      {
        title: 'Task 2: Multiplication Table',
        text: 'Input integer k (1 <= k <= 9). Print the multiplication table for k from 1 to 10.',
        badge: 'Times Table',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 107-111) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 21: LOOP STATEMENT WHILE
  // =========================================================================
  'b21-s1': {
    id: 'b21-s1',
    slideNumber: 1,
    type: 'title',
    title: 'LOOP STATEMENT WHILE IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish definite loops (for) from indefinite conditional loops (while)' },
      { text: 'Master while loop execution semantics and avoid infinite loop traps' },
      { text: 'Understand the three fundamental control structures of Computer Science' },
      { text: 'Practice finding greatest common divisors (GCD) and formatted number grids' },
    ],
    badge: 'Lesson 21 • Standard Lesson Plan',
  },
  'b21-s2': {
    id: 'b21-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: DEFINITE VS INDEFINITE LOOPS',
    subtitle: 'Comparing real-life repetitive activities',
    lead: 'Observe the distinction between two types of repetitive actions:',
    bullets: [
      {
        title: 'Definite Repetition (for):',
        text: '"Jog exactly 5 laps around the stadium." -> Repetition count is known in advance (5 times).',
        badge: 'Definite (for)',
      },
      {
        title: 'Indefinite Conditional Repetition (while):',
        text: '"Jog around the stadium WHILE you are not exhausted." -> Repetition continues as long as condition remains true.',
        badge: 'Indefinite (while)',
      },
    ],
  },
  'b21-s3': {
    id: 'b21-s3',
    slideNumber: 3,
    type: 'content',
    title: 'SYNTAX AND EXECUTION OF THE WHILE STATEMENT',
    subtitle: 'Syntax: while condition:',
    lead: 'The while loop repeatedly executes its code block as long as the condition evaluates to True:',
    bullets: [
      {
        title: '1. Execution Semantics:',
        text: 'Step 1: Check condition.\nStep 2: If True, execute loop body, then return to Step 1.\nStep 3: If False, terminate loop and proceed past.',
      },
      {
        title: '2. The Danger of Infinite Loops:',
        text: 'If the loop body never modifies variables in the condition, condition remains True forever, locking up the program!',
      },
      {
        title: '3. Loop Progress Rule:',
        text: 'Inside the while loop body, there MUST be at least one statement that alters variables toward making condition False.',
      },
    ],
  },
  'b21-s4': {
    id: 'b21-s4',
    slideNumber: 4,
    type: 'table',
    title: 'SIMULATING WHILE LOOP: SUMMING SEQUENCE S < 100',
    subtitle: 'Tracing while loop state progression',
    tableData: {
      caption: 'Execution trace of while loop: finding smallest n such that sum S >= 100',
      headers: ['Iteration', 'Condition (S < 100)', 'Variable n', 'Sum S = S + n'],
      rows: [
        ['Init', '-', 'n = 0', 'S = 0'],
        ['Turn 1', '0 < 100 (True)', 'n = 1', 'S = 1'],
        ['Turn 2', '1 < 100 (True)', 'n = 2', 'S = 3'],
        ['Turn 13', '78 < 100 (True)', 'n = 13', 'S = 91'],
        ['Turn 14', '91 < 100 (True)', 'n = 14', 'S = 105'],
        ['Terminated', '105 < 100 (False)', 'n = 14', 'Loop halts, result n = 14, S = 105'],
      ],
    },
  },
  'b21-s5': {
    id: 'b21-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE: EUCLIDEAN ALGORITHM FOR GCD',
    subtitle: 'Classic while loop application: Greatest Common Divisor',
    lead: 'Find the greatest common divisor of two positive integers a and b using while:',
    bullets: [
      {
        title: 'Algorithm Code:',
        text: 'a = int(input("Enter a: "))\nb = int(input("Enter b: "))\nwhile b != 0:\n    a, b = b, a % b\nprint("Greatest Common Divisor is:", a)',
        badge: 'Euclid GCD',
      },
    ],
  },
  'b21-s6': {
    id: 'b21-s6',
    slideNumber: 6,
    type: 'content',
    title: 'THE THREE FUNDAMENTAL CONTROL STRUCTURES OF INFORMATICS',
    subtitle: 'Böhm-Jacopini Theorem: Any algorithm can be expressed using only 3 structures',
    bullets: [
      {
        title: '1. Sequential Structure:',
        text: 'Statements execute in direct top-to-bottom sequence one after another.',
        badge: 'Sequence',
      },
      {
        title: '2. Selection / Branching Structure:',
        text: 'Decisions branch based on conditional tests (if, if-else).',
        badge: 'Selection',
      },
      {
        title: '3. Repetition / Loop Structure:',
        text: 'Statements repeat based on count or condition (for, while).',
        badge: 'Repetition',
      },
    ],
  },
  'b21-s7': {
    id: 'b21-s7',
    slideNumber: 7,
    type: 'apply',
    title: 'APPLICATION: PRINTING 100 NUMBERS IN A 10x10 GRID',
    subtitle: 'Formatting output with row breaks',
    bullets: [
      {
        title: 'Implementation:',
        text: 'for i in range(1, 101):\n    print(f"{i:4d}", end="")\n    if i % 10 == 0:\n        print()',
        badge: 'Grid 10x10',
      },
    ],
  },
  'b21-s8': {
    id: 'b21-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 21 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key insights into indefinite loops and foundational control structures',
    bullets: [
      {
        title: '1. while Statement:',
        text: 'Repeats as long as condition evaluates to True. Terminates as soon as condition becomes False.',
      },
      {
        title: '2. Preventing Infinite Loops:',
        text: 'Always ensure variables within the loop body advance toward satisfying the exit condition.',
      },
      {
        title: '3. Three Foundational Structures:',
        text: 'Sequence, Selection, and Repetition form the universal building blocks of all computational algorithms.',
      },
    ],
  },
  'b21-s9': {
    id: 'b21-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent while loop problem solving',
    lead: 'Complete the following programming exercises:',
    bullets: [
      {
        title: 'Task 1: Digit Sum of an Integer',
        text: 'Input positive integer N. Use while N > 0 with % 10 and // 10 to sum all digits of N.',
        badge: 'Digit Sum',
      },
      {
        title: 'Task 2: Guessing Game',
        text: 'Write a program generating a secret number from 1 to 50, prompting user guesses with "Higher" / "Lower" hints until correct.',
        badge: 'Game Loop',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 112-116) • Teacher: QuanLHK',
  },
};
