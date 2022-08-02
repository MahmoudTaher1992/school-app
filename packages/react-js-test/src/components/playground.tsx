import {useAuth} from "../context/auth";
import {useEffect} from "react";

export const Playground = () => {
    const {setJWT, getJWT} = useAuth();

    useEffect(() => {
        console.log("Playground render")
    })

    return <div>
        <button onClick={() => {getJWT()}}>getJWT</button>
        <button onClick={() => {setJWT(Math.random().toString())}}>setJWT</button>
    </div>
}