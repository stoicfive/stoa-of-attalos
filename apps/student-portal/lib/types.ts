/**
 * Type Definitions
 * Centralized TypeScript types and interfaces
 */

/**
 * Session status types
 */
export type SessionStatus = "not-started" | "in-progress" | "complete" | "planned";

/**
 * Session metadata from teacher/index.json
 */
export interface Session {
  id: string;
  title: string;
  duration: number; // in minutes
  language: string;
  objectives: string[];
  prerequisites: string[];
  deliverables: string[];
  testCommand?: string;
  hintsPath?: string;
  rubricPath?: string;
  solutionsPath?: string;
  status: SessionStatus;
  tags: string[];
}

/**
 * Arc (course section) metadata
 */
export interface Arc {
  id: string;
  title: string;
  description: string;
  sessions: Session[];
  estimatedHours: number;
}

/**
 * Progress tracking
 */
export interface Progress {
  sessionId: string;
  status: SessionStatus;
  startedAt?: Date;
  completedAt?: Date;
  timeSpent: number; // in minutes
  testsPass: boolean;
  coverage?: number;
  grade?: number;
}

/**
 * Test results
 */
export interface TestResult {
  sessionId: string;
  passed: number;
  failed: number;
  total: number;
  coverage: number;
  timestamp: Date;
}

/**
 * Score card entry
 */
export interface ScoreCard {
  sessionId: string;
  sessionTitle: string;
  grade: number;
  letterGrade: string;
  rubricScores: RubricScore[];
  testResults: TestResult;
  timeSpent: number;
  completedAt: Date;
}

/**
 * Rubric score breakdown
 */
export interface RubricScore {
  category: string;
  points: number;
  maxPoints: number;
  feedback?: string;
}

/**
 * Resource item
 */
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "documentation" | "video" | "cheatsheet" | "external" | "template" | "tool";
  url: string;
  tags: string[];
  category: string;
}

/**
 * Setup guide step
 */
export interface SetupStep {
  id: string;
  title: string;
  description: string;
  platform?: "mac" | "windows" | "linux" | "all";
  commands?: string[];
  completed: boolean;
}

/**
 * Setup guide section
 */
export interface SetupGuide {
  id: string;
  title: string;
  description: string;
  steps: SetupStep[];
  category: string;
}

/**
 * Quick action
 */
export interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: string;
  action: () => void;
  shortcut?: string;
}

/**
 * Theme mode
 */
export type ThemeMode = "dark" | "light";

/**
 * Navigation item
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
}

/**
 * User preferences
 */
export interface UserPreferences {
  theme: ThemeMode;
  fontSize: "sm" | "base" | "lg";
  reducedMotion: boolean;
  showHints: boolean;
  autoSave: boolean;
}

/**
 * Dashboard stats
 */
export interface DashboardStats {
  totalSessions: number;
  completedSessions: number;
  inProgressSessions: number;
  totalTimeSpent: number; // in minutes
  averageGrade: number;
  currentStreak: number; // days
  testsPassed: number;
  testsTotal: number;
  averageCoverage: number;
}

/**
 * Skill badge
 */
export interface SkillBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
  progress?: number; // 0-100
}
