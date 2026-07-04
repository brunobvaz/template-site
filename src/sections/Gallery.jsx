import { useTranslation } from 'react-i18next'
import afterImage from '../assets/images/depois.jpeg'
import beforeImage from '../assets/images/antes.jpeg'
import BeforeAfterCard from '../components/cards/BeforeAfterCard.jsx'

export default function Gallery() {
  const { t } = useTranslation()
  const results = t('gallery.results', { returnObjects: true })

  return (
    <section className="gallery-section" id="gallery">
      <div className="container gallery-section__container">
        <h2 className="heading-primary gallery-section__title">{t('gallery.headline')}</h2>

        <div className="gallery-section__grid">
          {results.map((result, index) => (
            <BeforeAfterCard
              afterAlt={result.afterAlt}
              afterImage={afterImage}
              afterLabel={t('gallery.afterLabel')}
              beforeAlt={result.beforeAlt}
              beforeImage={beforeImage}
              beforeLabel={t('gallery.beforeLabel')}
              initialValue={50}
              key={`${result.beforeAlt}-${index}`}
            />
          ))}
        </div>

        <p className="gallery-section__disclaimer">{t('gallery.disclaimer')}</p>
      </div>
    </section>
  )
}
