import axios from 'axios';
import iconImg from '../../assets/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

interface INotificationProps {
  saleId: number
}

export function NotificationButton({saleId}: INotificationProps) {

  function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log("Sucess")
    })
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => {handleClick(saleId)}}>
      <img src={iconImg} alt="Notificar"/>
    </div>
  )
}