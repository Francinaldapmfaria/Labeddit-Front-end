import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentsPage from "../Pages/comments/CommentsPage";
import LoginPage from "../Pages/login/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import PostPage from "../Pages/post/PostPage";
import SignupPage from "../Pages/signup/SignupPage";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/posts" element={<PostPage/>}/>
            <Route path="/comments/:id" element={<CommentsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Router