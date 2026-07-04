
import { useTranslation } from 'react-i18next'
import biostimulationImage from '../assets/images/services/biostimulation.jpg'
import botoxImage from '../assets/images/services/botox.jpg'
import fillerImage from '../assets/images/services/filler.jpg'
import peelingImage from '../assets/images/services/peeling.jpg'
import skinboosterImage from '../assets/images/services/skinbooster.jpg'

const treatmentImages = [
  botoxImage,
  fillerImage,
  biostimulationImage,
  skinboosterImage,
  peelingImage,
]

export default function Services() {
  const { t } = useTranslation()
  const treatments = t('services.treatments', { returnObjects: true })

  return (
    <section className="services-section" id="services">
      <div className="container services-section__layout">
        <div className="services-section__intro-panel">
          <p className="services-section__eyebrow">{t('services.eyebrow')}</p>
          <h2 className="heading-primary services-section__title">{t('services.headline')}</h2>
          <p className="text-body services-section__description">{t('services.description')}</p>
          <a className="services-section__link" href="#contacts">
            {t('services.link')}
          </a>
        </div>

        <div className="services-section__treatments">
          {treatments.map((treatment, index) => (
            <article className="treatment-card" key={treatment}>
              <div className="treatment-card__image">
                <img src={treatmentImages[index]} alt={treatment} />
              </div>
              <h3 className="treatment-card__title">{treatment}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
