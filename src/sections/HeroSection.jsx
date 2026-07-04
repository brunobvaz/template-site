import { ClipboardCheck, Cpu, ShieldCheck, UserRoundCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/images/hero.jpeg'
import LinkButton from '../components/Links/LinkButton.jsx'

const footerIcons = [UserRoundCheck, Cpu, ClipboardCheck, ShieldCheck]

export default function HeroSection() {
  const { t } = useTranslation()
  const footerItems = t('hero.footerItems', { returnObjects: true })

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container hero-section__grid">
        <div className="hero-section__content">
          <p className="eyebrow text-inverse">{t('hero.eyebrow')}</p>
          <h1 className="heading-display text-inverse">{t('hero.headline')}</h1>
          <p className="text-lead text-inverse-muted">{t('hero.description')}</p>

          <div className="hero-section__actions">
            <LinkButton href="#contacts">
              {t('hero.primaryCta')}
            </LinkButton>
            <LinkButton href="#services" variant="secondary">
              {t('hero.secondaryCta')}
            </LinkButton>
          </div>
        </div>
        <div className="hero-section__visual" aria-hidden="true" />
      </div>

      <div className="hero-section__footer">
        <div className="container hero-section__footer-grid">
          {footerItems.map((item, index) => {
            const FooterIcon = footerIcons[index]

            return (
              <div className="hero-section__footer-item" key={item}>
                <FooterIcon aria-hidden="true" size={24} strokeWidth={1.4} />
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
