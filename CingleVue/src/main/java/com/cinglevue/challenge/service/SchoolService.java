/**
 * This is the interface for the presentations layer.
 * Here has declared all the business service methods 
 * @author Nadisha Bandara
 */
package com.cinglevue.challenge.service;

import java.util.List;

import com.cinglevue.challenge.model.School;
import com.cinglevue.challenge.model.SchoolSubject;
import com.cinglevue.challenge.model.Subject;

public interface SchoolService {
	List<Subject> getSubjects();
	
	List<School> getSchools();
	
	List<SchoolSubject> getResults();
	
	List<SchoolSubject> getResultsBySubject(String subject);
	
	List<SchoolSubject> getResultsBySchool(String school);
}	
