var all,daily_play,found,guess,points,rank1,rank2,rank3,rank4,rank5,rank6,rank7,rank8,rank9,replaying,total,todaytotal,yesterdaytotal,win,words,todaywords,yesterdaywords,dark,foundlist=[],letters=[],todayletters=[],wordlist=[],todaywordlist=[],yesterdaywordlist=[],highest_score=0;function darkmode(){if(1==dark){for(var e=document.querySelectorAll("*"),t=0;t<e.length;t++)"fg"!=e[t].className&&"bg"!=e[t].className&&(e[t].style.background="#fbfcff",e[t].style.color="#2d4654");dark=0,localStorage.setItem("useDarkMode",1)}else{for(e=document.querySelectorAll("*"),t=0;t<e.length;t++)"fg"!=e[t].className&&"bg"!=e[t].className&&(e[t].style.background="#111111",e[t].style.color="#fbfcff");dark=1,localStorage.setItem("useDarkMode",0)}}function mouse_down(e,t){document.getElementById("no-message").style.display="inline",document.getElementById("pangram").style.display="none",document.getElementById("already-found").style.display="none",document.getElementById("center-letter").style.display="none",document.getElementById("too-short").style.display="none",document.getElementById("not-in-list").style.display="none",document.getElementById("guess").value=document.getElementById("guess").value+t,""!==document.getElementById("comb"+e).style.filter&&(document.getElementById("comb"+e).style.filter="",document.getElementById("comb"+e).style.transitionDuration=""),document.getElementById("comb"+e).style.filter="invert(100%)"}function mouse_up(e){document.getElementById("comb"+e).style.filter="invert(0%)",document.getElementById("comb"+e).style.transitionDuration="0.5s"}function display(){for(var e,t,n=0;n<7;n++)n<6?(e="play"+(n+1),t=-1-62*(letters[n].charCodeAt(0)-97),document.getElementById(e).style.background="url('black_alphabet.png') "+t+"px -1px"):(e="play"+(n+1),t=-1-62*(letters[n][1].charCodeAt(0)-97),document.getElementById(e).style.background="url('orange_alphabet.png') "+t+"px -1px"),document.getElementById(e).style.display="block";document.getElementById("play1").onmousedown=function(){mouse_down(1,letters[0])},document.getElementById("play1").onmouseup=function(){mouse_up(1)},document.getElementById("play2").onmousedown=function(){mouse_down(2,letters[1])},document.getElementById("play2").onmouseup=function(){mouse_up(2)},document.getElementById("play3").onmousedown=function(){mouse_down(3,letters[2])},document.getElementById("play3").onmouseup=function(){mouse_up(3)},document.getElementById("play4").onmousedown=function(){mouse_down(4,letters[3])},document.getElementById("play4").onmouseup=function(){mouse_up(4)},document.getElementById("play5").onmousedown=function(){mouse_down(5,letters[4])},document.getElementById("play5").onmouseup=function(){mouse_up(5)},document.getElementById("play6").onmousedown=function(){mouse_down(6,letters[5])},document.getElementById("play6").onmouseup=function(){mouse_up(6)},document.getElementById("play7").onmousedown=function(){mouse_down(7,letters[6][1])},document.getElementById("play7").onmouseup=function(){mouse_up(7)}}function update_rank(){var e=rank9<=points?(0==win&&(alert("You earned the rank of Queen Bee!\n\nCan you find all the words?"),win=1),"Queen Bee!"):rank8<=points?"Outstanding":rank7<=points?"Marvellous":rank6<=points?"Superb":rank5<=points?"Excellent":rank4<=points?"Skilled":rank3<=points?"Fine":rank2<=points?"Novice":"Newbie";document.getElementById("rank-update").innerHTML=e,highest_score<points&&(highest_score=points,localStorage.setItem("highest",highest_score),localStorage.getItem("highest")&&(e=localStorage.getItem("highest"),document.getElementById("high-score-update").innerHTML=e))}function set_rank(){rank1=0,rank2=Math.floor(.02*total),rank3=Math.floor(.05*total),rank4=Math.floor(.08*total),rank5=Math.floor(.15*total),rank6=Math.floor(.25*total),rank7=Math.floor(.4*total),rank8=Math.floor(.5*total),rank9=Math.floor(.7*total)}function save_word(){localStorage.setItem("foundwords",JSON.stringify(foundlist))}function add_points(){var e=0,t=0,n=0,o=0,l=0,d=0,s=0,a=0;if(1===daily_play&&save_word(),(s=guess.length)<7)return 4==s&&(s=1),void(points+=s);for(s=0;s<guess.length;){for(a=0;a<7;a++)guess[s]==letters[a]&&(0==a&&(e=1),1==a&&(t=1),2==a&&(n=1),3==a&&(o=1),4==a&&(l=1),5==a&&(d=1));s+=1}if(1==e&&1==t&&1==n&&1==o&&1==l&&1==d)return points=points+guess.length+7,document.getElementById("no-message").style.display="none",void(document.getElementById("pangram").style.display="inline");points+=guess.length}function found_word(){for(var e=0;e<found;e++)if(guess==foundlist[e])return document.getElementById("no-message").style.display="none",document.getElementById("already-found").style.display="inline",1;return foundlist.push(guess),found+=1,add_points(),document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),update_rank(),found==words&&(alert("Congratulations! You found all the words!"),all=1),0}function check(){var e,t=0;for(document.getElementById("no-message").style.display="inline",document.getElementById("pangram").style.display="none",document.getElementById("already-found").style.display="none",document.getElementById("center-letter").style.display="none",document.getElementById("too-short").style.display="none",document.getElementById("not-in-list").style.display="none",0===replaying?(guess=document.getElementById("guess").value.toLowerCase(),document.getElementById("player-guess").reset()):guess=guess.toLowerCase(),e=0;e<guess.length;e++)"7"+guess[e]==letters[6]&&(t=1);if(guess.length<4)return document.getElementById("no-message").style.display="none",document.getElementById("too-short").style.display="inline",1;if(0==t)return document.getElementById("no-message").style.display="none",document.getElementById("center-letter").style.display="inline",1;for(e=0;e<words;e++)if(guess==wordlist[e])return e=found_word();return document.getElementById("no-message").style.display="none",document.getElementById("not-in-list").style.display="inline",1}function replay_words(){var e,t;for(replaying=1,t=JSON.parse(localStorage.getItem("foundwords")),localStorage.removeItem("foundwords"),e=0;e<t.length;e++)if(guess=t[e],1==check()){for(localStorage.removeItem("foundwords"),e=0;e<found;e++)foundlist.pop();return rank="Newbie",win=points=found=all=0,document.getElementById("no-message").style.display="inline",document.getElementById("pangram").style.display="none",document.getElementById("already-found").style.display="none",document.getElementById("center-letter").style.display="none",document.getElementById("too-short").style.display="none",document.getElementById("not-in-list").style.display="none",void(replaying=0)}document.getElementById("no-message").style.display="inline",document.getElementById("pangram").style.display="none",document.getElementById("already-found").style.display="none",document.getElementById("center-letter").style.display="none",document.getElementById("too-short").style.display="none",document.getElementById("not-in-list").style.display="none",replaying=0}function daily(){var e;for(daily_play=1,e=0;e<found;e++)foundlist.pop();rank="Newbie",win=replaying=points=found=all=0,document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),document.getElementById("rank-update").innerHTML=rank,document.getElementById("yesterday-or-random").innerHTML="Yesterday's answers",document.getElementById("random-answers").style.display="none",document.getElementById("restart-daily-button").style.visibility="hidden",document.getElementById("update-random").innerHTML="",document.getElementById("no-message").style.display="inline",document.getElementById("pangram").style.display="none",document.getElementById("already-found").style.display="none",document.getElementById("center-letter").style.display="none",document.getElementById("too-short").style.display="none",document.getElementById("not-in-list").style.display="none",document.getElementById("play1").style.display="none",document.getElementById("play2").style.display="none",document.getElementById("play3").style.display="none",document.getElementById("play4").style.display="none",document.getElementById("play5").style.display="none",document.getElementById("play6").style.display="none",document.getElementById("play7").style.display="none",letters[0]=todayletters[0],letters[1]=todayletters[1],letters[2]=todayletters[2],letters[3]=todayletters[3],letters[4]=todayletters[4],letters[5]=todayletters[5],letters[6]=todayletters[6],words=todaywords,total=todaytotal,wordlist=todaywordlist,set_rank(),!0===localStorage.hasOwnProperty("foundwords")&&replay_words(),document.getElementById("update-random").innerHTML=yesterdaywordlist.join("<br />")+"<br /><br />Total words:  "+yesterdaywords+"<br />Total points: "+yesterdaytotal+"<br />Points for Queen Bee: "+Math.floor(.7*yesterdaytotal),display()}function get_yesterday(){var e=new XMLHttpRequest;e.onreadystatechange=function(){var e;4==this.readyState&&200==this.status&&(e=JSON.parse(this.responseText),yesterdaywords=e.words,yesterdaytotal=e.total,yesterdaywordlist=e.wordlist)},e.open("GET","yesterday",!0),e.send()}function get_today(){var e=new XMLHttpRequest;e.onreadystatechange=function(){var e;4==this.readyState&&200==this.status&&(e=JSON.parse(this.responseText),todayletters[0]=e.letters[0],todayletters[1]=e.letters[1],todayletters[2]=e.letters[2],todayletters[3]=e.letters[3],todayletters[4]=e.letters[4],todayletters[5]=e.letters[5],todayletters[6]="7"+e.center,todaywords=e.words,todaytotal=e.total,todaywordlist=e.wordlist,daily())},e.open("GET","today",!0),e.send()}function shuffle(){for(var e,t,n=5;0<n;n--)e=Math.floor(Math.random()*(n+1)),t=letters[e],letters[e]=letters[n],letters[n]=t;display()}function random(){for(var e=new XMLHttpRequest,t=daily_play=0;t<found;t++)foundlist.pop();rank="Newbie",win=points=found=all=0,document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),document.getElementById("rank-update").innerHTML=rank,document.getElementById("yesterday-or-random").innerHTML="Answers",document.getElementById("update-random").innerHTML="",document.getElementById("no-message").style.display="inline",document.getElementById("pangram").style.display="none",document.getElementById("already-found").style.display="none",document.getElementById("center-letter").style.display="none",document.getElementById("too-short").style.display="none",document.getElementById("not-in-list").style.display="none",document.getElementById("play1").style.display="none",document.getElementById("play2").style.display="none",document.getElementById("play3").style.display="none",document.getElementById("play4").style.display="none",document.getElementById("play5").style.display="none",document.getElementById("play6").style.display="none",document.getElementById("play7").style.display="none",e.onreadystatechange=function(){var e;4==this.readyState&&200==this.status&&(e=JSON.parse(this.responseText),letters[0]=e.letters[0],letters[1]=e.letters[1],letters[2]=e.letters[2],letters[3]=e.letters[3],letters[4]=e.letters[4],letters[5]=e.letters[5],letters[6]="7"+e.center,words=e.words,total=e.total,wordlist=e.wordlist,set_rank(),display(),document.getElementById("random-answers").style.display="block",document.getElementById("restart-daily-button").style.visibility="visible")},e.open("GET","../../cgi-bin/random",!0),e.send()}function show_random(){document.getElementById("update-random").innerHTML=wordlist.join("<br />")+"<br /><br />Total words:  "+words+"<br />Total points: "+total+"<br />Points for Queen Bee: "+Math.floor(.7*total)}function delete_letter(){var e=(t=document.getElementById("guess").value).length,t=t.slice(0,e-1)+t.slice(e,e);document.getElementById("guess").value=t}window.onload=function(){get_yesterday(),get_today(),dark=!0===localStorage.hasOwnProperty("useDarkMode")?Number(localStorage.getItem("useDarkMode")):1,darkmode()};