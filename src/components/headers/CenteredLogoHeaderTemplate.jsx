import {
  apertureOutline,
  bagOutline,
  menuOutline,
  personOutline,
  searchOutline,
} from 'ionicons/icons'
import TemplateIcon from '../TemplateIcon.jsx'

export default function CenteredLogoHeaderTemplate() {
  return (
    <header className="template-header template-header--centered">
      <button className="template-menu-button template-menu-button--mobile" type="button" aria-label="Open menu">
        <TemplateIcon icon={menuOutline} />
      </button>

      <nav className="template-menu template-menu--desktop" aria-label="Centered logo preview navigation">
        <a href="#menu-1">Menu 1</a>
        <a href="#menu-2">Menu 2</a>
        <a href="#menu-3">Menu 3</a>
        <a href="#menu-4">Menu 4</a>
        <a href="#menu-5">Menu 5</a>
      </nav>

      <a className="template-brand template-brand--center" href="/">
        <TemplateIcon icon={apertureOutline} />
        Logo
      </a>

      <div className="template-icon-actions" aria-label="Header actions">
        <a href="#search" aria-label="Search">
          <TemplateIcon icon={searchOutline} label="Search" />
          <span className="text-icon-label">Search</span>
        </a>
        <a href="#login" aria-label="Login">
          <TemplateIcon icon={personOutline} label="Login" />
          <span className="text-icon-label">Login</span>
        </a>
        <a href="#cart" aria-label="Cart">
          <TemplateIcon icon={bagOutline} label="Cart" />
          <span className="text-icon-label">Cart</span>
        </a>
      </div>
    </header>
  )
}
