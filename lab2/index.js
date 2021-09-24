/*Alternate Navigation Option*/

//navigation to glossary page
function glossNav1(){
  window.location.replace("glossary.html");
}

function glossNav2(){
  window.location.replace("../glossary.html");
}

function returnToTop(){
    window.location.replace("index.html");
}

function returnHome(){
  window.location.replace("../index.html");
}

function toQuiz(){
  window.location.replace("quiz.html");
}

function upToQuiz(){
  window.location.replace("../quiz.html");
}

function dropDown(target) {
  const dropMenu = target.nextElementSibling;
  //Show dropdown for clicked content
  dropMenu.classList.toggle("show");
  if(dropMenu.parentElement == document.getElementById("sumDrop")) {
    //resize if it's a nested dropdown
    dropMenu.parentElement.classList.toggle("resize");
  }
}

//Auto-close all open dropdowns when clicking ouside of dropdowns
window.onclick = function(event) {  
  if (!event.target.matches('.source')) {  
    var dropdowns = document.getElementsByClassName("dropdown-content");    
    var inner_drop = document.getElementsByClassName("inner-content");
    for ( var i = 0; i < dropdowns.length; i++) {   
      if (dropdowns[i].classList.contains('show')) {  
        dropdowns[i].classList.remove('show');  
      }  
      if (dropdowns[i].classList.contains('resize')) {  
        dropdowns[i].classList.remove('resize');  
      } 
    } 
    for ( i = 0; i < inner_drop.length; i++) {   
      if (inner_drop[i].classList.contains('show')) {  
        inner_drop[i].classList.remove('show');  
      }  
    }  
  }  
};  

/*const toc = document.querySelector("ul");

function createLinkTo(target) {
  const link = document.createElement("a");
  link.href = "#";
  link.addEventListener("click", (e) => {
    target.scrollIntoView();
    e.preventDefault();
  });
  return link;
}

const fragment = new DocumentFragment;
for (const header of document.querySelectorAll("h2")) {
  const entry = document.createElement("li");
  const link = createLinkTo(header);
  link.innerText = header.innerText;
  entry.appendChild(link);

  const sublist = document.createElement("ul");
  for (const subheader of header.parentElement.querySelectorAll("h3")) {
    const subentry = document.createElement("li");
    const sublink = createLinkTo(subheader);
    sublink.innerText = subheader.innerText;
    subentry.appendChild(sublink);
    sublist.appendChild(subentry);
  }
  entry.appendChild(sublist);
  fragment.appendChild(entry);
}

toc.appendChild(fragment);*/

//Quiz Code

var correctAnswers = 0;
var questionsAnswered = 0;

for(const wrapper of document.querySelectorAll(".answers")) {
  wrapper.addEventListener('click', (event) => {
    const parent = wrapper.parentElement;
    const proof = wrapper.nextElementSibling;
    const isButton = event.target.nodeName === 'BUTTON';
    const isAnswered = proof.style.display === "block";
    if(isButton && !isAnswered) {
      questionsAnswered++;
      if (event.target.classList.contains("correctAnswer")) {
        correctAnswers++;
        parent.style.backgroundColor = "lightgreen";
      } else {
        parent.style.backgroundColor = "lightcoral";
      }
      proof.style.display = "block";
    }
  });
}

function submitQuiz() {
  const results = document.getElementById("results");
  if(questionsAnswered == 21) {
    results.innerHTML = `${correctAnswers} out of ${questionsAnswered}`;
    results.style.display = "block";
    if(correctAnswers > 16) {
      results.style.backgroundColor = "lightgreen";
    } else if (correctAnswers > 12) {
      results.style.backgroundColor = "lightgoldenrodyellow";
    } else {
      results.style.backgroundColor = "lightcoral";
    }
  } else {
    results.innerHTML = `Please Answer all questions before submitting!`;
  }
}