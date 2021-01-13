//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
var square = document.createElement('div');
square.className = 'square';
document.getElementById("a-1").appendChild(square);
square.addEventListener("click", switchFunction);

function switchFunction() {
    var change = document.getElementById("a-1").appendChild(square);
    if (change.innerHTML == "X")
    {
        change.innerHTML = "O";
    }
    else {
        change.innerHTML = "X";
    }
}



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];




//resolve // QUESTION 2 here
var myList = document.getElementById("a-2");
var selectList = document.createElement("select");
selectList.setAttribute("id", "list");
myList.appendChild(selectList);


for (var i = 0; i < colors.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", colors[i]);
    option.text = colors[i];
    selectList.appendChild(option);
}




var removeButton = document.createElement("button");
removeButton.innerHTML = "remove";
myList.appendChild(selectList);
myList.appendChild(removeButton);
removeButton.addEventListener("click", removeFunction);

function removeFunction() {
  var x = document.getElementById("list");
  x.remove(x.selectedIndex);
}
//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculateSphere = () =>{
    var radius = document.getElementById("radius").value;
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    var area = (4) * Math.PI * Math.pow(radius, 2);
  
    document.getElementById("volume").value = volume.toFixed(2);
    document.getElementById("area").value = area.toFixed(2);
  
    return false;
 }
//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here
var b1 = document.createElement("button");
b1.innerHTML = "hide Question-1";
document.getElementById("a-4").appendChild(b1);
b1.addEventListener("click", hideFunction1);

var b2 = document.createElement("button");
b2.innerHTML = "hide Question-2";
document.getElementById("a-4").appendChild(b2);
b2.addEventListener("click", hideFunction2);

var b3 = document.createElement("button");
b3.innerHTML = "hide Question-3";
document.getElementById("a-4").appendChild(b3);
b3.addEventListener("click", hideFunction3);

var x = document.getElementsByClassName("question-item")[0].style.visibility = "visible";
var y = document.getElementsByClassName("question-item")[1].style.visibility = "visible";
var z = document.getElementsByClassName("question-item")[1].style.visibility = "visible";

function hideFunction1() {
  if (x === "hidden") {
    x = document.getElementsByClassName("question-item")[0].style.visibility = "visible";
    b1.innerHTML = "hide Question-1";
  } else {
    x = document.getElementsByClassName("question-item")[0].style.visibility = "hidden";
    b1.innerHTML = "show Question-1";
  }
};

function hideFunction2() {
  if (y === "hidden") {
    y = document.getElementsByClassName("question-item")[1].style.visibility = "visible";
    b2.innerHTML = "hide Question-2";
  } else {
    y = document.getElementsByClassName("question-item")[1].style.visibility = "hidden";
    b2.innerHTML = "show Question-2";
  }
};

function hideFunction3() {
  if (z === "hidden") {
    z = document.getElementsByClassName("question-item")[2].style.visibility = "visible";
    b3.innerHTML = "hide Question-3";
  } else {
    z = document.getElementsByClassName("question-item")[2].style.visibility = "hidden";
    b3.innerHTML = "show Question-3";
  }
};
