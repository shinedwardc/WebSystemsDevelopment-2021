//AJAX
$(document).ready(function() {
    
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function(data){
            var nav = "";
                $.each(data.navbar, function(i, button){
                    nav += "<a href = '" + button.link + "'>";
                    nav += button.title;
                    nav += "</a>";
                });
            $("#navBar").html(nav);

            var news = "";
                news+= "<h3>Newsletter</h3>";
                $.each(data.newsletter, function(i, side){
                    news += "<h4>" + side.title + "</h4>";
                    news += "<p>" + side.summary + "</p>";
                });
            $("#newsletter").html(news);

            var social="";
            $.each(data.socialmedia, function(i, socialMedia) {
                social += "<a href='" + socialMedia.link + "'>";
                social += "<img src='"+socialMedia.icon+"' alt='" + socialMedia.platform +"'/>";
                social += "</a>"; 
            });
            $("#socialLinks").html(social);

            var members=$("#featuredMembers").html();
            $.each(data.members, (i,member) => {
                members+="<h3>" + member.title + "</h3>";
                members+="<p> Role: " + member.role + "</p>";
                members+="Links <ul>"
                $.each(member.links, (key,value) => {
                    members+= "<div class = 'member'>";
                    if(key == "email"){
                        members+= "<img class = 'bullet emailLink' src = 'resources/email.jpg'>";
                        members+= "<ul class = 'memberLink emailLink'>"
                    }
                    else if(key == "twitter"){
                        members+= "<img class = 'bullet twitterLink' src = 'resources/twitter.png'>";
                        members+= "<ul class = 'memberLink twitterLink'>"
                    }
                    else if(key == "facebook"){
                        members+= "<img class = 'bullet facebookLink' src = 'resources/facebook.png'>";
                        members+= "<ul class = 'memberLink facebookLink'>"
                    }
                    else if(key == "linkedin"){
                        members+= "<img class = 'bullet linkedInLink' src = 'resources/linkedin.png'>";
                        members+= "<ul class = 'memberLink linkedInLink'>"
                    }
                    else if(key == "tiktok"){
                        members+= "<img class = 'bullet tiktokLink' src = 'resources/tiktok.png'>";
                        members+= "<ul class = 'memberLink tikTokLink'>"
                    }
                    members+="<a href='" + value +"'>" + key + "</a></ul></div>";
                }); 
                members+="</ul>";
            });
            $("#featuredMembers").html(members);
        }
    });
 });

 //Expose JS
 //JNJ
 var id = null;
 function showJnJ(){
     var img = document.getElementById("jnjImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideJnJ(){
    document.getElementById("jnjImg").style.display = "none";
 }
 function showHomeJnJ(){
     document.getElementById("jnjImg").style.display = "inline-block";
 }
 function jnjNav(){
    window.open("https://www.careers.jnj.com/");
 } 
//General Electric
 id = null;
 function showGE(){
     var img = document.getElementById("geImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideGE(){
    document.getElementById("geImg").style.display = "none";
 }
 function showHomeGE(){
     document.getElementById("geImg").style.display = "inline-block";
 }
 function geNav(){
    window.open("https://jobs.gecareers.com/global/en");
 } 
//Jahnel Group
id = null;
 function showJahnel(){
     var img = document.getElementById("jahnelImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideJahnel(){
    document.getElementById("jahnelImg").style.display = "none";
 }
 function showHomeJahnel(){
     document.getElementById("jahnelImg").style.display = "inline-block";
 }
 function jahnelNav(){
    window.open("https://www.jahnelgroup.com/careers.html");
 } 
//Naval Nuclear Laboratory
 id = null;
 function showNaval(){
     var img = document.getElementById("navalImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideNaval(){
    document.getElementById("navalImg").style.display = "none";
 }
 function showHomeNaval(){
     document.getElementById("navalImg").style.display = "inline-block";
 }
 function navalNav(){
    window.open("https://navalnuclearlab.energy.gov/careers/");
 } 
 //Microsoft
 id = null;
 function showMicrosoft(){
     var img = document.getElementById("microsoftImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideMicrosoft(){
    document.getElementById("microsoftImg").style.display = "none";
 }
 function showHomeMicrosoft(){
     document.getElementById("microsoftImg").style.display = "inline-block";
 }
 function microsoftNav(){
    window.open("https://careers.microsoft.com/us/en");
 } 
 //Unisys
 id = null;
 function showUnisys(){
     var img = document.getElementById("unisysImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideUnisys(){
    document.getElementById("unisysImg").style.display = "none";
 }
 function showHomeUnisys(){
     document.getElementById("unisysImg").style.display = "inline-block";
 }
 function unisysNav(){
    window.open("https://jobs.unisys.com/us/en");
 } 
 //Zones, LLC.
 id = null;
 function showZones(){
     var img = document.getElementById("zonesImg");
     img.style.display = "inline-block";
     var width = 0;
     var height = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (width == 20) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        img.style.height = height + '%'; 
        img.style.width = width + '%'; 
      }
    }
 }
 function hideZones(){
    document.getElementById("zonesImg").style.display = "none";
 }
 function showHomeZones(){
     document.getElementById("zonesImg").style.display = "inline-block";
 }
 function zonesNav(){
    window.open("https://careers.zones.com/");
 } 