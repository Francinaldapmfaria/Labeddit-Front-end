import React, { useEffect, useState } from 'react'
import Header from "../../components/header/Header"
import botaoPostar from "../../assets/img/postar.svg"
import { Container } from './PostStyled'
import { Button } from '../signup/SignupStyled'
import linha from "../../assets/img/Line.svg"
import { goToCommentsPage } from '../../routes/coordinator'
import { Navigate, useNavigate } from 'react-router-dom'
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

  const [tokenStorage, setTokenStorage] = useState("")



  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const token = window.localStorage.getItem('token')

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
      // setTokenStorage(response.data.token)
      
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



  return (
    <>
      <Header />
      <Container>



        <div className='escreverPost'>

          <input value={contentPost} onChange={(e) =>setContentPost(e.target.value)}  placeholder='Escreva seu post...'></input>


          <Button onClick={() =>  postandoPost ()} ><img src={botaoPostar}></img></Button>

        </div>

        <img src={linha} alt="imagem linha"></img>


        <div>{posts.map((post) => {
          return (
            <div>
              <p>Enviado por: {post.creator.name}</p>
              <p>{post.content}</p>
              <div>
                <span>
                  <img src={like}></img>
                  <span>{post.likes}</span>
                  <img src={dislike}></img>
                  <img src={comments}></img>
                  <span>{post.comments}</span>
                </span>
              </div>
            </div>

          )
        })}
        </div>






      </Container>

    </>
  )
}

export default PostPage