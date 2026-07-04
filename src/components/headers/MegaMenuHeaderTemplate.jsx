import { useState } from 'react'
import { apertureOutline, chevronDownOutline, menuOutline } from 'ionicons/icons'
import TemplateIcon from '../TemplateIcon.jsx'

const megaMenuItems = ['Shop', 'Collections', 'Products', 'Pages', 'Blog']

const megaMenuColumns = [
  {
    title: 'Coluna 1',
    links: ['Linha 1', 'Linha 2', 'Linha 3', 'Linha 4'],
  },
  {
    title: 'Coluna 2',
    links: ['Linha 1', 'Linha 2', 'Linha 3', 'Linha 4'],
  },
  {
    title: 'Coluna 3',
    links: ['Linha 1', 'Linha 2', 'Linha 3', 'Linha 4'],
  },
]

function MegaSubmenu({ menuLabel }) {
  return (
    <div className="template-mega-submenu" role="region" aria-label={`${menuLabel} submenu`}>
      {megaMenuColumns.map((column) => (
        <div className="template-mega-submenu__column" key={column.title}>
          <h3>{column.title}</h3>
          <ul>
            {column.links.map((link) => (
              <li key={`${column.title}-${link}`}>
                <a href={`#${column.title}-${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function MegaMenuHeaderTemplate() {
  const [openMenu, setOpenMenu] = useState(megaMenuItems[0])

  function handleMenuClick(menu) {
    setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu))
  }

  return (
    <header className="template-header template-header--mega">
      <div className="template-header--mega__top">
        <a className="template-brand" href="/">
          <TemplateIcon icon={apertureOutline} />
          Logo
        </a>

        <nav className="template-mega-nav template-menu--desktop" aria-label="Mega menu preview navigation">
          {megaMenuItems.map((item) => (
            <div className="template-mega-nav__item" key={item}>
              <span>{item}</span>
              <button
                aria-expanded={openMenu === item}
                aria-label={`Open ${item} submenu`}
                className="template-mega-nav__trigger"
                onClick={() => handleMenuClick(item)}
                type="button"
              >
                <TemplateIcon icon={chevronDownOutline} />
              </button>
            </div>
          ))}
        </nav>

        <button className="template-menu-button template-menu-button--mobile" type="button" aria-label="Open menu">
          <TemplateIcon icon={menuOutline} />
        </button>
      </div>

      {openMenu ? <MegaSubmenu menuLabel={openMenu} /> : null}
    </header>
  )
}
