import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Notfound() {
    const redirect = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            redirect("/")
        }, 1000)
    }, []);
    return(
        <>
            <h1>Page Not Found</h1>
        </>
    );
}