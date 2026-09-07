import { Slide } from '../types';

export const TOPIC5_B_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 22: LIST DATA TYPE IN PYTHON
  // =========================================================================
  'b22-s1': {
    id: 'b22-s1',
    slideNumber: 1,
    type: 'title',
    title: 'LIST DATA TYPE IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand the concept of lists as ordered collections of elements' },
      { text: 'Master zero-based indexing (0, 1, 2...) and negative indexing (-1, -2...)' },
      { text: 'Modify elements in place and test membership using the "in" operator' },
      { text: 'Traverse lists using for item in list vs for i in range(len(list))' },
    ],
    badge: 'Lesson 22 • Standard Lesson Plan',
  },
  'b22-s2': {
    id: 'b22-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: STORING SCORES FOR 40 STUDENTS',
    subtitle: 'Why do we need composite sequence data structures?',
    lead: 'Consider managing final exam scores for a class of 40 students:',
    bullets: [
      {
        title: 'Using Primitive Variables:',
        text: 'Must create 40 individual variables: score1, score2, ..., score40. Impossible to loop over, sort, or calculate statistics efficiently!',
        badge: 'Inefficient',
      },
      {
        title: 'Using Python List:',
        text: 'scores = [8.5, 9.0, 7.5, ..., 10.0]. All 40 numbers reside in a single organized list variable. Easy to sort, filter, and calculate averages.',
        badge: 'Python List',
      },
    ],
  },
  'b22-s3': {
    id: 'b22-s3',
    slideNumber: 3,
    type: 'content',
    title: 'THE CONCEPT OF LISTS IN PYTHON',
    subtitle: 'Syntax: list_name = [element_0, element_1, ..., element_n]',
    lead: 'A list in Python is an ordered, mutable sequence of items enclosed in square brackets []:',
    bullets: [
      {
        title: '1. Heterogeneous Elements:',
        text: 'A list can store elements of different types: numbers, strings, booleans, or even other lists (e.g. ["An", 10, True, 8.5]).',
      },
      {
        title: '2. The len() Function:',
        text: 'len(list_name) returns the total number of elements in the list. An empty list [] has length 0.',
      },
      {
        title: '3. Mutable Property:',
        text: 'Unlike strings or tuples, list elements can be modified, updated, appended, or deleted in place.',
      },
    ],
  },
  'b22-s4': {
    id: 'b22-s4',
    slideNumber: 4,
    type: 'diagram',
    title: 'DUAL INDEXING SYSTEM IN PYTHON LISTS',
    subtitle: 'Forward zero-based indexing and backward negative indexing',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'FORWARD INDEX',
          title: 'From Left to Right: 0 to n - 1',
          desc: 'First element has index 0: a[0]. Second element has index 1: a[1]. Last element is a[len - 1].',
          tag: '0, 1, 2, ...',
        },
        {
          stepNumber: 'BACKWARD INDEX',
          title: 'From Right to Left: -1 to -n',
          desc: 'Last element has index -1: a[-1]. Second to last is a[-2]. First element is a[-len].',
          tag: '-1, -2, ...',
        },
      ],
    },
    highlightBox: {
      type: 'remember',
      title: 'INDEX ERROR WARNING',
      content: 'Accessing an index >= len(a) or < -len(a) will raise an IndexError: list index out of range!',
    },
  },
  'b22-s5': {
    id: 'b22-s5',
    slideNumber: 5,
    type: 'table',
    title: 'MODIFYING ELEMENTS & THE MEMBERSHIP OPERATOR "IN"',
    subtitle: 'Updating values by index and checking presence',
    tableData: {
      caption: 'List element modifications and in operator checks',
      headers: ['Operation', 'Python Syntax', 'Meaning', 'Evaluated Result'],
      rows: [
        ['Direct Update', 'a[1] = 99', 'Assigns 99 to element at index 1', 'Replaces old value in place'],
        ['Membership Check', 'x in a', 'Checks if value x exists in list a', 'Returns True or False'],
        ['Negative Check', 'x not in a', 'Checks if value x does not exist in a', 'Returns True or False'],
        ['Length Query', 'len(a)', 'Queries total number of elements', 'Returns integer count'],
      ],
    },
  },
  'b22-s6': {
    id: 'b22-s6',
    slideNumber: 6,
    type: 'process',
    title: 'TWO WAYS TO TRAVERSE A LIST WITH FOR LOOPS',
    subtitle: 'Direct element iteration vs index-based iteration',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'METHOD 1',
          title: 'Direct Traversal: for x in a:',
          desc: 'Iterates directly through each element value. Cleanest and most idiomatic when indexes are not needed.',
          tag: 'for x in a',
        },
        {
          stepNumber: 'METHOD 2',
          title: 'Index Traversal: for i in range(len(a)):',
          desc: 'Iterates through element indices i = 0, 1, ..., len - 1. Needed when modifying elements or comparing adjacent pairs.',
          tag: 'by index',
        },
      ],
    },
  },
  'b22-s7': {
    id: 'b22-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'PRACTICE: SUM OF EVEN NUMBERS IN A LIST',
    subtitle: 'Filtering and accumulating even elements from a list',
    lead: 'Given a list of integers a = [12, 5, 8, 19, 24, 7, 30]. Calculate sum of all even numbers:',
    bullets: [
      {
        title: 'Python Script:',
        text: 'a = [12, 5, 8, 19, 24, 7, 30]\ntotal = 0\nfor x in a:\n    if x % 2 == 0:\n        total += x\nprint("Sum of even elements:", total)',
        badge: 'Filter & Sum',
      },
      {
        title: 'Execution Trace:',
        text: 'Even numbers: 12 + 8 + 24 + 30 = 74.\nProgram outputs: Sum of even elements: 74.',
        badge: 'Result: 74',
      },
    ],
  },
  'b22-s8': {
    id: 'b22-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 22 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Essential list concepts in Python',
    bullets: [
      {
        title: '1. Lists in Python:',
        text: 'Ordered collections inside square brackets []. Elements are accessed via 0-based and negative indices.',
      },
      {
        title: '2. Mutability:',
        text: 'List elements can be modified at any index: a[i] = new_value.',
      },
      {
        title: '3. Traversal and Membership:',
        text: 'Traverse elements using for x in a or for i in range(len(a)); check presence with x in a.',
      },
    ],
  },
  'b22-s9': {
    id: 'b22-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent list practice problems',
    lead: 'Write Python programs for the following exercises:',
    bullets: [
      {
        title: 'Task 1: Maximum Element and Position',
        text: 'Given list a of numbers. Find the maximum element and print its index position.',
        badge: 'Max & Index',
      },
      {
        title: 'Task 2: Average Calculation',
        text: 'Given list of student grades. Compute and print the class average score.',
        badge: 'Average',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 117-121) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 23: LIST OPERATIONS AND METHODS
  // =========================================================================
  'b23-s1': {
    id: 'b23-s1',
    slideNumber: 1,
    type: 'title',
    title: 'LIST OPERATIONS AND METHODS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Add elements dynamically using append() and insert()' },
      { text: 'Remove elements using remove(), pop(), and clear()' },
      { text: 'Concatenate lists with + and replicate with *' },
      { text: 'Input dynamic number lists from keyboard and filter positive/negative numbers' },
    ],
    badge: 'Lesson 23 • Standard Lesson Plan',
  },
  'b23-s2': {
    id: 'b23-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: DYNAMIC DATA MUTATION IN PRACTICE',
    subtitle: 'Handling real-world collections that change over time',
    lead: 'Real-world data is rarely static in size:',
    bullets: [
      {
        title: 'Adding Items:',
        text: 'A new student transfers into class -> Add name to class roster.',
        badge: 'Add Item',
      },
      {
        title: 'Removing Items:',
        text: 'A customer cancels a shopping order -> Remove item from cart.',
        badge: 'Remove Item',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CORE QUESTION',
      content: 'What built-in methods does Python offer to grow, shrink, and reorganize lists dynamically?',
    },
  },
  'b23-s3': {
    id: 'b23-s3',
    slideNumber: 3,
    type: 'table',
    title: 'ADDING ELEMENTS TO A LIST',
    subtitle: 'append() vs insert() methods in Python',
    tableData: {
      caption: 'Methods for inserting and appending elements into lists',
      headers: ['Method', 'Syntax', 'Behavior', 'Example'],
      rows: [
        ['append()', 'a.append(x)', 'Appends element x to the very END of the list', 'a = [1, 2]; a.append(3) -> [1, 2, 3]'],
        ['insert()', 'a.insert(i, x)', 'Inserts element x at index position i; shifts subsequent elements right', 'a = [1, 3]; a.insert(1, 2) -> [1, 2, 3]'],
      ],
    },
  },
  'b23-s4': {
    id: 'b23-s4',
    slideNumber: 4,
    type: 'table',
    title: 'REMOVING ELEMENTS FROM A LIST',
    subtitle: 'remove() vs pop() vs clear() methods in Python',
    tableData: {
      caption: 'Methods for deleting elements from lists',
      headers: ['Method', 'Syntax', 'Behavior', 'Pitfall / Note'],
      rows: [
        ['remove()', 'a.remove(x)', 'Finds and removes the FIRST occurrence of value x', 'Raises ValueError if x is not in the list'],
        ['pop()', 'a.pop(i)', 'Removes and returns element at index i (defaults to last element if omitted)', 'Raises IndexError if index i is out of range'],
        ['clear()', 'a.clear()', 'Empties all elements from the list, leaving []', 'List becomes empty with len = 0'],
        ['del', 'del a[i]', 'Deletes element at index i (or a slice range)', 'Python statement keyword, not a method'],
      ],
    },
  },
  'b23-s5': {
    id: 'b23-s5',
    slideNumber: 5,
    type: 'diagram',
    title: 'CONCATENATION (+) AND REPLICATION (*) OF LISTS',
    subtitle: 'Operator overloading across list data structures',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'CONCATENATION (+)',
          title: 'list1 + list2',
          desc: '[1, 2] + [3, 4] -> Produces new joined list [1, 2, 3, 4]. Does not modify original lists.',
          tag: '+ Operator',
        },
        {
          stepNumber: 'REPLICATION (*)',
          title: 'list * n',
          desc: '[0] * 5 -> Produces [0, 0, 0, 0, 0]. Extremely convenient for initializing lists of fixed size.',
          tag: '* Operator',
        },
      ],
    },
  },
  'b23-s6': {
    id: 'b23-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'PRACTICE: DYNAMIC NUMBER INPUT FROM KEYBOARD',
    subtitle: 'Reading N numbers into a list using for and append()',
    lead: 'Read n integers from keyboard and store them into a list:',
    bullets: [
      {
        title: 'Script Code:',
        text: 'n = int(input("Enter count n: "))\na = []\nfor i in range(n):\n    val = int(input(f"Enter element {i+1}: "))\n    a.append(val)\nprint("Entered list:", a)',
        badge: 'Dynamic Input',
      },
    ],
  },
  'b23-s7': {
    id: 'b23-s7',
    slideNumber: 7,
    type: 'apply',
    title: 'APPLICATION: SEPARATING POSITIVE AND NEGATIVE NUMBERS',
    subtitle: 'Partitioning a list into two distinct collections',
    bullets: [
      {
        title: 'Implementation:',
        text: 'a = [5, -3, 8, -12, 0, 15, -7, 20]\npositives = []\nnegatives = []\nfor x in a:\n    if x > 0:\n        positives.append(x)\n    elif x < 0:\n        negatives.append(x)\nprint("Positives:", positives)\nprint("Negatives:", negatives)',
        badge: 'Partitioning',
      },
    ],
  },
  'b23-s8': {
    id: 'b23-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 23 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key list manipulation methods',
    bullets: [
      {
        title: '1. Adding Elements:',
        text: 'a.append(x) adds to end; a.insert(i, x) inserts at specific index.',
      },
      {
        title: '2. Removing Elements:',
        text: 'a.remove(x) deletes by value; a.pop(i) deletes by index; a.clear() empties list.',
      },
      {
        title: '3. Operators + and *:',
        text: 'Concatenate lists with +; duplicate sequences with *.',
      },
    ],
  },
  'b23-s9': {
    id: 'b23-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent list method exercises',
    lead: 'Solve the following homework problems:',
    bullets: [
      {
        title: 'Task 1: Remove Duplicate Values',
        text: 'Given list a with duplicate numbers. Build a new list containing unique elements in original order.',
        badge: 'Deduplication',
      },
      {
        title: 'Task 2: List Sorting without sort()',
        text: 'Explore how to sort a list in ascending order using basic loops and element swapping.',
        badge: 'Sorting',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 122-126) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 24: STRING DATA TYPE IN PYTHON
  // =========================================================================
  'b24-s1': {
    id: 'b24-s1',
    slideNumber: 1,
    type: 'title',
    title: 'STRING DATA TYPE IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand strings as immutable sequences of characters' },
      { text: 'Access characters via indices and slice substrings [start:stop:step]' },
      { text: 'Apply string operators (+ concatenation, * repetition, in membership)' },
      { text: 'Count digit frequencies and evaluate password strength' },
    ],
    badge: 'Lesson 24 • Standard Lesson Plan',
  },
  'b24-s2': {
    id: 'b24-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: PROCESSING TEXTUAL DATA IN DAILY LIFE',
    subtitle: 'Beyond numbers: Text makes up over 80% of digital information',
    lead: 'Every web search, message, document, and password is text:',
    bullets: [
      {
        title: 'Textual Data:',
        text: 'Full names, addresses, chat messages, emails, DNA genomic sequences, and program source codes.',
        badge: 'Text Data',
      },
      {
        title: 'Core Question:',
        text: 'How does Python represent and manipulate individual characters inside a text string?',
        badge: 'String Concept',
      },
    ],
  },
  'b24-s3': {
    id: 'b24-s3',
    slideNumber: 3,
    type: 'diagram',
    title: 'INDEXING AND SLICING SYSTEM OF STRINGS',
    subtitle: 'Zero-based indices and slicing syntax s[start:stop:step]',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'INDEXING',
          title: 'Single Character: s[i]',
          desc: 's = "PYTHON". s[0] -> \'P\', s[-1] -> \'N\'. Dual positive and negative indices identical to lists.',
          tag: 's[i]',
        },
        {
          stepNumber: 'SLICING',
          title: 'Substring Slice: s[start:stop]',
          desc: 's[0:2] -> \'PY\'. Stops before stop index. s[::-1] reverses the entire string!',
          tag: 's[start:stop]',
        },
      ],
    },
  },
  'b24-s4': {
    id: 'b24-s4',
    slideNumber: 4,
    type: 'content',
    title: 'IMMUTABLE PROPERTY OF STRINGS IN PYTHON',
    subtitle: 'Strings cannot be modified in place after creation',
    lead: 'Unlike lists, Python strings are IMMUTABLE objects:',
    bullets: [
      {
        title: 'Illegal Operation:',
        text: 's = "Python"\ns[0] = "J"  -> Raises TypeError: \'str\' object does not support item assignment!',
      },
      {
        title: 'Correct Modification Technique:',
        text: 'To change characters, construct a NEW string: s = "J" + s[1:] -> Results in "Jython".',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CRITICAL CONCEPT',
      content: 'Lists are mutable (can change in place). Strings are immutable (read-only; modifying requires creating a new string).',
    },
  },
  'b24-s5': {
    id: 'b24-s5',
    slideNumber: 5,
    type: 'table',
    title: 'OPERATORS ON STRING DATA',
    subtitle: 'Concatenation, repetition, and substring search',
    tableData: {
      caption: 'Summary of string operators in Python',
      headers: ['Operator', 'Name', 'Example Expression', 'Evaluated Result'],
      rows: [
        ['+', 'String Concatenation', '"Tin " + "Hoc"', '"Tin Hoc"'],
        ['*', 'String Replication', '"ha" * 3', '"hahaha"'],
        ['in', 'Substring Presence Check', '"hoc" in "Tin hoc 10"', 'True'],
        ['not in', 'Substring Absence Check', '"2020" not in "Tin hoc 10"', 'True'],
        ['len()', 'String Length', 'len("Python")', '6'],
      ],
    },
  },
  'b24-s6': {
    id: 'b24-s6',
    slideNumber: 6,
    type: 'practice',
    title: 'PRACTICE: COUNTING DIGITS IN A STRING',
    subtitle: 'Using isdigit() and iteration across character sequence',
    lead: 'Count how many numeric digit characters exist inside a given text string:',
    bullets: [
      {
        title: 'Python Script:',
        text: 's = input("Enter a string: ")\ncount = 0\nfor ch in s:\n    if "0" <= ch <= "9":  # or ch.isdigit()\n        count += 1\nprint("Total numeric digits found:", count)',
        badge: 'Character Filter',
      },
    ],
  },
  'b24-s7': {
    id: 'b24-s7',
    slideNumber: 7,
    type: 'apply',
    title: 'APPLICATION: PASSWORD STRENGTH CHECKER',
    subtitle: 'Practical cybersecurity application',
    bullets: [
      {
        title: 'Security Criteria:',
        text: 'A strong password must have at least 8 characters, contain at least 1 digit, and contain at least 1 uppercase letter.',
      },
      {
        title: 'Python Code:',
        text: 'pw = input("Enter password: ")\nhas_digit = any(c.isdigit() for c in pw)\nhas_upper = any(c.isupper() for c in pw)\nif len(pw) >= 8 and has_digit and has_upper:\n    print("Password strength: STRONG")\nelse:\n    print("Password strength: WEAK - please enhance")',
        badge: 'Cybersecurity',
      },
    ],
  },
  'b24-s8': {
    id: 'b24-s8',
    slideNumber: 8,
    type: 'summary',
    title: 'LESSON 24 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key string concepts in Python',
    bullets: [
      {
        title: '1. Immutable Strings:',
        text: 'Strings are sequences of characters that cannot be modified in place.',
      },
      {
        title: '2. Indexing and Slicing:',
        text: 'Access characters with s[i] and slice ranges with s[start:stop:step].',
      },
      {
        title: '3. String Operators:',
        text: '+ to join, * to repeat, in to check substring existence, len(s) for character count.',
      },
    ],
  },
  'b24-s9': {
    id: 'b24-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent string problem solving',
    lead: 'Complete the following exercises:',
    bullets: [
      {
        title: 'Task 1: Palindrome Check',
        text: 'Check if a string reads identically forward and backward (e.g., "radar" is palindrome). Hint: s == s[::-1].',
        badge: 'Palindrome',
      },
      {
        title: 'Task 2: Vowel Counter',
        text: 'Count vowels (a, e, i, o, u) appearing in an English sentence entered by the user.',
        badge: 'Vowel Count',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 127-130) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 25: STRING OPERATIONS AND METHODS
  // =========================================================================
  'b25-s1': {
    id: 'b25-s1',
    slideNumber: 1,
    type: 'title',
    title: 'STRING OPERATIONS AND METHODS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Master split() and join() for word parsing and string reconstruction' },
      { text: 'Search substrings with find() and substitute patterns with replace()' },
      { text: 'Read space-separated numbers on a single line via input().split()' },
      { text: 'Standardize proper human names (strip, title casing)' },
    ],
    badge: 'Lesson 25 • Standard Lesson Plan',
  },
  'b25-s2': {
    id: 'b25-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: PARSING WORDS IN A SENTENCE',
    subtitle: 'Natural language processing fundamentals in Python',
    lead: 'Given sentence: "Informatics 10 Connecting Knowledge to Life":',
    bullets: [
      {
        title: 'The Challenge:',
        text: 'How to separate this sentence into individual words: ["Informatics", "10", "Connecting", "Knowledge", "to", "Life"]?',
        badge: 'Word Tokenization',
      },
      {
        title: 'The Solution:',
        text: 'Python provides the split() method to break text strings into lists of words instantly.',
        badge: 'split() Method',
      },
    ],
  },
  'b25-s3': {
    id: 'b25-s3',
    slideNumber: 3,
    type: 'diagram',
    title: 'DUAL COMPLEMENTARY METHODS: SPLIT() AND JOIN()',
    subtitle: 'Breaking text into lists and combining lists into text',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'SPLIT()',
          title: 'string.split(separator)',
          desc: 'Splits string into a list of words. Default splits by whitespace.\n"a b c".split() -> [\'a\', \'b\', \'c\']',
          tag: 'String -> List',
        },
        {
          stepNumber: 'JOIN()',
          title: 'separator.join(list)',
          desc: 'Joins list elements into a single string separated by separator.\n"-".join([\'a\', \'b\', \'c\']) -> "a-b-c"',
          tag: 'List -> String',
        },
      ],
    },
  },
  'b25-s4': {
    id: 'b25-s4',
    slideNumber: 4,
    type: 'table',
    title: 'SEARCH AND REPLACE: FIND() AND REPLACE()',
    subtitle: 'Locating and substituting substrings',
    tableData: {
      caption: 'find() and replace() string methods',
      headers: ['Method', 'Syntax', 'Behavior', 'Return Value if Not Found'],
      rows: [
        ['find()', 's.find(sub)', 'Returns index of first occurrence of sub', 'Returns -1 if sub does not exist'],
        ['replace()', 's.replace(old, new)', 'Replaces all occurrences of old with new', 'Returns unchanged original string'],
        ['count()', 's.count(sub)', 'Counts total occurrences of sub in s', 'Returns 0'],
        ['strip()', 's.strip()', 'Removes leading and trailing whitespace', 'Returns cleaned string'],
      ],
    },
  },
  'b25-s5': {
    id: 'b25-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE 1: MULTIPLE NUMBERS ON A SINGLE LINE',
    subtitle: 'The essential competitive programming input idiom: map(int, input().split())',
    lead: 'Read multiple space-separated integers on a single line and calculate their sum:',
    bullets: [
      {
        title: 'Idiom Pattern:',
        text: 'data = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in data]\ntotal = sum(numbers)\nprint("Numbers:", numbers)\nprint("Total sum:", total)',
        badge: 'input().split()',
      },
    ],
  },
  'b25-s6': {
    id: 'b25-s6',
    slideNumber: 6,
    type: 'apply',
    title: 'APPLICATION: STUDENT FULL NAME STANDARDIZATION',
    subtitle: 'Cleaning erratic whitespace and standardizing title case',
    bullets: [
      {
        title: 'Problem Description:',
        text: 'User enters: "   ngUyen   vAn   aN   ". Output standardized name: "Nguyen Van An".',
      },
      {
        title: 'Python Script:',
        text: 'raw = input("Enter full name: ")\nwords = raw.split()\nclean_words = [w.capitalize() for w in words]\nresult = " ".join(clean_words)\nprint("Standardized Name:", result)',
        badge: 'Name Normalization',
      },
    ],
  },
  'b25-s7': {
    id: 'b25-s7',
    slideNumber: 7,
    type: 'summary',
    title: 'LESSON 25 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key string methods in Python',
    bullets: [
      {
        title: '1. split() and join():',
        text: 'split() turns strings into lists; separator.join(list) joins lists into strings.',
      },
      {
        title: '2. Search and Replace:',
        text: 's.find(sub) returns index or -1; s.replace(old, new) substitutes occurrences.',
      },
      {
        title: '3. Data Sanitization:',
        text: 'strip() cleans whitespace; upper(), lower(), capitalize(), title() normalize case.',
      },
    ],
  },
  'b25-s8': {
    id: 'b25-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent text processing problems',
    lead: 'Solve the following homework challenges:',
    bullets: [
      {
        title: 'Task 1: Word Counter',
        text: 'Input an essay paragraph. Count the total number of distinct words appearing in the text.',
        badge: 'Word Count',
      },
      {
        title: 'Task 2: Censor Profanity Filter',
        text: 'Write a program replacing sensitive words in a chat message with asterisks (***).',
        badge: 'Censor Filter',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 131-135) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 26: FUNCTIONS IN PYTHON
  // =========================================================================
  'b26-s1': {
    id: 'b26-s1',
    slideNumber: 1,
    type: 'title',
    title: 'FUNCTIONS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Understand why programming relies on functions (modularity and code reuse)' },
      { text: 'Distinguish built-in functions vs user-defined functions (def)' },
      { text: 'Master def syntax, return statements, and calling mechanisms' },
      { text: 'Build modular programs: Prime check function and list processing' },
    ],
    badge: 'Lesson 26 • Standard Lesson Plan',
  },
  'b26-s2': {
    id: 'b26-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: THE PAIN OF REPEATING CODE BLOCKS',
    subtitle: 'The DRY Principle: Don\'t Repeat Yourself',
    lead: 'Imagine needing to check whether a number is prime in 5 different parts of a program:',
    bullets: [
      {
        title: 'Without Functions:',
        text: 'Must copy-paste the 10-line prime checking loop 5 separate times (50 lines). If an algorithmic bug is discovered, you must edit all 5 places!',
        badge: 'Spaghetti Code',
      },
      {
        title: 'With Functions:',
        text: 'Define def is_prime(n): once. Everywhere else, simply call: if is_prime(x):. Clean, organized, and maintainable.',
        badge: 'Modular Functions',
      },
    ],
  },
  'b26-s3': {
    id: 'b26-s3',
    slideNumber: 3,
    type: 'table',
    title: 'TWO CATEGORIES OF FUNCTIONS IN PYTHON',
    subtitle: 'Built-in functions vs User-defined functions',
    tableData: {
      caption: 'Comparison of built-in and user-defined functions',
      headers: ['Category', 'Origin', 'Examples', 'How to Use'],
      rows: [
        ['Built-in Functions', 'Pre-packaged within Python standard library', 'print(), input(), len(), int(), abs(), min(), max()', 'Call directly anywhere without defining'],
        ['User-defined Functions', 'Created by programmer using def keyword', 'def is_prime(n):, def calc_tax(income):', 'Must define with def before calling'],
      ],
    },
  },
  'b26-s4': {
    id: 'b26-s4',
    slideNumber: 4,
    type: 'diagram',
    title: 'SYNTAX FOR DEFINING AND CALLING FUNCTIONS',
    subtitle: 'The def keyword, parameters, body, and the return statement',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'DEFINITION',
          title: 'def function_name(param1, param2):',
          desc: 'Header line ends with a colon (:). Body is indented. return result passes value back to caller.',
          tag: 'def & return',
        },
        {
          stepNumber: 'INVOCATION',
          title: 'result = function_name(arg1, arg2)',
          desc: 'Calls function by name, passing actual argument values in parentheses.',
          tag: 'Call Function',
        },
      ],
    },
    highlightBox: {
      type: 'tip',
      title: 'THE RETURN STATEMENT',
      content: 'return terminates function execution immediately and sends the computed result back to the caller. If omitted, Python returns None.',
    },
  },
  'b26-s5': {
    id: 'b26-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE: BUILDING A PRIME CHECK FUNCTION',
    subtitle: 'Writing a clean def is_prime(n) function',
    lead: 'Construct a reusable function that checks if integer n is prime:',
    bullets: [
      {
        title: 'Function Definition:',
        text: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True',
        badge: 'def is_prime(n)',
      },
    ],
  },
  'b26-s6': {
    id: 'b26-s6',
    slideNumber: 6,
    type: 'apply',
    title: 'APPLICATION: SUM OF PRIMES IN A LIST',
    subtitle: 'Reusing is_prime(n) across a collection',
    bullets: [
      {
        title: 'Implementation:',
        text: 'numbers = [2, 9, 11, 15, 17, 20, 23, 27]\nprime_sum = 0\nfor x in numbers:\n    if is_prime(x):\n        prime_sum += x\nprint("Sum of prime numbers:", prime_sum)  # 2 + 11 + 17 + 23 = 53',
        badge: 'Function Reuse',
      },
    ],
  },
  'b26-s7': {
    id: 'b26-s7',
    slideNumber: 7,
    type: 'summary',
    title: 'LESSON 26 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key function principles in Python',
    bullets: [
      {
        title: '1. Modular Design:',
        text: 'Functions break large programs into manageable, reusable modules.',
      },
      {
        title: '2. Definition Syntax:',
        text: 'def name(parameters): followed by indented body statements.',
      },
      {
        title: '3. return Statement:',
        text: 'Passes result back to caller and halts function execution immediately.',
      },
    ],
  },
  'b26-s8': {
    id: 'b26-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent function design problems',
    lead: 'Write Python functions for the following problems:',
    bullets: [
      {
        title: 'Task 1: GCD Function',
        text: 'Write def gcd(a, b): returning greatest common divisor using Euclid\'s algorithm.',
        badge: 'gcd(a, b)',
      },
      {
        title: 'Task 2: Perfect Number Function',
        text: 'Write def is_perfect(n): returning True if sum of proper divisors equals n (e.g. 6 = 1 + 2 + 3).',
        badge: 'is_perfect(n)',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 136-140) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 27: FUNCTION PARAMETERS AND ARGUMENTS
  // =========================================================================
  'b27-s1': {
    id: 'b27-s1',
    slideNumber: 1,
    type: 'title',
    title: 'FUNCTION PARAMETERS AND ARGUMENTS IN PYTHON',
    subtitle: 'Topic 5: Problem Solving with Computers | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish formal parameters in definition vs actual arguments in call' },
      { text: 'Master positional arguments vs keyword arguments (name=value)' },
      { text: 'Configure default parameter values for flexible function signatures' },
      { text: 'Return multiple values packed as tuples (min, max, average)' },
    ],
    badge: 'Lesson 27 • Standard Lesson Plan',
  },
  'b27-s2': {
    id: 'b27-s2',
    slideNumber: 2,
    type: 'diagram',
    title: 'DISTINGUISHING PARAMETERS AND ARGUMENTS',
    subtitle: 'Formal Parameters vs Actual Arguments',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'PARAMETERS',
          title: 'Parameters (Formal)',
          desc: 'Variables listed inside parentheses in the function DEFINITION header:\ndef greet(name, msg):\n(Acts as local placeholders awaiting data).',
          tag: 'In def line',
        },
        {
          stepNumber: 'ARGUMENTS',
          title: 'Arguments (Actual Values)',
          desc: 'Concrete data values passed into parentheses during function CALL:\ngreet("An", "Good morning")\n(Bound to parameters during execution).',
          tag: 'In call line',
        },
      ],
    },
  },
  'b27-s3': {
    id: 'b27-s3',
    slideNumber: 3,
    type: 'table',
    title: 'WAYS TO PASS ARGUMENTS TO FUNCTIONS',
    subtitle: 'Positional arguments vs Keyword arguments',
    tableData: {
      caption: 'Argument passing mechanisms in Python',
      headers: ['Type', 'Syntax', 'Order Requirement', 'Example'],
      rows: [
        ['Positional Arguments', 'func(val1, val2)', 'Order matters strictly; matched position by position', 'rect_area(5, 10) -> length=5, width=10'],
        ['Keyword Arguments', 'func(param=val)', 'Order does not matter; matched explicitly by parameter name', 'rect_area(width=10, length=5) -> Identical!'],
      ],
    },
  },
  'b27-s4': {
    id: 'b27-s4',
    slideNumber: 4,
    type: 'content',
    title: 'DEFAULT PARAMETER VALUES',
    subtitle: 'Providing fallback values when caller omits arguments',
    lead: 'Python allows assigning default values in the parameter list:',
    bullets: [
      {
        title: 'Definition Example:',
        text: 'def greet(name, greeting="Hello"):\n    print(greeting, name)',
      },
      {
        title: 'Flexible Calls:',
        text: '• greet("An") -> Uses default: "Hello An"\n• greet("Binh", "Hi") -> Overrides default: "Hi Binh"',
      },
      {
        title: 'Golden Rule:',
        text: 'Parameters WITH default values MUST be placed AFTER all parameters without defaults in the def header!',
      },
    ],
  },
  'b27-s5': {
    id: 'b27-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE: RETURNING MULTIPLE VALUES',
    subtitle: 'Packing return values into tuples in Python',
    lead: 'Write a function that calculates min, max, and sum of a list simultaneously:',
    bullets: [
      {
        title: 'Function Definition:',
        text: 'def analyze_list(a):\n    return min(a), max(a), sum(a)',
      },
      {
        title: 'Unpacking Call:',
        text: 'low, high, total = analyze_list([10, 25, 5, 40, 15])\nprint("Min:", low)\nprint("Max:", high)\nprint("Total:", total)',
        badge: 'Multiple Return',
      },
    ],
  },
  'b27-s6': {
    id: 'b27-s6',
    slideNumber: 6,
    type: 'summary',
    title: 'LESSON 27 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key parameter and argument principles',
    bullets: [
      {
        title: '1. Parameters vs Arguments:',
        text: 'Parameters are in the definition header; arguments are the real values passed when calling.',
      },
      {
        title: '2. Positional and Keyword:',
        text: 'Pass by position or pass by parameter name (param=value).',
      },
      {
        title: '3. Default Values & Multiple Return:',
        text: 'Set fallback defaults at end of parameter list; return multiple values easily with commas.',
      },
    ],
  },
  'b27-s7': {
    id: 'b27-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Independent parameter exercises',
    lead: 'Complete the following homework challenges:',
    bullets: [
      {
        title: 'Task 1: Exponentiation Function with Default',
        text: 'Write def power(x, n=2): returning x raised to power n. If n is omitted, returns x squared.',
        badge: 'power(x, n=2)',
      },
      {
        title: 'Task 2: Student Grade Classifier',
        text: 'Write def classify_student(math, lit, eng): returning average score and classification tier ("Good", "Fair", "Pass").',
        badge: 'Classification',
      },
    ],
    footerNote: 'Informatics 10 Textbook (pp. 141-144) • Teacher: QuanLHK',
  },
};
