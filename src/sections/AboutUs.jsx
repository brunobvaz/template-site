import { Gem, Leaf, ShieldCheck, UserRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import aboutImage from '../assets/images/about.jpeg'
import LinkButton from '../components/Links/LinkButton.jsx'

const valueIcons = [UserRound, Leaf, ShieldCheck, Gem]

export default function AboutUs() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true })

  return (
    <section className="about-section" id="about">
      <div className="container about-section__main">
        <div className="about-section__image">
          <img src={aboutImage} alt={t('about.headline')} />
        </div>

        <div className="about-section__content">
          <p className="about-section__eyebrow">{t('about.eyebrow')}</p>
          <h2 className="heading-primary about-section__title">{t('about.headline')}</h2>
          <p className="text-body about-section__description">{t('about.description')}</p>
          <LinkButton className="about-section__button" href="#contacts" borderRadius="0">
            {t('about.button')}
          </LinkButton>
        </div>
      </div>

      <div className="container about-section__values">
        <p className="about-section__values-eyebrow">{t('about.valuesEyebrow')}</p>
        <div className="about-section__values-grid">
          {values.map((value, index) => {
            const ValueIcon = valueIcons[index]

            return (
              <article className="about-value" key={value.title}>
                <ValueIcon aria-hidden="true" size={36} strokeWidth={1.2} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
