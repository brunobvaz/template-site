import { useState } from 'react'
import { ChevronDown, Globe2, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavLink as RouterNavLink } from 'react-router-dom'
import logoWhite from '../assets/logo.png'
import Button from './Buttons/Button.jsx'
import IconButton from './Buttons/IconButton.jsx'
import SelectButton from './Buttons/SelectButton.jsx'
import { navItems } from '../data/navItems.js'
import LinkButton from './Links/LinkButton.jsx'
import NavLink from './Links/NavLink.jsx'

const languageOptions = [
  { code: 'en', displayCode: 'EN', label: 'English' },
  { code: 'pt', displayCode: 'PT', label: 'Português' },
]

export default function NavigationBar() {
  const { i18n, t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const selectedLanguage =
    languageOptions.find((language) => language.code === i18n.language) ?? languageOptions[1]
  const MenuIcon = isMenuOpen ? X : Menu

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function selectLanguage(language) {
    i18n.changeLanguage(language.code)
    setIsLanguageOpen(false)
  }

  return (
    <header className="site-header">
      <RouterNavLink className="site-logo" to="/" aria-label="Home" onClick={closeMenu}>
        <img className="site-logo__image" src={logoWhite} alt="Logo" />
      </RouterNavLink>

      <IconButton
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? t('common.closeNavigationMenu') : t('common.openNavigationMenu')}
        className="site-menu-button"
        icon={MenuIcon}
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      />

      <nav
        className={isMenuOpen ? 'site-nav site-nav-open' : 'site-nav'}
        id="site-navigation"
        aria-label="Main navigation"
      >
        {navItems.map(({ path, labelKey, end }) => (
          <NavLink
            end={end}
            key={path}
            onClick={closeMenu}
            to={path}
            variant="underline"
            underlineThickness="0.2rem"
            underlineOffset="0.2em"
          >
            {t(labelKey)}
          </NavLink>
        ))}
        <div className="site-nav-language" aria-label={t('common.chooseLanguage')}>
          {languageOptions.map((language) => (
            <Button
              active={selectedLanguage.code === language.code}
              activeClassName="site-nav-language__option-active"
              className="site-nav-language__option"
              key={language.code}
              onClick={() => selectLanguage(language)}
            >
              <span>{language.displayCode}</span>
              <span>{language.label}</span>
            </Button>
          ))}
        </div>
        <LinkButton className="site-nav-cta" href="#contacts" onClick={closeMenu}>
          {t('common.appointment')}
        </LinkButton>
      </nav>

      <div className="site-header__actions">
        <div className="language-selector">
          <SelectButton
            aria-controls="language-menu"
            aria-expanded={isLanguageOpen}
            aria-label={t('common.chooseLanguage')}
            className="language-selector__trigger"
            leadingIcon={Globe2}
            onClick={() => setIsLanguageOpen((currentState) => !currentState)}
            trailingIcon={ChevronDown}
          >
            <span>{selectedLanguage.displayCode}</span>
          </SelectButton>

          {isLanguageOpen && (
            <div className="language-selector__menu" id="language-menu" role="menu">
              {languageOptions.map((language) => (
                <Button
                  className="language-selector__option"
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  role="menuitem"
                >
                  <span>{language.displayCode}</span>
                  <span>{language.label}</span>
                </Button>
              ))}
            </div>
          )}
        </div>

        <LinkButton className="site-header__cta" href="#contacts">
          {t('common.appointment')}
        </LinkButton>
      </div>
    </header>
  )
}
