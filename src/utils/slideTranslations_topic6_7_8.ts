import { Slide } from '../types';

export const TOPIC6_7_8_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // CHAPTER 6: TOPIC 6 - DATA STRUCTURES IN PYTHON
  // =========================================================================

  // --- Bài 22 & 23: Lists and List Processing ---
  'bai-22-23_b22-s1': {
    id: 'b22-s1',
    slideNumber: 1,
    type: 'title',
    title: 'LIST DATA TYPE AND LIST OPERATIONS IN PYTHON',
    subtitle: 'Topic 6: Data Structures and Processing in Python | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the concept of lists as ordered collections of items' },
      { text: 'Master dual indexing (0-based and negative indices) and mutability' },
      { text: 'Apply essential list methods: append(), insert(), remove(), pop()' },
      { text: 'Traverse lists and calculate class grade averages' },
    ],
    badge: 'Lessons 22 & 23 • Standard Lesson Plan',
  },
  'bai-22-23_b22-s2': {
    id: 'b22-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: STORING SCORES FOR 40 STUDENTS',
    subtitle: 'Transitioning from primitive variables to composite sequence structures',
    lead: 'Managing student grade records in programming:',
    bullets: [
      {
        title: 'Without Lists:',
        text: 'Must declare 40 variables: score1, score2, ..., score40. Impossible to loop over or calculate statistics cleanly.',
        badge: 'Inefficient',
      },
      {
        title: 'With Python Lists:',
        text: 'scores = [8.5, 9.0, 7.5, ..., 10.0]. A single organized list variable capable of storing any number of elements.',
        badge: 'Python List',
      },
    ],
  },
  'bai-22-23_b22-s3': {
    id: 'b22-s3',
    slideNumber: 3,
    type: 'content',
    title: 'THE CONCEPT OF LISTS IN PYTHON',
    subtitle: 'Syntax: list_name = [item_0, item_1, ..., item_n]',
    lead: 'A list in Python is an ordered, mutable sequence of items enclosed in square brackets []:',
    bullets: [
      {
        title: '1. Heterogeneous Elements:',
        text: 'Can store varied types together: integers, floats, strings, or booleans in the same list.',
      },
      {
        title: '2. The len() Function:',
        text: 'len(list_name) returns the total number of items in the list. An empty list [] has length 0.',
      },
      {
        title: '3. Mutability:',
        text: 'Elements inside a list can be modified in place: a[i] = new_value.',
      },
    ],
  },
  'bai-22-23_b22-s4': {
    id: 'b22-s4',
    slideNumber: 4,
    type: 'diagram',
    title: 'DUAL INDEXING SYSTEM IN PYTHON LISTS',
    subtitle: 'Positive forward indices and negative backward indices',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'FORWARD (0 TO N-1)',
          title: 'Left to Right: 0, 1, 2, ...',
          desc: 'First item is a[0]. Second item is a[1]. Last item is a[len - 1].',
          tag: '0-based',
        },
        {
          stepNumber: 'BACKWARD (-1 TO -N)',
          title: 'Right to Left: -1, -2, ...',
          desc: 'Last item is a[-1]. Second to last is a[-2]. First item is a[-len].',
          tag: 'Negative',
        },
      ],
    },
  },
  'bai-22-23_b22-s5': {
    id: 'b22-s5',
    slideNumber: 5,
    type: 'table',
    title: 'MODIFYING ELEMENTS AND THE "IN" MEMBERSHIP OPERATOR',
    subtitle: 'In-place assignment and existence checking',
    tableData: {
      caption: 'Operations for updating and querying list membership',
      headers: ['Operation', 'Syntax', 'Meaning', 'Evaluated Result'],
      rows: [
        ['Update Element', 'a[1] = 95', 'Reassigns value at index 1 to 95', 'Mutates list in place'],
        ['Membership Check', 'x in a', 'Tests if x is an element of list a', 'Returns True or False'],
        ['Absence Check', 'x not in a', 'Tests if x does not exist in list a', 'Returns True or False'],
      ],
    },
  },
  'bai-22-23_b22-s6': {
    id: 'b22-s6',
    slideNumber: 6,
    type: 'content',
    title: 'METHODS FOR ADDING ELEMENTS TO A LIST',
    subtitle: 'append() and insert() methods',
    lead: 'Python provides two fundamental methods to add new elements:',
    bullets: [
      {
        title: '1. append(x):',
        text: 'Adds element x to the very end of the list. Example: a.append(10).',
      },
      {
        title: '2. insert(i, x):',
        text: 'Inserts element x at index position i, shifting subsequent items right. Example: a.insert(0, "First").',
      },
    ],
  },
  'bai-22-23_b22-s7': {
    id: 'b22-s7',
    slideNumber: 7,
    type: 'content',
    title: 'METHODS FOR REMOVING ELEMENTS FROM A LIST',
    subtitle: 'remove(), pop(), and clear() methods',
    lead: 'Python provides three ways to remove items from lists:',
    bullets: [
      {
        title: '1. remove(x):',
        text: 'Removes the first occurrence of value x from the list. Raises ValueError if not found.',
      },
      {
        title: '2. pop(i):',
        text: 'Removes and returns the element at index i (defaults to last element if i is omitted).',
      },
      {
        title: '3. clear():',
        text: 'Deletes all elements from the list, making it empty [].',
      },
    ],
  },
  'bai-22-23_b22-s8': {
    id: 'b22-s8',
    slideNumber: 8,
    type: 'process',
    title: 'TWO WAYS TO TRAVERSE A LIST WITH FOR LOOPS',
    subtitle: 'Direct value iteration vs index-based iteration',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'DIRECT ITERATION',
          title: 'for x in a:',
          desc: 'Iterates through each element value directly. Clean and idiomatic for read-only scans.',
          tag: 'for x in a',
        },
        {
          stepNumber: 'INDEX ITERATION',
          title: 'for i in range(len(a)):',
          desc: 'Iterates through index positions i = 0, 1, ..., len - 1. Required when updating values.',
          tag: 'by index',
        },
      ],
    },
  },
  'bai-22-23_b22-s9': {
    id: 'b22-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'PRACTICE: CALCULATING CLASS GRADE AVERAGE',
    subtitle: 'Using lists, loops, and sum/len functions',
    lead: 'Calculate the average grade for a class list:',
    bullets: [
      {
        title: 'Python Script:',
        text: 'grades = [8.5, 9.0, 7.0, 6.5, 10.0, 8.0]\navg = sum(grades) / len(grades)\nprint(f"Class Average Grade: {avg:.2f}")',
        badge: 'Grade Average',
      },
    ],
  },
  'bai-22-23_b22-s10': {
    id: 'b22-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'QUIZ: LIST MANIPULATION SKILLS',
    subtitle: 'Testing understanding of append and pop operations',
    quiz: {
      question: 'Given a = [1, 2, 3]. What is the resulting list after executing: a.append(4); a.pop(1)?',
      options: [
        'A. [1, 3, 4]',
        'B. [2, 3, 4]',
        'C. [1, 2, 4]',
        'D. [1, 2, 3, 4]',
      ],
      answer: 'Option A: [1, 3, 4].',
      explanation: 'a.append(4) makes the list [1, 2, 3, 4]. Then a.pop(1) removes the item at index 1 (which is 2), leaving [1, 3, 4].',
    },
  },
  'bai-22-23_b22-s11': {
    id: 'b22-s11',
    slideNumber: 11,
    type: 'summary',
    title: 'LESSONS 22 & 23 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Summary of list data structures and operations',
    bullets: [
      {
        title: '1. Lists in Python:',
        text: 'Mutable, ordered sequences inside []. Access items using 0-based positive and negative indices.',
      },
      {
        title: '2. Mutation Methods:',
        text: 'append() to add at end, insert() to add at index, remove() to delete by value, pop() to delete by index.',
      },
      {
        title: '3. Traversal Patterns:',
        text: 'Use for x in a for direct access, or for i in range(len(a)) when element indices are needed.',
      },
    ],
  },
  'bai-22-23_b22-s12': {
    id: 'b22-s12',
    slideNumber: 12,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent list challenges',
    lead: 'Complete the following coding problems:',
    bullets: [
      {
        title: 'Task 1: Filter Passing Grades',
        text: 'Write a program that takes a list of grades and filters out all passing grades (>= 5.0).',
        badge: 'Filter Task',
      },
      {
        title: 'Task 2: List Inversion',
        text: 'Invert a list of numbers without using the built-in reverse() method.',
        badge: 'Inversion',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // --- Bài 24 & 25: Strings and String Processing ---
  'bai-24-25_b24-s1': {
    id: 'b24-s1',
    slideNumber: 1,
    type: 'title',
    title: 'STRING DATA TYPE AND TEXT PROCESSING IN PYTHON',
    subtitle: 'Topic 6: Data Structures and Processing in Python | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand strings as immutable sequences of characters' },
      { text: 'Master slicing [start:stop], concatenation (+), and membership (in)' },
      { text: 'Apply string methods: upper(), lower(), split(), join(), replace()' },
      { text: 'Build real-world text standardizers for student full names' },
    ],
    badge: 'Lessons 24 & 25 • Standard Lesson Plan',
  },
  'bai-24-25_b24-s2': {
    id: 'b24-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: TEXT PROCESSING IN DAILY LIFE',
    subtitle: 'Why text processing is essential in modern software',
    lead: 'From search engines to social media, text dominates digital data:',
    bullets: [
      {
        title: 'Everyday Text Processing:',
        text: 'Searching keywords, parsing URLs, filtering sensitive words, validating email addresses.',
        badge: 'Real-world Text',
      },
      {
        title: 'Core Question:',
        text: 'How does Python provide powerful, intuitive tools for text manipulation?',
        badge: 'Python Strings',
      },
    ],
  },
  'bai-24-25_b24-s3': {
    id: 'b24-s3',
    slideNumber: 3,
    type: 'content',
    title: 'IMMUTABLE PROPERTY OF STRINGS IN PYTHON',
    subtitle: 'Strings cannot be modified in place after creation',
    lead: 'Unlike lists, Python strings are IMMUTABLE objects:',
    bullets: [
      {
        title: 'Immutable Rule:',
        text: 's = "Hello"\ns[0] = "J" -> Raises TypeError: \'str\' object does not support item assignment.',
      },
      {
        title: 'Creating New Strings:',
        text: 'To modify text, construct a new string: new_s = "J" + s[1:] -> "Jello".',
      },
    ],
  },
  'bai-24-25_b24-s4': {
    id: 'b24-s4',
    slideNumber: 4,
    type: 'table',
    title: 'BASIC OPERATORS ON STRINGS',
    subtitle: 'Concatenation, replication, and substring search',
    tableData: {
      caption: 'Summary of string operators',
      headers: ['Operator', 'Name', 'Example', 'Evaluated Result'],
      rows: [
        ['+', 'Concatenation', '"Good " + "Morning"', '"Good Morning"'],
        ['*', 'Replication', '"A" * 4', '"AAAA"'],
        ['in', 'Membership Check', '"py" in "python"', 'True'],
        ['not in', 'Absence Check', '"z" not in "python"', 'True'],
        ['len()', 'String Length', 'len("Informatics")', '11'],
      ],
    },
  },
  'bai-24-25_b24-s5': {
    id: 'b24-s5',
    slideNumber: 5,
    type: 'content',
    title: 'UPPERCASE & LOWERCASE TRANSFORMATION METHODS',
    subtitle: 'upper(), lower(), capitalize(), and title() methods',
    lead: 'Python provides simple methods to adjust character casing:',
    bullets: [
      {
        title: '1. upper() & lower():',
        text: '"hello".upper() -> "HELLO"\n"WORLD".lower() -> "world"',
      },
      {
        title: '2. capitalize() & title():',
        text: '"nguyen van an".title() -> "Nguyen Van An"\n"python language".capitalize() -> "Python language"',
      },
    ],
  },
  'bai-24-25_b24-s6': {
    id: 'b24-s6',
    slideNumber: 6,
    type: 'process',
    title: 'SPLITTING AND JOINING: SPLIT() AND JOIN()',
    subtitle: 'The complementary pair for text parsing and formatting',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'SPLIT()',
          title: 'string.split()',
          desc: 'Breaks string into a list of words. Default delimiter is whitespace.\n"apple banana orange".split() -> [\'apple\', \'banana\', \'orange\']',
          tag: 'String -> List',
        },
        {
          stepNumber: 'JOIN()',
          title: 'delimiter.join(list)',
          desc: 'Combines a list of strings into a single string.\n", ".join([\'apple\', \'banana\']) -> "apple, banana"',
          tag: 'List -> String',
        },
      ],
    },
  },
  'bai-24-25_b24-s7': {
    id: 'b24-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE: STANDARDIZING STUDENT FULL NAMES',
    subtitle: 'Cleaning erratic whitespace and proper title capitalization',
    lead: 'Standardize names entered with erratic spacing and casing:',
    bullets: [
      {
        title: 'Implementation Code:',
        text: 'raw = input("Enter raw name: ")  # e.g. "   le   hONg   kHOI   "\nwords = raw.split()\nclean_words = [w.capitalize() for w in words]\nclean_name = " ".join(clean_words)\nprint("Clean Name:", clean_name)  # "Le Hong Khoi"',
        badge: 'Name Normalizer',
      },
    ],
  },
  'bai-24-25_b24-s8': {
    id: 'b24-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'QUIZ: STRING PROCESSING BEHAVIOR',
    subtitle: 'Testing understanding of split and join',
    quiz: {
      question: 'What is the evaluated output of: "-".join("A B C".split())?',
      options: [
        'A. A-B-C',
        'B. A B C-',
        'C. -A-B-C-',
        'D. TypeError',
      ],
      answer: 'Option A: A-B-C.',
      explanation: '"A B C".split() produces [\'A\', \'B\', \'C\']. Then "-".join(...) joins them with hyphens to yield "A-B-C".',
    },
  },
  'bai-24-25_b24-s9': {
    id: 'b24-s9',
    slideNumber: 9,
    type: 'summary',
    title: 'LESSONS 24 & 25 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of string manipulation',
    bullets: [
      {
        title: '1. Immutability:',
        text: 'Strings cannot be modified in place. Operations return new string objects.',
      },
      {
        title: '2. split() & join():',
        text: 'Essential pair for converting between strings and lists of words.',
      },
      {
        title: '3. Casing & Search:',
        text: 'Use upper(), lower(), title(), find(), and replace() for text sanitization.',
      },
    ],
  },
  'bai-24-25_b24-s10': {
    id: 'b24-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent string challenges',
    lead: 'Solve the following homework exercises:',
    bullets: [
      {
        title: 'Task 1: Vowel Counter',
        text: 'Count how many vowels appear in an input string entered from keyboard.',
        badge: 'Vowels',
      },
      {
        title: 'Task 2: Sensitive Word Censoring',
        text: 'Write a program that masks specified sensitive words with asterisks (***).',
        badge: 'Censor',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // =========================================================================
  // CHAPTER 7: TOPIC 7 - FUNCTIONS AND DEBUGGING TECHNIQUES
  // =========================================================================

  // --- Bài 26 & 27: Functions and Parameters ---
  'bai-26-27_b26-s1': {
    id: 'b26-s1',
    slideNumber: 1,
    type: 'title',
    title: 'FUNCTION DEFINITION, CONSTRUCTION, AND PARAMETERS',
    subtitle: 'Topic 7: Functions and Debugging in Python | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the concept of functions and the principle of code reuse' },
      { text: 'Master syntax for defining functions using the "def" keyword and "return"' },
      { text: 'Distinguish formal parameters from actual calling arguments' },
      { text: 'Implement prime checking functions and modular list calculations' },
    ],
    badge: 'Lessons 26 & 27 • Standard Lesson Plan',
  },
  'bai-26-27_b26-s2': {
    id: 'b26-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: WHY DO WE NEED FUNCTIONS IN PROGRAMMING?',
    subtitle: 'Eliminating repetitive code and structuring programs cleanly',
    lead: 'Consider needing to calculate circle area across multiple parts of a program:',
    bullets: [
      {
        title: 'Without Functions:',
        text: 'Must copy-paste formulas repeatedly. If the precision of Pi changes, you have to edit every occurrence!',
        badge: 'Repetitive',
      },
      {
        title: 'With Functions:',
        text: 'Define def circle_area(r): once. Call it anywhere: area = circle_area(5). Clean, organized, and maintainable.',
        badge: 'Modular',
      },
    ],
  },
  'bai-26-27_b26-s3': {
    id: 'b26-s3',
    slideNumber: 3,
    type: 'table',
    title: 'CLASSIFYING FUNCTIONS IN PYTHON',
    subtitle: 'Built-in functions vs User-defined functions',
    tableData: {
      caption: 'Categories of functions in Python',
      headers: ['Category', 'Origin', 'Examples', 'Usage'],
      rows: [
        ['Built-in Functions', 'Standard library provided with Python', 'print(), input(), len(), sum(), max()', 'Available directly everywhere'],
        ['User-defined Functions', 'Created by programmer via def keyword', 'def is_prime(n):, def calc_bmi(w, h):', 'Must define before calling'],
      ],
    },
  },
  'bai-26-27_b26-s4': {
    id: 'b26-s4',
    slideNumber: 4,
    type: 'content',
    title: 'SYNTAX FOR DEFINING FUNCTIONS IN PYTHON',
    subtitle: 'Syntax: def function_name(parameter_list):',
    lead: 'The anatomy of a Python function definition:',
    bullets: [
      {
        title: '1. Function Header:',
        text: 'Begins with keyword def, followed by function name, parentheses () with parameters, and ending with a colon (:).',
      },
      {
        title: '2. Function Body:',
        text: 'All statements inside the function must be indented uniformly (typically 4 spaces).',
      },
      {
        title: '3. The return Statement:',
        text: 'Sends computed result back to the caller and terminates function execution immediately.',
      },
    ],
  },
  'bai-26-27_b26-s5': {
    id: 'b26-s5',
    slideNumber: 5,
    type: 'diagram',
    title: 'PARAMETERS VS ARGUMENTS IN FUNCTIONS',
    subtitle: 'Formal placeholders vs Concrete values',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'PARAMETERS',
          title: 'Parameters (in Definition)',
          desc: 'Variables defined in def header: def add(x, y):. Acts as local placeholders awaiting data.',
          tag: 'def line',
        },
        {
          stepNumber: 'ARGUMENTS',
          title: 'Arguments (in Call)',
          desc: 'Actual values passed when calling: add(10, 20). Bound to parameters during execution.',
          tag: 'call line',
        },
      ],
    },
  },
  'bai-26-27_b26-s6': {
    id: 'b26-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'PRACTICE: PRIME CHECK FUNCTION',
    subtitle: 'Constructing reusable def is_prime(n)',
    lead: 'Create a function checking if integer n is prime:',
    bullets: [
      {
        title: 'Implementation:',
        text: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True',
        badge: 'is_prime(n)',
      },
    ],
  },
  'bai-26-27_b26-s7': {
    id: 'b26-s7',
    slideNumber: 7,
    type: 'summary',
    title: 'LESSONS 26 & 27 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Summary of function definitions and parameters',
    bullets: [
      {
        title: '1. Modular Architecture:',
        text: 'Functions encapsulate reusable logic, making programs easy to read, test, and maintain.',
      },
      {
        title: '2. def and return:',
        text: 'def declares the function; return sends results back to the caller.',
      },
      {
        title: '3. Flexible Arguments:',
        text: 'Support positional arguments, keyword arguments, and default parameter values.',
      },
    ],
  },
  'bai-26-27_b26-s8': {
    id: 'b26-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent function challenges',
    lead: 'Write functions for the following problems:',
    bullets: [
      {
        title: 'Task 1: Greatest Common Divisor',
        text: 'Write def gcd(a, b): returning the greatest common divisor using Euclidean algorithm.',
        badge: 'gcd(a, b)',
      },
      {
        title: 'Task 2: Temperature Converter',
        text: 'Write functions c_to_f(c) and f_to_c(f) to convert between Celsius and Fahrenheit.',
        badge: 'Temperature',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // --- Bài 28: Variable Scope ---
  'bai-28_b28-s1': {
    id: 'b28-s1',
    slideNumber: 1,
    type: 'title',
    title: 'VARIABLE SCOPE IN PYTHON (LOCAL & GLOBAL)',
    subtitle: 'Topic 7: Functions and Debugging in Python | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish local variables inside functions from global variables' },
      { text: 'Understand variable life cycles and scope isolation rules' },
      { text: 'Apply the "global" keyword to modify global variables when needed' },
      { text: 'Write safe, pure functions avoiding unintended side effects' },
    ],
    badge: 'Lesson 28 • Standard Lesson Plan',
  },
  'bai-28_b28-s2': {
    id: 'b28-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: NAME COLLISIONS IN AND OUT OF FUNCTIONS',
    subtitle: 'Tracing variable isolation',
    lead: 'Observe the code snippet below:',
    bullets: [
      {
        title: 'Code Example:',
        text: 'x = 10\ndef modify():\n    x = 20\n    print("Inside:", x)\nmodify()\nprint("Outside:", x)',
        badge: 'Code Trace',
      },
      {
        title: 'Result:',
        text: 'Inside: 20 | Outside: 10. The outer variable x remains unchanged because the inner x is local!',
        badge: 'Local Scope',
      },
    ],
  },
  'bai-28_b28-s3': {
    id: 'b28-s3',
    slideNumber: 3,
    type: 'table',
    title: 'COMPARING LOCAL AND GLOBAL VARIABLES',
    subtitle: 'Scope, lifetime, and access permissions',
    tableData: {
      caption: 'Comparison between local and global variables',
      headers: ['Criteria', 'Local Variable', 'Global Variable'],
      rows: [
        ['Where Declared', 'Inside a function block', 'Outside all functions (root level)'],
        ['Scope of Access', 'Only accessible inside that function', 'Accessible everywhere in the file'],
        ['Lifetime', 'Created when function runs, destroyed on return', 'Exists throughout entire program run'],
        ['Purpose', 'Temporary calculations within function', 'Shared configuration or global constants'],
      ],
    },
  },
  'bai-28_b28-s4': {
    id: 'b28-s4',
    slideNumber: 4,
    type: 'content',
    title: 'THE GLOBAL KEYWORD AND MODIFYING GLOBAL VARIABLES',
    subtitle: 'Syntax: global variable_name',
    lead: 'To reassign a global variable from inside a function, declare it with global:',
    bullets: [
      {
        title: 'Code Pattern:',
        text: 'score = 0\ndef add_score(pts):\n    global score\n    score += pts\nadd_score(10)\nprint("Score:", score)  # Outputs 10!',
      },
      {
        title: 'Best Practice Advice:',
        text: 'Minimize reliance on global variables; prefer passing values via parameters and returning results.',
      },
    ],
  },
  'bai-28_b28-s5': {
    id: 'b28-s5',
    slideNumber: 5,
    type: 'summary',
    title: 'LESSON 28 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of variable scope',
    bullets: [
      {
        title: '1. Local Scope:',
        text: 'Variables defined inside functions are local and isolated from outside code.',
      },
      {
        title: '2. Global Scope:',
        text: 'Variables defined at root level are readable everywhere.',
      },
      {
        title: '3. global Keyword:',
        text: 'Use global only when an internal function must reassign an external variable.',
      },
    ],
  },
  'bai-28_b28-s6': {
    id: 'b28-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent scope exercises',
    lead: 'Complete the following tasks:',
    bullets: [
      {
        title: 'Task 1: Scope Tracing',
        text: 'Predict output of nested functions with shadowed variable names.',
        badge: 'Trace Task',
      },
      {
        title: 'Task 2: Refactoring Code',
        text: 'Refactor a program using global variables into a clean modular program with pure functions.',
        badge: 'Refactoring',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // --- Bài 29 & 30: Errors, Testing, and Debugging ---
  'bai-29-30_b29-s1': {
    id: 'b29-s1',
    slideNumber: 1,
    type: 'title',
    title: 'ERROR CLASSIFICATION, TESTING, AND DEBUGGING',
    subtitle: 'Topic 7: Functions and Debugging in Python | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Classify 3 classic programming error types: Syntax, Runtime, and Semantic' },
      { text: 'Read and interpret Python Traceback exception messages' },
      { text: 'Design structured test cases: Typical, Boundary, and Special cases' },
      { text: 'Master print debugging and systematic error elimination' },
    ],
    badge: 'Lessons 29 & 30 • Standard Lesson Plan',
  },
  'bai-29-30_b29-s2': {
    id: 'b29-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: PROGRAMMING ERRORS ARE INEVITABLE',
    subtitle: 'Debugging is an essential professional engineering skill',
    lead: 'Every software developer encounters bugs daily:',
    bullets: [
      {
        title: 'The Real Nature of Coding:',
        text: 'Software development consists of writing code and continuously refining it through testing and debugging.',
        badge: 'Debugging Skill',
      },
      {
        title: 'The Goal:',
        text: 'Learn how to diagnose errors methodically rather than guessing randomly.',
        badge: 'Scientific Method',
      },
    ],
  },
  'bai-29-30_b29-s3': {
    id: 'b29-s3',
    slideNumber: 3,
    type: 'diagram',
    title: 'THREE FUNDAMENTAL ERROR GROUPS IN PYTHON',
    subtitle: 'Syntax Errors vs Runtime Exceptions vs Logic Errors',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: '1. SYNTAX ERROR',
          title: 'SyntaxError',
          desc: 'Code violates Python grammar (missing colon, typos). Detected before execution starts.',
          tag: 'Compile Time',
        },
        {
          stepNumber: '2. RUNTIME ERROR',
          title: 'Exceptions',
          desc: 'Program crashes mid-run (ZeroDivisionError, IndexError, ValueError). Python provides Traceback.',
          tag: 'Runtime Crash',
        },
        {
          stepNumber: '3. LOGIC ERROR',
          title: 'Semantic Bug',
          desc: 'Program runs completely without crashing, but outputs INCORRECT mathematical answers.',
          tag: 'Logic Bug',
        },
      ],
    },
  },
  'bai-29-30_b29-s4': {
    id: 'b29-s4',
    slideNumber: 4,
    type: 'table',
    title: 'COMMON RUNTIME EXCEPTIONS AND REMEDIES',
    subtitle: 'Deciphering Traceback error messages',
    tableData: {
      caption: 'Common runtime exceptions in Python',
      headers: ['Exception', 'Root Cause', 'Example', 'Remedy'],
      rows: [
        ['NameError', 'Using an undefined variable name', 'print(total) before total = 0', 'Check variable spelling'],
        ['TypeError', 'Operating on incompatible data types', '"Age: " + 16', 'Cast integer with str()'],
        ['IndexError', 'Accessing list index beyond valid bounds', 'a = [1, 2]; print(a[10])', 'Verify index < len(a)'],
        ['ZeroDivisionError', 'Dividing by zero', '10 / 0', 'Check divisor != 0 before dividing'],
        ['ValueError', 'Invalid content for type casting', 'int("hello")', 'Validate user input string'],
      ],
    },
  },
  'bai-29-30_b29-s5': {
    id: 'b29-s5',
    slideNumber: 5,
    type: 'process',
    title: 'TESTING AND DEBUGGING WORKFLOW',
    subtitle: 'The 4-step scientific debugging process',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Reproduce Bug',
          desc: 'Identify the exact test input that causes the incorrect behavior.',
          tag: 'Test Case',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Trace State',
          desc: 'Insert print() statements to observe intermediate variable values.',
          tag: 'Trace Print',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Fix Cause',
          desc: 'Correct the flawed logic or edge condition in the algorithm.',
          tag: 'Fix Logic',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Regression Test',
          desc: 'Rerun all test cases to verify the fix did not break other features.',
          tag: 'Verify All',
        },
      ],
    },
  },
  'bai-29-30_b29-s6': {
    id: 'b29-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSONS 29 & 30 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key testing and debugging takeaways',
    bullets: [
      {
        title: '1. Three Error Types:',
        text: 'Syntax errors (grammar), Runtime exceptions (crashes), and Logic errors (wrong answers).',
      },
      {
        title: '2. Traceback Reading:',
        text: 'Python error logs pinpoint the exact file and line number where an exception occurred.',
      },
      {
        title: '3. Systematic Testing:',
        text: 'Test with typical, boundary, and special edge cases to guarantee program correctness.',
      },
    ],
  },
  'bai-29-30_b29-s7': {
    id: 'b29-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent debugging challenges',
    lead: 'Debug the following assigned programs:',
    bullets: [
      {
        title: 'Task 1: Bug Hunt',
        text: 'Find and fix 3 errors in a program calculating quadratic roots.',
        badge: 'Bug Hunt',
      },
      {
        title: 'Task 2: Test Suite Design',
        text: 'Design 5 test cases for an online discount calculator.',
        badge: 'Test Suite',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // --- Bài 31 & 32: Synthesis Programming Projects ---
  'bai-31-32_b31-s1': {
    id: 'b31-s1',
    slideNumber: 1,
    type: 'title',
    title: 'SYNTHESIS PROJECT: BUILDING A PYTHON PROGRAM',
    subtitle: 'Topic 7: Functions and Debugging in Python | Informatics 10',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Follow the 4-step software development methodology' },
      { text: 'Design modular programs integrating lists, strings, and functions' },
      { text: 'Complete Project 1: Student Grade and Ranking Management' },
      { text: 'Reflect on computational thinking skills acquired in Grade 10' },
    ],
    badge: 'Lessons 31 & 32 • Standard Lesson Plan',
  },
  'bai-31-32_b31-s2': {
    id: 'b31-s2',
    slideNumber: 2,
    type: 'process',
    title: 'THE 4-STEP SOFTWARE DEVELOPMENT PROCESS',
    subtitle: 'Engineering methodology for solving real-world problems',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Problem Analysis',
          desc: 'Determine inputs, required outputs, and mathematical formulas.',
          tag: 'Requirements',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Algorithm Design',
          desc: 'Decompose problem into smaller sub-tasks and functions.',
          tag: 'Architecture',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Implementation',
          desc: 'Write Python source code using clean, descriptive variable names.',
          tag: 'Coding',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Testing & Refinement',
          desc: 'Execute test suites, handle edge cases, and polish user interface.',
          tag: 'Quality',
        },
      ],
    },
  },
  'bai-31-32_b31-s3': {
    id: 'b31-s3',
    slideNumber: 3,
    type: 'content',
    title: 'PROJECT 1: STUDENT GRADE AND RANKING MANAGEMENT',
    subtitle: 'Designing the data model and function specifications',
    lead: 'Build an application managing class grade performance:',
    bullets: [
      {
        title: 'Function 1: input_students()',
        text: 'Prompts teacher for student names and grades, returning list of records.',
      },
      {
        title: 'Function 2: calculate_statistics(grades)',
        text: 'Computes class average, maximum grade, and minimum grade.',
      },
      {
        title: 'Function 3: classify_rank(grade)',
        text: 'Returns "Excellent" (>=8.5), "Good" (>=7.0), "Average" (>=5.0), or "Weak" (<5.0).',
      },
    ],
  },
  'bai-31-32_b31-s4': {
    id: 'b31-s4',
    slideNumber: 4,
    type: 'practice',
    title: 'COMPLETE PYTHON SOURCE CODE FOR PROJECT 1',
    subtitle: 'A clean, complete synthesis program in Python',
    lead: 'Full source implementation:',
    bullets: [
      {
        title: 'Python Program:',
        text: 'def classify(g):\n    if g >= 8.5: return "Excellent"\n    elif g >= 7.0: return "Good"\n    elif g >= 5.0: return "Average"\n    else: return "Weak"\n\nstudents = [("An", 8.5), ("Binh", 9.0), ("Chi", 6.5)]\nfor name, grade in students:\n    print(f"{name:10} {grade:4.1f} -> {classify(grade)}")',
        badge: 'Project Code',
      },
    ],
  },
  'bai-31-32_b31-s5': {
    id: 'b31-s5',
    slideNumber: 5,
    type: 'summary',
    title: 'LESSONS 31 & 32 SUMMARY & TOPIC 7 CONCLUSION',
    subtitle: 'Key synthesis programming competencies',
    bullets: [
      {
        title: '1. Problem Decomposition:',
        text: 'Break complex problems into discrete, manageable functions.',
      },
      {
        title: '2. Integrated Technologies:',
        text: 'Combine lists, strings, conditionals, loops, and functions into cohesive software.',
      },
      {
        title: '3. Computational Thinking:',
        text: 'Grade 10 Python foundations empower students to automate solutions across science and daily life.',
      },
    ],
  },
  'bai-31-32_b31-s6': {
    id: 'b31-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'PROJECT ASSIGNMENT & HOMEWORK',
    subtitle: 'Independent capstone project',
    lead: 'Choose one of the capstone project topics below:',
    bullets: [
      {
        title: 'Project Option A: Library Book Tracker',
        text: 'Build a menu-driven console program to manage library book borrowing.',
        badge: 'Option A',
      },
      {
        title: 'Project Option B: Quiz Master Game',
        text: 'Build an interactive multiple choice quiz runner with score tracking.',
        badge: 'Option B',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // =========================================================================
  // CHAPTER 8: TOPIC 8 - CAREER ORIENTATION IN INFORMATICS
  // =========================================================================

  // --- Bài 33: Graphic Design Careers ---
  'bai-33_b33-s1': {
    id: 'b33-s1',
    slideNumber: 1,
    type: 'title',
    title: 'OVERVIEW OF COMPUTER GRAPHIC DESIGN CAREERS',
    subtitle: 'Topic 8: Career Orientation in Informatics | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the nature and social role of graphic design in the digital age' },
      { text: 'Explore specialized niches: Brand identity, UI/UX, 3D animation, and publishing' },
      { text: 'Identify essential competencies: Aesthetic sense, software mastery, communication' },
      { text: 'Formulate personal career roadmap and training pathways in Vietnam' },
    ],
    badge: 'Lesson 33 • Career Orientation',
  },
  'bai-33_b33-s2': {
    id: 'b33-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: GRAPHICS ALL AROUND US',
    subtitle: 'Visual communication in everyday digital life',
    lead: 'Notice how graphics shape human experience every single day:',
    bullets: [
      {
        title: 'Visual Touchpoints:',
        text: 'Product packaging, brand logos, mobile app interfaces, web banners, movie VFX, video game characters.',
        badge: 'Everywhere',
      },
      {
        title: 'Core Question:',
        text: 'Who creates these compelling visual experiences, and what career opportunities exist?',
        badge: 'Career Path',
      },
    ],
  },
  'bai-33_b33-s3': {
    id: 'b33-s3',
    slideNumber: 3,
    type: 'content',
    title: 'THE ESSENCE OF COMPUTER GRAPHIC DESIGN',
    subtitle: 'Harmonizing art, technology, and marketing communication',
    lead: 'Graphic design is visual problem-solving using typography, imagery, and color:',
    bullets: [
      {
        title: '1. Creative Communication:',
        text: 'Transforming abstract concepts into memorable visual messages that engage and inspire audiences.',
      },
      {
        title: '2. Technological Integration:',
        text: 'Mastering vector graphics (Inkscape, Illustrator), raster editing (Photoshop, GIMP), and motion design tools.',
      },
      {
        title: '3. Economic Value:',
        text: 'Core driver of brand value, e-commerce conversion, and modern digital creative industries.',
      },
    ],
  },
  'bai-33_b33-s4': {
    id: 'b33-s4',
    slideNumber: 4,
    type: 'table',
    title: 'SPECIALIZED NICHES IN GRAPHIC DESIGN',
    subtitle: 'Distinct career roles within the design industry',
    tableData: {
      caption: 'Graphic design specialization areas and tools',
      headers: ['Specialization', 'Primary Output', 'Key Software', 'Work Environment'],
      rows: [
        ['Brand Identity Design', 'Logos, brand guidelines, packaging, stationery', 'Illustrator, Inkscape', 'Design agencies, marketing teams'],
        ['UI/UX Digital Design', 'Mobile app screens, website mockups, user journeys', 'Figma, Adobe XD', 'Tech startups, software companies'],
        ['Publishing & Editorial', 'Books, magazines, newspapers, annual reports', 'InDesign, Scribus', 'Publishing houses, media outlets'],
        ['Motion & Animation', 'Animated explainer videos, TV intros, game assets', 'After Effects, Blender', 'Animation studios, game studios'],
      ],
    },
  },
  'bai-33_b33-s5': {
    id: 'b33-s5',
    slideNumber: 5,
    type: 'content',
    title: 'COMPETENCIES AND QUALITIES OF A DESIGNER',
    subtitle: 'What skills are required to thrive in graphic design?',
    lead: 'Key pillars of a successful graphic designer:',
    bullets: [
      {
        title: 'Artistic Sense & Visual Grammar:',
        text: 'Color theory, typography hierarchy, composition balance, visual negative space.',
      },
      {
        title: 'Technical Tool Mastery:',
        text: 'Proficiency with vector and raster design software; file optimization for print and web.',
      },
      {
        title: 'Empathy & Active Listening:',
        text: 'Understanding client needs, receiving critique constructively, and collaborating in teams.',
      },
    ],
  },
  'bai-33_b33-s6': {
    id: 'b33-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 33 SUMMARY: FUTURE HORIZONS',
    subtitle: 'Key orientation takeaways for graphic design careers',
    bullets: [
      {
        title: '1. Growing Demand:',
        text: 'High demand driven by digital transformation, e-commerce, and creative media.',
      },
      {
        title: '2. Diverse Paths:',
        text: 'From branding and publishing to cutting-edge UI/UX and 3D motion design.',
      },
      {
        title: '3. Action Plan for High Schoolers:',
        text: 'Build personal portfolios, practice with Inkscape, and observe design principles in daily life.',
      },
    ],
  },
  'bai-33_b33-s7': {
    id: 'b33-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'APPLICATION TASKS & FIELD RESEARCH',
    subtitle: 'Practical exploration of design careers',
    lead: 'Student research assignments:',
    bullets: [
      {
        title: 'Task 1: Designer Profile Interview',
        text: 'Research or interview a graphic designer: What tools do they use daily? What advice do they give students?',
        badge: 'Interview',
      },
      {
        title: 'Task 2: Education Roadmap',
        text: 'Explore university faculties in Vietnam offering graphic design and multimedia degrees.',
        badge: 'Universities',
      },
    ],
    footerNote: 'Informatics 10 Textbook • Teacher: QuanLHK',
  },

  // --- Bài 34: Software Development Careers ---
  'bai-34_b34-s1': {
    id: 'b34-s1',
    slideNumber: 1,
    type: 'title',
    title: 'SOFTWARE DEVELOPMENT AND PROGRAMMING CAREERS',
    subtitle: 'Topic 8: Career Orientation in Informatics | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Recognize the central role of software in the 4th Industrial Revolution' },
      { text: 'Understand the Software Development Life Cycle (SDLC)' },
      { text: 'Explore diverse roles: Frontend, Backend, Mobile, QA, AI Engineer' },
      { text: 'Develop long-term personal orientation and summer study plan' },
    ],
    badge: 'Lesson 34 • Career Orientation',
  },
  'bai-34_b34-s2': {
    id: 'b34-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: A WORLD POWERED BY SOFTWARE',
    subtitle: '"Software is eating the world" - Marc Andreessen',
    lead: 'From morning alarm to bedtime reading, software orchestrates modern civilization:',
    bullets: [
      {
        title: 'Pervasive Software Systems:',
        text: 'Smartphone operating systems, banking transaction networks, ride-hailing algorithms, medical scanners, satellite communication.',
        badge: 'Digital Era',
      },
      {
        title: 'Core Question:',
        text: 'What career paths exist in creating the software systems that power humanity?',
        badge: 'Software Roles',
      },
    ],
  },
  'bai-34_b34-s3': {
    id: 'b34-s3',
    slideNumber: 3,
    type: 'process',
    title: 'THE SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)',
    subtitle: 'How professional software is conceived, engineered, and maintained',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'PHASE 1',
          title: 'Requirements & Design',
          desc: 'Analyze business needs, design system architecture and user experience.',
          tag: 'Planning',
        },
        {
          stepNumber: 'PHASE 2',
          title: 'Coding (Development)',
          desc: 'Engineers write clean source code according to specifications.',
          tag: 'Coding',
        },
        {
          stepNumber: 'PHASE 3',
          title: 'Testing & QA',
          desc: 'Quality assurance specialists test thoroughly to catch bugs before release.',
          tag: 'Testing',
        },
        {
          stepNumber: 'PHASE 4',
          title: 'Deployment & Ops',
          desc: 'Release to cloud servers and continuously monitor performance and security.',
          tag: 'DevOps',
        },
      ],
    },
  },
  'bai-34_b34-s4': {
    id: 'b34-s4',
    slideNumber: 4,
    type: 'table',
    title: 'CAREER ROLES IN SOFTWARE PROJECTS',
    subtitle: 'Diverse career trajectories suited to different personalities and talents',
    tableData: {
      caption: 'Key career roles in software engineering',
      headers: ['Role', 'Core Responsibilities', 'Key Technologies', 'Key Strengths'],
      rows: [
        ['Frontend Developer', 'User interfaces and interactive web experiences', 'HTML/CSS, JavaScript, React', 'Visual sense, UX empathy'],
        ['Backend Developer', 'Server logic, APIs, and database performance', 'Python, Java, Go, SQL', 'Algorithmic logic, data modeling'],
        ['Mobile App Developer', 'Native and cross-platform smartphone apps', 'Kotlin, Swift, Flutter', 'Platform knowledge, responsiveness'],
        ['QA / Test Engineer', 'Automated testing and bug discovery', 'Selenium, pytest, Postman', 'Attention to detail, meticulousness'],
        ['AI / Data Scientist', 'Machine learning models and big data analysis', 'Python, PyTorch, Pandas', 'Strong mathematics and statistics'],
      ],
    },
  },
  'bai-34_b34-s5': {
    id: 'b34-s5',
    slideNumber: 5,
    type: 'content',
    title: 'QUALITIES AND COMPETENCIES OF A SOFTWARE DEVELOPER',
    subtitle: 'Essential mindset for long-term career growth',
    lead: 'What makes an outstanding programmer?',
    bullets: [
      {
        title: 'Logical Thinking & Problem Solving:',
        text: 'Ability to deconstruct ambiguous challenges into rigorous mathematical steps.',
      },
      {
        title: 'Relentless Curiosity & Self-Learning:',
        text: 'Technology evolves rapidly; successful engineers learn new tools and frameworks continuously.',
      },
      {
        title: 'Teamwork & English Communication:',
        text: 'Documentation, open-source libraries, and global software teams communicate primarily in English.',
      },
    ],
  },
  'bai-34_b34-s6': {
    id: 'b34-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 34 SUMMARY & PERSONAL ROADMAP',
    subtitle: 'Setting your sights on the future',
    bullets: [
      {
        title: '1. Software Engineering Prominence:',
        text: 'One of the most dynamic, high-paying, and globally mobile careers in the modern world.',
      },
      {
        title: '2. Breadth of Opportunities:',
        text: 'Roles range from user experience and backend systems to artificial intelligence and cybersecurity.',
      },
      {
        title: '3. Foundations Start Now:',
        text: 'Master Python basics in Grade 10, practice algorithmic problem solving, and hone technical English!',
      },
    ],
  },
  'bai-34_b34-s7': {
    id: 'b34-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'GRADE 10 INFORMATICS CONCLUSION & SUMMER TASKS',
    subtitle: 'Congratulations on completing Informatics 10!',
    lead: 'Recommended summer learning milestones:',
    bullets: [
      {
        title: 'Milestone 1: Mini Coding Project',
        text: 'Build a small game (Snake, Pong) or personal website using HTML, CSS, and Python.',
        badge: 'Project',
      },
      {
        title: 'Milestone 2: Practice Competitive Coding',
        text: 'Solve beginner Python algorithm challenges on LeetCode, Codeforces, or HackerRank.',
        badge: 'Algorithm Practice',
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'TEACHER INSPIRATION • QUANLHK',
      content: 'Informatics is not just a school subject—it is a superpower that empowers you to build the future. Keep coding, keep creating!',
    },
    footerNote: 'Connecting Knowledge to Life • Informatics 10 • Teacher: QuanLHK',
  },
};
