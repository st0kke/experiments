package com.st0kke.experiments.spring;


import com.st0kke.experiments.spring.model.Employee;
import com.st0kke.experiments.spring.service.EmployeeService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import com.st0kke.experiments.spring.configuration.AppConfig;

public class AppMain {

    public static void main(String args[]) {
        AbstractApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        EmployeeService employeeService = (EmployeeService) context.getBean("employeeService");

        Employee employee = new Employee();
        employee.setName("some one");
        employeeService.registerEmployee(employee);

        context.close();
    }
}
