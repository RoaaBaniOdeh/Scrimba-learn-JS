

let render = (leads)=>{
    let listItems = ""
    for(let index in leads)
       // listItems += "<li><a target='_blank' href='#'>" +  myLeads[index] + "</a></li>"
       listItems += `<li><a target='_blank' href='${leads[index]}'>   ${leads[index]}  </a></li>`
        ulEl.innerHTML = listItems
}


let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")

let deleteBtn = document.getElementById("delete-btn")

const tabBtn = document.getElementById("tab-btn")

//turning the "myLeads" string into an array using  Json.parse
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


//checking if leads is truthy =>if so set myleads to its value and call renderLeads 
//=> reload the page the myleads that we render stays there => what a quote"persisted our leads across reload"
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

/*
//refactoring the fun. so that it takes a param. ,leads, and use it instead of the global myLeads variable . 
let TabBtn = ()=> {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
}

tabBtn.addEventListener("click", TabBtn)*/

tabBtn.addEventListener("click", function() {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


/*
let deleteAllLeads = ()=>{
     localStorage.clear()
     myLeads = []
     render(myLeads)
 } 
 */
 
 
 deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
} )


/*
let saveLead = ()=> {
    myLeads.push(inputEl.value)
    inputEl.value = "  "
    //turning the array into an sting again using  Json.stringify
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
   //console.log(localStorage.getItem("myLeads"))
}
inputBtn.addEventListener("click",saveLead)*/

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = "  "
    //turning the array into an sting again using  Json.stringify
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
   //console.log(localStorage.getItem("myLeads"))
})


