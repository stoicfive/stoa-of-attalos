# Student Portal Implementation Plan

**Created:** 2025-10-23  
**Status:** Planning  
**Priority:** High

## Overview

Create a centralized student dashboard/portal for accessing all course resources, documentation, progress tracking, and learning materials.

## Design System

### Color Scheme

**Dark Mode (Default):**
- Background: `#000000` (Pure Black)
- Foreground: `#FFFFFF` (Pure White)
- Accent: `#FFFFFF` with opacity variations
- Style: High contrast stencil aesthetic

**Light Mode:**
- Background: `#0A0E27` (Deep Navy Blue - from provided image)
- Foreground: `#FFFFFF` (White text)
- Accent: Lighter blue shades
- Style: Maintains high contrast with blue base

### Technology Stack

- **Framework:** React/Next.js
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes for dark/light mode toggle

## Features & Sections

### 1. Hero Section
**Purpose:** Welcome and quick overview

**Components:**
- Welcome message with student name
- Course progress overview (% complete)
- Current session indicator
- Quick action buttons (Continue Learning, View Schedule)

**Design:**
- Large typography
- Minimal, clean layout
- Stencil-style borders/dividers

### 2. Navigation Bar
**Purpose:** Access all portal sections

**Sections:**
- Dashboard (Home)
- Lessons
- Resources
- Progress
- Setup Guides
- Documentation

**Design:**
- Fixed top navigation
- Minimal icons with labels
- Theme toggle (dark/light)

### 3. Lesson Packs Section
**Purpose:** Access all course sessions

**Features:**
- Grid/list of all sessions (A1S1-A1S8, B1S1-B1S8, etc.)
- Session status badges (Not Started, In Progress, Complete)
- Estimated time per session
- Prerequisites display
- Quick access to:
  - README
  - Quiz
  - Hints
  - Rubric
  - Solutions (if unlocked)

**Design:**
- Card-based layout
- Stencil-style borders
- Status indicators with icons
- Hover effects (subtle glow)

### 4. Setup Guides Section
**Purpose:** Environment setup instructions

**Content:**
- Development environment setup
- PostgreSQL installation
- Docker setup
- Poetry/Python setup
- VS Code extensions
- Git configuration
- Troubleshooting guides

**Design:**
- Accordion-style expandable sections
- Step-by-step with checkboxes
- Code snippets with copy button
- Platform-specific tabs (Mac/Windows/Linux)

### 5. Progress Dashboard
**Purpose:** Track learning progress

**Metrics:**
- Overall completion percentage
- Sessions completed vs total
- Time spent learning
- Tests passed
- Code quality metrics (coverage, linting)
- Skill tree visualization

**Visualizations:**
- Progress bars
- Circular progress indicators
- Timeline view
- Skill badges/achievements

**Design:**
- Data visualization with charts
- Minimal, clean graphs
- Stencil-style progress bars

### 6. Score Card / Report Card
**Purpose:** Detailed performance tracking

**Sections:**
- **Session Grades:** Individual session scores
- **Rubric Breakdown:** Points per category
- **Test Results:** Pass/fail status, coverage %
- **Code Quality:** Linting, type checking results
- **Time Tracking:** Time spent per session
- **Strengths/Weaknesses:** AI-generated insights

**Design:**
- Table layout with sortable columns
- Grade indicators (A+, A, B+, etc.)
- Expandable rows for details
- Export to PDF option

### 7. Resources Library
**Purpose:** Centralized documentation access

**Categories:**
- **Documentation:** API docs, guides, references
- **Videos:** Welcome video, tutorials, walkthroughs
- **Cheat Sheets:** Quick reference cards
- **External Links:** SQLAlchemy docs, FastAPI docs, etc.
- **Templates:** Code templates, boilerplates
- **Tools:** Useful development tools

**Design:**
- Searchable/filterable list
- Category tags
- Bookmark functionality
- Recently accessed items

### 8. Welcome Video Section
**Purpose:** Course introduction and motivation

**Features:**
- Embedded video player
- Transcript/captions
- Key takeaways summary
- Related resources links

**Design:**
- Full-width video player
- Minimal controls
- Stencil-style frame

### 9. Quick Actions Panel
**Purpose:** Fast access to common tasks

**Actions:**
- Run validation script
- Check current session
- View next session
- Access hints
- Submit work
- Ask for help

**Design:**
- Floating action buttons
- Keyboard shortcuts
- Tooltips on hover

## Technical Implementation

