export const InProgressIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      aria-labelledby="in-progress-icon-title"
      className={`stroke-current ${className}`}
      fill="none"
      role="img"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="in-progress-icon-title">In progress status indicator</title>
      <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="3.14 0" strokeDashoffset="-0.7" strokeWidth="2" />
      <circle
        cx="7"
        cy="7"
        fill="none"
        r="2"
        strokeDasharray="6.2517693806436885 100"
        strokeDashoffset="0"
        strokeWidth="4"
        transform="rotate(-90 7 7)"
      />
    </svg>
  )
}
