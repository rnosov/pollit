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
	                options : ["YES", "NO"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 12,
	                question : "Are you satisfied with your local Council’s efforts with respect to waste management and sanitation?",
	                options : ["YES", "NO"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 13,
	                question : "Are you satisfied with your local Council’s efforts with respect to educational opportunities?",
	                options : ["YES", "NO"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 14,
	                question : "Are you satisfied with your local Council’s efforts with respect to public safety?",
	                options : ["YES", "NO"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 15,
	                question : "Are you satisfied with your local Council’s efforts with respect healthcare provision?",
	                options : ["YES", "NO"],
	                format: "YES_NO"
		        },
		        {
	        		questionId: 16,
	                question : "Would you like to get involved in local Council activities?",
	                options : ["YES", "NO"],
	                format: "YES_NO"
		        }
		]
}]

[{
	pollId:101,
	responses : [
		{
			questionId: 11,
			response : "YES",
			correspondentRef:REF101	
		},
		{
			questionId: 12,
			response : "NO",
			correspondentRef:REF101	
		},
		{
			questionId: 13,
			response : "YES",
			correspondentRef:REF101	
		},
		{
			questionId: 14,
			response : "YES",
			correspondentRef:REF101	
		},
		{
			questionId: 15,
			response : "YES",
			correspondentRef:REF101	
		},
		{
			questionId: 16,
			response : "YES",
			correspondentRef:REF101	
		},
		{
			questionId: 11,
			response : "YES",
			correspondentRef:REF102	
		},
		{
			questionId: 12,
			response : "YES",
			correspondentRef:REF102	
		},
		{
			questionId: 13,
			response : "YES",
			correspondentRef:REF102	
		},
		{
			questionId: 14,
			response : "YES",
			correspondentRef:REF102	
		},
		{
			questionId: 15,
			response : "NO",
			correspondentRef:REF102	
		},
		{
			questionId: 16,
			response : "NO",
			correspondentRef:REF102	
		}
	]
}]