### File Structure
```
apps/student-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── lessons/
│   │   │   └── page.tsx
│   │   ├── progress/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   └── setup/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── footer.tsx
│   │   ├── dashboard/
│   │   │   ├── hero.tsx
│   │   │   ├── progress-card.tsx
│   │   │   └── quick-actions.tsx
│   │   ├── lessons/
│   │   │   ├── lesson-card.tsx
│   │   │   ├── lesson-grid.tsx
│   │   │   └── session-status.tsx
│   │   └── theme/
│   │       └── theme-toggle.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── data/
│   │       ├── sessions.ts
│   │       └── progress.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── videos/
│   └── images/
├── tailwind.config.ts
├── components.json        # shadcn config
└── package.json
```

### Data Sources

**Static Data:**
- Session metadata from `teacher/index.json`
- Documentation from markdown files
- Resources from `docs/` directory

**Dynamic Data:**
- Progress tracking (localStorage or API)
- Test results (from validation scripts)
- Time tracking (browser-based)

### Tailwind Configuration

```typescript
// tailwind.config.ts
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Dark mode
        background: "#000000",
        foreground: "#FFFFFF",
        
        // Light mode (navy blue)
        "light-background": "#0A0E27",
        "light-foreground": "#FFFFFF",
        
        // Accent colors
        accent: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
}
```

### shadcn/ui Components to Use

- **Card:** Lesson cards, progress cards
- **Button:** Action buttons, navigation
- **Badge:** Status indicators, tags
- **Progress:** Progress bars
- **Accordion:** Setup guides, FAQs
- **Tabs:** Platform-specific content
- **Dialog:** Modals for details
- **Table:** Score card, results
- **Input:** Search, filters
- **Select:** Dropdowns, filters
- **Separator:** Section dividers
- **Tooltip:** Helpful hints

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Set up Next.js project
- [ ] Configure Tailwind CSS
- [ ] Install shadcn/ui
- [ ] Create base layout (navbar, footer)
- [ ] Implement theme toggle (dark/light)
- [ ] Design system setup (colors, typography)

### Phase 2: Core Pages (Week 2)
- [ ] Dashboard/Home page
- [ ] Lessons page with session grid
- [ ] Progress page with metrics
- [ ] Resources page with library

### Phase 3: Features (Week 3)
- [ ] Setup guides with accordions
- [ ] Score card/report card
- [ ] Welcome video integration
- [ ] Quick actions panel
- [ ] Search functionality

### Phase 4: Data Integration (Week 4)
- [ ] Parse `teacher/index.json`
- [ ] Read markdown files dynamically
- [ ] Progress tracking system
- [ ] Local storage implementation

### Phase 5: Polish (Week 5)
- [ ] Responsive design (mobile, tablet)
- [ ] Animations and transitions
- [ ] Loading states
- [ ] Error handling
- [ ] Accessibility (a11y)
- [ ] Performance optimization

## Design Principles

### Stencil Aesthetic
- High contrast (black/white or navy/white)
- Sharp, clean lines
- Minimal shadows
- Bold typography
- Geometric shapes
- Negative space emphasis

### User Experience
- **Fast:** Instant navigation, no loading delays
- **Clear:** Obvious hierarchy, easy to scan
- **Focused:** Minimal distractions
- **Accessible:** Keyboard navigation, screen reader support
- **Responsive:** Works on all devices

### Content Strategy
- **Concise:** Short, actionable text
- **Scannable:** Headings, bullets, short paragraphs
- **Helpful:** Context-aware hints and tips
- **Motivating:** Progress indicators, achievements

## Success Metrics

- [ ] All sessions accessible from portal
- [ ] Progress accurately tracked
- [ ] Setup guides reduce support requests
- [ ] Students can find resources quickly (<3 clicks)
- [ ] Theme toggle works seamlessly
- [ ] Mobile responsive (100% Lighthouse score)
- [ ] Accessible (WCAG AA compliant)

## Future Enhancements

- **AI Assistant:** Chat-based help
- **Peer Comparison:** Anonymous leaderboards
- **Study Groups:** Collaborative features
- **Calendar Integration:** Deadlines, reminders
- **Offline Mode:** PWA capabilities
- **Export Progress:** PDF reports
- **Gamification:** Badges, streaks, achievements
- **Code Playground:** In-browser coding
- **Live Sessions:** Video conferencing integration

## Notes

- Keep design minimal and focused
- Prioritize performance over fancy animations
- Ensure accessibility from day one
- Use semantic HTML
- Test on multiple devices/browsers
- Get student feedback early and often

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Lucide Icons](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

**Next Steps:**
1. Review and approve plan
2. Set up Next.js project structure
3. Begin Phase 1 implementation
4. Create design mockups (optional)
