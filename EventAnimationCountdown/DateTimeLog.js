        var take = (localStorage.eventTitle);
       
            
        var dateWithouthSecond = new Date();
    dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

          var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
             var hour = today.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById("datenow").innerHTML = hour;
            if(dd<10) {
                dd='0'+dd
            } 

            if(mm<10) {
                mm='0'+mm
            } 

            today = mm+'/'+dd+'/'+yyyy+' '+hour;
            document.getElementById("datenow").innerHTML = "Start Date:     " + today;
        document.getElementById("titleEvent").innerHTML = take;