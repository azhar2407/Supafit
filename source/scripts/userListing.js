var _UL_JSON_DATA;
function _getULContent(){
	var url = _API_BASE + '/users/all';
	var token = localStorage.token;
	var httpObj = _getHttpObject();
	httpObj = _openGetConnection(httpObj, url);
	var headerVal = 'Bearer ' + token;
	console.log(headerVal);
	httpObj = _setHeaders(httpObj, 'Authorization', headerVal);
	_executeUL(httpObj);
	
	/*json = [
		{
			"imageURL": "/resources/images/BrandImage.png",
			"name": "Anuj Kumar",
			"phone": "9999999999",
			"email": "acb@gmail.com",
			"programType": "Program Medium",
			"startDate": "any date"
		},
		{
			"imageURL": "/resources/images/BrandImage.png",
			"name": "Anuj Kumar",
			"phone": "9999999999",
			"email": "acb@gmail.com",
			"programType": "Program Medium",
			"startDate": "any date"
		},
		{
			"imageURL": "/resources/images/BrandImage.png",
			"name": "Anuj Kumar",
			"phone": "9999999999",
			"email": "acb@gmail.com",
			"programType": "Program Medium",
			"startDate": "any date"
		},
		{
			"imageURL": "/resources/images/BrandImage.png",
			"name": "Anuj Kumar",
			"phone": "9999999999",
			"email": "acb@gmail.com",
			"programType": "Program Medium",
			"startDate": "any date"
		}
		]

		_populateContent(json);*/
}

function _populateContent(jsonData){
	_UL_JSON_DATA = jsonData;
	console.log(jsonData);
	var contentDiv = document.getElementById('ul-content-div');

	for(var i = 0; i < jsonData.length; i++){
		var rowDiv = document.createElement('div');
		rowDiv.className = 'row';
		rowDiv.className += ' ul-row-style';
		contentDiv.appendChild(rowDiv); 

		var imageDiv = document.createElement('div');
		imageDiv.className = 'col-md-1';
		imageDiv.id = i.toString();
		imageDiv.onclick = function() {_openUserProfile(i); };
		
		var imgTag = document.createElement('img');
		imgTag.src = jsonData[i].imageURL;
		imgTag.className = ' ul-profile-image-style';
		imageDiv.appendChild(imgTag);

		rowDiv.appendChild(imageDiv); 

		var infoDiv = document.createElement('div');
		infoDiv.className = 'col-md-4';
		infoDiv.className += '';

		var nameDiv = document.createElement('div');
		nameDiv.innerHTML = jsonData[i].name
		infoDiv.appendChild(nameDiv);

		var phoneDiv = document.createElement('div');
		phoneDiv.innerHTML = jsonData[i].phone;
		infoDiv.appendChild(phoneDiv);

		var emailDiv = document.createElement('div');
		emailDiv.innerHTML = jsonData[i].email;
		infoDiv.appendChild(emailDiv);

		rowDiv.appendChild(infoDiv);

		var planDiv = document.createElement('div');
		planDiv.className = 'col-md-4';
		planDiv.className += '';

		var programDiv = document.createElement('div');
		programDiv.innerHTML = jsonData[i].programType;
		planDiv.appendChild(programDiv);

		var dateDiv = document.createElement('div');
		dateDiv.innerHTML = jsonData[i].startDate;
		planDiv.appendChild(dateDiv);

		rowDiv.appendChild(planDiv);

		var chatDiv = document.createElement('div');
		chatDiv.className = 'col-md-1';
		chatDiv.className += '';
		chatDiv.innerHTML = '<img class="chat-image-class" src="/resources/images/chat.png">'
		rowDiv.appendChild(chatDiv);

		var calDiv = document.createElement('div');
		calDiv.className = 'col-md-1';
		calDiv.className += '';
		calDiv.innerHTML = '<img class="chat-cal-class" src="/resources/images/cal.png">'
		rowDiv.appendChild(calDiv);

		var calDiv = document.createElement('div');
		calDiv.className = 'col-md-1';
		calDiv.className += '';
		calDiv.innerHTML = '<img class="chat-cal-class" src="/resources/images/info.png">'
		rowDiv.appendChild(calDiv);
	}
}

function _openUserProfile(index){
	alert(index);
	var userJson = _UL_JSON_DATA[index];
	var userId = userJson.id;
	localStorage.userId = userId;
	window.location = '/profileViewPage.html';
}