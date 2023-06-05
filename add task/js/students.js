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
class task{
  id;
  name;
  priority;
  status;
  selected;
    constructor(id,name,priority,status,selected){
    this.id=id
    this.name=name
    this.priority=priority
    this.status=true
    this.selected=false
  }
  
  
}
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
      object=new task(tableData.length,taskName,taskPaiorty)
     tableData.push(object)
     console.log(tableData) 
 }
 }





 function displayData(){
   let htmlData=''
   
   let status
   for(let i=0;i<tableData.length;i++){
    // debugger
    if(tableData[i].status==true){
      status="done"
    }else{
      status="not done"
    }
    


     htmlData+=`
     <tr>   
     <th scope="row">${tableData[i].id}</th>
     <td>${tableData[i].name}</td>
     <td>${tableData[i].priority}</td>
     
     <td class="currentStatus" onclick="changeStatus(${tableData[i].id})">${status}</td>
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
   <td>
  `
  
  if(tableData[i].selected==true){
    htmlData+=`  <div onclick="select(${tableData[i].id})" class="form-check">
   
    <input type="checkbox"  class="form-check-input" type="checkbox" checked> 
 
    </div>`
  }else{
    htmlData+=`  <div onclick="select(${tableData[i].id})" class="form-check">
   
    <input type="checkbox"  class="form-check-input" type="checkbox"> 
 
    </div>`
  }
  `

 
   </td>
   </tr>`
   }
   
   document.getElementById("tableBody").innerHTML=htmlData
 }
 

function select(x) {
  let findingItem = tableData.find((item)=>item.id==x)
  findingItem.selected=!findingItem.selected
}
function resetId(){
  for(let i =0;i<tableData.length;i++){
    tableData[i].id=i
  }
}
function removeCheckedCheckboxes(){
  let gettingCheckedItems= tableData.filter((items)=>items.selected==false)
  tableData= gettingCheckedItems
  resetId()
  displayData()

}




let myItemStatus
function changeStatus(i){
  let myitem= tableData.find(item=>item.id==i)
  myItemStatus=myitem.status
  myItemStatus= !myItemStatus
  myitem.status= myItemStatus
  let currentStatus=document.getElementsByClassName("currentStatus")[i]
  console.log(currentStatus)
  if(myitem.status==true){
    currentStatus.classList.add("text-success");
  }else{
    currentStatus.classList.add("text-danger");
  }
  displayData()
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

///////////////////////////////////////////














var objIndex;
function deleteRow(x){
  objIndex = tableData.findIndex((obj => obj.id == x));
  tableData.splice(objIndex,1)
  resetId()
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
  // console.log(tableData[objIndex].taskName)
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