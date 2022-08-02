import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {flushSync} from "react-dom";

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<{
    getJWT: () => string | null,
    setJWT: (jwt: string) => void
}>({
    getJWT: () => {throw new Error("not implemented")},
    setJWT: (jwt: string) => {throw new Error("not implemented")}
})

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [inMemoryJWT, setInMemoryJWT] = useState<string | null>(null);
    const [age, setAge] = useState<number>(0);

    const getJWT = useCallback(() => {
        return inMemoryJWT;
    }, [])

    const setJWT = useCallback((jwt: string) => {
        flushSync(() =>{
            setAge(Math.random());
            console.log(`age => ${age}`)
        })

        setInMemoryJWT(jwt);
        console.log(`inMemoryJWT => ${inMemoryJWT}`)
    }, [age, inMemoryJWT])


    useEffect(() => {
        console.log("AuthProvider render")
    })

    const contextValue={getJWT, setJWT};
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)