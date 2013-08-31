/**
 * This is the interface for the client requests
 * @author Nadisha Bandara
 * 
 */
package com.cinglevue.challenge.web;

import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cinglevue.challenge.model.SchoolSubject;
import com.cinglevue.challenge.model.Subject;
import com.cinglevue.challenge.service.SchoolService;

@Controller
public class MainController {
	
	@Autowired
	private SchoolService schoolService;
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String initialize(ModelMap model){
		return "home";
	}
	
	@RequestMapping("/challenge/subjects")
	public @ResponseBody String fetchSubjects(){
		List<Subject> subjects = schoolService.getSubjects();
		JSONObject jObject = new JSONObject();
		jObject.put("subjects", subjects);		
		return jObject.toString();
	}
	
	@RequestMapping("/challenge/subjects/{subject}")
	public @ResponseBody String fetchSchoolsBySubject(@PathVariable String subject){
		List<SchoolSubject> schools = schoolService.getResultsBySubject(subject);
		JSONObject jObject = new JSONObject();
		jObject.put("schools", schools);
		return jObject.toString();		
	}
	
	@RequestMapping("/challenge/schools-subjects")
	public @ResponseBody String fetchSchoolsSubjects(){
		List<SchoolSubject> schoolsubjects = schoolService.getResults();
		JSONObject jObject = new JSONObject();
		jObject.put("schoolsubjects", schoolsubjects);
		return jObject.toString();
	}
}
