

function onSave(form){
         var takeTitle = document.getElementById("title").value;
    var dialogBox = document.getElementById("dlg-body1").innerHTML = "Please complete your Input ";
             if(takeTitle == "") {
    form.inputfield.focus();
      showDialog(dialogBox);   
      return false;
    }
	if(form.datetimepicker.value == "") {
      showDialog(dialogBox);
      
      return false;
    }

   
        localStorage.eventTitle = document.getElementById("title").value;
        localStorage.eventDate = document.getElementById("datetimepicker").value;
      return true;
  };  

 
 
     
   