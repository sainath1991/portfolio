export default function Localizer(props) {
  const newdate = new Date(props.date)
  const localdate = newdate.toLocaleDateString()
  return (
    <span>{localdate}</span>
  )
}