function show() {
    var x = document.getElementById('collapse');
    if ( window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function show2() {
    var y = document.getElementById('collapse2');
    if ( window.getComputedStyle(y, null).getPropertyValue("display") === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }   
}

function ReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }    
}