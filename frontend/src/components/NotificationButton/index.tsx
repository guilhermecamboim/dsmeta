import iconImg from '../../assets/notification-icon.svg'
import './styles.css'

export function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={iconImg} alt="Notificar"/>
    </div>
  )
}