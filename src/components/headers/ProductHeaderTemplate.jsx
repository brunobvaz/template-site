import { calendarClearOutline, cubeOutline } from 'ionicons/icons'
import TemplateIcon from '../TemplateIcon.jsx'

export default function ProductHeaderTemplate() {
  return (
    <header className="template-header template-header--product">
      <a className="template-brand" href="/">
        <TemplateIcon icon={cubeOutline} />
        StudioBase
      </a>
      <nav className="template-menu" aria-label="Product preview navigation">
        <a href="#features">Features</a>
        <a href="#showcase">Showcase</a>
        <a href="#docs">Docs</a>
      </nav>
      <div className="template-header__actions">
        <a href="#login">Login</a>
        <a className="template-action template-action--dark" href="#demo">
          Book demo
          <TemplateIcon icon={calendarClearOutline} />
        </a>
      </div>
    </header>
  )
}
