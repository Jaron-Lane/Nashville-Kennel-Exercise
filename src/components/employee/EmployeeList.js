import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: Initial render before the data")
        getEmployees()
    }, [])

    useEffect(() => {
        console.log("EmployeeList: Employee state is changed")
        console.log(employees)
    }, [employees])

    return (
        <div className="employees">
            {
                employees.map(emp => <Employee key={emp.id} employee={emp} />)
            }
        </div>
    )
}