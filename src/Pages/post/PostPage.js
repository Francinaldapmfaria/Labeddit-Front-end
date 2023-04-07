import React, { useEffect, useState } from 'react'
import Header from "../../components/header/Header"
import { Container, Posted, Button, Button1 } from './PostStyled'
import linha from "../../assets/img/Line.svg"
import { goToCommentsPage, goToLoginPage } from '../../routes/coordinator'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import like from "../../assets/img/curtir.svg"
import dislike from "../../assets/img/discutir.svg"
import comments from "../../assets/img/comments.svg"



const PostPage = () => {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [creatPost, setCreatePost] = useState('')
  const [contentPost, setContentPost] = useState('')

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    getPosts()
    if (token === ""){
      goToLoginPage(navigate)
    }else{
      getPosts()
    }
  }, [])

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, 
      {
        headers: {
          'Authorization': token
        }
      })
      setPosts(response.data)
      console.log(response)

    } catch (erro) {
      console.log(erro)
    }

  }

  const postandoPost = async () => {
    const input = {
      "content": contentPost
    }
    try {
      const token = window.localStorage.getItem('token')
      const response = await axios.post(`${BASE_URL}/posts`, input,
        {
          headers: {
            'Authorization': token
          }
        })
        setCreatePost(response.data)
        window.location.reload()
    } catch (erro) {
      console.log(erro)
    }
  }

  const likeOrDislikePost = async (id, like) => {
    try {
      await axios.put(`${BASE_URL}/posts/${id}/like`, {like}, {
        headers: {
          'Authorization': token
        }
      })
      getPosts()
    } catch (erro) {
      console.log(erro)
    }
  }
  return (
    <>
      <Header />
      <Container>
        <div className='escreverPost'>
        <textarea className='Texto' type="text" value={contentPost} onChange={(e) =>setContentPost(e.target.value)}  placeholder='Escreva seu post...'></textarea>

         <button className='button1' onClick={() =>  postandoPost ()}>Postar</button>
        <img src={linha} alt="imagem linha"></img>
        </div>

        <div>{posts.map((post) => {
          return (
            <Posted>
              <p>Enviado por: {post.creator.name}</p>
              <p>{post.content}</p>
              <div>
                <span className='LIkeDislikeComments'>
                  <Button onClick={() => likeOrDislikePost(post.id, true)} ><img src={like}></img></Button>
                  <span>{post.likes}</span>
                  <Button onClick={() => likeOrDislikePost(post.id, false)} ><img src={dislike}></img></Button>
                  <span>{post.dislikes}</span>
                  <Button onClick={() => goToCommentsPage(navigate, post.id)}><img src={comments}></img></Button>
                  <span>{post.comments}</span>
                </span>
              </div>
            </Posted>
          )
        })}
        </div>
      </Container>
    </>
  )
}

export default PostPage