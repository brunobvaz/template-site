import { arrowForwardOutline, sparklesOutline } from 'ionicons/icons'
import TemplateIcon from '../TemplateIcon.jsx'

export default function TransparentHeaderTemplate() {
  return (
    <header className="template-header template-header--transparent">
      <a className="template-brand" href="/">
        <TemplateIcon icon={sparklesOutline} />
        TemplateKit
      </a>
      <nav className="template-menu" aria-label="Preview navigation">
        <a href="#templates">Templates</a>
        <a href="#blocks">Blocks</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <a className="template-action" href="#contact">
        Start
        <TemplateIcon icon={arrowForwardOutline} />
      </a>
    </header>
  )
}
