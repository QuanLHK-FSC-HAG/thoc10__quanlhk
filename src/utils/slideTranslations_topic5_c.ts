import { Slide } from '../types';

export const TOPIC5_C_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 28: VARIABLE SCOPE IN FUNCTIONS
  // =========================================================================
  'b28-s1': {
    id: 'b28-s1',
    slideNumber: 1,
    type: 'title',
    title: 'VARIABLE SCOPE IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish local variables (inside function) vs global variables (outside function)' },
      { text: 'Understand variable life cycles and scope isolation mechanisms' },
      { text: 'Master the "global" keyword to safely modify global variables from within functions' },
      { text: 'Analyze and debug variable naming collisions across scopes' },
    ],
    badge: 'Lesson 28 • Standard Lesson Plan',
  },
  'b28-s2': {
    id: 'b28-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: NAME COLLISION INSIDE AND OUTSIDE FUNCTIONS',
    subtitle: 'What happens when a variable inside a function shares the name of an outer variable?',
    lead: 'Observe the following code segment:',
    bullets: [
      {
        title: 'Python Code Example:',
        text: 'x = 10\ndef test():\n    x = 20\n    print("Inside function:", x)\ntest()\nprint("Outside function:", x)',
        badge: 'Scope Trace',
      },
      {
        title: 'Output Result:',
        text: 'Inside function: 20\nOutside function: 10\nWhy was the global variable x not modified to 20?',
        badge: 'Mystery',
      },
    ],
  },
  'b28-s3': {
    id: 'b28-s3',
    slideNumber: 3,
    type: 'content',
    title: 'DISTINGUISHING LOCAL VARIABLES AND GLOBAL VARIABLES',
    subtitle: 'Scope rules: Local Scope vs Global Scope',
    lead: 'Python strictly partitions variable namespaces into distinct scopes:',
    bullets: [
      {
        title: '1. Local Variables (Local Scope):',
        text: 'Variables defined inside a function (including parameters). Created when function is invoked, destroyed when function returns. Inaccessible from outside.',
      },
      {
        title: '2. Global Variables (Global Scope):',
        text: 'Variables defined at the top-level main program outside all functions. Accessible for reading anywhere throughout the entire program.',
      },
      {
        title: '3. Scope Isolation Benefit:',
        text: 'Local variables prevent accidental overwriting of variables across different parts of a large software application.',
      },
    ],
  },
  'b28-s4': {
    id: 'b28-s4',
    slideNumber: 4,
    type: 'content',
    title: 'THE GLOBAL KEYWORD AND MODIFYING GLOBAL VARIABLES',
    subtitle: 'Explicitly declaring intent to rebind global state',
    lead: 'By default, reading a global variable inside a function is permitted, but assigning to it creates a new local variable unless declared global:',
    bullets: [
      {
        title: 'Syntax: global variable_name',
        text: 'Tells Python that variable_name refers to the module-level global variable, enabling in-place reassignment.',
      },
      {
        title: 'Code Demonstration:',
        text: 'count = 0\ndef increment():\n    global count\n    count += 1\nincrement()\nprint(count)  # Outputs 1!',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'BEST PRACTICE',
      content: 'Limit excessive use of global variables. Pure functions that receive inputs via parameters and return values via return are much safer and easier to test!',
    },
  },
  'b28-s5': {
    id: 'b28-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE: TRACING VARIABLE SCOPES',
    subtitle: 'Diagnostic quiz on variable scope behavior',
    quiz: {
      question: 'Consider the code:\na = 5\ndef f():\n    a = 10\n    return a * 2\nprint(f(), a)\nWhat is printed on the screen?',
      options: [
        'A. 20 10',
        'B. 20 5',
        'C. 10 5',
        'D. UnboundLocalError',
      ],
      answer: 'Option B: 20 5.',
      explanation: 'Inside f(), local variable a is created with value 10, returning 10 * 2 = 20. The outer global variable a remains unchanged at 5.',
    },
  },
  'b28-s6': {
    id: 'b28-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 28 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of variable scope in Python',
    bullets: [
      {
        title: '1. Local Scope:',
        text: 'Variables created inside functions exist only during execution of that function call.',
      },
      {
        title: '2. Global Scope:',
        text: 'Variables created at program root are visible everywhere for reading.',
      },
      {
        title: '3. global Keyword:',
        text: 'Required only when you need to reassign a global variable from inside a function block.',
      },
    ],
  },
  'b28-s7': {
    id: 'b28-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent scope debugging problems',
    lead: 'Solve the following homework challenges:',
    bullets: [
      {
        title: 'Task 1: Global Score Counter',
        text: 'Build a game score accumulator using a global score variable modified by score_goal() and penalty() functions.',
        badge: 'Score Tracker',
      },
      {
        title: 'Task 2: Refactoring to Pure Functions',
        text: 'Refactor the global score counter into pure functions passing the score via parameter and return value.',
        badge: 'Refactoring',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 145-148) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 29: IDENTIFYING PROGRAM ERRORS
  // =========================================================================
  'b29-s1': {
    id: 'b29-s1',
    slideNumber: 1,
    type: 'title',
    title: 'IDENTIFYING PROGRAM ERRORS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Acknowledge that errors and bugs are inevitable in software development' },
      { text: 'Classify the 3 fundamental error categories: Syntax, Runtime, and Semantic' },
      { text: 'Read and decipher Python Traceback diagnostic error reports' },
      { text: 'Identify and fix common exceptions: NameError, TypeError, IndexError' },
    ],
    badge: 'Lesson 29 • Standard Lesson Plan',
  },
  'b29-s2': {
    id: 'b29-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: WHEN PROGRAMS DO NOT RUN AS EXPECTED',
    subtitle: 'Software debugging is an essential problem-solving skill',
    lead: 'Every software developer encounters bugs daily:',
    bullets: [
      {
        title: 'The Origin of "Bug":',
        text: 'In 1947, computer pioneer Grace Hopper found an actual moth trapped inside the Mark II computer relay, coining the term "computer bug" and "debugging".',
        badge: 'History',
      },
      {
        title: 'Core Philosophy:',
        text: 'Encountering errors is an opportunity to deepen your understanding of how computers execute instructions!',
        badge: 'Mindset',
      },
    ],
  },
  'b29-s3': {
    id: 'b29-s3',
    slideNumber: 3,
    type: 'table',
    title: 'THE THREE CLASSIC CATEGORIES OF PROGRAM ERRORS',
    subtitle: 'Syntax Errors vs Runtime Errors vs Semantic / Logic Errors',
    tableData: {
      caption: 'Classification and diagnostic traits of programming errors',
      headers: ['Error Category', 'When Detected', 'Behavior & Symptoms', 'Ease of Finding'],
      rows: [
        ['1. Syntax Error (SyntaxError)', 'Before execution (during translation phase)', 'Code violates grammar rules (missing colon, unclosed quotes); program cannot start', 'Easiest: Python points directly to exact line'],
        ['2. Runtime Error (Exception)', 'During execution at specific line', 'Program crashes mid-run (division by zero, file not found, index out of range)', 'Medium: Python prints detailed Traceback message'],
        ['3. Semantic / Logic Error', 'During execution (program finishes without crashing)', 'Program runs completely but produces INCORRECT calculation results', 'Hardest: No error message; requires testing logic'],
      ],
    },
  },
  'b29-s4': {
    id: 'b29-s4',
    slideNumber: 4,
    type: 'table',
    title: 'MOST COMMON RUNTIME EXCEPTIONS IN PYTHON',
    subtitle: 'Deciphering Traceback error types',
    tableData: {
      caption: 'Common runtime exceptions and their root causes',
      headers: ['Exception Name', 'Root Cause', 'Illustrative Example', 'Remedy'],
      rows: [
        ['NameError', 'Using variable or function name that was never defined', 'print(x) when x was never assigned', 'Check spelling of variable names'],
        ['TypeError', 'Applying operator or function on incompatible types', '"Age: " + 16', 'Cast integer using str(16)'],
        ['IndexError', 'Accessing list index beyond valid bounds', 'a = [1, 2]; print(a[5])', 'Verify 0 <= index < len(a)'],
        ['ZeroDivisionError', 'Dividing a number by zero (/ or %)', '100 / 0', 'Add if divisor != 0 check'],
        ['ValueError', 'Passing valid type but invalid content', 'int("abc")', 'Validate input formatting'],
      ],
    },
  },
  'b29-s5': {
    id: 'b29-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE: IDENTIFYING AND FIXING SOURCE BUGS',
    subtitle: 'Debugging real-world faulty code snippets',
    lead: 'Diagnose the bugs in the code snippet below:',
    bullets: [
      {
        title: 'Faulty Code:',
        text: 'n = input("Enter n: ")\nfor i in range(n):\n    if i % 2 = 0:\n        print(i)',
        badge: 'Contains 3 Bugs',
      },
      {
        title: 'Diagnostic Corrections:',
        text: '1. n = int(input("Enter n: ")) -> Must cast to integer for range().\n2. if i % 2 == 0: -> Must use equality comparison (==), not assignment (=).\n3. Validated and works perfectly!',
        badge: 'Fixed Code',
      },
    ],
  },
  'b29-s6': {
    id: 'b29-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 29 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of error identification',
    bullets: [
      {
        title: '1. Three Error Types:',
        text: 'Syntax errors (caught before run), Runtime exceptions (crashes mid-run), Semantic logic errors (wrong results).',
      },
      {
        title: '2. Read Traceback Carefully:',
        text: 'Python error reports show the exact file, line number, and exception description—read them to locate bugs instantly!',
      },
      {
        title: '3. Defensive Coding:',
        text: 'Validate inputs, double check types, and use meaningful variable names to avoid typos.',
      },
    ],
  },
  'b29-s7': {
    id: 'b29-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Code review and debugging practice',
    lead: 'Debug and correct the following program:',
    bullets: [
      {
        title: 'Task 1: Average Grade Bug Hunt',
        text: 'Find and fix 4 errors in a program that calculates student grade averages and prints honors tier.',
        badge: 'Bug Hunt',
      },
      {
        title: 'Task 2: Safe Division Function',
        text: 'Write def safe_div(a, b): that checks if b == 0 and returns None instead of crashing with ZeroDivisionError.',
        badge: 'safe_div',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 149-153) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 30: TESTING AND DEBUGGING PROGRAMS
  // =========================================================================
  'b30-s1': {
    id: 'b30-s1',
    slideNumber: 1,
    type: 'title',
    title: 'TESTING AND DEBUGGING PROGRAMS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the importance of software testing with diverse test case datasets' },
      { text: 'Design 3 test case categories: Typical cases, Edge boundary cases, and Special cases' },
      { text: 'Master print debugging techniques to inspect intermediate variable states' },
      { text: 'Build structured test suites for practical problems like electricity bills' },
    ],
    badge: 'Lesson 30 • Standard Lesson Plan',
  },
  'b30-s2': {
    id: 'b30-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: IS A SINGLE SUCCESSFUL RUN ENOUGH?',
    subtitle: 'Why testing must be systematic and rigorous',
    lead: 'Suppose you write a program to classify student exam scores:',
    bullets: [
      {
        title: 'The Mirage of a Single Test:',
        text: 'You test with score = 8.5 -> Program outputs "Good". Does this guarantee the program is 100% bug-free?',
        badge: 'False Confidence',
      },
      {
        title: 'The Hidden Edge Cases:',
        text: 'What happens when score = 10? What if score = 0? Or negative numbers (-1) or scores exceeding 10 (12.5)? Only comprehensive test cases reveal boundary bugs!',
        badge: 'Rigorous Testing',
      },
    ],
  },
  'b30-s3': {
    id: 'b30-s3',
    slideNumber: 3,
    type: 'diagram',
    title: '3 CATEGORIES OF TEST CASES IN SOFTWARE TESTING',
    subtitle: 'Designing comprehensive verification datasets',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'GROUP 1',
          title: 'Typical Cases (Normal)',
          desc: 'Standard, ordinary inputs expected in daily usage (e.g. scores of 7.0, 8.0, 6.5).',
          tag: 'Typical',
        },
        {
          stepNumber: 'GROUP 2',
          title: 'Boundary / Edge Cases',
          desc: 'Values sitting exactly on dividing threshold borders (e.g. score = 5.0, 8.0, 10.0, 0.0).',
          tag: 'Boundary',
        },
        {
          stepNumber: 'GROUP 3',
          title: 'Special / Extreme Cases',
          desc: 'Unusual inputs (e.g. empty lists [], 0 items, negative values, very large numbers).',
          tag: 'Special',
        },
      ],
    },
  },
  'b30-s4': {
    id: 'b30-s4',
    slideNumber: 4,
    type: 'content',
    title: 'DEBUGGING USING PRINT() STATEMENTS',
    subtitle: 'The timeless, universal debugging technique used by all programmers',
    lead: 'When a program produces unexpected results without throwing errors, print intermediate variables:',
    bullets: [
      {
        title: '1. Insert Diagnostic Prints:',
        text: 'Place print("DEBUG i:", i, "sum:", current_sum) inside loops to observe state changes turn by turn.',
      },
      {
        title: '2. Pinpoint the Flaw:',
        text: 'Compare printed intermediate values with expected theoretical values to pinpoint the exact line where logic deviates.',
      },
      {
        title: '3. Clean Up:',
        text: 'Once the bug is corrected, remove or comment out diagnostic print statements before final delivery.',
      },
    ],
  },
  'b30-s5': {
    id: 'b30-s5',
    slideNumber: 5,
    type: 'table',
    title: 'PRACTICE: TEST SUITE FOR ELECTRICITY BILL PROBLEM',
    subtitle: 'Tiered electricity tariff calculation verification',
    tableData: {
      caption: 'Structured test cases for progressive electricity tariff',
      headers: ['Test Case ID', 'Input kWh', 'Test Case Category', 'Expected Output (VND)', 'Pass / Fail'],
      rows: [
        ['TC 01', '35 kWh', 'Typical Tier 1 (< 50)', '35 * 1678 = 58,730', 'PASS'],
        ['TC 02', '50 kWh', 'Boundary Tier 1 border', '50 * 1678 = 83,900', 'PASS'],
        ['TC 03', '75 kWh', 'Typical Tier 2 (51-100)', '50*1678 + 25*1734 = 127,250', 'PASS'],
        ['TC 04', '0 kWh', 'Special case: no consumption', '0 VND', 'PASS'],
        ['TC 05', '-10 kWh', 'Invalid special case', 'Reports "Invalid input"', 'PASS'],
      ],
    },
  },
  'b30-s6': {
    id: 'b30-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 30 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of testing and debugging',
    bullets: [
      {
        title: '1. Systematic Testing:',
        text: 'Never rely on a single lucky run; construct typical, boundary, and special test cases.',
      },
      {
        title: '2. Diagnostic print():',
        text: 'Inspect variable values at critical stages to identify the root cause of algorithmic deviations.',
      },
      {
        title: '3. Quality Discipline:',
        text: 'Rigorous testing produces stable, trustworthy, professional software solutions.',
      },
    ],
  },
  'b30-s7': {
    id: 'b30-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent test suite design exercises',
    lead: 'Construct a test table for the following assignment:',
    bullets: [
      {
        title: 'Task 1: Quadratic Equation Test Suite',
        text: 'Design 5 test cases for solving ax^2 + bx + c = 0 covering: a=0, delta > 0, delta = 0, delta < 0.',
        badge: 'Math Testing',
      },
      {
        title: 'Task 2: Synthesis Review',
        text: 'Review all core knowledge across Topic 5 in preparation for Topic 6 data structures and projects!',
        badge: 'Topic 5 Review',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 154-158) • Teacher: QuanLHK',
  },
};
