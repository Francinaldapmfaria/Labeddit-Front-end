import React from 'react'
import Header from "../../components/header/Header"
import botaoResponder from "../../assets/img/responder.svg"
import { Button } from '../signup/SignupStyled'
import linha from "../../assets/img/Line.svg"
import { Container } from './CommentsStyled'


const CommentsPage = () => {
  return (
    <>
      <Header />

      <Container>

      <div className='escreverComments'>

      <input placeholder='Adicionar Comentário...'></input>

      <Button ><img src={botaoResponder}></img></Button>
      </div>

      <img src={linha} alt="imagem linha"></img>

      </Container>

    </>
  )
}

export default CommentsPage