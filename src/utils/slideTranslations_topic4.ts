import { Slide } from '../types';

export const TOPIC4_SLIDES_EN: Record<string, Slide> = {
  // =========================================================================
  // LESSON 12: INKSCAPE GRAPHIC DESIGN SOFTWARE
  // =========================================================================
  'b12-s1': {
    id: 'b12-s1',
    slideNumber: 1,
    type: 'title',
    title: 'INKSCAPE GRAPHIC DESIGN SOFTWARE',
    subtitle: 'Topic 4: Computer Graphic Design | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish the core nature of Raster (Bitmap) graphics and Vector graphics' },
      { text: 'Familiarize with the Inkscape workspace, toolbox, and basic geometry tools' },
      { text: 'Understand layer stacking order (Z-order) and object arrangement operations' },
      { text: 'Practice drawing floral artwork and standard National Flag of Vietnam (SVG)' },
    ],
    badge: 'Lesson 12 • Standard Lesson Plan',
  },
  'b12-s2': {
    id: 'b12-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: COMPARING PHOTOS AND VECTOR DRAWINGS',
    subtitle: 'Observing textbook Figure 12.1 at 500% zoom (Worksheet No. 1)',
    lead: 'Compare the visual clarity of two images when enlarged up to 500%:',
    bullets: [
      {
        title: 'Image A (Photographed flower):',
        text: 'Rich, natural gradations of color, but reveals tiny square pixels when zoomed in, causing blurred and jagged, pixelated edges.',
        badge: 'Raster Graphics',
      },
      {
        title: 'Image B (Software vector graphic):',
        text: 'Constructed from mathematical curves and geometric formulas; remains razor-sharp at 500% or 1000% zoom without any distortion or pixelation.',
        badge: 'Vector Graphics',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CORE QUESTION',
      content: 'Why do vector drawings never pixelate when scaled? In which practical scenarios should we choose Raster, and when should we choose Vector?',
    },
  },
  'b12-s3': {
    id: 'b12-s3',
    slideNumber: 3,
    type: 'table',
    title: 'DISTINGUISHING RASTER GRAPHICS FROM VECTOR GRAPHICS',
    subtitle: 'Task 1: Comprehensive comparison across 5 textbook criteria (p. 65)',
    svgType: 'vector-raster',
    sourceCitation: 'Source: Figure 12.1 Informatics 10 Textbook (p. 65) • Connecting Knowledge to Life Series',
    tableData: {
      caption: 'Comparison between Raster Graphics (Bitmap) and Vector Graphics',
      headers: ['Criteria', 'Raster Graphics (Bitmap / Pixels)', 'Vector Graphics (Mathematical Paths)'],
      rows: [
        ['Composition', 'Grid of individual square colored pixels', 'Mathematical geometric objects (points, lines, curves, polygons)'],
        ['Scaling Quality', 'Pixelates, blurs, and shows jagged artifacts when enlarged beyond original size', 'Remains perfectly smooth, crisp, and razor-sharp at any zoom level'],
        ['Color Complexity', 'Very high; renders complex real-world photographic gradations and textures', 'Typically flat color fills, clean gradients, or precise technical tones'],
        ['File Size', 'Relatively large; scales directly with image resolution and dimension', 'Very small; stores only mathematical coordinate formulas'],
        ['Typical Applications', 'Digital photography, digital painting (Photoshop, GIMP)', 'Logo design, icons, typography, banners, technical schematics (Inkscape, Illustrator)'],
      ],
    },
  },
  'b12-s4': {
    id: 'b12-s4',
    slideNumber: 4,
    type: 'diagram',
    title: 'THE INKSCAPE WORKSPACE INTERFACE',
    subtitle: '6 essential interface components across the screen (Figure 12.2)',
    lead: 'Inkscape is a professional, free, and open-source vector graphics editor:',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: '1',
          title: 'Menu Bar',
          desc: 'Located at top (File, Edit, View, Layer, Object, Path, Text) providing access to all commands.',
          tag: 'Menu Bar',
        },
        {
          stepNumber: '2',
          title: 'Toolbox',
          desc: 'Left vertical bar: Select tool (S/F1), Rectangles (R), Circles (E), Stars (*), and Pen (B).',
          tag: 'Toolbox',
        },
        {
          stepNumber: '3',
          title: 'Tool Controls Bar',
          desc: 'Dynamic bar beneath the menu bar adjusting parameters according to the active tool.',
          tag: 'Controls Bar',
        },
        {
          stepNumber: '4',
          title: 'Canvas & Page Boundary',
          desc: 'Central white rectangle represents printable page area; surrounding space serves as scratchpad.',
          tag: 'Canvas',
        },
        {
          stepNumber: '5',
          title: 'Color Palette',
          desc: 'Bottom color swatch strip allowing one-click assignment of Fill and Stroke colors.',
          tag: 'Palette',
        },
        {
          stepNumber: '6',
          title: 'Status Bar',
          desc: 'Bottom line displaying keyboard hints, cursor coordinates, and current Fill/Stroke attributes.',
          tag: 'Status Bar',
        },
      ],
    },
  },
  'b12-s5': {
    id: 'b12-s5',
    slideNumber: 5,
    type: 'process',
    title: '3 BASIC STEPS TO CREATE GEOMETRIC OBJECTS',
    subtitle: 'Standard workflow for creating and styling basic shapes in Inkscape',
    lead: 'Every standard geometric shape (rectangle, ellipse, star) follows the same protocol:',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Select Drawing Tool',
          desc: 'Click on Rectangle (R), Ellipse (E), or Star/Polygon (*) on the Toolbox.',
          tag: 'Select Tool',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Click & Drag on Canvas',
          desc: 'Hold left mouse button and drag diagonally across the canvas to draw desired size.',
          tag: 'Drag & Draw',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Apply Color Styling',
          desc: 'Left-click swatch for Fill color; hold Shift + left-click swatch for border Stroke color.',
          tag: 'Fill & Stroke',
        },
      ],
    },
    highlightBox: {
      type: 'tip',
      title: 'ESSENTIAL SHORTCUT',
      content: 'Press F1 (or key S) to immediately return to the Selection Tool at any moment!',
    },
  },
  'b12-s6': {
    id: 'b12-s6',
    slideNumber: 6,
    type: 'content',
    title: 'LAYER STACKING PRINCIPLE (Z-ORDER)',
    subtitle: 'Occlusion and depth rules between graphic objects on a 2D plane',
    lead: 'In vector graphics, objects stack on top of each other like cut-out sheets of paper:',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Arranging layer stacking order and managing vector graphic elements',
    bullets: [
      {
        title: 'Natural Stacking Rule:',
        text: 'Objects created more recently automatically sit on upper layers, partially or completely concealing objects beneath them.',
      },
      {
        title: 'The Z-Axis in 2D Space:',
        text: 'Each object possesses a depth index (Z-index). An object with a higher Z-index is rendered above an object with a lower Z-index.',
      },
      {
        title: 'Practical Case Study:',
        text: 'When drawing the National Flag, drawing the red rectangle after the yellow star covers the star. The designer must lower the red rectangle to the bottom.',
      },
    ],
  },
  'b12-s7': {
    id: 'b12-s7',
    slideNumber: 7,
    type: 'process',
    title: '4 LAYER ORDERING COMMANDS AND SHORTCUTS',
    subtitle: 'Available under Object menu or via dedicated navigation keyboard keys',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'Home',
          title: 'Raise to Top',
          desc: 'Brings the selected object immediately to the very top layer of the canvas.',
          tag: 'To Top',
        },
        {
          stepNumber: 'Page Up',
          title: 'Raise',
          desc: 'Elevates the selected object one level above the adjacent element directly above it.',
          tag: 'Up 1 Layer',
        },
        {
          stepNumber: 'Page Down',
          title: 'Lower',
          desc: 'Lowers the selected object one level beneath the adjacent element directly below it.',
          tag: 'Down 1 Layer',
        },
        {
          stepNumber: 'End',
          title: 'Lower to Bottom',
          desc: 'Sends the selected object immediately to the very bottom layer of the canvas.',
          tag: 'To Bottom',
        },
      ],
    },
    highlightBox: {
      type: 'tip',
      title: 'SHORTCUT MEMORY TIP',
      content: 'Home brings to the absolute top, End sends to the absolute bottom — essential when managing backgrounds and foreground details!',
    },
  },
  'b12-s8': {
    id: 'b12-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'PRACTICE 1: CREATING AND STYLING A FLOWER',
    subtitle: 'Task 1 based on textbook Figure 12.5 (p. 90)',
    lead: 'Step-by-step workflow for drawing a symmetrical flower using duplicate and rotation:',
    bullets: [
      {
        title: 'Step 1: Draw Center Pistil and First Petal',
        text: 'Draw a yellow circle for the pistil. Use Ellipse tool to draw an elongated red oval as the first petal.',
        badge: 'Shape Creation',
      },
      {
        title: 'Step 2: Duplicate Petal (Ctrl + D)',
        text: 'Select the petal and press Ctrl + D to duplicate it in place directly above the original.',
        badge: 'Ctrl + D',
      },
      {
        title: 'Step 3: Rotate and Position Around Center',
        text: 'Click the petal a second time to reveal rotation handles. Move the rotation anchor to the pistil center and rotate evenly.',
        badge: 'Radial Rotate',
      },
      {
        title: 'Step 4: Save Vector Artwork',
        text: 'Go to File -> Save As -> Name file "Flower.svg" in your group folder.',
        badge: 'Save SVG',
      },
    ],
  },
  'b12-s9': {
    id: 'b12-s9',
    slideNumber: 9,
    type: 'practice',
    title: 'PRACTICE 2: DESIGNING THE NATIONAL FLAG OF VIETNAM',
    subtitle: 'Task 2 based on textbook Figure 12.6 (p. 92)',
    lead: 'Construct the national flag with exact constitutional geometric proportions:',
    bullets: [
      {
        title: 'Step 1: Red Flag Background',
        text: 'Use Rectangle tool. Set parameters on Tool Controls: Width = 300 px, Height = 200 px (standard 2:3 ratio). Fill with bright crimson red.',
        badge: 'Red Canvas 2:3',
      },
      {
        title: 'Step 2: Five-Pointed Gold Star',
        text: 'Choose Stars (*) tool. Settings: Corners = 5, Spoke ratio = 0.400. Hold Ctrl while dragging to keep the top vertex perfectly upright. Fill with bright gold yellow.',
        badge: '5-Point Gold Star',
      },
      {
        title: 'Step 3: Center Align and Layer Management',
        text: 'Center the star on the red rectangle. If the star is obscured, select the red background and press End (Lower to bottom).',
        badge: 'Center & Stacking',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'STANDARD RATIO',
      content: 'Spoke ratio = 0.400 is the golden ratio creating a perfectly sharp, balanced five-pointed star!',
    },
  },
  'b12-s10': {
    id: 'b12-s10',
    slideNumber: 10,
    type: 'content',
    title: 'ROLE AND LIMITATIONS OF AI IN GRAPHIC DESIGN',
    subtitle: 'Smart tool mindset and ethical digital competencies',
    lead: 'Utilizing AI in graphic design requires understanding the boundaries between assistance and human artistry:',
    bullets: [
      {
        title: 'Where AI Excels as an Assistant:',
        text: 'Suggesting vector keywords, generating complementary color palettes, and offering initial layout ideation drafts.',
      },
      {
        title: 'Inherent Limitations of AI:',
        text: 'AI cannot replace human aesthetic judgment, cultural nuance, emotional resonance, or precise manual vector craftsmanship.',
      },
      {
        title: 'Designer Core Principle:',
        text: 'The human creator remains the ultimate artistic decision-maker, responsible for original aesthetics, ethics, and intellectual output.',
      },
    ],
  },
  'b12-s11': {
    id: 'b12-s11',
    slideNumber: 11,
    type: 'summary',
    title: 'LESSON 12 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Key principles of vector graphics and the Inkscape editor',
    bullets: [
      {
        title: '1. Vector Graphics Characteristics:',
        text: 'Built on mathematical geometry formulas; never pixelates or loses sharpness regardless of scaling; native format is SVG.',
      },
      {
        title: '2. Foundational Inkscape Operations:',
        text: 'Drawing basic shapes, duplicating objects (Ctrl + D), configuring Fill & Stroke colors, and managing layer stacking (Home/End).',
      },
      {
        title: '3. Mastered Practical Skills:',
        text: 'Proficiently drawn radial flower artwork and accurately drafted the National Flag of Vietnam with standard 2:3 proportions.',
      },
    ],
  },
  'b12-s12': {
    id: 'b12-s12',
    slideNumber: 12,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Reinforcing computer graphic design competencies',
    lead: 'Students complete 2 practical exercises following the class session:',
    bullets: [
      {
        title: 'Exercise 1: Finalize National Flag SVG',
        text: 'Review the red flag and gold star artwork, verify symmetry and layer order, and save cleanly as "NationalFlag_Fullname.svg".',
        badge: 'Save SVG',
      },
      {
        title: 'Exercise 2: Design Another National Flag',
        text: 'Use Rectangle and Ellipse tools to construct the National Flag of Japan (red sun on white field) or Laos.',
        badge: 'Creative Extension',
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'SUBMISSION INSTRUCTIONS',
      content: 'Upload the exported .svg vector file into the shared class Google Drive folder before the next session.',
    },
    footerNote: 'Informatics 10 Textbook (pp. 85-97) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 13: ADDING AND MANAGING GRAPHIC OBJECTS
  // =========================================================================
  'b13-s1': {
    id: 'b13-s1',
    slideNumber: 1,
    type: 'title',
    title: 'ADDING AND MANAGING GRAPHIC OBJECTS',
    subtitle: 'Topic 4: Computer Graphic Design | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Deconstruct complex imagery into fundamental geometric primitives' },
      { text: 'Proficiently navigate the Fill and Stroke dialog: Gradients & Border styles' },
      { text: 'Master 6 core Boolean path operations under the Path menu' },
      { text: 'Practice drawing clouds, foliage, watermelon slices, and digital icons' },
    ],
    badge: 'Lesson 13 • Standard Lesson Plan',
  },
  'b13-s2': {
    id: 'b13-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: DECONSTRUCTING A WATERMELON SLICE',
    subtitle: 'Observing textbook Figure 13.1 - Unpacking geometric layers (Worksheet 1)',
    lead: 'Which basic geometric shapes form the watermelon slice, and how are they ordered?',
    bullets: [
      {
        title: 'Layer 1 (Bottom): Dark Green Rind',
        text: 'A circular sector or semi-ellipse filled with dark forest green.',
        badge: 'Bottom Layer',
      },
      {
        title: 'Layer 2: Pale White-Green Pith',
        text: 'A slightly smaller concentric semi-ellipse layered over the rind, colored light green or pale white.',
        badge: 'Middle Layer',
      },
      {
        title: 'Layer 3: Juicy Red Flesh',
        text: 'An even smaller concentric semi-ellipse atop the pith, filled with appetizing bright crimson red.',
        badge: 'Upper Layer',
      },
      {
        title: 'Layer 4 (Top): Black Seeds',
        text: 'Tiny teardrop/oval shapes in pure black scattered across the red flesh surface.',
        badge: 'Top Layer',
      },
    ],
  },
  'b13-s3': {
    id: 'b13-s3',
    slideNumber: 3,
    type: 'content',
    title: 'CONFIGURING FILL AND STROKE ATTRIBUTES',
    subtitle: 'Open advanced dialog: Press Shift + Ctrl + F (Textbook Figure 13.3)',
    lead: 'The Fill and Stroke dialog grants comprehensive control over visual styling:',
    bullets: [
      {
        title: '1. Fill Tab (Interior Color):',
        text: '• No paint (X): Transparent interior.\n• Flat color: Uniform single solid color.\n• Linear gradient: Smooth color transition along a straight directional line.\n• Radial gradient: Concentric color blend radiating outwards from a central focal point.',
      },
      {
        title: '2. Stroke Paint Tab (Border Outline Color):',
        text: 'Sets the color of the bounding outline independently from the interior Fill (an object can have an outline without fill, or fill without outline).',
      },
    ],
  },
  'b13-s4': {
    id: 'b13-s4',
    slideNumber: 4,
    type: 'content',
    title: 'STROKE STYLE AND OPACITY CONFIGURATIONS',
    subtitle: 'Stroke Style tab and Opacity slider in the Fill and Stroke dialog',
    lead: 'Fine-tune line aesthetics and translucent effects across graphic artwork:',
    bullets: [
      {
        title: 'Outline Width:',
        text: 'Define stroke thickness using precise measurement units (px, pt, mm) via the Width input field.',
      },
      {
        title: 'Dash Patterns (Dashes):',
        text: 'Supports segmented dashes and dotted patterns suitable for borders, cutting guides, or sewing patterns.',
      },
      {
        title: 'Joins and Caps:',
        text: 'Choose sharp miter joints, rounded smooth corners, or beveled edges for polished corners and endpoints.',
      },
      {
        title: 'Global Opacity:',
        text: 'Slide the Opacity bar down from 100% to create sheer, translucent overlays across underlying layers.',
      },
    ],
  },
  'b13-s5': {
    id: 'b13-s5',
    slideNumber: 5,
    type: 'diagram',
    title: '6 BOOLEAN PATH OPERATIONS IN THE PATH MENU',
    subtitle: 'Constructing complex shapes from simple primitives (Textbook Figure 13.3)',
    svgType: 'inkscape-tools',
    sourceCitation: 'Source: Figure 13.3 Informatics 10 Textbook (p. 71) • Connecting Knowledge to Life Series',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: 'Ctrl + +',
          title: 'Union',
          desc: 'Merges 2 or more overlapping objects into a single contiguous shape sharing an outer perimeter.',
          tag: 'Cloud Shape',
        },
        {
          stepNumber: 'Ctrl + -',
          title: 'Difference',
          desc: 'Subtracts the upper object from the lower object (strictly dependent on layer stacking order).',
          tag: 'Crescent Moon',
        },
        {
          stepNumber: 'Ctrl + *',
          title: 'Intersection',
          desc: 'Retains exclusively the shared overlapping region between objects, discarding everything else.',
          tag: 'Petal Lens',
        },
        {
          stepNumber: 'Ctrl + ^',
          title: 'Exclusion',
          desc: 'Retains separate non-overlapping zones while punching an empty hole through the intersection.',
          tag: 'Hollow Hole',
        },
        {
          stepNumber: 'Ctrl + /',
          title: 'Division',
          desc: 'Uses the upper object as a cutting blade to slice the lower object into independent fragments.',
          tag: 'Slice Cut',
        },
        {
          stepNumber: 'Ctrl + Alt + /',
          title: 'Cut Path',
          desc: 'Cuts the perimeter stroke of the lower shape at intersection points with the upper object.',
          tag: 'Cut Stroke',
        },
      ],
    },
  },
  'b13-s6': {
    id: 'b13-s6',
    slideNumber: 6,
    type: 'process',
    title: 'PRACTICE: DRAWING A CLOUD USING UNION',
    subtitle: 'Landscape illustration task (Worksheet No. 4)',
    lead: 'Step-by-step workflow to craft an organic, fluffy cloud vector shape:',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Draw Circles',
          desc: 'Draw 4 - 5 overlapping circles and ellipses of varying radii forming a cluster.',
          tag: 'Circles',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Add Flat Base',
          desc: 'Draw a horizontal rectangle across the bottom to establish a level cloud baseline.',
          tag: 'Base Box',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Select All & Union',
          desc: 'Drag-select all shapes -> Path menu -> Select Union (Shortcut: Ctrl + +).',
          tag: 'Path -> Union',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Apply Gradient Fill',
          desc: 'Open Fill & Stroke -> Apply Linear Gradient from pure white to soft sky cyan.',
          tag: 'Gradient',
        },
      ],
    },
  },
  'b13-s7': {
    id: 'b13-s7',
    slideNumber: 7,
    type: 'practice',
    title: 'QUIZ: CHOOSING THE APPROPRIATE BOOLEAN OPERATION',
    subtitle: 'Testing geometric spatial reasoning (Worksheet No. 4)',
    lead: 'Identify the correct Boolean operation to produce the target geometry:',
    quiz: {
      question: 'To construct a crescent moon from two identical overlapping circles, which Boolean operation in the Path menu is required?',
      options: [
        'A. Path -> Union',
        'B. Path -> Difference (Subtracting upper circle from lower circle)',
        'C. Path -> Intersection',
        'D. Path -> Combine',
      ],
      answer: 'Option B: Path -> Difference (Subtracting upper circle from lower circle).',
      explanation: 'Difference cuts away the overlapping portion covered by the top circle, leaving a crisp crescent moon shape from the base circle.',
    },
  },
  'b13-s8': {
    id: 'b13-s8',
    slideNumber: 8,
    type: 'apply',
    title: 'APPLICATION: CREATING TREES AND 3D SPHERES',
    subtitle: 'Combining shape tools and shading effects (Textbook Figure 13.15)',
    lead: 'Integrate acquired skills to render tree clusters or an illuminated 3D sphere:',
    bullets: [
      {
        title: 'Tree Foliage Canopy:',
        text: 'Cluster overlapping circles -> Path -> Union to fuse into a leafy canopy -> Apply lush green Linear Gradient.',
        badge: 'Foliage',
      },
      {
        title: 'Tree Trunk:',
        text: 'Draw a vertical rectangle modified into a subtle trapezoid, colored earthy brown, and lowered to the bottom layer (Page Down).',
        badge: 'Trunk',
      },
      {
        title: '3D Sphere Lighting Effect:',
        text: 'Draw a circle -> Assign Radial Gradient -> Shift the white light highlight focal point to the upper-left quadrant to simulate directional lighting.',
        badge: '3D Sphere',
      },
    ],
  },
  'b13-s9': {
    id: 'b13-s9',
    slideNumber: 9,
    type: 'summary',
    title: 'LESSON 13 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Systematizing styling attributes and Boolean Path operations',
    bullets: [
      {
        title: '1. Managing Fill & Stroke Attributes:',
        text: 'Open Shift + Ctrl + F to adjust flat color fills, linear and radial gradients, outline widths, and overall layer opacity.',
      },
      {
        title: '2. Mastering Boolean Path Operations:',
        text: 'Command the 6 Boolean primitives: Union (Ctrl++), Difference (Ctrl+-), Intersection (Ctrl+*), Exclusion (Ctrl+^), and Division (Ctrl+/).',
      },
      {
        title: '3. Vector Deconstruction Mindset:',
        text: 'Every intricate graphic artwork begins by deconstructing forms into basic geometric primitives combined through logical operations.',
      },
    ],
  },
  'b13-s10': {
    id: 'b13-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'APPLICATION TASKS & HOMEWORK',
    subtitle: 'Sharpening spatial shape modeling and preparing for the next lesson',
    lead: 'Students complete the following independent design exercises at home:',
    bullets: [
      {
        title: 'Task 1: Design a Symmetrical Heart Icon',
        text: 'Draw 2 circles and 1 square rotated by 45 degrees, then merge them using Path -> Union to form a symmetrical heart.',
        badge: 'Path Practice',
      },
      {
        title: 'Task 2: Preview Lesson 14',
        text: 'Read ahead in Lesson 14: Understand the concept of Nodes and the Pen tool for drawing Bézier curves.',
        badge: 'Lesson Preview',
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'SUBMISSION GUIDELINE',
      content: 'Save your file as "Heart_Fullname.svg" and submit it to the class cloud storage assignment folder.',
    },
    footerNote: 'Informatics 10 Textbook (pp. 98-109) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 14: WORKING WITH PATHS AND TEXT OBJECTS
  // =========================================================================
  'b14-s1': {
    id: 'b14-s1',
    slideNumber: 1,
    type: 'title',
    title: 'WORKING WITH PATHS AND TEXT OBJECTS',
    subtitle: 'Topic 4: Computer Graphic Design | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Distinguish rigid geometric shapes from editable freeform paths (Path)' },
      { text: 'Master anchor nodes (Nodes), control points, and Bézier direction handles' },
      { text: 'Convert shapes to paths and practice sculpting organic curved leaf illustrations' },
      { text: 'Create artistic typography and curve text along complex paths (Put on Path)' },
    ],
    badge: 'Lesson 14 • Standard Lesson Plan',
  },
  'b14-s2': {
    id: 'b14-s2',
    slideNumber: 2,
    type: 'warmup',
    title: 'WARM-UP: RIGID SHAPES VS FREEFORM PATHS',
    subtitle: 'Comparing Figures 14.1 and 14.2 (Textbook p. 75)',
    lead: 'Examine two rectangles in Inkscape and identify fundamental operational differences:',
    bullets: [
      {
        title: 'Original Rigid Shape (Shape):',
        text: 'Parametrically locked by width, height, and corner radiuses. Cannot independently pull a single vertex into an organic leaf or triangle.',
        badge: 'Rigid Shape',
      },
      {
        title: 'Converted Path Object (Path):',
        text: 'Composed of line segments and curves linked by anchor nodes. Vertices and curvatures can be freely morphed in any direction.',
        badge: 'Freeform Path',
      },
    ],
    highlightBox: {
      type: 'remember',
      title: 'CRITICAL CONVERSION COMMAND',
      content: 'Go to Path menu -> Select "Object to Path" (Shortcut: Shift + Ctrl + C) to convert any rigid primitive into an editable path!',
    },
  },
  'b14-s3': {
    id: 'b14-s3',
    slideNumber: 3,
    type: 'diagram',
    title: 'PATH ANATOMY: ANCHOR NODES & DIRECTION HANDLES',
    subtitle: 'Demystifying the anatomy of Bézier curves',
    lead: 'Use the Node tool (Shortcut: F2) to inspect the anatomy of a curved vector path:',
    diagram: {
      layout: 'grid',
      steps: [
        {
          stepNumber: '1',
          title: 'Anchor Node',
          desc: 'Coordinates connecting straight segments or curves; defines the foundational skeleton of the object.',
          tag: 'Node',
        },
        {
          stepNumber: '2',
          title: 'Cusp / Corner Node',
          desc: 'Node creating a sharp corner; handles on both sides move independently from one another.',
          tag: 'Cusp Node',
        },
        {
          stepNumber: '3',
          title: 'Smooth Node',
          desc: 'Node producing fluid, continuous curvature; handles remain collinear, rotating in unison.',
          tag: 'Smooth Node',
        },
        {
          stepNumber: '4',
          title: 'Direction Handles',
          desc: 'Levers projecting out from anchor nodes. Adjusting length controls curvature tension; rotating controls tangent angle.',
          tag: 'Handle',
        },
      ],
    },
  },
  'b14-s4': {
    id: 'b14-s4',
    slideNumber: 4,
    type: 'process',
    title: 'ESSENTIAL NODE TOOL OPERATIONS (F2)',
    subtitle: 'Node Tool Controls bar options (Textbook Figure 14.2, p. 76)',
    svgType: 'bezier-nodes',
    sourceCitation: 'Source: Figure 14.2 Informatics 10 Textbook (p. 76) • Connecting Knowledge to Life Series',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'ADD / DELETE',
          title: 'Insert & Delete Nodes',
          desc: 'Double-click anywhere on a path segment to insert a new node; select a node and press Delete to remove it.',
          tag: 'Insert / Delete',
        },
        {
          stepNumber: 'JOIN / BREAK',
          title: 'Join & Break Nodes',
          desc: 'Select two nearby end nodes -> click "Join selected nodes" to fuse into a single sharp vertex.',
          tag: 'Join / Break',
        },
        {
          stepNumber: 'CONVERT',
          title: 'Convert Node Types',
          desc: 'Toggle between corner nodes and smooth nodes with dedicated buttons (Make smooth / Make cusp).',
          tag: 'Smooth / Cusp',
        },
      ],
    },
  },
  'b14-s5': {
    id: 'b14-s5',
    slideNumber: 5,
    type: 'practice',
    title: 'PRACTICE 1: SCULPTING AN ORGANIC LEAF',
    subtitle: 'Task 1 based on textbook Figures 14.11-14.12 (p. 78)',
    lead: 'Morphed workflow transforming a simple rectangle into a contoured leaf:',
    bullets: [
      {
        title: 'Step 1: Vertical Rectangle & Convert to Path',
        text: 'Draw a vertical rectangle -> Path -> Object to Path (Shift+Ctrl+C) to generate 4 corner nodes.',
        badge: 'Object to Path',
      },
      {
        title: 'Step 2: Fuse Top Two Nodes into a Tip',
        text: 'Using Node tool (F2), marquee-select the top two nodes -> click "Join selected nodes" to sculpt the sharp leaf tip.',
        badge: 'Join Apex',
      },
      {
        title: 'Step 3: Smooth Bottom Nodes into a Curved Belly',
        text: 'Select the lower two nodes -> click "Make selected nodes smooth" -> pull handles outwards to inflate a natural leaf curve.',
        badge: 'Smooth Belly',
      },
      {
        title: 'Step 4: Draw Stem with the Pen Tool',
        text: 'Select Pen tool (B) to draw a delicate curve extending down from the base, colored forest green.',
        badge: 'Leaf Stem',
      },
    ],
  },
  'b14-s6': {
    id: 'b14-s6',
    slideNumber: 6,
    type: 'content',
    title: 'TEXT OBJECTS IN INKSCAPE (TEXT TOOL - F8 / T)',
    subtitle: 'Creating and formatting creative artistic typography',
    lead: 'Click the "A" icon (Shortcut: T) to input text and customize typographic styling:',
    bullets: [
      {
        title: 'Point Text Input:',
        text: 'Click once on the canvas and begin typing immediately. Avoid dragging a text frame for short headlines or titles.',
      },
      {
        title: 'Font and Weight Styling:',
        text: 'On the Tool Controls bar: select clean fonts with complete Unicode Vietnamese support (e.g. Montserrat, Open Sans), adjust font size, bold, and italics.',
      },
      {
        title: 'Styling Text as Graphic Vector Objects:',
        text: 'Text in Inkscape acts as a native vector object: apply flat fills, rich gradients, or subtle stroke outlines.',
      },
    ],
  },
  'b14-s7': {
    id: 'b14-s7',
    slideNumber: 7,
    type: 'process',
    title: 'FLOWING TEXT ALONG A PATH (PUT ON PATH)',
    subtitle: 'Technique to warp headlines smoothly around circles or curves (Textbook Figure 14.10)',
    lead: 'Professional 4-step workflow to curve text along an ornamental path:',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Create Text & Path',
          desc: 'Type the text string (e.g., "GREEN EARTH CAMPAIGN") and draw a guide circle or curved path.',
          tag: 'Prepare',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Select Both Elements',
          desc: 'Using Selection tool (S), click the text -> hold Shift and click the path so both are active.',
          tag: 'Shift + Click',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Text -> Put on Path',
          desc: 'Navigate to Text menu -> Choose "Put on Path". The text automatically curves to match the guide line.',
          tag: 'Put on Path',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Hide Guide Path',
          desc: 'Select the guide circle -> Set Stroke paint to "No paint" (X) to hide the guide line while keeping the text.',
          tag: 'Hide Guide',
        },
      ],
    },
  },
  'b14-s8': {
    id: 'b14-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'PRACTICE: ENVIRONMENTAL CAMPAIGN EMBLEM',
    subtitle: 'Harmonizing curved organic leaves and circular typography',
    lead: 'Team Task: Design the "FOR A GREEN PLANET" circular badge:',
    bullets: [
      {
        title: 'Component 1:',
        text: 'Two stylized green leaf vector shapes intertwined at the center (created in Task 1).',
      },
      {
        title: 'Component 2:',
        text: 'A delicate concentric circular border framing the emblem.',
      },
      {
        title: 'Component 3:',
        text: 'The headline "FOR A GREEN PLANET" gracefully curved along the upper arch via Text -> Put on Path.',
      },
      {
        title: 'Evaluation Criteria:',
        text: 'Ensure lettering is upright, kerning is balanced, colors are harmonious, and saved as a clean, editable SVG.',
      },
    ],
  },
  'b14-s9': {
    id: 'b14-s9',
    slideNumber: 9,
    type: 'summary',
    title: 'LESSON 14 SUMMARY: CORE TAKEAWAYS',
    subtitle: 'Core competencies for node editing and artistic typography',
    bullets: [
      {
        title: '1. The Power of Vector Paths:',
        text: 'Fully malleable, governed by anchor nodes and tangent handles. Essential conversion: Path -> Object to Path (Shift+Ctrl+C).',
      },
      {
        title: '2. Node Typologies:',
        text: 'Corner nodes yield crisp sharp vertices; smooth nodes sculpt flowing contours. Manipulated via the Node tool (F2).',
      },
      {
        title: '3. Curving Typography:',
        text: 'Select both text and trajectory path -> Text -> Put on Path. To revert: Text -> Remove from Path.',
      },
    ],
  },
  'b14-s10': {
    id: 'b14-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'HOMEWORK & PRACTICAL APPLICATION',
    subtitle: 'Finalizing the eco emblem and preparing for the project lesson',
    lead: 'Students complete 2 post-class practical milestones:',
    bullets: [
      {
        title: 'Task 1: Refine Green Planet Emblem',
        text: 'Polish the leaf borders, align the arched text centered on top, hide guide lines, and save as "EcoBadge.svg".',
        badge: 'Finalize SVG',
      },
      {
        title: 'Task 2: Prepare for Lesson 15',
        text: 'Gather inspiration, imagery, or rough paper sketches for a School Book Fair flyer or Sports Club poster.',
        badge: 'Ideation',
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'TECHNICAL TIP',
      content: 'After curling text onto a path, select the guide path and set Stroke to No paint to keep the final artwork clean!',
    },
    footerNote: 'Informatics 10 Textbook (pp. 110-121) • Teacher: QuanLHK',
  },

  // =========================================================================
  // LESSON 15: COMPLETING A GRAPHIC DESIGN PRODUCT
  // =========================================================================
  'b15-s1': {
    id: 'b15-s1',
    slideNumber: 1,
    type: 'title',
    title: 'COMPLETING A GRAPHIC DESIGN PRODUCT',
    subtitle: 'Topic 4: Computer Graphic Design | Informatics 10 Textbook',
    lead: 'Connecting Knowledge to Life Series • Teacher: QuanLHK',
    bullets: [
      { text: 'Synthesize core skills: Geometric primitives, Bézier curves, and curved typography' },
      { text: 'Master the 4-step workflow for designing media publications (flyers, banners, logos)' },
      { text: 'Proficiently manage Layers and Object Grouping (Group / Ungroup)' },
      { text: 'Export production-ready files: Vector SVG and multi-resolution Bitmap PNG' },
    ],
    badge: 'Lesson 15 • Capstone Project',
  },
  'b15-s2': {
    id: 'b15-s2',
    slideNumber: 2,
    type: 'objective',
    title: 'PROJECT LESSON LEARNING OBJECTIVES',
    subtitle: 'Empowering students with an end-to-end design production pipeline:',
    bullets: [
      {
        title: 'Layout & Color Harmonization:',
        text: 'Establish canvas dimensions, orchestrate thematic color harmonies, and balance visual negative space.',
        badge: 'Objective 1',
      },
      {
        title: 'Advanced Technical Fluency:',
        text: 'Seamlessly coordinate Selection (F1), Node tool (F2), Text (T), and Align & Distribute (Ctrl+Shift+A).',
        badge: 'Objective 2',
      },
      {
        title: 'Graphic Export Competence:',
        text: 'Choose appropriate export areas (Page, Drawing, Selection) and calibrate DPI for web or commercial print.',
        badge: 'Objective 3',
      },
    ],
  },
  'b15-s3': {
    id: 'b15-s3',
    slideNumber: 3,
    type: 'content',
    title: 'WARM-UP: ANATOMY OF A MEDIA PUBLICATION',
    subtitle: 'Four core components of an effective promotional flyer (Textbook p. 82)',
    cardsGrid: [
      {
        title: '1. Background & Decorative Motifs',
        desc: 'Sets the overarching atmosphere using rounded rectangles or gentle gradient washes.',
        tag: 'Component 1',
        points: [
          'Avoid excessively high-saturation backgrounds that drown text',
          'Lock the background layer to prevent accidental displacement',
        ],
      },
      {
        title: '2. Vector Illustration & Icons',
        desc: 'Emblems, icons, or illustrations representing the event theme.',
        tag: 'Component 2',
        points: [
          'Drawn using Pen (Bézier) or assembled from Boolean shapes',
          'Group (Ctrl+G) composite parts for convenient repositioning',
        ],
      },
      {
        title: '3. Prominent Main Title',
        desc: 'The primary event title or headline, often curved along an ornamental path.',
        tag: 'Component 3',
        points: [
          'Select bold, legible typefaces readable from a distance',
          'Ensure high tonal contrast against the background',
        ],
      },
      {
        title: '4. Essential Information Details',
        desc: 'Time, venue, organizers, sponsors, and contact details.',
        tag: 'Component 4',
        points: [
          'Formatted in clean, readable fonts at moderate scale',
          'Neatly aligned using the Align & Distribute panel (Ctrl+Shift+A)',
        ],
      },
    ],
  },
  'b15-s4': {
    id: 'b15-s4',
    slideNumber: 4,
    type: 'process',
    title: 'THE 4-STEP PRODUCTION WORKFLOW FOR PUBLICATIONS',
    subtitle: 'Standard industry protocol from concept sketch to publication-ready output',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Setup Document',
          desc: 'File → Document Properties; choose page format (A4/A5) and units (mm or px).',
          tag: 'Dimensions',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Background & Graphics',
          desc: 'Create Background layer, draw framing borders, construct vector illustrations, and arrange depth.',
          tag: 'Graphics',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Typography & Layout',
          desc: 'Compose title headlines, apply Text → Put on Path, and structure body text information.',
          tag: 'Typography',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Align & Export',
          desc: 'Proofread spelling, align elements cleanly, save source .SVG, and export production .PNG.',
          tag: 'Export',
        },
      ],
    },
  },
  'b15-s5': {
    id: 'b15-s5',
    slideNumber: 5,
    type: 'content',
    title: 'LAYER MANAGEMENT (LAYERS) AND GROUPING OBJECTS',
    subtitle: 'Professional best practices for structured, maintainable design files',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Designing crisp publications, promotional posters, and brand identities',
    bullets: [
      {
        title: 'Group Objects (Ctrl + G):',
        text: 'Binds multiple disjointed shapes into a single unified object. Scaling or rotating keeps relative proportions intact. To ungroup: Ctrl + Shift + G.',
      },
      {
        title: 'Layer Management (Ctrl + Shift + L):',
        text: 'Segregates the canvas into discrete vertical strata: Background layer, Graphics layer, and Typography layer.',
      },
      {
        title: 'Locking Layers for Safety:',
        text: 'Click the padlock icon beside a layer to lock it in place, allowing hassle-free selection of foreground elements without dragging the background.',
      },
    ],
    highlightBox: {
      type: 'note',
      title: 'DESIGN PRO TIP',
      content: 'Always name your layers clearly (e.g., "Bg_Layer", "Title_Layer") to effortlessly navigate complex files with hundreds of elements.',
    },
  },
  'b15-s6': {
    id: 'b15-s6',
    slideNumber: 6,
    type: 'process',
    title: 'EXPORTING IMAGES IN INKSCAPE (FILE → EXPORT)',
    subtitle: 'Shortcut: Shift + Ctrl + E | Converting from Vector to Bitmap',
    diagram: {
      layout: 'horizontal',
      steps: [
        {
          stepNumber: 'STEP 1',
          title: 'Save Master .SVG',
          desc: 'Always File → Save As to keep the editable master vector file with live text and paths intact.',
          tag: 'Master SVG',
        },
        {
          stepNumber: 'STEP 2',
          title: 'Select Export Area',
          desc: 'Choose Page (exports the full page boundary) or Selection (exports only currently highlighted items).',
          tag: 'Export Area',
        },
        {
          stepNumber: 'STEP 3',
          title: 'Calibrate DPI',
          desc: 'Set 96 DPI for web and social media displays; set 300 DPI for high-resolution physical printing.',
          tag: 'Resolution',
        },
        {
          stepNumber: 'STEP 4',
          title: 'Click Export',
          desc: 'Specify export directory and click Export to render a crisp, transparent .PNG bitmap.',
          tag: 'Render PNG',
        },
      ],
    },
  },
  'b15-s7': {
    id: 'b15-s7',
    slideNumber: 7,
    type: 'content',
    title: 'PRACTICE SCENARIO: SCHOOL YOUTH FESTIVAL BANNER',
    subtitle: 'Applying comprehensive design skills to a school event campaign',
    situation: {
      context: 'Class 10A is tasked with designing a promotional banner for the "Youth Music Festival". The banner requires musical note vectors, lotus icons, arched typography, and schedule details.',
      question: 'Which Inkscape tools and workflow should be applied to deliver a stunning banner on time?',
      options: [
        {
          label: 'Optimal Production Workflow',
          action: 'Draw rectangular frame on Background layer -> Pen tool for musical notes -> Text on Path for title -> Center with Align -> Export 300 DPI PNG',
          consequence: 'Standard color accuracy, razor-sharp curves, and perfectly legible when printed on large outdoor canvases',
          isRecommended: true,
        },
        {
          label: 'Flawed Ad-hoc Workflow',
          action: 'Draw everything on a single unlocked layer, take a screen capture and paste into Word to print',
          consequence: 'Screenshots capture at low 72 DPI, resulting in severely blurry, pixelated print output',
          isRecommended: false,
        },
      ],
    },
  },
  'b15-s8': {
    id: 'b15-s8',
    slideNumber: 8,
    type: 'practice',
    title: 'QUIZ: GRAPHIC EXPORT RESOLUTION PROFICIENCY',
    subtitle: 'Testing comprehension of file formats and resolution settings',
    quiz: {
      question: 'When sending a banner design file to a commercial print house for large-scale physical printing, what resolution (DPI) should be configured for razor-sharp results?',
      options: [
        'A. 72 DPI',
        'B. 96 DPI',
        'C. 300 DPI',
        'D. 10 DPI',
      ],
      answer: 'Option C: 300 DPI.',
      explanation: 'Commercial printing presses require a minimum of 300 DPI (dots per inch) so ink droplets blend smoothly without visible pixelation artifacts found on 96 DPI computer screens.',
    },
  },
  'b15-s9': {
    id: 'b15-s9',
    slideNumber: 9,
    type: 'summary',
    title: 'LESSON 15 SUMMARY: GRAPHIC DESIGN TOPIC RECAP',
    subtitle: 'Holistic synthesis of all Inkscape vector graphics competencies',
    bullets: [
      {
        title: '1. Mastered Basic Tools:',
        text: 'Rectangles, ellipses, stars, Bézier curves, anchor node sculpting, and flowing typography along paths.',
      },
      {
        title: '2. Logical Boolean Operations:',
        text: 'Fluently utilizing Union, Difference, and Intersection to assemble sophisticated graphics from primitive shapes.',
      },
      {
        title: '3. Production Export Standards:',
        text: 'Preserving the original .SVG source archive and exporting bitmap .PNGs with proper DPI calibrated for intended use.',
      },
    ],
  },
  'b15-s10': {
    id: 'b15-s10',
    slideNumber: 10,
    type: 'practice',
    title: 'CAPSTONE PROJECT ASSIGNMENT',
    subtitle: 'Creative execution of digital publications for school community',
    lead: 'Student teams of 3-4 choose and complete one of two design projects:',
    cardsGrid: [
      {
        title: 'Option 1: School Club Logo Design',
        desc: 'Design an iconic emblem for the Music, Sports, or Book Club.',
        tag: 'Logo Project',
        points: [
          'Minimalist, meaningful vector emblem',
          'Arched typography with club name',
          'Export SVG master and transparent PNG',
        ],
      },
      {
        title: 'Option 2: Book Fair Promotional Flyer',
        desc: 'Design an A5 promotional flyer celebrating a recommended book.',
        tag: 'Flyer Project',
        points: [
          'Standard 4-tier textbook layout hierarchy',
          'Refined color palette and clear typography',
          'Export print-ready 300 DPI PNG',
        ],
      },
    ],
    highlightBox: {
      type: 'tip',
      title: 'SUBMISSION DEADLINE',
      content: 'Submit the master .svg file alongside the exported .png file to the class Padlet showcase before the final term deadline.',
    },
    footerNote: 'Informatics 10 Textbook (pp. 82-86) • Teacher: QuanLHK',
  },
};
