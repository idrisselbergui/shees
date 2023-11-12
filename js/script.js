var Chess_image=document.createElement("img");
    Chess_image.setAttribute("src","img/chess.png");
    Chess_image.setAttribute("width","64px");
    Chess_image.setAttribute("height","64px");
    Chess_image.setAttribute("id","my_img");
    Chess_image.setAttribute("draggable","true");
    Chess_image.setAttribute("ondragstart","drag(event)");
function afficher(){
    
   var tt=document.createElement("table");
   tt.setAttribute("id",'tb_Chess')
   var p=0;
   for(var i=1;i<=8;i++){
    var tr=document.createElement("tr");
    tt.appendChild(tr);
   
    for(c=1;c<=8;c++){
        if(p===0)
        { 
            var td=document.createElement("td")
            td.setAttribute("class","bayda")
         
            // td.setAttribute("id","bayda")

            p=1;
        }else{
            var td=document.createElement("td")
            td.setAttribute("class","kahla")
            // td.setAttribute("id","kahla")
            p=0;
        }
        var id=i+"_"+c;
        td.setAttribute("ondrop","drop(event)")
        td.setAttribute("ondragover","allowDrop(event)")
        td.setAttribute("id",id)

        tr.appendChild(td);
       
    }
    if(p===0){
       p=1; 
    }else{
        p=0;
    }

   }
//    alert(tt);
   document.getElementById("dv_Chess").appendChild(tt);
   
    document.getElementById("1_1").appendChild(Chess_image)




}
function move_chess(direction){
   
    
    var img=document.getElementById('my_img')
    var parent_id= img.parentElement.id;

    // var new_id=parent_id.replace(parent_id[2],parseInt(parent_id[2])+1);
    if(direction=="up"){
        let new_idd=parseInt(parent_id[0])-parseInt(1);
        // alert(parent_id[0]+"_"+new_idd)
        document.getElementById(new_idd+"_"+parent_id[2]).appendChild(Chess_image);
   

    }
    else if(direction=="down"){
        let new_idd=parseInt(parent_id[0])+parseInt(1);
        // alert(parent_id[0]+"_"+new_idd)
        document.getElementById(new_idd+"_"+parent_id[2]).appendChild(Chess_image);
   

    }
    else if(direction=="right"){
       
        let new_idd=parseInt(parent_id[2])+parseInt(1);
        // alert(parent_id[0]+"_"+new_idd)
        document.getElementById(parent_id[0]+"_"+new_idd).appendChild(Chess_image);
    }
    else if(direction=="left"){
        let new_idd=parseInt(parent_id[2])-parseInt(1);
        // alert(parent_id[0]+"_"+new_idd)
        document.getElementById(parent_id[0]+"_"+new_idd).appendChild(Chess_image);
   
    }

}


function get_td_id(){
    var pic=document.getElementById("")
}

//trying the drag and drop for thos elements



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }







