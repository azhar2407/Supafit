function getAbaContent(){
	var jsonData = getAbaContentFromServer();
	var modalDom = document.createElement('div');
	for (var i = 0; i <= jsonData.length -1; i++) {
		var options = document.createElement('div');
		options.className = 'radio';
  		var label = document.createElement('LABEL');
		var input = document.createElement('INPUT');
		input.setAttribute("type", "radio");
		input.setAttribute("name", "optionsRadio");
		input.setAttribute("value", jsonData[i].name);
    	var t = document.createTextNode(jsonData[i].name);
  		label.appendChild(input);
  		label.appendChild(t);
		options.appendChild(label);
		modalDom.appendChild(options);
	};
	
	var submitButton = document.createElement('button');
	submitButton.className = "btn btn-default";
	submitButton.innerHTML = "submit";
	modalDom.appendChild(submitButton);
	return modalDom;
}

function getAbaContentFromServer(){
	var json = [
			{
				"name": "ajit kumarrrrrrrrrrrrrrrrrrr"
			},
			{
				"name": "shah aalmooooooooooooooo"
			}
		];

	return json;
}

function modalAction(Id){
	var myContent = getAbaContent();
	var modal = picoModal({
                  content: myContent,
                  closeButton: true,
                  overlayStyles: {
                      backgroundColor: "#000",
                      opacity: 0.5
                  }
              }).show();

	var modalDom = modal.modalElem();
	var btnElem = modalDom.getElementsByClassName("btn");
	btnElem[0].addEventListener("click", function(){
		var radioBtns = modalDom.getElementsByTagName("input");
		console.log(radioBtns);
		for(var i = 0; i < radioBtns.length; i++){
			console.log(radioBtns[i].checked);
			if(radioBtns[i].checked){
				document.getElementById(Id + 'Inp').value = radioBtns[i].value;
				document.getElementById(Id).innerHTML = "Change";
			}
		}
		modal.close();
	})
}