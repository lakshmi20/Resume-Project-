/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 
 var name = "Lakshmi Subramanian";
 var role = "Graduate Student at Carnegie Mellon University";
 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 var skills = ["Java", "Objective-C", "Express-Node.js", "SAP-ABAP", "HTML", "JavaScript", "CSS", "XML", "PHP","AngularJS","MySQL","Software Methodologies (AgileUP, Scrum, OpenUP)"];
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 //$("#main").append(skills[0]);
 //$("#main").append(skills[1]);

 
 var bio = {
	"name": "Lakshmi Subramanian",
	"role": "Software Engineer",
	"contacts": {
		"mobile"   : "408-718-7426",
		"email"    : "lakshmis@cmu.edu",
		"github"   : "https://www.github.com/lakshmi20",
		"linkedIn" : "https://www.linkedin.com/in/lakshmi-subramanian",
		"location" : "Pittsburgh"

	},
	"welcomeMessage" : "Welcome to my page",
	"skills": [
	"Java",  "Objective-C", "Express-Node.js",  "SAP-ABAP", "HTML", "JavaScript", "CSS","PHP", "AngularJS","MySQL","AWS-EC2", "Elastic Load Balancing", "RDS", "Redis", "S3","Software Methodologies (AgileUP, Scrum, OpenUP)"
	],
	"bioPic" : "images/aishu.jpg"

};

var contact = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(contact);
var email = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(email);
var linkedIn = HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn);	
$("#topContacts").append(linkedIn);		
var git = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(git);

var pic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(pic);

if(bio.skills.length > 0){
 
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[6]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[7]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[8]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[9]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[10]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[11]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[12]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[13]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[14]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[15]);
$("#skills").append(formattedSkill);

}



 
 var work = {};
 
 work.position = "Software Engineer";
 work.employer = "Infosys";
 work.years = 2;
 work.city = "hyderabad";
 
 
 var education = {
	"schools": [{
			"name": "Carnegie Mellon University",
			"city": "Pittsburgh PA",
			"degree": "Master of Science, School of Computer Science",
			"dates" : "Dec '16",
			"major" : "Software Engineering",
			"gpa": "3.5"

		}, {
			"name": "Anna University",
			"city": "Chennai, India",
			"degree": "Bachelor of Technology",
			"dates" :  "May '13",
			"major" : "Information Technology",
			"gpa": "7.6"

		}

	],

	"onlineCourses": [
	{
		"title": "Cloud Computing with Amazon Web Services",
		"school": "Udemy",
		"url": "ude.my/UC-EM8W4J2P"
	},
	{
		"title": "Programming for Everybody (Python)",
		"school": "University of Michigan in Coursera",
		"url": "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=972505"
	},
	{
		"title": "Quick Start with AngularJS",
		"school": "Udemy",
		"url": "http://ude.my/UC-0NTT4YU9"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"url": ""
	},
	{
		"title": "JWeb Technology Fundamentals",
		"school": "Lynda.com",
		"url": "https://www.lynda.com/Web-Foundations-tutorials/Web-Technology-Fundamentals/158666-2.html?utm_source=linkedin&utm_medium=sharing&utm_campaign=certificate"
	}

	]
};


var work = {
"jobs": [{
			"employer": "Proctor & Gamble (Client), Infosys Limited",
			"title": "Systems Engineer",
			"dates" : "Oct '13 - June '15",
			"location": "Hyderabd, India",
			"description": "Designed and developed an upload/ download tool for users in North America Region to maintain shelf life and stop ship lead time for the products. Designed and developed a product search web service to make the search for products easier and more userfriendly."

		} /*{
			"employer": "Box",
			"title": "Assosiate Software Engineer",
			"dates" : "2013-2015",
			"location": "San Fransisco",
			"description": "Full Stack Developer"


		}*/

	]
	
	


};
var projects = {
"projects": [{
			"title": "Triple Check-Image Originality Software",
			"dates" : "May ’16 – Dec ‘16",
			"description": "An application, developed in java, to check the open source compliance of all the images in a given software against 152 million images(currently) in a repository. Identified an algorithm(blockhash) to convert all the images into fingerprints.	Completed generating fingerpirnts and produced result of comparison within a minute"

		}, {
			"title": "FoodSteps iOS Application",
			"dates" : "May ’16 – Aug ‘16",
			"description": "Designed and developed RESTful web APIs using Express-Node.js for a retail store like Amazon.Used MySQL as backend and elastic search for efficient searches.Catered to the system’s availability by masking instance failures in AWS using Auto Scaling group and load balancers. Handled 10,000 concurrent users and a response time of 150 ms."


		},
		{
			"title": "E-Commerce Web Application",
			"dates" : "May ’16 – Aug ‘16",
			"description": "Developed a food sharing app that allows users to share their favorite food picture and reviews with their Facebook friends. App provides location integration to show nearby restaurants, real time notifications of friend’s recommendations along with Yelp’s rating of the restaurant. Used Firebase as backend database, Facebook SDK for login and friend’s retrieval, Yelp API, MapKit and CoreLocation Framework to show the restaurant in a Map View, Eddy Stone and iBeacon for real time notifications."


		},
		{
			"title": "University Admission Registration Web Application",
			"dates" : "Jul ’16 – Apr ‘16",
			"description": "Developed an application system for admissions for graduate studies for a university.Allows students to login and fill out the personal details, educational details, Upload resumes, SOP, mark sheets and do an online fee payment.Allows admin to access the application, sort and filter the application and provide call for interviews.Used PHP and MYSQL, integrated with Bill Desk for fee payment.Worked as a Project Manager, negotiated the requirements with the client, estimated and managed a team of 4 and tracked their progress."


		}

	]

};


function displayWork(){

for(job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);
	var formWorkExp      = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formWorkTitle    = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmpTitle = formWorkExp  + formWorkTitle;
	$(".work-entry:last").append(formattedEmpTitle);
	var formattedDates    = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	var formWorkDesc     = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formWorkDesc);

}

}

displayWork();

function displayEducation(){

for(edu in education.schools) {

	$("#education").append(HTMLschoolStart);
	var formattedSchoolName     = HTMLschoolName.replace("%data%",education.schools[edu].name);
	$(".education-entry:last").append(formattedSchoolName);
	var formattedDates    = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
		$(".education-entry:last").append(formattedDegree);
	var formattedLocation     = HTMLschoolLocation.replace("%data%",education.schools[edu].city);
		$(".education-entry:last").append(formattedLocation);
	var formattedMajor    = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
		$(".education-entry:last").append(formattedMajor);
	

}
$(".education-entry:last").append(HTMLonlineClasses);
for(courses in education.onlineCourses){
	
	var formattedCourseTitle   = HTMLonlineTitle.replace("%data%",education.onlineCourses[courses].title);
		$(".education-entry:last").append(formattedCourseTitle);

	var formattedCourseSchool   = HTMLonlineSchool.replace("%data%",education.onlineCourses[courses].school);
		$(".education-entry:last").append(formattedCourseSchool);
		
	var formattedCourseURL   = HTMLonlineURL.replace("%data%",education.onlineCourses[courses].url);
		$(".education-entry:last").append(formattedCourseURL);
		
}

}

displayEducation();


$(document).click(function(loc){

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

function locationizer(work_obj){

	var locationArray = [];

	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}
console.log(locationizer(work));

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);


projects.display = function(){

 // function display(){	

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDesc);


	}
}

projects.display();

$("#mapDiv").append(googleMap);	



//$("workExperience").append(work.employer);
 
 
 
  