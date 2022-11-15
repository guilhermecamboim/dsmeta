import logoImg from '../../assets/logo.svg'
import './styles.css'

export function Header(){
  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logoImg} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
            </p>
        </div>
    </header>
  )
}