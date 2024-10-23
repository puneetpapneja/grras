import { PHONE_NO } from './constants'

export const courseWhatsApp = (courseName: string) => {
  const message = `Hi, I am interested in the ${courseName}.\nCould you provide more details?`
  return `https://wa.me/${PHONE_NO}?text=${encodeURIComponent(message)}`
}
