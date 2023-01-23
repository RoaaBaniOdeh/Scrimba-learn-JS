let countEl = document.getElementById("count_el");
let count = 0;
let increment = () => {
  count += 1;
  countEl.textContent = count;
};

let saveEl = document.getElementById("saveEl");
console.log(saveEl);
let save = () => {
  let counterStatement = count + " - ";
  //1 //saveEl.innerHTML +=counterStatement

  //2
  saveEl.textContent += counterStatement; //innerText alternative mdn  ==>node.textcontent
  countEl.textContent = 0;
  count = 0;
};
