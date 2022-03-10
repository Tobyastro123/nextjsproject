import { useRouter } from "next/router";
import Head from "next/head";
import fetch from 'isomorphic-fetch';
import Container from "../../components/container";

const employee = ({ employee }) => {

    const router = useRouter();

    const handleDelete = async id => {

        // URL
        const url = 'http://localhost:8088/'

        // Form the request for sending data to the server.
        const options = {
            // The method is DELETE because we are sending data.
            method: 'DELETE',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // Get server response.
        const response = await fetch(url + id, options)
        const result = await response.json()
        console.log(result)
        router.push('/employees')
    }

    return (
        <Container>
            <Head>
                <title>Next.js Project - Employee</title>
            </Head>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card-header text-center">
                        <h3>Empleado con id {employee.id}</h3>
                    </div>
                    <div className="card-body text-center">
                        <h2>{employee.name}</h2>
                        <p>Salary: {employee.salary}</p>
                    </div>
                    <div className="text-center">
                        <img src="" alt="" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-secondary" onClick={() => router.push('/employees/edit/' + employee.id)}>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => handleDelete(employee.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
employee.getInitialProps = async ctx => {
    const id = ctx.query.id;
    const res = await fetch(`http://localhost:8088/${id}`);
    const data = await res.json();

    return { employee: data }
}
export default employee