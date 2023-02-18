


$("#addButton").on("click",addTask)


function addTask(e){

    if($("#taskInput").val()==""){
        return;
    }
    e.preventDefault();
    $("#listContainer").append('<div class="taskContainer"></div>').append(`
    <div class="taskName d-flex justify-content-between border rounded p-2">${$("#taskInput").val()}
          <div class="marksContainer">
          <button type="button" class="removeButton btn btn-outline-danger btn-sm bi bi-x "></button>
          <button type="button" class="doneButton btn btn-outline-success  btn-sm bi bi-check"></button>
          </div>
        </div>
    `)


}

$("#listContainer").on("click",".removeButton",{},function(){

    $(this).parent().parent().remove();
})

$("#listContainer").on("click",".doneButton",{},function(){

    console.log("hi from done");
    $(this).parent().parent().addClass("done")
})


// function addTask(e){
//     if(taskInput.value == ""){
//         return;
//     }
//     e.preventDefault();
//     let task = document.createElement("div");
    // task.classList.add("taskContainer");
    // task.innerHTML = `
    //   <div class="taskName d-flex justify-content-between border rounded p-2">${taskInput.value}
    //         <div class="marksContainer">
    //         <button type="button" class="removeButton btn btn-outline-danger btn-sm bi bi-x "></button>
    //         <button type="button" class="doneButton btn btn-outline-success  btn-sm bi bi-check"></button>
    //         </div>
    //       </div>
    //   `;
    
//     listContainer.appendChild(task);
//     taskInput.value = "";
//     }




// function done(e) {
//     let doneButton = e.target;
//     if (e.target.classList.contains("doneButton")) {
//       let container = doneButton.parentElement.parentElement;
//       let taskText = doneButton.parentElement.parentElement.firstElementChild;
  
//       if (!container.classList.contains("done")) {
//         container.classList.add("done");
//         taskText.innerText += "Task Completed";
//       }
//     }
//   }



//   function remove(e) {
//     let removeButton = e.target;
//     if (e.target.classList.contains("removeButton")) {
//       let container = removeButton.parentElement.parentElement;
//       container.remove();
//     }
//   }