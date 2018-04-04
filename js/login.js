// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
		event.preventDefault();
		event.stopPropagation();
        if (form.checkValidity() !== false) {
			$.ajax({
				type: "POST",
				url: 'http://lyobe9tmue.execute-api.us-east-1.amazonaws.com/',
				data: {
					data: {
						username: $("#inputUsername").val(),
						password: $("#inputPassword").val()
					}
				},
				success: function(response){
					if(response.status == 0){
						window.location = "index.html";
					}else{
						alert("error");
					}
				},
				error: function(error){
					alert("error");
				}
			});			
		}
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();