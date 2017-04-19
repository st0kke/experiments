package com.st0kke.experiments.spring.service;


import com.st0kke.experiments.spring.dao.EmployeeDao;
import com.st0kke.experiments.spring.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private DateService dateService;

    @Autowired
    private EmployeeDao employeeDao;

    @Override
    public void registerEmployee(Employee employee) {
        employee.setAssessmentDate(dateService.getNextAssessment());
        employeeDao.saveToDB(employee);
    }
}
