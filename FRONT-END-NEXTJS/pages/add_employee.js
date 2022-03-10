import Container from "../components/container";
import Head from "next/head";
import fetch from 'isomorphic-fetch';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function add_employee() {

  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    salary: ''
  })

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    if (router.query.id) {

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(employee)

      // URL API PUT request
      const url = 'http://localhost:8088/'

      // Form the request for sending data to the server.
      const options = {
        // The method is PUT because we are sending data.
        method: 'PUT',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }

      // Get server response.
      const response = await fetch(url + router.query.id, options)
      const result = await response.json()
      console.log(result)
      router.push('/employees')

    } else {

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(employee)

      // URL API post request
      const url = 'http://localhost:8088/'

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }

      // Get server response.
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result)
      router.push('/employees')

    }

  }

  const handleChange = ({ target: { name, value } }) =>
    setEmployee({ ...employee, [name]: value })

  useEffect(() => {

    const getEmployee = async () => {
      // URL API get request
      const url = 'http://localhost:8088/'

      // Form the request for sending data to the server.
      const options = {
        // The method is GET because we are sending data.
        method: 'GET',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        }
      }

      // Get server response.
      const response = await fetch(url + router.query.id, options)
      const data = await response.json()

      setEmployee(data)

    }

    if (router.query.id) {
      getEmployee(router.query.id)
    }

  }, []);


  return (
    <Container>
      <Head>
        <title>Next.js Project - Add employee</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter a name"
            onChange={handleChange}
            value={employee.name} />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            className="form-control"
            name="salary"
            id="salary"
            placeholder="Enter a salary"
            onChange={handleChange}
            value={employee.salary} />
        </div>
        <button type="submit" className="btn btn-primary">Save employee</button>
      </form>
    </Container>
  )
}

export default add_employee