package com.st0kke.experiments.spring.service;

import org.joda.time.LocalDate;
import org.springframework.stereotype.Service;

@Service("dateService")
public class DateServiceImpl implements DateService {

	@Override
	public LocalDate getNextAssessment() {
		return LocalDate.now();
	}

}
