
var generated_ID = function () {
  var id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  return id;
};

document.getElementById("forget-button").addEventListener("click", function(){
	params = {"username": document.getElementById("username-forgot").value, "password": generated_ID()};

	axios.post(
		'/forgot/send', 
		params
	).then(function (response) {

	  alert(response.data.message);
	  if(response.data.status){
	  	document.location.href = '/login';
	  }
	}).catch(function (error) {
	  console.log(error);
	});
})
