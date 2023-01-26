

let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")


const tabBtn = document.getElementById("tab-btn")

//turning the "myLeads" string into an array using  Json.parse
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))





let render = (leads)=>{
    let listItems = ""
    for(let index in leads)
       // listItems += "<li><a target='_blank' href='#'>" +  myLeads[index] + "</a></li>"
       listItems += `<li><a target='_blank' href='${leads[index]}'>   ${leads[index]}  </a></li>`
        ulEl.innerHTML = listItems
}

//checking if leads is truthy =>if so set myleads to its value and call renderLeads 
//=> reload the page the myleads that we render stays there => what a quote"persisted our leads across reload"
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//refactoring the fun. so that it takes a param. ,leads, and use it instead of the global myLeads variable . 
let TabBtn = ()=> {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
}
tabBtn.addEventListener("click", TabBtn)






let saveLead = ()=> {
    myLeads.push(inputEl.value)
    inputEl.value = "  "
    //turning the array into an sting again using  Json.stringify
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
   //console.log(localStorage.getItem("myLeads"))
}


let deleteAllLeads = ()=>{
   console.log("deleteeeeeeeee by double click")
    localStorage.clear()
    myLeads = []

    render(myLeads)
} 



//let deleteBtn = document.getElementById("delete-btn")
document.getElementById("delete-btn").addEventListener("click",deleteAllLeads)

inputBtn.addEventListener("click",saveLead)
