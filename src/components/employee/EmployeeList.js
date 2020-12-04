import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import { Employee } from "./Employee"


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: Initial render before the data")
        getEmployees()
    }, [])

    // useEffect(() => {
    //     console.log("EmployeeList: Employee state is changed")
    //     console.log(employees)
    // }, [employees])

    return (
            <div className="employeeList">
                <h1>Employees</h1>

                <button onClick={() => props.history.push("/employees/create")}>
                    Add Employee
                </button>

                <article className="employees">
                    {
                    employees.map(employee => {
                        return <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                            </Link>
                        })
                    }
                </article>
            </div>
        
    )
}