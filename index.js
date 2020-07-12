//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here

const div = document.createElement('div');

document.querySelector('#a-1').appendChild(div)
div.classList.add('square')

div.addEventListener('click', () => {
  if(div.innerText == 'x') {
    div.innerText = 'o'
  } else {
    div.innerText = 'x'
  }
})


//------------------------Question 2 ---------------------------
// Write a JavaScript program to remove items from a dropdown list.
// In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
// you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

const dropDown = document.createElement('select')

for(let i=0; i < colors.length; i++) {
  let opt = document.createElement('option')
  opt.value = colors[i]
  opt.innerText = colors[i]
  dropDown.appendChild(opt)
}

let button = document.createElement('button')
button.innerText = 'Remove Option'

button.addEventListener('click', () => {
  let select = document.querySelector('select')
  let options = select.children

  // check which option is selected...
  for(let i=0; i < options.length; i++) {
    if(options[i].value == select.value) {
      select.removeChild(options[i])
    }
  }
})

// doing this two different ways just for practice...they are equivalent
document.getElementById('a-2').appendChild(dropDown)
document.querySelector('#a-2').appendChild(button)

//------------------------Question 3 ---------------------------
// Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
// take the radius from the input value element with the 'id=radius' in the index.html file
// And display the results in the elements with the 'id = volume' and 'id = area' respectively
// hint: the volume of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () => {
  const radius = document.getElementById('radius').value
  console.log(radius)

  // Math.pow() raises to a power, Math.PI is PI
  const volume = Math.pow(radius, 3) * Math.PI * (4/3)
  const surfaceArea = Math.pow(radius, 2) * Math.PI * 4

  // populate HTML with built elements
  document.getElementById('volume').value = volume
  document.querySelector('#area').value = surfaceArea
}

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.

for(let i=0; i < 4; i++) {
  let button = document.createElement('button')
  button.innerText = `Hide answer number ${i + 1}`

  button.addEventListener('click', () => {
    document.getElementById(`a-${i + 1}`).style.display = 'none'
  })

  document.querySelector('#a-4').appendChild(button)
}
