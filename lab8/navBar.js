$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "Websys_course.json",
		dataType: "json",
		success: (function(data){
			string="";
			$.each(data.websys_courses, function(index,value){
				$.each(value,function(i,j){
					title = "'"+j.Title+"'";
					description = "'"+j.Description+"'";
					link = "'"+j.Link+"'";
					get = "'home.php?title="+title+"'&description="+description+"'";
					string += '<button class="button" onclick=" return display('+title+','+description+','+link+','+get+')">'+j.Title+'</button>';
				});
			});
			$('#mySideBar').append(string);
		}),
	});
});

function display(title,description,link,get){
	$("#LectureInfo").empty();
	$("#LectureInfo").html("<h2>"+title+"</h2>");
	$("#LectureInfo").append("<p class = 'preview'>"+description+"</p>");
	$("#LectureInfo").append("<p class = 'preview'><a href="+link+">Link</a></p>");
	$("#LectureInfo").append("<p class = 'preview'><a href="+get+">Archive</a></p>");
}

