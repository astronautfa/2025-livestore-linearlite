export const PriorityNoneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="priority-none-icon-title"
    >
      <title id="priority-none-icon-title">No priority indicator</title>
      <rect height="1.5" rx="0.5" width="3" x="1.5" y="7.25" />
      <rect height="1.5" rx="0.5" width="3" x="6.5" y="7.25" />
      <rect height="1.5" rx="0.5" width="3" x="11.5" y="7.25" />
    </svg>
  )
}
