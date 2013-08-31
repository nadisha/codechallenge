/**
 * This is the interface for the service layer.
 * @author Nadisha Bandara
 */
package com.cinglevue.challenge.dao;

import java.util.List;

import com.cinglevue.challenge.model.School;
import com.cinglevue.challenge.model.SchoolSubject;
import com.cinglevue.challenge.model.Subject;

public interface SchoolDao {
	List<Subject> getSubjects();
	
	List<School> getSchools();
	
	List<SchoolSubject> getResults();
	
	List<SchoolSubject> getResultsBySubject(String subject);
	
	List<SchoolSubject> getResultsBySchool(String school);
}
