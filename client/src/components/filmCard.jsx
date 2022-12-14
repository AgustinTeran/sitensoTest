import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddFavorites, RemoveFavorites } from "../redux/actiones";


export default function Card({name,image,id}){
    var {favorites,logged,user} = useSelector(state => state)
    var dispatch = useDispatch()
    return (
        <div className="filmCard_container">
            {
                favorites && logged? (
                    <FontAwesomeIcon icon={faHeart}
                       className={favorites.find(e => e.id === id)? "hover fav fav-color" : "hover fav"}
                       onClick={() => {
                        favorites.find(e => e.id === id)? (
                            dispatch(RemoveFavorites({filmId:id, userId: user.email}))
                        ) : (
                            dispatch(AddFavorites({name, image, userId: user.email, filmId: id}))
                        )
                        }}>
                    </FontAwesomeIcon>
                ) : null
            }
            <Link to={`/detail/${id}`}><img src={image} alt={name}/></Link>
            <h1>{name}</h1>
        </div>
    )
}