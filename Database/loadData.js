// Subjects collection
db.subjects.insert({
	subject : "Reading"
})
db.subjects.insert({
	subject : "Grammar & Punctuation"
})
db.subjects.insert({
	subject : "Numeracy"
})
db.subjects.insert({
	subject : "Persuasive Writing"
})
db.subjects.insert({
	subject : "Spelling"
})

// Schools collection
db.schools.insert({
	name : "St. Aaron College"
})
db.schools.insert({
	name : "St. Alan College"
})
db.schools.insert({
	name : "St. Alexander College"
})
db.schools.insert({
	name : "St. Alyssa College"
})
db.schools.insert({
	name : "St. Ana Paloma College"
})
db.schools.insert({
	name : "St. Andrea College"
})
db.schools.insert({
	name : "St. Angel De Jesus College"
})
db.schools.insert({
	name : "St. Angie College"
})
db.schools.insert({
	name : "St. Anthony College"
})
db.schools.insert({
	name : "St. Ashley College"
})
db.schools.insert({
	name : "St. Bernardo College"
})
db.schools.insert({
	name : "St. Brieanna College"
})
db.schools.insert({
	name : "St. Bruce College"
})
db.schools.insert({
	name : "St. Cameron College"
})
db.schools.insert({
	name : "St. Cameryn College"
})
db.schools.insert({
	name : "St. Cesar College"
})
db.schools.insert({
	name : "St. Chance College"
})
db.schools.insert({
	name : "St. Ciara College"
})
db.schools.insert({
	name : "St. Claudia College"
})
db.schools.insert({
	name : "St. Danae College"
})
db.schools.insert({
	name : "St. Darren College"
})
db.schools.insert({
	name : "St. Denisee College"
})
db.schools.insert({
	name : "St. Eduardo College"
})
db.schools.insert({
	name : "St. Esbeidy College"
})
db.schools.insert({
	name : "St. Hadley College"
})
db.schools.insert({
	name : "St. Victor College"
})

