import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function NotFoundPage(){

    const location = useLocation()

    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //        navigate('/') 
    //     }, 2000)
        
    // }, []) - ОТПРАВКА ДОМОЙ ЧЕРЕЗ 2 СЕКУНДЫ


    return(
        <div className="content fdc">
            <h2>ЭТОЙ СТРАНИЦЫ НЕТ ИЛИ ПОКА НЕ СУЩЕСТВУЕТ</h2>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ferror%2F&psig=AOvVaw39_sn-NdXPocmxMHFev26I&ust=1713537399087000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCbzbH-y4UDFQAAAAAdAAAAABAE"/>
            <button className="ErrButton" onClick={() => navigate('/')}>Yes, yes scout GO HOME.</button>
            <button className="ErrButton" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default NotFoundPage