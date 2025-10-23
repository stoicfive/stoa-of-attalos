/**
 * Application Constants
 * Centralized configuration values
 */

/**
 * Application metadata
 */
export const APP_CONFIG = {
  name: "Stoa of Attalos",
  description: "Trading Journal SaaS - Learning Platform",
  version: "0.1.0",
  author: "StoicFive",
  repository: "https://github.com/stoicfive/stoa-of-attalos",
} as const;

/**
 * Navigation routes
 */
export const ROUTES = {
  home: "/",
  lessons: "/lessons",
  progress: "/progress",
  resources: "/resources",
  setup: "/setup",
  scorecard: "/scorecard",
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  theme: "stoa-theme",
  progress: "stoa-progress",
  preferences: "stoa-preferences",
  lastVisited: "stoa-last-visited",
  completedSteps: "stoa-completed-steps",
} as const;

/**
 * Session configuration
 */
export const SESSION_CONFIG = {
  minPassingGrade: 70,
  minCoverage: 70,
  maxTimeWarning: 120, // minutes
  autoSaveInterval: 30000, // 30 seconds
} as const;

/**
 * Theme configuration
 */
export const THEME_CONFIG = {
  defaultTheme: "dark" as const,
  storageKey: STORAGE_KEYS.theme,
  attribute: "class",
} as const;

/**
 * API endpoints (if needed)
 */
export const API_ENDPOINTS = {
  sessions: "/api/sessions",
  progress: "/api/progress",
  resources: "/api/resources",
} as const;

/**
 * External links
 */
export const EXTERNAL_LINKS = {
  sqlalchemy: "https://docs.sqlalchemy.org/",
  fastapi: "https://fastapi.tiangolo.com/",
  react: "https://react.dev/",
  nextjs: "https://nextjs.org/docs",
  tailwind: "https://tailwindcss.com/docs",
  typescript: "https://www.typescriptlang.org/docs/",
  python: "https://docs.python.org/3/",
  postgresql: "https://www.postgresql.org/docs/",
} as const;

/**
 * Status badge colors
 */
export const STATUS_COLORS = {
  "not-started": "bg-muted text-muted-foreground",
  "in-progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  complete: "bg-green-500/10 text-green-500 border-green-500/20",
  planned: "bg-muted text-muted-foreground",
} as const;

/**
 * Grade thresholds
 */
export const GRADE_THRESHOLDS = {
  "A+": 97,
  A: 93,
  "A-": 90,
  "B+": 87,
  B: 83,
  "B-": 80,
  "C+": 77,
  C: 73,
  "C-": 70,
  "D+": 67,
  D: 63,
  "D-": 60,
  F: 0,
} as const;

/**
 * Resource categories
 */
export const RESOURCE_CATEGORIES = [
  "Documentation",
  "Videos",
  "Cheat Sheets",
  "External Links",
  "Templates",
  "Tools",
] as const;

/**
 * Setup guide categories
 */
export const SETUP_CATEGORIES = [
  "Development Environment",
  "Database Setup",
  "Docker Configuration",
  "Python & Poetry",
  "VS Code Extensions",
  "Git Configuration",
  "Troubleshooting",
] as const;

/**
 * Keyboard shortcuts
 */
export const KEYBOARD_SHORTCUTS = {
  search: "cmd+k",
  theme: "cmd+shift+t",
  home: "cmd+h",
  lessons: "cmd+l",
  progress: "cmd+p",
  help: "cmd+/",
} as const;

/**
 * Animation durations (ms)
 */
export const ANIMATION_DURATION = {
  fast: 150,
  base: 250,
  slow: 350,
} as const;

/**
 * Breakpoint values (px)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Default pagination
 */
export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: [5, 10, 20, 50],
} as const;

/**
 * Toast notification durations (ms)
 */
export const TOAST_DURATION = {
  short: 2000,
  medium: 4000,
  long: 6000,
} as const;
