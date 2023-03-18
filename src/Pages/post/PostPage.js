import React, { useState } from 'react'
import Header from "../../components/header/Header"
import botaoPostar from "../../assets/img/postar.svg"
import { Container } from './PostStyled'
import { Button } from '../signup/SignupStyled'
import linha from "../../assets/img/Line.svg"
import { goToCommentsPage } from '../../routes/coordinator'
import { Navigate, useNavigate } from 'react-router-dom'


const PostPage = () => {

  const navigate = useNavigate()
  const [post, setPost] = useState("")

const getPosts =() => {}

  return (
    <> 
    <Header/>
    <Container>
    
    
    
    <div className='escreverPost'>

    <input valeu={post} onChange={(e) => setPost(e.target.value)}  placeholder='Escreva seu post...'></input>
   
    
    <Button onClick={() => goToCommentsPage(navigate)} ><img src={botaoPostar}></img></Button>
   
    </div>

    <img src={linha} alt= "imagem linha"></img>



  </Container>

    </>
  )
}

export default PostPage