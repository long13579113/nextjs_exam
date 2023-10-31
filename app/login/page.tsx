import Link from 'next/link';

function Login(){
    return(
        <>
            <h4>user: <input type="text"></input></h4>
            <h4>password: <input type="password"></input></h4>
            <Link href="/"><span>Submit</span></Link>
        </>
    )
}

export default function Page() {
    return <Login />
}