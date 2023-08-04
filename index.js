let venue="Be kind"
let venue2="Be patient"
let venue3="Treat someone as you wish they will treat you"
let venue4="Be Humble"
let venue5="Always work as a team work"
let venue6="Belive in God"
let venue7="Always remember the one who was their for you when you were not able"
let venue8="Keep your family issue private"
let venue9="Belive in your self"
let venue10="Be Good"

function cuzo(){
    const text=document.getElementById('one')
    const item=text.value;
    father.push(item)
    render()
}
   

let father=[venue,venue2,venue3,venue4,venue5,venue6,venue7,venue8,venue9,venue10]
render()

 function render() {
    document.getElementById('two').innerHTML='';
    father.forEach(function friends(def) {
      let family=document.createElement('div')
    family.innerText=def
    list=document.getElementById('two')
    list.appendChild(family)  
     });
 }