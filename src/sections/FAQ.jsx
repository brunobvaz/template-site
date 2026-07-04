import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const [openItem, setOpenItem] = useState(0)
  const faqItems = t('faq.items', { returnObjects: true })

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-section__layout">
        <div className="faq-section__intro">
          <p className="faq-section__eyebrow">{t('faq.eyebrow')}</p>
          <h2 className="heading-primary faq-section__title">{t('faq.headline')}</h2>
        </div>

        <div className="faq-section__list">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index
            const answerId = `faq-answer-${index}`

            return (
              <article className={isOpen ? 'faq-item faq-item-open' : 'faq-item'} key={item.question}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="faq-item__question"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  type="button"
                >
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" size={22} strokeWidth={1.6} />
                </button>

                <div className="faq-item__answer" id={answerId}>
                  <p>{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
