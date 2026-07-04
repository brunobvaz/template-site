import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { content } from './data/content.js'
import { navItems } from './data/navItems.js'

function buildNavTranslations(language) {
  return navItems.reduce((translations, item) => {
    const key = item.labelKey.replace('nav.', '')

    return {
      ...translations,
      [key]: item.label[language],
    }
  }, {})
}

const resources = {
  en: {
    translation: {
      common: {
        appointment: 'Book appointment',
        chooseLanguage: 'Choose language',
        closeNavigationMenu: 'Close navigation menu',
        openNavigationMenu: 'Open navigation menu',
      },
      contacts: {
        description: content.contactsSection.en.description,
        details: content.contactsSection.en.details,
        eyebrow: content.contactsSection.en.eyebrow,
        form: content.contactsSection.en.form,
        headline: content.contactsSection.en.headline,
      },
      faq: {
        eyebrow: content.faqSection.en.eyebrow,
        headline: content.faqSection.en.headline,
        items: content.faqSection.en.items,
      },
      footer: {
        columns: content.footer.en.columns,
        description: content.footer.en.description,
        legalLinks: content.footer.en.legalLinks,
        rights: content.footer.en.rights,
      },
      gallery: {
        afterLabel: content.gallerySection.en.afterLabel,
        beforeLabel: content.gallerySection.en.beforeLabel,
        disclaimer: content.gallerySection.en.disclaimer,
        headline: content.gallerySection.en.headline,
        results: content.gallerySection.en.results,
      },
      about: {
        button: content.aboutSection.en.button,
        description: content.aboutSection.en.description,
        eyebrow: content.aboutSection.en.eyebrow,
        headline: content.aboutSection.en.headline,
        values: content.aboutSection.en.values,
        valuesEyebrow: content.aboutSection.en.valuesEyebrow,
      },
      hero: {
        eyebrow: content.heroSection.en.summary,
        headline: content.heroSection.en.headline,
        description: content.heroSection.en.description,
        footerItems: content.heroSection.en.footerItems,
        primaryCta: content.heroSection.en.CTA,
        secondaryCta: content.heroSection.en.button,
      },
      nav: buildNavTranslations('en'),
      services: {
        description: content.servicesSection.en.description,
        eyebrow: content.servicesSection.en.eyebrow,
        headline: content.servicesSection.en.headline,
        link: content.servicesSection.en.link,
        treatments: content.servicesSection.en.treatments,
      },
      testimonials: {
        headline: content.testimonialsSection.en.headline,
        items: content.testimonialsSection.en.testimonials,
      },
    },
  },
  pt: {
    translation: {
      common: {
        appointment: 'Agendar consulta',
        chooseLanguage: 'Escolher idioma',
        closeNavigationMenu: 'Fechar menu de navegação',
        openNavigationMenu: 'Abrir menu de navegação',
      },
      contacts: {
        description: content.contactsSection.pt.description,
        details: content.contactsSection.pt.details,
        eyebrow: content.contactsSection.pt.eyebrow,
        form: content.contactsSection.pt.form,
        headline: content.contactsSection.pt.headline,
      },
      faq: {
        eyebrow: content.faqSection.pt.eyebrow,
        headline: content.faqSection.pt.headline,
        items: content.faqSection.pt.items,
      },
      footer: {
        columns: content.footer.pt.columns,
        description: content.footer.pt.description,
        legalLinks: content.footer.pt.legalLinks,
        rights: content.footer.pt.rights,
      },
      gallery: {
        afterLabel: content.gallerySection.pt.afterLabel,
        beforeLabel: content.gallerySection.pt.beforeLabel,
        disclaimer: content.gallerySection.pt.disclaimer,
        headline: content.gallerySection.pt.headline,
        results: content.gallerySection.pt.results,
      },
      about: {
        button: content.aboutSection.pt.button,
        description: content.aboutSection.pt.description,
        eyebrow: content.aboutSection.pt.eyebrow,
        headline: content.aboutSection.pt.headline,
        values: content.aboutSection.pt.values,
        valuesEyebrow: content.aboutSection.pt.valuesEyebrow,
      },
      hero: {
        eyebrow: content.heroSection.pt.summary,
        headline: content.heroSection.pt.headline,
        description: content.heroSection.pt.description,
        footerItems: content.heroSection.pt.footerItems,
        primaryCta: content.heroSection.pt.CTA,
        secondaryCta: content.heroSection.pt.button,
      },
      nav: buildNavTranslations('pt'),
      services: {
        description: content.servicesSection.pt.description,
        eyebrow: content.servicesSection.pt.eyebrow,
        headline: content.servicesSection.pt.headline,
        link: content.servicesSection.pt.link,
        treatments: content.servicesSection.pt.treatments,
      },
      testimonials: {
        headline: content.testimonialsSection.pt.headline,
        items: content.testimonialsSection.pt.testimonials,
      },
    },
  },
}

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
  lng: 'pt',
  resources,
})

export default i18n
