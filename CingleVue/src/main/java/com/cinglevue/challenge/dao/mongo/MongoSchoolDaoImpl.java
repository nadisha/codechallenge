/**
 * This has implemented persistence layer methods.
 * Fetch data from the MongoDB
 * @author Nadisha Bandara
 */
package com.cinglevue.challenge.dao.mongo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.cinglevue.challenge.dao.SchoolDao;
import com.cinglevue.challenge.model.School;
import com.cinglevue.challenge.model.SchoolSubject;
import com.cinglevue.challenge.model.Subject;

public class MongoSchoolDaoImpl implements SchoolDao {
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public List<Subject> getSubjects() {
		List<Subject> subjects = mongoTemplate.findAll(Subject.class);
		return subjects;
	}

	public List<School> getSchools() {
		List<School> schools = mongoTemplate.findAll(School.class);
		return schools;
	}
	
	public List<SchoolSubject> getResults() {
		List<SchoolSubject> schoolSubjects = mongoTemplate.findAll(SchoolSubject.class);
		return schoolSubjects;
	}
	
	public List<SchoolSubject> getResultsBySchool(String school) {		
		Query searchQuery = new Query(Criteria.where("school.name").is(school));
		List<SchoolSubject> result = mongoTemplate.find(searchQuery, SchoolSubject.class);
		return result;
	}
	
	public List<SchoolSubject> getResultsBySubject(String subject) {
		Query searchQuery = new Query(Criteria.where("subject.subject").is(subject));
		List<SchoolSubject> result = mongoTemplate.find(searchQuery, SchoolSubject.class);
		return result;
	}
}
