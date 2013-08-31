/**
 * This has implemented the business service methods.
 * Communicate with the persistence layer to fetch data from the database. 
 * @author Nadisha Bandara
 */
package com.cinglevue.challenge.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.cinglevue.challenge.dao.SchoolDao;
import com.cinglevue.challenge.model.School;
import com.cinglevue.challenge.model.SchoolSubject;
import com.cinglevue.challenge.model.Subject;
import com.cinglevue.challenge.service.SchoolService;

public class SchoolServiceImpl implements SchoolService {

	@Autowired
	private SchoolDao schoolDao;
	
	public List<Subject> getSubjects() {
		return schoolDao.getSubjects();
	}

	public List<School> getSchools() {
		return schoolDao.getSchools();
	}
	
	public List<SchoolSubject> getResults() {
		return schoolDao.getResults();
	}
	
	public List<SchoolSubject> getResultsBySchool(String school) {
		return schoolDao.getResultsBySchool(school);
	}
	
	public List<SchoolSubject> getResultsBySubject(String subject) {
		return schoolDao.getResultsBySubject(subject);
	}
}
