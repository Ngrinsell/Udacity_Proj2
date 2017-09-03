var bio = {
    "name" : "Nicole Grinsell",
    "role" : "Software Developer",
    "welcomeMessage" : "Engaging My Passions.",
    "biopic" : "images/profileImage.png",
    "contacts" : {
        "mobile" : "904-806-8758",
        "email" : "nicole@ngrinsell.com",
        "github" : "ngrinsell",
        "twitter" : "@grinselln",
        "location" : "Sanford, FL"
    },
    "skills" : ["Programming", "Graphic Design", "Creative Writing", "Web Design"]
}


var work = {
    "jobs": [
        {
            "employer" : "AceApplications",
            "title" : "Software Developer",
            "location": "Orlando, FL",
            "dates" : "01/2015 - Present",
            "description" : "Back End, Front End, Graphics, and Teaching tasks"   
        },
        {
            "employer" : "UCF",
            "title" : "Venture Coach",
            "location": "Orlando, FL",
            "dates" : "08/2015 - Present",
            "description" : "Coaching students on their start up businesses."   
        },
        {
            "employer" : "Freelance",
            "title" : "Web Developer",
            "location": "Orlando, FL",
            "dates" : "01/2017 - Present",
            "description" : "Offering basic web development and graphic design skills."  
        },
        {
            "employer" : "Nicole Grinsell",
            "title" : "Etsy Store Owener",
            "location": "Orlando, FL",
            "dates" : "01/2017 - Present",
            "description" : "Selling pin back buttons and spray paint art."  
        },
        {
            "employer" : "VyStar",
            "title" : "Teller",
            "location": "Jacksonville, FL",
            "dates" : "05/2010 - 05/2012",
            "description" : "Selling pin back buttons and spray paint art."   
        }
    ] 
}

var projects = {
    "projects": [
        {
            "title" : "Resume Website",
            "dates" : "01/2017",
            "description" : "Basic resume site to secure my place on the web!",
            "images" : ["images/suit.png", "images/paper.png"]
        },
        {
            "title" : "World Class Gymnastics Website Redesign",
            "dates" : "01/2017 - Present",
            "description" : "Redesign of an older website.",
            "images" : ["images/gymnastics.png"]
        },
        {
            "title" : "Etsy Store Website",
            "dates" : "01/2017 - Present",
            "description" : "A informational site that aims to become ecommerce.",
            "images" : ["images/art.png", "images/crafts.png"]
        },
        {
            "title" : "2D Dungeon Game",
            "dates" : "05/2015",
            "description" : "2D dungeon game that randomizes the deungon on every play.",
            "images" : ["images/videoGame.png", "images/code.png"]
        }
    ] 
}



var education = {
    "schools" : [
        {
            "name" : "Univeristy of Central Florida",
            "location" : "Orlando, FL",
            "degreeDates" : "May 2018",
            "majors" : ["Computer Science"],
            "minors" : ["Mathematics", "Digital Media"]
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Web Development",
            "school" : "Udacity",
            "dates" : "06/2017 - 12/2017",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
}

/*build the page*/
/*Name and Position*/
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", "Nicole Grinsell");
$("#header").prepend(formattedName);

/*Contact Points*/
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

/*Photo and Message*/
var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedImage);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

/*Skills*/
if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill;  
    bio.skills.forEach(function(skills) {
        formattedSkill = HTMLskills.replace("%data%", skills);
        $("#skills").append(formattedSkill);
    });
}

/*work*/
work.display = function(){
    if(work.jobs.length > 0){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer, formattedTitle, formattedDates, formattedLoc, formattedDescription;  
        work.jobs.forEach(function(jobs) {
            formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
            formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
            $(".work-entry").append(formattedEmployer + " " + formattedTitle);
            formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
            $(".work-entry").append(formattedDates);
            formattedLoc = HTMLworkLocation.replace("%data%", jobs.location);
            $(".work-entry").append(formattedLoc);
            formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
            $(".work-entry").append(formattedDescription);
        });
    }
}

/*projects*/
projects.display = function(){
    if(projects.projects.length > 0){
        $("#projects").append(HTMLprojectStart);

        var formattedPTitle, formattedPDates, formattedPDescription, formattedPImages;  
        projects.projects.forEach(function(projects) {
            formattedPTitle = HTMLprojectTitle.replace("%data%", projects.title);
            $(".project-entry").append(formattedPTitle);
            formattedPDates = HTMLprojectDates.replace("%data%", projects.dates);
            $(".project-entry").append(formattedPDates);
            formattedPDescription = HTMLprojectDescription.replace("%data%", projects.description);
            $(".project-entry").append(formattedPDescription);

            projects.images.forEach(function(images){
                formattedPImages = HTMLprojectImage.replace("%data%", images);
                $(".project-entry").append(formattedPImages);
            });


        });
    }
}

/*education - schools*/
education.display = function(){
if(education.schools.length > 0){
    $("#education").append(HTMLschoolStart);
    
    var formattedSTitle, formattedSLocation, formattedSDate, formattedSMajor, formattedSMinor;  
    education.schools.forEach(function(schools) {
        formattedSTitle = HTMLschoolName.replace("%data%", schools.name);
        $(".education-entry").append(formattedSTitle);
        formattedSLocation = HTMLschoolLocation.replace("%data%", schools.location);
        $(".education-entry").append(formattedSLocation);
        formattedSDate = HTMLschoolDates.replace("%data%", schools.degreeDates);
        $(".education-entry").append(formattedSDate);
        
        schools.majors.forEach(function(majors){
            formattedSMajor = HTMLschoolMajor.replace("%data%", majors);
            $(".education-entry").append(formattedSMajor);
        });
        
        schools.minors.forEach(function(minors){
            formattedSMinor = HTMLschoolMinor.replace("%data%", minors);
            $(".education-entry").append(formattedSMinor);
        });
    });
}

/*education - online courses*/
    if(education.onlineCourses.length > 0){
        $("#education").append(HTMLonlineClasses);


        var formattedOTitle, formattedOSchool, formattedODates, formattedOURL;  
        education.onlineCourses.forEach(function(courses) {
            formattedOTitle = HTMLonlineTitle.replace("%data%", courses.title);
            formattedOSchool = HTMLonlineSchool.replace("%data%", courses.school);
            $(".education-entry").append(formattedOTitle + " " + formattedOSchool);
            formattedODates = HTMLonlineDates.replace("%data%", courses.dates);
            $(".education-entry").append(formattedODates);
            formattedOURL = HTMLonlineURL.replace("%data%", courses.url);
            $(".education-entry").append(formattedOURL);
        });
    }
}

/*footer contact points*/
/*Contact Points*/
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

/*display sections*/
work.display();
projects.display();
education.display();

