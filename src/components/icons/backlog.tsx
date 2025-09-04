export const BacklogIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      aria-labelledby="backlog-icon-title"
      className={`stroke-current ${className}`}
      fill="none"
      role="img"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="backlog-icon-title">Backlog status indicator</title>
      <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="1.4 1.74" strokeDashoffset="0.65" strokeWidth="2" />
      <circle
        cx="7"
        cy="7"
        fill="none"
        r="2"
        strokeDasharray="0 100"
        strokeDashoffset="0"
        strokeWidth="4"
        transform="rotate(-90 7 7)"
      />
    </svg>
  )
}
