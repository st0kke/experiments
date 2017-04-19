package com.st0kke.experiments.spring.dao;

import com.st0kke.experiments.spring.model.Employee;

public interface EmployeeDao {

	void saveToDB(Employee employee);
	
}
