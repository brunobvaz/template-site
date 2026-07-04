import { useState } from 'react'

export default function BeforeAfterCard({
  afterAlt,
  afterImage,
  afterLabel,
  beforeAlt,
  beforeImage,
  beforeLabel,
  initialValue = 50,
}) {
  const [position, setPosition] = useState(initialValue)

  return (
    <article className="before-after-card" style={{ '--before-after-position': `${position}%` }}>
      <div className="before-after-card__viewport">
        <img className="before-after-card__image" src={afterImage} alt={afterAlt} />
        <div className="before-after-card__before">
          <img className="before-after-card__image" src={beforeImage} alt={beforeAlt} />
        </div>

        <div className="before-after-card__divider" aria-hidden="true">
          <span />
        </div>

        <input
          aria-label={`${beforeLabel} / ${afterLabel}`}
          className="before-after-card__range"
          max="100"
          min="0"
          onChange={(event) => setPosition(event.target.value)}
          type="range"
          value={position}
        />
      </div>

      <div className="before-after-card__labels" aria-hidden="true">
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </div>
    </article>
  )
}
