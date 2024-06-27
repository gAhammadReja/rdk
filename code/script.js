function view(my_id){
    let id = document.getElementById(my_id).style;      
    id.height='fit-content'
    id.padding='0.61rem'
    return 0;
    }
    function hide(my_id){ 
   let id = document.getElementById(my_id).style;
   id.padding='0rem'
   id.height='0'
    return 0;
        }

       let images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
       let img = document.getElementById('slideImg');
       let index = 0;  
       function h(index){
        const element = images[index];
        img.src=`./media/${element}`;
    }
setInterval(()=>{
    if (index < images.length-1) {
        index++
    }else{
        index=0;
    }
    h(index);
},4000);

// close a div by id
function closeId(id){
    document.getElementById(`${id}`).style.display='none';
}
