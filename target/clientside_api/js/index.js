var loginDiv = document.getElementById('loginAnchor');
loginDiv.onclick = function(){
	
	//alert('clicked');
	window.open('https://accounts.google.com/o/oauth2/auth?client_id=123556217739-apehor28t98mjkh0vomn1tcsrs0b181k.apps.googleusercontent.com&redirect_uri=http://localhost:8090/clientside_api/html/AuthCallBack.html&response_type=token&scope=https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/plus.profile.emails.read https://www.google.com/m8/feeds/&approval_prompt=force','authWindow', "height=500,width=500");
	return false;
}

var contactsDiv = document.getElementById('contactDIV');
contactsDiv.onclick = function(){
	
	
	return false;
}


function setOauthParams(oauthParamsPassed) {
	  this.oauthParams = oauthParamsPassed;
	  
}

angular.module('app', []).controller('myController', ['$scope','$http','$window', function myController1($scope,$http,$window) {
	
 	this.user = {name :"NITESH"};
 	this.user1 = "NITESH";
 	this.getUserContacts = function(){
 		var url = "https://www.google.com/m8/feeds/contacts/default/full?v=3.0&alt=json-in-script&callback=JSON_CALLBACK&access_token=" + $window.oauthParams.access_token;
 		var controllerRef = this;
 		console.log('URL = ' + url);
 		$http.jsonp(url)
 	     .success(
 	    		 function(response) {
 	    			alert('success from api call');
 	    			alert("success from api call . controllerRef refers to " + controllerRef + " inside success callback")
 	    			// $scope.names = response.records;
 	    			controllerRef.emailInfo = response.feed.entry;
 	    			controllerRef.userEmails = [];
 	    			for (i = 0; i < emailInfo.length; i++) { 
 	    			   console.log( (i+1) + "EMAIL :" + emailInfo[i].gd$email[0].address);
 	    			  controllerRef.userEmails[i] = emailInfo[i].gd$email[0].address;
 	    			}
 	    			//manangeEmails(this.data );
 	    		}
 	     )
 	     .error(function(response) {
  			alert('failure from api call' + response);
			// $scope.names = response.records;
		});
 		
 	}
 	 
 	
}

]

);


function manangeEmails(emails){
	
	
	
	
}

