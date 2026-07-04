import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import IconButton from '../components/Buttons/IconButton.jsx'

export default function Testemonials() {
  const { t } = useTranslation()
  const testimonials = t('testimonials.items', { returnObjects: true })

  return (
    <section className="testimonials-section" id="testemonials">
      <div className="container testimonials-section__layout">
        <div className="testimonials-section__intro">
          <h2 className="heading-primary testimonials-section__title">
            {t('testimonials.headline')}
          </h2>

          <div className="testimonials-section__controls" aria-hidden="true">
            <IconButton
              aria-label="Previous testimonial"
              className="testimonials-section__control"
              icon={ChevronLeft}
              iconSize={20}
            />
            <IconButton
              aria-label="Next testimonial"
              className="testimonials-section__control"
              icon={ChevronRight}
              iconSize={20}
            />
          </div>
        </div>

        <div className="testimonials-section__cards">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <Quote aria-hidden="true" className="testimonial-card__quote-icon" size={22} />
              <p className="testimonial-card__quote">“{testimonial.quote}”</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
