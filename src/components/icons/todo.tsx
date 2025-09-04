export const TodoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="todo-icon-title"
    >
      <title id="todo-icon-title">Todo status indicator</title>
      <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="3.14 0" strokeDashoffset="-0.7" strokeWidth="2" />
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
