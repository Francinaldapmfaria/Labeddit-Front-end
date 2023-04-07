import React, { useState } from 'react'
import imgLabedite from "../../assets/img/labeddit.svg"
import linha from "../../assets/img/Line.svg"
import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostPage, goToSignupPage } from '../../routes/coordinator'
import { Buttons, Container, Image } from './LoginStyled'
import axios from 'axios'
import {BASE_URL} from "../../constants/url"


const LoginPage = () => {
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")
  const [tokenStorage, setTokenStorage]= useState("")

  const navigate = useNavigate()
  const autorization= {
    "email":emailLogin,
    "password": passwordLogin
  }

  const postLogin = async() => {
    if(emailLogin.trim() === "" || passwordLogin.trim() === ""){
      alert("Forneça senha e email para efetuar login")
      return
    }
    try{
      const response= await axios.post(`${BASE_URL}/users/login`, autorization)
      const token =response.data.token
      setTokenStorage(response.data.token)
      window.localStorage.setItem("token", token)
      if(token){
        goToPostPage(navigate)
      }else {
        goToLoginPage(navigate)
      }
    }catch(erro) {
      console.log(erro)
    }
  }

  return (
    <Container>
    
      <Image src={imgLabedite}></Image>
      <h1 className='Frase'>O Projeto da rede social da Labenu</h1>
      
      <input value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} placeholder='E-mail' type="email" ></input>
      <input value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} placeholder='Senha' type="password"></input>

      <Buttons>
      <button className='button1' onClick={() => postLogin()}>Continuar</button>
      <img className='line' src={linha} alt= "imagem linha"></img>
      <button className='button2' onClick={() => goToSignupPage(navigate)}>Crie uma Conta!</button>
      </Buttons>

      <h2 className='Frase2'>Desenvolvido por Francinalda Portela Moura de Faria</h2>
      
    </Container>
  )
}

export default LoginPage