export const buildWhatsAppUrl = (number: string, message?: string) => {
  const cleaned = number.replace(/\D/g, "")
  const base = `https://wa.me/${cleaned}`

  if (!message) {
    return base
  }

  return `${base}?text=${encodeURIComponent(message)}`
}
