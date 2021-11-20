import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function Post() {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <h1>Post {slug}</h1>
        </div>
    )
}
