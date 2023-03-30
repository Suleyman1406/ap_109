// let myHeadingTag = document.getElementById('heading_2')
// console.log(myHeadingTag);

// let myHeadingTags = document.getElementsByClassName('heding')
// console.log(myHeadingTags);

// let myH1Tags = document.getElementsByTagName('h1');
// console.log(myH1Tags);

// let myHeadingTag = document.querySelector('#heading_1')
// console.log(myHeadingTag);

// let myHeadingTag = document.querySelector('.heading')
// console.log(myHeadingTag);

// let myHeadingTags = document.querySelectorAll('.heading')
// console.log(myHeadingTags);

let myH1Tag = document.querySelector('h1')
// myH1Tag.innerHTML= "<i>Hello</i> Af201 "
// myH1Tag.textContent = "Hello AF203"

let myBodyTag = document.querySelectorAll('body')[0]

let myH3Tag = document.createElement('h3');
myH3Tag.textContent= "Hello everyone again"


// let myH4Tag = document.createElement('h4');
// myH4Tag.textContent= "Hello h4"

myBodyTag.append(myH3Tag);
// myBodyTag.prepend(myH3Tag,myH4Tag);
// myBodyTag.appendChild(myH3Tag)
// myBodyTag.appendChild(myH4Tag)

// myBodyTag.innerHTML += `<h3>Hello everyone again</h3>
// <h4>Hello h4</h4>salam
// `;

// let myH2Tag = document.querySelector('h2');
// console.log(myH2Tag.previousElementSibling);

// console.log(myBodyTag.children[0].textContent);


// myBodyTag.removeChild(myH3Tag);
// myBodyTag.removeChild(myH1Tag)

// myBodyTag.innerHTML= ""

// let myImgTag = document.getElementsByTagName('img')[0];

// myImgTag.src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'

// myH1Tag.style.backgroundColor = 'red'

let myH2Tag = document.querySelector('h2');
let myImgTag = myH2Tag.nextElementSibling


console.log(myBodyTag.children)