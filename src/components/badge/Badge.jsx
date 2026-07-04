export default function Badge({ children, className = '' }) {
  return <p className={`badge ${className}`.trim()}>{children}</p>
}
