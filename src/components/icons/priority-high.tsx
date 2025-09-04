export const PriorityHighIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="priority-high-icon-title"
    >
      <title id="priority-high-icon-title">High priority indicator</title>
      <rect height="6" rx="1" width="3" x="1.5" y="8" />
      <rect height="9" rx="1" width="3" x="6.5" y="5" />
      <rect height="12" rx="1" width="3" x="11.5" y="2" />
    </svg>
  )
}
