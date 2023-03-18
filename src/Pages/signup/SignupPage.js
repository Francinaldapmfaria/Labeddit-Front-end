import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../../components/header/Header"
import { Button, Container, Contracts } from './SignupStyled'
import botaoCadastrar from "../../assets/img/cadastrar.svg"
import { goToLoginPage } from '../../routes/coordinator'

function SignupPage() {

  const [apelido, setApelido] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const navigate = useNavigate()

  const inputSignup= {
    "name": apelido,
    "email":emailLogin,
    "password": passwordLogin
  }

  useEffect(() => {
    postSignup()
  },[])

  //criar função para requisição
  const postSignup = async() => {
    try{
      const response= await axios.post(`${BASE_URL}/users/signup`, inputSignup)
      // const token =response.data.token
      // setToken(response.data.token)
      setApelido(response.data.name)
      setEmail(response.data.name)
      setPassword(response.data.name)
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
    <>
    <Header/>
    <Container>


<h1 className='fraseOla'>Olá, boas vindas ao
<br/> LabEddit;) </h1>

<input valeu={apelido} onChange={(e) => setApelido(e.target.value)} placeholder='Apelido'></input>
<input valeu={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'></input>
<input valeu={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha'></input>

{/* quando usar imagem colocar dentro de divnão colocar imagem dentro de botton */}

<Button onClick={() => goToLoginPage(navigate)}><img src={botaoCadastrar}></img></Button>

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