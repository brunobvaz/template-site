import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import contactBackground from '../assets/images/about.jpeg'
import LinkButton from '../components/Links/LinkButton.jsx'

const detailIcons = [MapPin, Phone, Mail]

export default function Contacts() {
  const { t } = useTranslation()
  const details = t('contacts.details', { returnObjects: true })

  return (
    <section
      className="contacts-section"
      id="contacts"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <div className="container contacts-section__layout">
        <div className="contacts-section__content">
          <p className="contacts-section__eyebrow">{t('contacts.eyebrow')}</p>
          <h2 className="heading-primary contacts-section__title">{t('contacts.headline')}</h2>
          <p className="text-body contacts-section__description">{t('contacts.description')}</p>

          <div className="contacts-section__details">
            {details.map((detail, index) => {
              const DetailIcon = detailIcons[index]

              return (
                <div className="contacts-section__detail" key={detail.label}>
                  <DetailIcon aria-hidden="true" size={22} strokeWidth={1.5} />
                  <div>
                    <span>{detail.label}</span>
                    <p>{detail.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <form className="contacts-section__form">
          <label>
            <span>{t('contacts.form.name')}</span>
            <input name="name" type="text" />
          </label>

          <label>
            <span>{t('contacts.form.email')}</span>
            <input name="email" type="email" />
          </label>

          <label>
            <span>{t('contacts.form.phone')}</span>
            <input name="phone" type="tel" />
          </label>

          <label>
            <span>{t('contacts.form.message')}</span>
            <textarea name="message" rows="5" />
          </label>

          <LinkButton as="button" className="contacts-section__submit" type="submit">
            {t('contacts.form.submit')}
          </LinkButton>
        </form>
      </div>
    </section>
  )
}