// Mapping subjects to schools
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Reading"}),
	school  			 : db.schools.findOne({name : "St. Aaron College"}),
	latestY3   			 : 411.66,  
	latestY5   			 : 535.52,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 74.84,
	factoredGainY3Y5 	 : 62.05,
	glgY3Y5 			 : 82.91,
	latestGainInGainY3Y5 : 17.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Reading"}),
	school  			 : db.schools.findOne({name : "St. Victor College"}),
	latestY3   			 : 445.13,  
	latestY5   			 : 509.88,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 71.31,
	factoredGainY3Y5 	 : 61.90,
	glgY3Y5 			 : 86.81,
	latestGainInGainY3Y5 : -17.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Reading"}),
	school  			 : db.schools.findOne({name : "St. Alexander College"}),
	latestY3   			 : 419.77,  
	latestY5   			 : 491.18,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 60.05,
	factoredGainY3Y5 	 : 65.81,
	glgY3Y5 			 : 109.59,
	latestGainInGainY3Y5 : -16.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Reading"}),
	school  			 : db.schools.findOne({name : "St. Alyssa College"}),
	latestY3   			 : 440.65,  
	latestY5   			 : 494.65,
	latestY7   			 : 542.35,
	latestY9   			 : 559.52,
	rawGainY3Y5 		 : 49.63,
	factoredGainY3Y5 	 : 62.47,
	glgY3Y5 			 : 125.86,
	latestGainInGainY3Y5 : -27.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Reading"}),
	school  			 : db.schools.findOne({name : "St. Ana Paloma College"}),
	latestY3   			 : 363.38,  
	latestY5   			 : 431.55,
	latestY7   			 : 596.93,
	latestY9   			 : 510.20,
	rawGainY3Y5 		 : 64.81,
	factoredGainY3Y5 	 : 97.54,
	glgY3Y5 			 : 150.50,
	latestGainInGainY3Y5 : -13.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Reading"}),
	school  			 : db.schools.findOne({name : "St. Brieanna College"}),
	latestY3   			 : 375.20,  
	latestY5   			 : 445.50,
	latestY7   			 : 503.93,
	latestY9   			 : 546.08,
	rawGainY3Y5 		 : 71.98,
	factoredGainY3Y5 	 : 92.93,
	glgY3Y5 			 : 129.10,
	latestGainInGainY3Y5 : -18.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Grammar & Punctuation"}),
	school  			 : db.schools.findOne({name : "St. Cameron College"}),
	latestY3   			 : 380.07,  
	latestY5   			 : 476.02,
	latestY7   			 : 500.98,
	latestY9   			 : 530.17,
	rawGainY3Y5 		 : 83.61,
	factoredGainY3Y5 	 : 90.94,
	glgY3Y5 			 : 108.77,
	latestGainInGainY3Y5 : 15.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Grammar & Punctuation"}),
	school  			 : db.schools.findOne({name : "St. Cesar College"}),
	latestY3   			 : 428.07,  
	latestY5   			 : 519.55,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 76.38,
	factoredGainY3Y5 	 : 67.19,
	glgY3Y5 			 : 87.96,
	latestGainInGainY3Y5 : 25.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Grammar & Punctuation"}),
	school  			 : db.schools.findOne({name : "St. Ciara College"}),
	latestY3   			 : 439.20,  
	latestY5   			 : 479.77,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 39.03,
	factoredGainY3Y5 	 : 54.88,
	glgY3Y5 			 : 140.60,
	latestGainInGainY3Y5 : -59.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Grammar & Punctuation"}),
	school  			 : db.schools.findOne({name : "St. Danae College"}),
	latestY3   			 : 408.45,  
	latestY5   			 : 498.93,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 80.25,
	factoredGainY3Y5 	 : 77.96,
	glgY3Y5 			 : 97.15,
	latestGainInGainY3Y5 : -2.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Grammar & Punctuation"}),
	school  			 : db.schools.findOne({name : "St. Darren College"}),
	latestY3   			 : 383.90,  
	latestY5   			 : 475.10,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 74.22,
	factoredGainY3Y5 	 : 86.89,
	glgY3Y5 			 : 117.06,
	latestGainInGainY3Y5 : 35.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Numeracy"}),
	school  			 : db.schools.findOne({name : "St. Denisee College"}),
	latestY3   			 : 429.70,  
	latestY5   			 : 536.20,
	latestY7   			 : 565.63,
	latestY9   			 : 586.90,
	rawGainY3Y5 		 : 74.30,
	factoredGainY3Y5 	 : 68.07,
	glgY3Y5 			 : 91.61,
	latestGainInGainY3Y5 : 33.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Numeracy"}),
	school  			 : db.schools.findOne({name : "St. Eduardo College"}),
	latestY3   			 : 400.65,  
	latestY5   			 : 473.25,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 72.67,
	factoredGainY3Y5 	 : 83.52,
	glgY3Y5 			 : 114.92,
	latestGainInGainY3Y5 : 16.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Numeracy"}),
	school  			 : db.schools.findOne({name : "St. Esbeidy College"}),
	latestY3   			 : 411.02,  
	latestY5   			 : 471.20,
	latestY7   			 : 506.35,
	latestY9   			 : 533.17,
	rawGainY3Y5 		 : 51.71,
	factoredGainY3Y5 	 : 77.19,
	glgY3Y5 			 : 149.27,
	latestGainInGainY3Y5 : 7.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Numeracy"}),
	school  			 : db.schools.findOne({name : "St. Hadley College"}),
	latestY3   			 : 420.35,  
	latestY5   			 : 533.80,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 83.10,
	factoredGainY3Y5 	 : 71.16,
	glgY3Y5 			 : 85.63,
	latestGainInGainY3Y5 : 58.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Persuasive Writing"}),
	school  			 : db.schools.findOne({name : "St. Aaron College"}),
	latestY3   			 : 412.48,  
	latestY5   			 : 515.73,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 84.38,
	factoredGainY3Y5 	 : 72.16,
	glgY3Y5 			 : 85.52,
	latestGainInGainY3Y5 : 31.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Persuasive Writing"}),
	school  			 : db.schools.findOne({name : "St. Victor College"}),
	latestY3   			 : 419.60,  
	latestY5   			 : 517.95,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 61.04,
	factoredGainY3Y5 	 : 57.99,
	glgY3Y5 			 : 95.00,
	latestGainInGainY3Y5 : -17.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Persuasive Writing"}),
	school  			 : db.schools.findOne({name : "St. Alexander College"}),
	latestY3   			 : 421.75,  
	latestY5   			 : 515.65,
	latestY7   			 : 0,
	latestY9   			 : 0,
	rawGainY3Y5 		 : 96.36,
	factoredGainY3Y5 	 : 76.22,
	glgY3Y5 			 : 79.10,
	latestGainInGainY3Y5 : 25.00
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Spelling"}),
	school  			 : db.schools.findOne({name : "St. Alyssa College"}),
	latestY3   			 : 431.63,  
	latestY5   			 : 496.55,
	latestY7   			 : 533.00,
	latestY9   			 : 559.50,
	rawGainY3Y5 		 : 65.79,
	factoredGainY3Y5 	 : 67.10,
	glgY3Y5 			 : 102.00,
	latestGainInGainY3Y5 : 0
})
db.schoolsubjects.insert({
	subject				 : db.subjects.findOne({subject : "Spelling"}),
	school  			 : db.schools.findOne({name : "St. Ana Paloma College"}),
	latestY3   			 : 365.05,  
	latestY5   			 : 448.18,
	latestY7   			 : 488.25,
	latestY9   			 : 511.55,
	rawGainY3Y5 		 : 75.94,
	factoredGainY3Y5 	 : 96.91,
	glgY3Y5 			 : 127.62,
	latestGainInGainY3Y5 : 0
})