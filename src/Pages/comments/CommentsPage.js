import React, { useState } from 'react'
import Header from "../../components/header/Header"
import botaoResponder from "../../assets/img/responder.svg"
import dislike from "../../assets/img/discutir.svg"
import like from "../../assets/img/curtir.svg"
import botaoComments from "../../assets/img/comments.svg"
import linha from "../../assets/img/Line.svg"
import { Comments, Container, PostComments, Button, EscreverComments, Button2, ButtonResponder } from './CommentsStyled'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { goToLoginPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'


const CommentsPage = () => {

  const [postId, setPostId] = useState([])
  const [commentsPost, setCommentsPost] = useState("")
  const [getCommentsId, setGetComentsId] = useState([])
 
  const token = window.localStorage.getItem('token')

  const navigate = useNavigate

  const { id } = useParams()

  useEffect(() => {
    if (localStorage.getItem('token') === "") {
      goToLoginPage(navigate)
    }
      getPostId()
      getCommentsByPostId()
    
  }, [])

  const getPostId = async () => {

    

    axios.get(`${BASE_URL}/posts/${id}`, {
        headers: {
            'Authorization': token
        }

    })
        .then((res) => {
            console.log(res)
            setPostId(res.data)

        })

        .catch((err) => {
            console.log(err)

        })


  }

  console.log("POSSSSTTTTT",postId)

  const creationComments = async () => {
    if (commentsPost.trim() === "") {
      alert('Por favor, adicione um comentário válido.')
      return
    }

    try {

      const body = {
        "content": commentsPost
      }

      

      await axios.post(`${BASE_URL}/comments/${id}`, body, {
        headers: {
          'Authorization': token
        }
      })
      
      window.location.reload()

    } catch (erro) {
      console.log(erro)
    }

  }

  const likeOrDislike = async (id, likeDislike) => {
    try {
      const input = {
        "like": likeDislike
      }

     

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

  const getCommentsByPostId = async () => {
    try {
    

      const response = await axios.get(`${BASE_URL}/comments/posts/${id}`, {

        headers: {
          'Authorization': token
        }
      })
      setGetComentsId(response.data)

    } catch (erro) {
      console.log(erro)
    }
  }

  console.log("SOCOROOOO",getCommentsId)
  console.log("HAAAAAAAAA",getCommentsId)

  const likeOrDislikeComment = async (id, like) => {
    try {
    

     

       await axios.put(`${BASE_URL}/comments/${id}/like`,{like}, {
        headers: {
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
    <Container>

     
      <PostComments>
        <p>Enviado por: {postId.name}</p>
        <p> {postId.content}</p>

        <div className='LIkeDislikeComments'>

        <Button onClick={() => likeOrDislike(postId.id, true)}><img src={like} alt="Botão curtir"></img></Button>
        <span>{postId.likes}</span>

        <Button onClick={() => likeOrDislike(postId.id, false)}><img src={dislike} alt="Botão discurtir"></img></Button>
        <span>{postId.dislikes}</span>

        <Button><img src={botaoComments} alt='Botão comentário'></img></Button>
        <span>{postId.comments}</span>
        </div>

      </PostComments>


      {/* commentario que vou fazer no post */}

      <EscreverComments>

        
          <textarea className='Texto'
          type="text"
          placeholder='Adicionar Comentário.'
          value={commentsPost}
          onChange={(e)=>setCommentsPost(e.target.value)}
          ></textarea>


      </EscreverComments>
      
      <ButtonResponder>
          <Button2 onClick={creationComments}>Responder</Button2>
          <img src={linha} alt="imagem linha"></img>
        </ButtonResponder>

      {/* map para renderizar os commentarios- para poder fazer varios comentários*/}

     
      {getCommentsId.map((comment) => {
        return (

          <div className='Card' key={comment.id}>
            <div className='Content' >
              <h1>Enviado por: {comment.creatorName}</h1>
              <h2>{comment.comment}</h2>
              <div className='LikeDislike'>
                <div onClick={() => likeOrDislikeComment(comment.id, true)}><img src={like} alt="Botão curtir"></img></div>
                <span>{comment.likes}</span>

                <div onClick={() => likeOrDislikeComment(comment.id, false)}><img src={dislike} alt="Botão discurtir"></img></div>
                <span>{comment.dislikes}</span>
              </div>

            </div>
          </div>
        )
      }).reverse()}
       

</Container>

    </>
  )
}

export default CommentsPage