document.getElementById("taskPairortyValidation").style.display="none"
document.getElementById("taskNameValidation").style.display="none"
document.getElementById("taskPairortyValidationUpdate").style.display="none"
document.getElementById("taskNameValidationUpdate").style.display="none"
// document.getElementById("DivForUpdate").style.display="none"
let updateBtn=document.getElementById("updateBtn")
let tableData=[]
let tablerow
let taskName
let taskPaiorty
let taskPaiortyUpdate
let taskNameUpdate
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
  
   tablerow = {id:tableData.length, taskName:taskName, taskPaiorty:taskPaiorty};

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
  <button onclick="updateRow(${tableData[i].id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  update 
</button>  
</td>
    <td scope="col">
    <button onclick="deleteRow(${tableData[i].id})" class="btn btn-danger">
    delete   
  </button>
  </td>
  
  </tr>`
  
  }
  document.getElementById("tableBody").innerHTML=htmlData
}
function clear(){
  document.getElementById("taskName").value=""
  document.getElementById("taskPaiorty").value=""
  document.getElementById("taskNameUpdate").value=""
  document.getElementById("taskPaiortyUpdate").value=""
  
}
function addrowHtml(){
  addRow()
   clear()
  displayData()
}
var objIndex;
function deleteRow(x){
  objIndex = tableData.findIndex((obj => obj.id == x));
  tableData.splice(objIndex,1)
  displayData()
}



function updateRow(x){
  objIndex = tableData.findIndex((obj => obj.id == x));
  document.getElementById("taskNameUpdate").value =tableData[objIndex].taskName
  document.getElementById("taskPaiortyUpdate").value = tableData[objIndex].taskPaiorty
}
function executeUpdate(){
  tableData[objIndex].taskName=document.getElementById("taskNameUpdate").value
  tableData[objIndex].taskPaiorty=document.getElementById("taskPaiortyUpdate").value 
  console.log(tableData[objIndex].taskName)
  displayData()
  document.getElementById("DivForAdd").style.display="block"
  clear()
  document.getElementById("myTable").style.display=""
}
function showHighPiroty(){
  let high=[];
  for(let i=0;i<tableData.length;i++){
      high.push(tableData[i].taskPaiorty)
  }
  return high
}

