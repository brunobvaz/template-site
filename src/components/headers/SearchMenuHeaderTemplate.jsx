import { apertureOutline, menuOutline, searchOutline } from 'ionicons/icons'
import TemplateIcon from '../TemplateIcon.jsx'

export default function SearchMenuHeaderTemplate() {
  return (
    <header className="template-header template-header--search">
      <a className="template-brand" href="/">
        <TemplateIcon icon={apertureOutline} />
        Logo
      </a>

      <div className="template-header__end template-menu--desktop">
        <label className="template-search" aria-label="Search">
          <TemplateIcon icon={searchOutline} />
          <input type="search" placeholder="Search" />
        </label>

        <nav className="template-menu" aria-label="Search header preview navigation">
          <a href="#menu-1">Menu 1</a>
          <a href="#menu-2">Menu 2</a>
          <a href="#menu-3">Menu 3</a>
          <a href="#menu-4">Menu 4</a>
          <a href="#menu-5">Menu 5</a>
        </nav>
      </div>

      <button className="template-menu-button" type="button" aria-label="Open menu">
        <TemplateIcon icon={menuOutline} />
      </button>
    </header>
  )
}
