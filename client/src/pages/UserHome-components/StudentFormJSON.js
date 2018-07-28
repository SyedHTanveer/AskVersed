module.exports = {
    	answered: [
    		{
          "Ethnicity":[],
    			"Gender":""
        },
        {
          "College_acceptance":"",
          "College_accepted":[],
          "College_extra_programs":"",
          "College_legacy":"",
          "College_major":[],
          "College_resources":[],
          "College_school":"",
          "College_year":""
    		},
        {
          "hs_academic_achievements":"",
          "hs_academic_strengths":"",
          "hs_ap":"",
          "hs_ib":"",
          "hs_other_Awards":"",
          "hs_size":"",
          "hs_tests":"",
          "hs_type":""
        }
    	],
    	page: 0,
    	page_max: 1,
    	questions: [
    		[
		    	{
		    		desc: "",
		    		id: "Gender",
		    		question: "Gender",
		    		type: "dropdown",
		    		values: ["Male", "Female", "Other", "Prefer not to answer"]
		    	},
		    	{
		    		desc: "",
					  id: "Ethnicity",
					  question: "Ethnicity (check all that apply)",
		    		type: "checkbox",
		    		values: ["White", "Black/ African American", "Hispanic/ Latino", "Native American", "Asian", "Pacific Islander", "Other", "Prefer not to answer"]
		    	},
		    	{
  					desc: "Acceptance",
  					id: "description",
  					question: "College (currently attending or graduated from)",
		    		type: "dropdown",
		    		values: ["Amherst College", "Bard College", "Barnard College", "Bates College", "Boston University", "Bowdoin College", "Brandeis University", "Brown University", "Bryn Mawr College", "Bucknell University", "California Institute of Technology", "Carleton College", "Carnegie Mellon University", "Case Western Reserve University", "Centre College", "Claremont McKenna College", "Colby College", "Colgate University", "College of the Holy Cross","College of William &amp; Mary", "Colorado College", "Columbia University", "Connecticut College", "Cornell University", "Dartmouth College", "Davidson College", "Dickinson College", "Duke University", "Emory University", "Franklin and Marshall College", "Georgetown University", "Georgia Institute of Technology", "Grinnell College", "Hamilton College", "Harvard University", "Harvey Mudd College", "Haverford College", "Johns Hopkins University", "Kenyon College", "Lafayette College", "Lehigh University", "Macalester College", "Massachusetts Institute of Technology", "Middlebury College", "Mount Holyoke College", "New York University", "Northeastern University", "Northwestern University", "Oberlin College", "Occidental College", "Olin College", "Pennsylvania State University--University Park", "Pepperdine University", "Pitzer College", "Pomona College", "Princeton University", "Rensselaer Polytechnic Institute", "Rhodes College", "Rice University", "Scripps College", "Sewanee--University of the South", "Skidmore College", "Smith College", "Soka University of America", "Stanford University", "Swarthmore College", "Trinity College", "Tufts University", "Tulane University", "Union College", "United States Air Force Academy", "United States Military Academy", "United States Naval Academy", "University of California--Berkeley", "University of California--Davis", "University of California--Irvine", "University of California--Los Angeles", "University of California--San Diego", "University of California--Santa Barbara", "University of Chicago", "University of Florida", "University of Illinois--Urbana-Champaign", "University of Miami", "University of Michigan--Ann Arbor", "University of North Carolina--Chapel Hill", "University of Notre Dame", "University of Pennsylvania", "University of Richmond", "University of Rochester", "University of Southern California", "University of Virginia", "University of Washington", "University of Wisconsin--Madison", "Vanderbilt University", "Vassar College", "Villanova University", "Wake Forest University", "Washington and Lee University", "Washington University in St. Louis", "Wellesley College", "Wesleyan University", "Whitman College", "Williams College", "Yale University"]
		    	},
		    	{
		    		desc: "",
					  id: "College_year",
					  question: "Class of (Year)",
		    		type: "dropdown",
		    		values: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2010","2029","2030"]
		    	},
		    	{
		    		desc: "",
					  id: "College_extra_programs",
					  question: "School/Program within College",
		    		type: "textbox",
		    		values: []
		    	},
		    	{
		    		desc: "",
		    		id: "College_major",
		    		question: "Major (if known) (check all that apply)",
		    		type: "checkbox",
		    		values: ["Accounting","Aerospace Engineering","African-American Studies","Agriculture ","American Studies","Ancient History","Animal Science","Anthropology","Applied Mathematics","Archaeology","Architecture","Art","Art History","Asian-American Studies","Astronomy and Astrophysics","Biochemistry","Biology","Biomedical Engineering","Business","Chemical Engineering","Chemistry","Cinema and Media Studies","Civil Engineering","Classical Studies","Communications","Comparative Literature","Computer Engineering","Computer Information Systems","Computer Science","Creative Writing","Criminology","Data Science","Design ","Earth Science","East Asian Studies","Economics","Education","Electrical Engineering","Engineering","English","Entrepreneurship","Environmental Engineering","Environmental Studies","Film and Media Studies","Finance","Fine Arts","Foreign Languages","Forestry","Gender Studies","Genetics","Geology","Graphic Design","Health Care Management","Health Sciences","History","Hospitality Management","Humanities","International Business","International Development","International Relations","Journalism","Latin American Studies","Legal Studies and Business Ethics","Linguistics","Literature","Management","Marketing","Materials Science and Engineering","Mathematics","Mechanical Engineering","Middle Eastern Studies","Music","Mythology and Folklore","Neuroscience","Nuclear Engineering","Nursing","Nutrition Science","Oceanography","Performing Arts","Pharmacology","Philosophy","Photography","Physics","Political Science","Pre-Law","Pre-Med","Psychology","Religious Studies","Russian and East European Studies","Social Work","Sociology","Software Engineering","Statistics","Theater Arts","Women's Studies","Zoology"]
		    	},
		    	{
		    		desc: "",
		    		id: "College_acceptance",
		    		question: "Type of Acceptance",
		    		type: "dropdown",
		    		values: ["Early, Accepted", "Early, Deffered, Accepted", "Early, Deffered, Waitlisted, Accepted", "Rolling Accepted", "Regular Accepted", "Regular, Waitlisted, Accepted", "Transfer", "Other"]
		    	},
		    	{
		    		desc: "",
		    		id: "College_accepted",
		    		question: "Other Colleges admitted to (check all that apply)",
		    		type: "checkbox",
		    		values:["Amherst College", "Bard College", "Barnard College", "Bates College", "Boston University", "Bowdoin College", "Brandeis University", "Brown University", "Bryn Mawr College", "Bucknell University", "California Institute of Technology", "Carleton College", "Carnegie Mellon University", "Case Western Reserve University", "Centre College", "Claremont McKenna College", "Colby College", "Colgate University", "College of the Holy Cross","College of William &amp; Mary", "Colorado College", "Columbia University", "Connecticut College", "Cornell University", "Dartmouth College", "Davidson College", "Dickinson College", "Duke University", "Emory University", "Franklin and Marshall College", "Georgetown University", "Georgia Institute of Technology", "Grinnell College", "Hamilton College", "Harvard University", "Harvey Mudd College", "Haverford College", "Johns Hopkins University", "Kenyon College", "Lafayette College", "Lehigh University", "Macalester College", "Massachusetts Institute of Technology", "Middlebury College", "Mount Holyoke College", "New York University", "Northeastern University", "Northwestern University", "Oberlin College", "Occidental College", "Olin College", "Pennsylvania State University--University Park", "Pepperdine University", "Pitzer College", "Pomona College", "Princeton University", "Rensselaer Polytechnic Institute", "Rhodes College", "Rice University", "Scripps College", "Sewanee--University of the South", "Skidmore College", "Smith College", "Soka University of America", "Stanford University", "Swarthmore College", "Trinity College", "Tufts University", "Tulane University", "Union College", "United States Air Force Academy", "United States Military Academy", "United States Naval Academy", "University of California--Berkeley", "University of California--Davis", "University of California--Irvine", "University of California--Los Angeles", "University of California--San Diego", "University of California--Santa Barbara", "University of Chicago", "University of Florida", "University of Illinois--Urbana-Champaign", "University of Miami", "University of Michigan--Ann Arbor", "University of North Carolina--Chapel Hill", "University of Notre Dame", "University of Pennsylvania", "University of Richmond", "University of Rochester", "University of Southern California", "University of Virginia", "University of Washington", "University of Wisconsin--Madison", "Vanderbilt University", "Vassar College", "Villanova University", "Wake Forest University", "Washington and Lee University", "Washington University in St. Louis", "Wellesley College", "Wesleyan University", "Whitman College", "Williams College", "Yale University"]
		    	}
	    	],
	    	[
		    	{
		    		desc: "",
		    		id: "College_resources",
		    		question: "College Admissions Resources Used (check all that apply)",
		    		type: "checkbox",
		    		values: ["High School Guidance Counselors","Private College Counselor","SAT/ACT Prep Programs","SAT II Prep Program","Essay Guidance","Online Admissions Resources","Private SAT Tutor","Private SAT II Prep Tutor","ACT Prep Program","Private ACT Tutor","Other"]
		    	},
		    	{
		    		desc: "Please use a separate line for each addition",
		    		id: "hs_type",
		    		question: "High School Type (check all that apply)",
		    		type: "dropdown",
		    		values: ["Public","Private","Boarding","Magnet/Specialized","Charter","International","Parochial","Single-sex","Homeschooled","Other"]
		    	},
		    	{
		    		desc: "",
		    		id: "hs_size",
		    		question: "General High School Guidance",
		    		type: "dropdown",
		    		values: ["< 100", "100-249", "249-499", "500-999", ">1,000"]
		    	}
	    	]
    	]
    }
