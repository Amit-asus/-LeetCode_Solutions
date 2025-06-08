const input = document.getElementById("input");
const button = document.getElementById("btn");
const ul = document.getElementById("ul");
// console.log( "input" ,input) ;
// console.log( "btn" ,button)


button.addEventListener('click', ()=> {
  if (input.value.trim() == "") {
    alert("give the proper input");
  }
  const li = document.createElement("li");
  li.innerHTML = ` 
    <span class='input-text'>${input.value}</span>
     <span class='edit'>✏️</span>
     <span class='delete'>❌</span>`;
  ul.appendChild(li);
  input.value = "";

  const taskText = li.querySelector(".input-text");
  const editBtn = li.querySelector(".edit");
  const closeBtn = li.querySelector(".delete");

  editBtn.addEventListener('click',(e)=> {
     e.stopPropagation();
     const nexText = prompt("Edit your task" ,taskText.textContent) ;
     if(nexText !== null && nexText.trim() !== ""  ){
        taskText.textContent = nexText.trim();
     }
  })

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation() ;
    ul.removeChild(li) ;
  });


  li.addEventListener("click", () => {
    console.log(li.innerHTML);
  });
})