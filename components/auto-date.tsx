export default function AutoDate() {
  const now = new Date()
  const formatted = now.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return <time dateTime={now.toISOString().split('T')[0]}>{formatted}</time>
}
