import 'server-only'

const dictionaries = {
  en: () => import('./disctionaries/en.json').then((module) => module.default),
  bn: () => import('./disctionaries/bn.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()