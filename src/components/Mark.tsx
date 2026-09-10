/** The site mark: the favicon glyph as an inline SVG so it takes the current text color. */
export default function Mark({ className = "", size = 28 }: { className?: string; size?: number }) {
    return (
        <svg
            viewBox="0 0 32 32"
            width={size}
            height={size}
            className={className}
            aria-hidden="true"
            focusable="false"
        >
            <rect width="32" height="32" rx="7" fill="currentColor" />
            <path
                d="M10 9v14M22 9v14M10 16h12"
                stroke="var(--color-bg)"
                strokeWidth="3.2"
                strokeLinecap="square"
                fill="none"
            />
        </svg>
    );
}
