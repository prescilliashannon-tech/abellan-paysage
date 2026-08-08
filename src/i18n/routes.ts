export type Lang = 'fr' | 'en' | 'es';

export const languages: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español'
};

export const defaultLang: Lang = 'fr';

// Canonical route keys mapped to their localized path per language.
export const routes = {
  fr: {
    home: '/',
    about: '/a-propos/',
    services: '/services/',
    gallery: '/galerie/',
    projects: '/realisations/',
    contact: '/contact/'
  },
  en: {
    home: '/en/',
    about: '/en/about/',
    services: '/en/services/',
    gallery: '/en/gallery/',
    projects: '/en/projects/',
    contact: '/en/contact/'
  },
  es: {
    home: '/es/',
    about: '/es/sobre-nosotros/',
    services: '/es/servicios/',
    gallery: '/es/galeria/',
    projects: '/es/proyectos/',
    contact: '/es/contacto/'
  }
} as const;

export type RouteKey = keyof (typeof routes)['fr'];

export function localizedPath(lang: Lang, key: RouteKey): string {
  return routes[lang][key];
}
