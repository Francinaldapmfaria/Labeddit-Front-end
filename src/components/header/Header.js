// import React from 'react'
import {  Button, HeaderStyled } from './HeaderStyled'
import imglabenu from '../../assets/img/labenu.svg'
import imgBotaoEntrar from '../../assets/img/Entrar.svg'
import imgBotaoLogout from '../../assets/img/Logout.svg'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { goToLoginPage } from '../../routes/coordinator'


const Header = () => {

  // const params = useParams()

  const navigate = useNavigate()
  const location = useLocation()

  const individualizingHeader = () => {
    switch (location.pathname) {
      case "/signup":
        return (
          <>


            <div className='logoLabenu'>
              <img src={imglabenu} alt="logo labenu pequeno"></img>
            </div>

            <div className='botao'>
              <Button onClick={() => goToLoginPage(navigate)}><img src={imgBotaoEntrar}></img></Button>
            
            </div>
          </>
          
        )
      case "/posts/id":
        return (
          <>
            <div className='logoLabenu' >
              <img src={imglabenu} alt="logo Labenu"></img>
            </div>

            <Button className='botao' onClick={() =>goToLoginPage(navigate)}><img src={imgBotaoLogout}></img></Button>

          </>
        )

      case "/comments/id":
        return (
          <>
            <div className='logoLabenu' >
              <img src={imglabenu} alt="logo Labenu"></img>
            </div>

            <Button className='botao' onClick={() => goToLoginPage(navigate)}><img src={imgBotaoLogout}></img></Button>

          </>
        )


      default:
        return (

          <div>
            <button onClick={() => goToLoginPage(navigate)}>Página inicial</button>
          </div>
        )
    }
  }

  return (
    <HeaderStyled>

      {individualizingHeader()}
    </HeaderStyled>
    
  )
}

export default Header