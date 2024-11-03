import { PHONE_NO } from './constants'
import DOMPurify from 'dompurify'

export const courseWhatsApp = (courseName: string) => {
  const message = `Hi, I am interested in the ${courseName}.\nCould you provide more details?`
  return `https://wa.me/${PHONE_NO}?text=${encodeURIComponent(message)}`
}

export const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
    ALLOWED_ATTR: [],
  })
}
