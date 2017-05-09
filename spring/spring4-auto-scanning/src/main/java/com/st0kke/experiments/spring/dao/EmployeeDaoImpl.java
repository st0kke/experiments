package com.st0kke.experiments.spring.dao;

import org.springframework.stereotype.Repository;

import com.st0kke.experiments.spring.model.Employee;

@Repository("employeeDao")
public class EmployeeDaoImpl implements EmployeeDao {

	@Override
	public void saveToDB(Employee employee) {
		System.out.println("Saved employee " + employee + " to database");
	}

}
