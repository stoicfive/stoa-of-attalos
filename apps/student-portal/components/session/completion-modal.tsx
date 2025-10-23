"use client"

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck } from "lucide-react";

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionTitle: string;
  nextSessionUrl?: string; // Reserved for future use (navigation button)
  nextSessionLabel?: string; // Reserved for future use (button label)
}

export function CompletionModal({
  isOpen,
  onClose,
  sessionTitle
}: CompletionModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }, [onClose]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      firstElement?.focus();

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ${isClosing ? 'fade-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <Card 
        ref={modalRef}
        className={`max-w-md w-full border-green-500 ${isClosing ? 'zoom-out-95' : 'zoom-in-95'}`}
      >
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCheck className="h-16 w-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
            <h3 id="modal-title" className="text-2xl font-bold mb-2">{sessionTitle} Complete!</h3>
            <p className="text-muted-foreground mb-6">
              Great job! You&apos;ve completed all tasks for this session.
            </p>
            <div className="flex flex-col gap-3">
              <Button 
                size="lg" 
                onClick={handleClose}
                aria-label="Continue to completion summary"
              >
                Continue
              </Button>
              <p className="text-xs text-muted-foreground">
                Press Escape or click outside to close
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
