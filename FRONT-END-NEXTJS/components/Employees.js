import Router from "next/dist/client/router"
const Employees = ({ employees }) => {

    return (
        employees.map(employee =>

            <li className="list-group-item list-group-action" key={employee.id} onClick={e =>
                Router.push('employees/[id]', `/employees/${employee.id}`)}>
                <div>
                    <h5>{employee.name}</h5>
                    <p>Salary: {employee.salary}</p>
                </div>
            </li>
        )
    )
}

export default Employees