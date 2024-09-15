
const names = document.querySelectorAll('h3');
for(const name of names ){
   name.style.color = 'red';
   name.style.textAlign = 'center';
   console.log(name.innerHTML);
}
const parrent = document.getElementById('main-container');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
li.innerText = "this is first li ";
ul.appendChild(li);
li2.innerText = "this is second li ";
ul.appendChild(li2);
parrent.appendChild(ul);
ul.style.color = 'tomato';
ul.style.textAlign = 'center'
li.style.fontSize = '45px'
li.innerText = "ohhh yes text change by js ";

//target src 
const newSection = document.getElementById('main-container');
//create element 
const section = document.createElement('section');

section.innerHTML = `
    <h1>this is dynamic title</h1>
    <p>this is dynamic peragraph . and amr sonar bangla ami tumai valobashi .cirodin tumar akash tumar batas amr pran a a basai bashi </p>
    <ul>
        <li>this is li number 1 </li>
        <li>this is li number 2 </li>
        <li>this is li number 3 </li>
        <li>this is li number 4 </li>
    </ul>

`
newSection.appendChild(section);
