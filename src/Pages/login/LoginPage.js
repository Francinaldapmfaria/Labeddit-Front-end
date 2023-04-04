import React, { useEffect, useState } from 'react'
import imgLabedite from "../../assets/img/labeddit.svg"
import botaoContinuar from "../../assets/img/continuar.svg"
import botaoCrioConta from "../../assets/img/criaconta.svg"
import linha from "../../assets/img/Line.svg"
import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostPage, goToSignupPage } from '../../routes/coordinator'
import { Button, Buttons, Container, Image } from './LoginStyled'
import axios from 'axios'
import {BASE_URL} from "../../constants/url"
import { useLocation } from 'react-router-dom'

const LoginPage = () => {
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")

  const [tokenStorage, setTokenStorage]= useState("")

  // const location = useLocation()

  const navigate = useNavigate()

  const autorization= {
    "email":emailLogin,
    "password": passwordLogin
  }

  useEffect(() => {
    postLogin()
  },[])

  //criar função para requisição
  const postLogin = async() => {
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

     {/* quando usar imagem colocar dentro de divnão colocar imagem dentro de botton */}
      <Button onClick={() => postLogin()}><img  src={botaoContinuar}></img></Button>

      <img src={linha} alt= "imagem linha"></img>

      <Button onClick={() => goToSignupPage(navigate)}><img src={botaoCrioConta}></img></Button>

      </Buttons>

    </Container>
  )
}

export default LoginPage