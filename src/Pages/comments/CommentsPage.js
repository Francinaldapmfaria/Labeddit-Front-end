import React, { useState } from 'react'
import Header from "../../components/header/Header"
import botaoResponder from "../../assets/img/responder.svg"
import botaoDiscurtir from "../../assets/img/discutir.svg"
import botaoCurtir from "../../assets/img/curtir.svg"
import botaoComments from "../../assets/img/comments.svg"
import { Button } from '../signup/SignupStyled'
import linha from "../../assets/img/Line.svg"
import { Container } from './CommentsStyled'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { goToLoginPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'


const CommentsPage = () => {

const [postId, setPostId] = useState([])
const [createComments, setCreateComments] = useState("")
const [commentsPost, setCommentsPost] = useState("")
const [getCommentsId, setGetComentsId] = useState([])
const [likeDislikesComments, setLikeDislikeComment] = useState("")

const navigate = useNavigate

const {id} = useParams()

useEffect(() => {
  if(localStorage.getItem('token') === ""){
    goToLoginPage(navigate)
  }else{
    getPostId()
    getCommentsByPostId()
  }
}, [])



const getPostId = async() => {
  try {
 const token= window.localStorage.getItem('token')

  const response= await axios.get(`${BASE_URL}/posts/${id}`, {
    headers: {
      'Authorization': token
    }
  })

  setPostId(response.data)


    
  } catch (erro) {
    console.log(erro)
  }


}

const creationComments = async ()=>{
  try {

    const input = {
      "comments": commentsPost
    }
  
    const token= window.localStorage.getItem('token')
  
    const response= await axios.post(`${BASE_URL}/${id}`, input, {
      headers: {
        'Authorization': token
      }
    })
    setCreateComments(response.data)
    window.location.reload()
    
  } catch (erro) {
    console.log(erro)
  }

}

const likeOrDislike = async(id, likeDislike) =>{
  try {
    const input = {
      "like": likeDislike
    }
  
    const token = window.localStorage.getItem('token')
  
    await axios.put(`${BASE_URL}/posts/${id}/like`, input, {
      headers: {
        'Authorization': token
      }
    })
    getPostId()
    
  } catch (erro) {
    console.log(erro)
    
  }
 
}

const getCommentsByPostId = async() =>{
 try {
  const token = window.localStorage.getItem('token')

  const response = await axios.get(`${BASE_URL}/comments/post/${id}`, {
    headers:{
      'Authorization': token
    }
  })
  setGetComentsId(response.data)

 } catch (erro) {
  console.log(erro)
 }
}

const likeOrDislikeComment = async (id, likeDislikeComment) => {
  try {
    const input = {
      "like": likeDislikeComment
    }

    const token = window.localStorage.getItem('token')

    const response = await axios.put(`${BASE_URL}/comments/${id}/like`, {
      headers:{
        'Authorization': token
      }
    })
      getCommentsByPostId()

  } catch (erro) {
    
  }
}



  return (
    <>
      <Header />

      {/* referenciado o post em comments 1º */}

      <div>
      <p>Enviado por: {postId.name}</p>
      <p> {postId.content}</p>

      <button onClick={() => likeOrDislike(postId.id, true)}><img src= {botaoCurtir} alt= "Botão curtir"></img></button>
      <span>{postId.likes}</span>

      <button onClick={() => likeOrDislike(postId.id, false)}><img src= {botaoDiscurtir} alt= "Botão discurtir"></img></button>
      <span>{postId.dislikes}</span>

      <div>
        <img src ={botaoComments} alt='Botão comentário'></img>
        <span>{postId.comments}</span>
      </div>
      
      </div>

     
     {/* commentario que vou fazer no post */}

      <Container>

      <div className='escreverComments'>

      <input placeholder='Adicionar Comentário...'></input>

      <Button ><img src={botaoResponder}></img></Button>
      </div>

      <img src={linha} alt="imagem linha"></img>

      </Container>

      {/* map para renderizar os commentarios- para poder fazer varios comentários*/}

    </>
  )
}

export default CommentsPage