import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavLink as RouterNavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navItems } from '../data/navItems.js'
import LinkButton from './Links/LinkButton.jsx'

const contactIcons = [MapPin, Phone, Mail]

export default function Footer() {
  const { t } = useTranslation()
  const details = t('contacts.details', { returnObjects: true })
  const legalLinks = t('footer.legalLinks', { returnObjects: true })

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <RouterNavLink className="site-footer__logo" to="/" aria-label="Home">
            <img src={logo} alt="Manaise" />
          </RouterNavLink>
          <p>{t('footer.description')}</p>
          <LinkButton className="site-footer__cta" href="#contacts">
            {t('common.appointment')}
          </LinkButton>
        </div>

        <nav className="site-footer__column" aria-label={t('footer.columns.navigation')}>
          <h2>{t('footer.columns.navigation')}</h2>
          {navItems.map(({ path, labelKey, end }) => (
            <RouterNavLink end={end} key={path} to={path}>
              {t(labelKey)}
            </RouterNavLink>
          ))}
        </nav>

        <div className="site-footer__column">
          <h2>{t('footer.columns.contacts')}</h2>
          <div className="site-footer__contacts">
            {details.map((detail, index) => {
              const ContactIcon = contactIcons[index]

              return (
                <div className="site-footer__contact" key={detail.label}>
                  <ContactIcon aria-hidden="true" size={18} strokeWidth={1.5} />
                  <span>{detail.value}</span>
                </div>
              )
            })}
          </div>
        </div>

        <nav className="site-footer__column" aria-label={t('footer.columns.legal')}>
          <h2>{t('footer.columns.legal')}</h2>
          {legalLinks.map((link) => (
            <a href="#privacy" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Manaise. {t('footer.rights')}</span>
      </div>
    </footer>
  )
}
