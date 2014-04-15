db.respondent.insert(
	[{
		firstNames : "William",
		surname: "Smith",
		email: "William@gmail.com",
		ref: "REF101",
		address:{}
	},
	{
		firstNames : "Dean",
		surname: "Fisher",
		email: "Ddan@gmail.com",
		ref: "REF102",
		address:{}
	}]
);

db.poll.insert(
[{
	pollId : 101,
	title : "Local council's review",
	description: "A poll to assess current local council's performance",
	startDate: "2014-04-14",
	endDate: "2014-04-20",
	questions:[
		        {
	        		questionId: 11,
	                question : "Are you interested in your local Council’s decisions?",
	                options : ["Yes", "No"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 12,
	                question : "Are you satisfied with your local Council’s efforts with respect to waste management and sanitation?",
	                options : ["Yes", "No"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 13,
	                question : "Are you satisfied with your local Council’s efforts with respect to educational opportunities?",
	                options : ["Yes", "No"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 14,
	                question : "Are you satisfied with your local Council’s efforts with respect to public safety?",
	                options : ["Yes", "No"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 15,
	                question : "Are you satisfied with your local Council’s efforts with respect healthcare provision?",
	                options : ["Yes", "No"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 16,
	                question : "Would you like to get involved in local Council activities?",
	                options : ["Yes", "No"],
	                format: "YES_NO"
		        }
		]
}]
);

db.response.insert(
[{
	pollId:101,
	responses : [
		{
			questionId: 11,
			response : "Yes",
			correspondentRef:"REF101"	
		},
		{
			questionId: 12,
			response : "No",
			correspondentRef:"REF101"	
		},
		{
			questionId: 13,
			response : "Yes",
			correspondentRef:"REF101"	
		},
		{
			questionId: 14,
			response : "Yes",
			correspondentRef:"REF101"	
		},
		{
			questionId: 15,
			response : "Yes",
			correspondentRef:"REF101"	
		},
		{
			questionId: 16,
			response : "Yes",
			correspondentRef:"REF101"	
		},
		{
			questionId: 11,
			response : "Yes",
			correspondentRef:"REF102"	
		},
		{
			questionId: 12,
			response : "Yes",
			correspondentRef:"REF102"	
		},
		{
			questionId: 13,
			response : "Yes",
			correspondentRef:"REF102"	
		},
		{
			questionId: 14,
			response : "Yes",
			correspondentRef:"REF102"	
		},
		{
			questionId: 15,
			response : "No",
			correspondentRef:"REF102"	
		},
		{
			questionId: 16,
			response : "No",
			correspondentRef:"REF102"	
		}
	]
}]
);