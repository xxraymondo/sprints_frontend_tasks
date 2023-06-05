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
  _id;
  _name;
  _priority;
  _status;
  _selected;
    constructor(id,name,priority,status,selected){
    this._id=id
    this._name=name
    this._priority=priority
    this._status=true
    this._selected=false
  }
  hideValidation(){
  
    document.getElementById("taskPairortyValidation").style.display="none"
    document.getElementById("taskNameValidation").style.display="none"
  }
  addRow(){
  
    taskName= document.getElementById("taskName").value
    taskPaiorty= document.getElementById("taskPaiorty").value
  
   if(taskName==""){
     document.getElementById("taskNameValidation").style.display="block"
   }else if(taskPaiorty<=0||taskPaiorty==""){
     document.getElementById("taskPairortyValidation").style.display="block"
   }else{
       this.hideValidation()
       
        this.object=new task(tableData.length,taskName,taskPaiorty)
       tableData.push(this.object)

   }
   }

   displayData(){
    let htmlData=''
    
    let status
    for(let i=0;i<tableData.length;i++){
     // debugger
     if(tableData[i]._status==true){
       status="done"
     }else{
       status="not done"
     }
     
 
 
      htmlData+=`
      <tr>   
      <th scope="row">${tableData[i]._id}</th>
      <td>${tableData[i]._name}</td>
      <td>${tableData[i]._priority}</td>
      
      <td class="currentStatus" onclick="objectoftask.changeStatus(${tableData[i]._id})">${status}</td>
      <td scope="col">
    <button onclick="updateRow(${tableData[i]._id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
    update 
  </button>  
  </td>
      <td scope="col">
      <button onclick="objectoftask.deleteRow(${tableData[i]._id})" class="btn btn-danger">
      delete   
    </button>
    </td>
    <td>
   `
   
   if(tableData[i].selected==true){
     htmlData+=`  <div onclick="objectoftask.select(${tableData[i]._id})" class="form-check">
    
     <input type="checkbox"  class="form-check-input" type="checkbox" checked> 
  
     </div>`
   }else{
     htmlData+=`  <div onclick="objectoftask.select(${tableData[i]._id})" class="form-check">
    
     <input type="checkbox"  class="form-check-input" type="checkbox"> 
  
     </div>`
   }
   `
    </td>
    </tr>`
    }
    
    document.getElementById("tableBody").innerHTML=htmlData
  }
  select(x) {
    let findingItem = tableData.find((item)=>item._id==x)
    findingItem._selected=!findingItem._selected
    console.log(findingItem)
  }
  resetId(){
    for(let i =0;i<tableData.length;i++){
      tableData[i]._id=i
    }
  }
  removeCheckedCheckboxes(){
    let gettingCheckedItems= tableData.filter((items)=>items._selected==false)
    tableData= gettingCheckedItems
    this.resetId()
    this.displayData()
  
  }
  clear(){
    document.getElementById("taskName").value=""
    document.getElementById("taskPaiorty").value=""
    document.getElementById("taskNameUpdate").value=""
    document.getElementById("taskPaiortyUpdate").value="" 
  }
  addrowHtml(){
    this.addRow()
     this.clear()
    this.displayData()
  }
  changeStatus(i){
    let myItemStatus
    let myitem= tableData.find(item=>item._id==i)
    myItemStatus=myitem._status
    myItemStatus= !myItemStatus
    myitem._status= myItemStatus
    let currentStatus=document.getElementsByClassName("currentStatus")[i]
    console.log(currentStatus)
    if(myitem._status==true){
      currentStatus.classList.add("text-success");
    }else{
      currentStatus.classList.add("text-danger");
    }
   this.displayData()
  }
  deleteRow(x){
    let objIndex;
    objIndex = tableData.findIndex((obj => obj._id == x));
    tableData.splice(objIndex,1)
    this.resetId()
    this.displayData()
  }
  
}
let objectoftask= new task()






 


///////////////////////////////////////////















let  objIndex;
function updateRow(x){

  objIndex = tableData.findIndex((obj => obj._id == x));
  document.getElementById("taskNameUpdate").value =tableData[objIndex]._name
  document.getElementById("taskPaiortyUpdate").value = tableData[objIndex]._priority
}
function executeUpdate(){
  tableData[objIndex]._name=document.getElementById("taskNameUpdate").value
  tableData[objIndex]._priority=document.getElementById("taskPaiortyUpdate").value 
  // console.log(tableData[objIndex].taskName)
  objectoftask.displayData()
  document.getElementById("DivForAdd").style.display="block"
  objectoftask.clear()
  document.getElementById("myTable").style.display=""
}


let boolName;
let boolPaiorty;
let mySortedTable
function sortByName(){

    boolName = !boolName
  if(boolName==true){
    mySortedTable =tableData.sort((a, b) => a._name - b._name)
  }else{
    mySortedTable.reverse()
  }
}
function sortByPaiorty(){
  boolPaiorty = !boolPaiorty
  if(boolPaiorty==true){
     x=tableData.sort((a, b) => a._priority - b._priority)
  }else{
  x.reverse()
  }

}
document.getElementById("taskNameHead").addEventListener("click",function(){
  sortByName()
  objectoftask.displayData()
})

document.getElementById("taskPaiortyHead").addEventListener("click",function(){
  sortByPaiorty()
  objectoftask.displayData()
})