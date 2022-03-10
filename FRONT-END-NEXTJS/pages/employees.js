import Container from "../components/container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Employees from "../components/Employees";

const employees = ({ employees }) => {

  return (
    <Container>
      <Head>
        <title>Next.js Project - Employees</title>
      </Head>
      <div className="text-center">
        <h1>Employees</h1>
      </div>

      <Employees employees={employees} />
    </Container>
  )
}

employees.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:8088/');
  const data = await res.json();

  return { employees: data }
}

export default employees