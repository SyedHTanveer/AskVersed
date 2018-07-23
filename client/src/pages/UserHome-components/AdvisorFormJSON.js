module.exports = {
    	answered: [
    		{
    			"city":"",
    			"country":"",
    			"description":"",
    			"languages":[],
    			"languages_other":"",
    			"mailing_address":"",
    			"name":"",
    			"phone_number":"",
    			"state":""
    
    			
    			

    		},
    		{
    			"advice_college_admissions_process":"",
    			"advice_college_admissions_process_other":"",
    			"advice_general_hs_guidance":"",
    			"advice_general_hs_guidance_other":"",
    			"advice_specific_hs_guidance":[],
    			"advice_specific_hs_guidance_other":"",
    			"hs_academic_ec_interests":[],
    			"sports":[],
    			"sports_other":""
    		},
    		{
    			"charge_30":"",
    			"charge_60":""
    		}
    	],
    	page: 0,
    	page_max: 2,
    	questions: [
    		[
		    	{
		    		desc: "This information will not be displayed publicly.",
		    		id: "name",
		    		question: "First and Last Name",
		    		type: "text",
		    		values: []
		    		
		    	},
		    	{
		    		desc: "Cell phone is only used for notifications and will not be shared.",
					id: "phone_number",
					question: "Phone Number",
		    		type: "text",
		    		values: []
		    	},
		    	{
					desc: "Please write an introductory paragraph highlighting your children’s academic and extracurricular paths. Any other information about you and your approach to/ learnings from college admissions process would be helpful as well.",
					id: "description",
					question: "Description about you",
		    		type: "text",
		    		values: [],
		    	},
		    	{
		    		desc: "Family residence during Students' high school years",
					id: "city",
					question: "Home City",
		    		type: "text",
		    		values: []
		    	},
		    	{
		    		desc: "Family residence during Students' high school years",
					id: "country",
					question: "Home Country (if not USA)",
		    		type: "dropdown",
		    		values: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', "Cote D'ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati','South Korea', 'Kuwait', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territory', 'Occupied', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and The South Sandwich Islands', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Province of China', 'Tajikistan', 'Tanzania', 'United Republic of', 'Thailand', 'Timor-leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Viet Nam',  'British Virgin Islands', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']
		    	},
		    	{
		    		desc: "Family residence during Students' high school years",
		    		id: "state",
		    		question: "Home State",
		    		type: "dropdown",
		    		values: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
		    	},
		    	{
		    		desc: "",
		    		id: "languages",
		    		question: "What languages are you comfortable advising in? (check all that apply)",
		    		type: "checkbox",
		    		values: ["English","Spanish","Chinese - Mandarin","Chinese - Cantonese","Tagalog","Vietnamese","Arabic","French","Korean","Russian","German","Haitian Creole","Hindi","Portugese","Italian","Polish","Urdu","Japanese","Persian","Gujarati","Telugu","Bengali","Tai-Kadai","Greek","Punjabi","Tamil","Armenian","Serbo-Croatian","Hebrew","Hmong","Bantu","Khmer","Navajo","Other"]
		    	},
		    	{
		    		desc: "Please add any other language not listed. Please use a separate line for each addition.",
		    		id: "languages_other",
		    		question: "Other language: please specify",
		    		type: "text",
		    		values: []
		    	},
		    	{
		    		desc: "Address will only be used to send checks",
		    		id: "mailing_address",
		    		question: "Mailing Address",
		    		type: "text",
		    		values: []
		    	}
	    	],
	    	[
		    	{
		    		desc: "",
		    		id: "advice_college_admissions_process",
		    		question: "College Admissions Process",
		    		type: "checkbox",
		    		values: ["Where and when to start?","How parents can be most helpful in the process","Choosing the right school/program for the student","General admissions process and timeline","Early action","Early decision","Restricted early action","Regular decision","Transferring college","Applying from high schools outside of the US","Working with private college counselors","Working with test prep tutors","DIY test prep","Application Essays","Working with essay coach","Selecting/managing recommenders","Touring schools","Communicating with prospective schools","Interview guidance","Interview - alumni vs. on campus","Sending supplemental material/information","Majoring and minoring","Declaring a Major vs. applying undeclared","Helping students cope with stress","Preserving positive parent/child relationship","Being deferred","Being waitlisted","Athletic recruiting","Scholarships (merit and need-based)","FAFSA","College savings plan"]
		    	},
		    	{
		    		desc: "Please use a separate line for each addition",
		    		id: "advice_college_admissions_process_other",
		    		question: "Other: please specify",
		    		type: "text",
		    		values: []
		    	},
		    	{
		    		desc: "",
		    		id: "advice_general_hs_guidance",
		    		question: "General High School Guidance",
		    		type: "text",
		    		values: ["Helping your child identify his/her interests","Choosing classes","Managing honors/AP class load","Study habits and organizational skills","Working with your child's school, teachers, and guidance counselors","Finding/hiring tutors","Extracurricular planning","Summer planning"]
		    	},
		    	{
		    		desc: "Please use a separate line for each addition",
		    		id: "advice_general_hs_guidance_other",
		    		question: "Other: please specify",
		    		type: "text",
		    		values: []
		    	},
		    	{
		    		desc: "",
		    		id: "advice_specific_hs_guidance",
		    		question: "Special Situations in High School",
		    		type: "checkbox",
		    		values: ["Gap year during high school","Gap year after high school","Transferring high school","Domestic move during high school","International move during high school","Accelerating/skipping grade","Repeating grade in high school","Homeschooling","Online High School","Learning differences","Health issues","Unique family situation"]		    	},
		    	{
		    		desc: "Please use a separate line for each addition",
		    		id: "advice_specific_hs_guidance_other",
		    		question: "Other: please specify",
		    		type: "text",
		    		values: []
		    	},
		    	{
		    		desc: "",
		    		id: "hs_academic_ec_interests",
		    		question: "High School Academic and Extracurricular Interest Categories",
		    		type: "checkbox",
		    		values: ["Aeronautics and Aerospace","Agriculture","Anthropology and Archaeology","Architecture","Art - Cartooning/illustration","Art - Digital/graphic design","Art - Fine art","Art - Photography","Art History","Business - Entrepreneurship","Business - General","Business - Hospitality Administration and Management","Business - Investment and Finance","Business - Sales and Marketing","Classics","Communications","Computer - Artificial Intelligence","Computer - Computer Programming/Coding","Computer - Game development","Computer - Information Technology","Computer - Web Development/Management","Creative Writing","Dance and Choreography","Debate Team","Economics","Education","Engineering - Biomedical / Bioengineering","Engineering - Chemical","Engineering - Civil","Engineering - Electrical and Computer Science","Engineering - Environmental","Engineering - General","Engineering - Geological","Engineering - Industrial","Engineering - Manufacturing","Engineering - Material Science","Engineering - Mechanical","Engineering - Nuclear","Engineering - Robotics","English Language and Literature","Fashion","Film, TV and Digital Media","Fine Art","Foreign Language and Linguistics","Forensic Science","Genetics","Geography","Government","History","Horticulture and Food Science","Humanities - General","Industrial Design","Interior Design","International Relations","Journalism","Landscape Design","Law","Library Science","Marine Biology and Ocean Science","Math - Competition track","Math - Research Track","Math - Theory Course Track","Medicine (Health and Medicine)","Meteorology","Music – Composition/ Conducting","Music – Instrumental","Music – Voice","Mythology and Folktales","Neuroscience","Paleontology","Philosophy","Poetry","Political Science","Psychology","Public Relations","Religion","Rhetoric","Science - Biochemistry","Science - Biophysics","Science - Cell Biology and Anatonmical Science","Science - Ecology and Evolution","Science - Molecular Biology","Science - Olympiad Track","Science - Physiology, Pathology","Science - Research Track","Screenplay Writing/ Playwriting","Sociology","Speech/Forensics Team","Theater/ Drama","Veterinary Science","Sports"]
		    	},
		    	{
		    		desc: "",
		    		id: "sports",
		    		question: "Sports Categories",
		    		type: "checkbox",
		    		values: ["Baseball","Basketball","Bowling","Cheerleading/ Competitive Spirits Squads","Cross Country","Dance Team","Diving","Equestrian","Fencing","Field Hockey","Flag Football","Football","Golf","Gymnastics","Hockey","Lacrosse","Other","Rowing","Rugby","Sailing","Skiing and Snowboarding","Slow Pitch Softball","Soccer","Softball","Squash","Surf","Swimming","Tennis","Track and Field - Indoor","Track and Field - Outdoor","Ultimate Frisbee","Volleyball","Water Polo","Weightlifting","Wrestling"]
		    	},
		    	{
		    		desc: "Please use a separate line for each addition",
		    		id: "sports_other",
		    		question: "Other: please specify",
		    		type: "text",
		    		values: []
		    	}
	    	],
	    	[
	    		{
		    		desc: "Changes will not be updated instantaneously, but will be updated weekly on the website.",
		    		id: "charge_30",
		    		question: "Rate for 30 mins",
		    		type: "text",
		    		values: []
		    	},
		    	{
		    		desc: "",
		    		id: "charge_60",
		    		question: "Rate for 60 mins",
		    		type: "text",
		    		values: []
		    	},
	    	]
    	]
    }