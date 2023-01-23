

let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")


let saveLead = ()=> {
    myLeads.push(inputEl.value)
    inputEl.value = "  "
    renderLeads()
}



let renderLeads = ()=>{
    let listItems = ""
    for(let index in myLeads)
       // listItems += "<li><a target='_blank' href='#'>" +  myLeads[index] + "</a></li>"
       listItems += `<li><a target='_blank' href='${myLeads[index]}'>   ${myLeads[index]}  </a></li>`
       
        ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click",saveLead)