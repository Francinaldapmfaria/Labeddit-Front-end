export const goToLoginPage= (navigate) =>{
    navigate('/')
}

export const goToSignupPage= (navigate) =>{
    navigate('/signup')
}

export const goToPostPage= (navigate, id) =>{
    navigate(`/posts`)
}

export const goToCommentsPage= (navigate,id) =>{
    navigate(`/comments/${id}`)
}