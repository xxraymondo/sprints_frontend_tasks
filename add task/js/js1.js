document.getElementById("taskPairortyValidation").style.display="none"
document.getElementById("taskNameValidation").style.display="none"
document.getElementById("taskPairortyValidationUpdate").style.display="none"
document.getElementById("taskNameValidationUpdate").style.display="none"
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
let boolName;
let boolPaiorty;
function sortByName(){
  
  boolName = !boolName
  if(boolName==true){
     x=tableData.sort((a, b) => a.taskName - b.taskName)
  }else{
  x.reverse()
  }
}
function sortByPaiorty(){
  boolPaiorty = !boolPaiorty
  if(boolPaiorty==true){
     x=tableData.sort((a, b) => a.taskPaiorty - b.taskPaiorty)
  }else{
  x.reverse()
  }
}
document.getElementById("taskNameHead").addEventListener("click",function(){
  sortByName()
  displayData()
})

document.getElementById("taskPaiortyHead").addEventListener("click",function(){
  sortByName()
  displayData()
})
let tasksArray = [
  ["Nathalie Nader Nabil", "Task 01", "Option 2"],
  ["Nathalie Nader", "Task 01", "Option 1"],
  ["Youssef Mohamed Ahmed Mohamed Youssef", "Task 01", "Option 1"],
  ["Salma Nasreldin", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy ahmed mostafa ", "Task 01", "Option 1"],
  ["Abdelhay Nader Abdelhay Abozayed", "Task 01", "Option 1"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Youssef Fathy Mahmoud", "Task 01", "Option 1"],
  ["Mark Bassem", "Task 01", "Option 1"],
  ["Anas Ahmed", "Task 01", "Option 1"],
  ["Adham Hesham", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["rola wafi", "Task 01", "Option 1"],
  ["Moataz Youssef", "Task 01", "Option 2"],
  ["Ahmad Salama", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["Ahmad Salama Abdelaziz", "Task 01", "Option 2"],
  ["Kareem Ramzi El-Tahlawi", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["rola wafi", "Task 01", "Option 2"],
  ["Mohamed Fahmi", "Task 01", "Option 1"],
  ["Mohamed Fahmi", "Task 01", "Option 2"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
 
  ["Nathalie Nader", "Task 01", "Option 1"],

  ["Nathalie Nader", "Task 01", "Option 1"],

  ["Nathalie Nader", "Task 01", "Option 1"],

  ["Mariam Ahmed", "Task 01", "Option 1"],
  ["Mariam Ahmed", "Task 01", "Option 1"],
  ["Mariam Ahmed", "Task 01", "Option 1"],
];
const unique = [...new Set(tasksArray.map(item => item[0]))]; // [ 'A', 'B']

console.log(unique)
