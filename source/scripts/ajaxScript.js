function _getHttpObject(){
   var http_request = new XMLHttpRequest();
   try{
      http_request = new XMLHttpRequest();
   }catch (e){
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
		
      }catch (e) {
	
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            return false;
         }
      }
   }

   return http_request;
}

function _openPostConnection(http_request, url){
   http_request.open("POST", url, true);
   return http_request;
}

function _openGetConnection(http_request, url){
   http_request.open("GET", url, true);
   return http_request;
}

function _setHeaders(http_request, headerName, headerValue){
   http_request.setRequestHeader(headerName, headerValue, false);
   return http_request;
}

function _executeLogin(http_request){
   http_request.onreadystatechange = function(){
      if (http_request.readyState == 4  ){
          _extractResponse(http_request.responseText);
      }
   }
   http_request.send();
}

function _executeUL(http_request){
   http_request.onreadystatechange = function(){
      if (http_request.readyState == 4  ){
          _populateContent(JSON.parse(http_request.responseText));
      }
   }
   http_request.send();
}

