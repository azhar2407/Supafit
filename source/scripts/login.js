var _API_BASE="http://54.200.113.97:8080/supafit-api";
var _TOKEN_RECEIVED;

function _validateCredentials(){
	var url = _API_BASE + "/signin/login";
	var email = document.forms['loginForm'].elements[0].value;
	var password = document.forms['loginForm'].elements[1].value;
	var User_Credentials = 'client_id:supafit-mobile-app,client_secret:SsUbJJio22nH3rgFf32eRFEF43dedc2wfc2ef_RF34wsdxSXQSCX34RDSdcsd,user_name:' + String(email) +',password:fKV6hakonpTLUr1YZos5MOLhnuk='; //_sha1Hash(String(password));
	var httpObj = _getHttpObject();
	httpObj = _openPostConnection(httpObj, url);
	httpObj = _setHeaders(httpObj, 'User_Credentials', User_Credentials);
	_executeLogin(httpObj);
}

function _extractResponse(resp){
	var responseJson = JSON.parse(resp);
	if(responseJson.hasOwnProperty('error')){
		alertify.error("Email/password is incorrect");
	}
	else{
		var TokenResponse = JSON.parse(responseJson.token)
		_TOKEN_RECEIVED = TokenResponse.value;
		localStorage.token = _TOKEN_RECEIVED;
		window.location = '/userListing.html';
	}
}


function _sha1Hash(val){ 
	/*
		* do npm install sha1  in the root directory of the project before using this function
	*/
	var value = sha1(val);
	console.log(value);
	return value;
}