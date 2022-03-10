import Container from "../components/container";
import Head from "next/head";
// import fetch from "isomorphic-fetch";
// import Users from "../components/users";

function index() {
    return (
        <Container>
            <Head>
                <title>Next.js Project - Home</title>
            </Head>
            <div className="text-center">
                <h1>Welcome to Next js employee app</h1>
            </div>
        </Container>
    )
}

export default index