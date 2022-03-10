import Head from "next/head";
import Navigation from "./navigation";


const Container = (props) => (
    <div>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css" />
        </Head>
        <Navigation />
        <div className="container p-4">
            {props.children}
        </div>
    </div>
)

export default Container;