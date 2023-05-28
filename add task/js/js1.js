document.getElementById("taskPairortyValidation").style.display="none"
document.getElementById("taskNameValidation").style.display="none"

let tableData=[]
let tablerow
let taskName
let taskPaiorty
function hideValidation(){
  
  document.getElementById("taskPairortyValidation").style.display="none"
  document.getElementById("taskNameValidation").style.display="none"
}

function addRow(){
  
 taskName= document.getElementById("taskName").value
 taskPaiorty= document.getElementById("taskPaiorty").value

if(taskName==""){
  document.getElementById("taskNameValidation").style.display="block"
}else if(taskPaiorty<=0||taskPaiorty==""){
  document.getElementById("taskPairortyValidation").style.display="block"
}else{
    hideValidation()
  
   tablerow = {id:tableData.length+1, taskName:taskName, taskPaiorty:taskPaiorty};

    tableData.push(tablerow)
  console.log(tableData)

}
}
function displayData(){
  let htmlData=''
  for(let i=0;i<tableData.length;i++){
  
    htmlData+=`
    <tr>
    <th scope="row">${tableData[i].id}</th>
    <td>${tableData[i].taskName}</td>
    <td>${tableData[i].taskPaiorty}</td>
    <td scope="col">
    <button onclick="deleteRow(${i})" class="btn btn-danger">
    delete
  </button>
  </td>
  </tr>`
  
  }
  document.getElementById("tableBody").innerHTML=htmlData
}
function addrowHtml(){
  addRow()
  displayData()
}
function deleteRow(x){

  tableData.splice(x,1)
  displayData()
}