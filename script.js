var usertodo = document.getElementById("userinp");
var addd = document.getElementById("addbtn");
var dlt = document.getElementById("dltbtn");
var alltodo = document.getElementById("list");
var editindex = null;


if (localStorage.getItem('todos')) {
    alltodo.innerHTML = localStorage.getItem('todos');
}



addd.addEventListener("click", function () {
  if (usertodo.value.trim() === "") {
    alert("Please enter something!");
    return;
  }

  if (addd.querySelector("i").classList.contains("fa-plus")) {
    alltodo.innerHTML += `
      <li>
        <span>${usertodo.value}</span>
        <div>
          <button onclick="edit(this)">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="dele(this)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    `;
  } else {
    editindex.querySelector("span").innerText = usertodo.value;
    addd.querySelector("i").classList.remove("fa-pen");
    addd.querySelector("i").classList.add("fa-plus");
    editindex = null;
  }

  usertodo.value = "";
localStorage.setItem('todos', alltodo.innerHTML);

});

function edit(btn) {
  var li = btn.closest("li");
  var text = li.querySelector("span").innerText;
  usertodo.value = text;
  editindex = li;

  addd.querySelector("i").classList.remove("fa-plus");
  addd.querySelector("i").classList.add("fa-pen");
}

function dele(btn) {
  btn.closest("li").remove();
     localStorage.setItem('todos', alltodo.innerHTML);
}

dlt.addEventListener("click", function () {
  alltodo.innerHTML = "";
  localStorage.removeItem('todos');
});




function changeColor(color) {
    if (color === 'red') {
        document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    } 
    else if (color === 'green') {
        document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    } 
    else if (color === 'yellow') {
        document.body.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
    } 
    else if (color === 'blue') {
        document.body.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    } 
    else if (color === 'orange') {
        document.body.style.backgroundColor = 'rgba(255, 165, 0, 0.5)';
    } 
    else if (color === 'purple') {
        document.body.style.backgroundColor = 'rgba(128, 0, 128, 0.5)';
    } 
    else if (color === 'pink') {
        document.body.style.backgroundColor = 'rgba(255, 105, 180, 0.5)';
    }
  else if (color === 'black') {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } 
    else if (color === 'white') {
        document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } 
    else if (color === 'brown') {
        document.body.style.backgroundColor = 'rgba(139, 69, 19, 0.5)';
    } 

 else if (color === 'gray') {
        document.body.style.backgroundColor = 'rgba(169, 169, 169, 0.5)';
    } 
    else if (color === 'gold') {
        document.body.style.backgroundColor = 'rgba(255, 215, 0, 0.6)';
    } 
    else if (color === 'sky') {
        document.body.style.backgroundColor = 'rgba(135, 206, 235, 0.5)';
    } 

else if (color === 'none') {
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = '';
}



}














