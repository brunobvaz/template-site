import { apertureOutline, menuOutline } from 'ionicons/icons'
import TemplateIcon from '../TemplateIcon.jsx'

export default function ReversedMenuHeaderTemplate() {
  return (
    <header className="template-header template-header--reversed">
      <a className="template-brand" href="/">
        <TemplateIcon icon={apertureOutline} />
        Logo
      </a>

      <nav className="template-menu template-menu--desktop" aria-label="Reversed preview navigation">
        <a href="#menu-1">Menu 1</a>
        <a href="#menu-2">Menu 2</a>
        <a href="#menu-3">Menu 3</a>
        <a href="#menu-4">Menu 4</a>
        <a href="#menu-5">Menu 5</a>
      </nav>

      <button className="template-menu-button" type="button" aria-label="Open menu">
        <TemplateIcon icon={menuOutline} />
      </button>
    </header>
  )
}
