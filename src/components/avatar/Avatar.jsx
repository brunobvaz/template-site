import TemplateIcon from '../TemplateIcon.jsx'

export default function Avatar({ className = '', icon, label }) {
  return (
    <div className={`avatar ${className}`.trim()} aria-hidden={label ? undefined : 'true'}>
      <TemplateIcon icon={icon} label={label} />
    </div>
  )
}
