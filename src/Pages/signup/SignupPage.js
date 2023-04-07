import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../../components/header/Header"
import { Button, Container, Contracts } from './SignupStyled'
import botaoCadastrar from "../../assets/img/cadastrar.svg"
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import { goToPostPage } from '../../routes/coordinator'

function SignupPage() {

  const [apelido, setApelido] = useState("")
  const [emailSignup, setEmailSignup] = useState("")
  const [passwordSignup, setPasswordSignup] = useState("")

  const [token,setToken]= useState("")


  const navigate = useNavigate()

 
  // useEffect(() => {
  //   //verifica se usuário ja esta logado
  //   // postSignup()
  // },[])

  //criar função para requisição
  const postSignup = async() => {

    const inputSignup= {
      "name":apelido,
      "email":emailSignup,
      "password":passwordSignup
    }


    try{
      const response= await axios.post(`${BASE_URL}/users/signup`, inputSignup)
      window.localStorage.setItem('token', response.data.token)

      setToken(response.data.token)
      setApelido(response.data.name)
      setEmailSignup(response.data.email)
      setPasswordSignup(response.data.password)

      goToPostPage(navigate)

      // window.location.reload()

    }catch(erro) {
      console.log(erro)
      // alert(erro.response.data.message)
    }
  }


  return (
    <>
    <Header/>
    <Container>


<h1 className='fraseOla'>Olá, boas vindas ao
<br/> LabEddit;) </h1>

<input value={apelido} onChange={(e) => setApelido(e.target.value)} placeholder='Apelido'></input>
<input value={emailSignup} onChange={(e) => setEmailSignup(e.target.value)} placeholder='E-mail'></input>
<input value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} placeholder='Senha'></input>

{/* quando usar imagem colocar dentro de div não colocar imagem dentro de botton */}

<Button onClick={() => postSignup()}>Cadastrar</Button>

<Contracts>

<p>Ao continuar, você concorda com o nosso <a href='https://www.homehost.com.br/blog/tutoriais/links-html/'>Contrato de usuário</a>  
<br/> e nossa <a href='https://www.homehost.com.br/blog/tutoriais/links-html/'>Política de Privacidade</a> </p>



<label >
<input type= "checkbox"name="checkbox"></input>
</label>
<p>Eu concordo em receber emails sobre coisas 
  <br/>legais no Labeddit</p>

</Contracts>



</Container>

    </>
  )
}

export default SignupPage