import { useRouter } from "next/dist/client/router"
import { useEffect } from "react";

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
            alert('Automaticly redirect to home')
        }, 3000);
    }, [])
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found!</p>
        </div>
    )
}
