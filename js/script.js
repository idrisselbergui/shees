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
   var Chess_image=document.createElement("img");
    Chess_image.setAttribute("src","img/chess.png");
    Chess_image.setAttribute("width","64px");
    Chess_image.setAttribute("height","64px");
    document.getElementById("1_1").appendChild(Chess_image)

}
function move_chess(direction){
    if(direction=="up"){

    }
    else if(direction=="down"){

    }
    else if(direction=="right"){
        
    }
    else if(direction=="left"){

    }

}