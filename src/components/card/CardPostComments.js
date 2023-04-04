import React from 'react'
import like from "../../assets/img/curtir"
import dislike from "../../assets/img/discutir"
import comments from "../../assets/img/comments"

const CardPostComments = () => {
    return (
        <div>
            <p>Enviado por: Fulano</p>
            <p>Meu post</p>
            <div>
                <span>
                    <img src={like}></img>
                    <img src={dislike}></img>
                    <img src={comments}></img>
                </span>
            </div>
        </div>
    )
}

export default CardPostComments