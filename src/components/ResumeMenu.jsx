import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Download, ExternalLink, FileText } from 'lucide-react';
import RESUME from '../data/resume';

/**
 * Résumé control with a small popover offering a direct download or an
 * in-browser read. Closes on outside click and Escape, and returns focus to
 * the trigger when dismissed with Escape.
 */
const ResumeMenu = ({ className = '', align = 'right' }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className={`resume-menu resume-menu--${align} ${className}`.trim()} ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`btn btn-ghost resume-trigger${open ? ' is-open' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={menuId}
      >
        <FileText size={16} strokeWidth={2} aria-hidden="true" />
        {RESUME.label}
        <ChevronDown className="resume-caret" size={14} strokeWidth={2.4} aria-hidden="true" />
      </button>

      <div
        id={menuId}
        className={`resume-popover${open ? ' is-open' : ''}`}
        aria-label="Résumé options"
      >
        <a
          className="resume-option"
          href={RESUME.path}
          download={RESUME.downloadName}
          onClick={() => setOpen(false)}
        >
          <span className="resume-option-icon" aria-hidden="true">
            <Download size={15} strokeWidth={2.1} />
          </span>
          <span className="resume-option-text">
            <span className="resume-option-label">Download PDF</span>
            <span className="resume-option-hint">
              {RESUME.sizeLabel} · {RESUME.pages} pages
            </span>
          </span>
        </a>

        <a
          className="resume-option"
          href={RESUME.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <span className="resume-option-icon" aria-hidden="true">
            <ExternalLink size={15} strokeWidth={2.1} />
          </span>
          <span className="resume-option-text">
            <span className="resume-option-label">Open in browser</span>
            <span className="resume-option-hint">Read without downloading</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ResumeMenu;
