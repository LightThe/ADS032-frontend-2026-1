import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login(){
    const {login} = useContext(AuthContext);

    const handleLogin = ()=>{
        login({usuario: "eu@eumesmo.com", senha:"123456"});
    }

    return(
        <>
            <h1>Login</h1>
            <button onClick={handleLogin}>Entrar</button>
        </>
    )
}