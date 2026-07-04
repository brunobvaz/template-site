export default function TemplateIcon({ icon, label }) {
  return (
    <span
      aria-hidden={label ? undefined : 'true'}
      aria-label={label}
      className="template-icon"
      role={label ? 'img' : undefined}
      style={{
        WebkitMask: `url("${icon}") center / contain no-repeat`,
        mask: `url("${icon}") center / contain no-repeat`,
      }}
    />
  )
}
