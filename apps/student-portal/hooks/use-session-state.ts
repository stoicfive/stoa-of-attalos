"use client"

import { useState, useEffect } from 'react';

type TaskState = Record<string, boolean>;

interface SessionState {
  tasks: TaskState;
  expanded: TaskState;
  sessionCompleted: boolean;
}

export function useSessionState(sessionId: string, taskIds: string[]) {
  const STORAGE_KEY = `${sessionId}-session-state`;

  // Initialize default state
  const defaultTasks = taskIds.reduce((acc, id) => ({ ...acc, [id]: false }), {});
  const defaultExpanded = taskIds.reduce((acc, id) => ({ ...acc, [id]: true }), {});

  const [tasks, setTasks] = useState<TaskState>(defaultTasks);
  const [expanded, setExpanded] = useState<TaskState>(defaultExpanded);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // Load state from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedState: SessionState = JSON.parse(saved);
        // Intentionally setting state on mount to restore saved session
        // This only runs once and is the correct pattern for hydration
        if (savedState.tasks) setTasks(savedState.tasks);
        if (savedState.expanded) setExpanded(savedState.expanded);
        if (savedState.sessionCompleted) setSessionCompleted(savedState.sessionCompleted);
      }
    } catch (error) {
      console.error('Failed to load session state:', error);
    }
  }, [STORAGE_KEY]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        tasks,
        expanded,
        sessionCompleted
      }));
    } catch (error) {
      console.error('Failed to save session state:', error);
    }
  }, [tasks, expanded, sessionCompleted, STORAGE_KEY]);

  const toggleTask = (taskId: string) => {
    setTasks(prev => {
      const newState = { ...prev, [taskId]: !prev[taskId] };
      // Auto-collapse when completing, auto-expand when uncompleting
      if (newState[taskId]) {
        setExpanded(exp => ({ ...exp, [taskId]: false }));
      } else {
        setExpanded(exp => ({ ...exp, [taskId]: true }));
      }
      return newState;
    });
  };

  const toggleExpanded = (taskId: string) => {
    setExpanded(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const completedCount = Object.values(tasks).filter(Boolean).length;
  const totalTasks = taskIds.length;
  const progress = Math.round((completedCount / totalTasks) * 100);
  const allComplete = completedCount === totalTasks;

  return {
    tasks,
    expanded,
    sessionCompleted,
    setSessionCompleted,
    toggleTask,
    toggleExpanded,
    completedCount,
    totalTasks,
    progress,
    allComplete
  };
}
