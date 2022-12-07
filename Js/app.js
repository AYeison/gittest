const productos = document.querySelectorAll('.producto');
let flag = false;
let interval;


document.addEventListener('DOMContentLoaded', initApp);

function initApp(){
    imgstock();
   this.addEventListener('mouseover', itNext)
   this.addEventListener('mouseout', itout)
}



function itout(e){

    if(e.target.tagName === 'IMG'){
        const p1 = e.target.parentElement;
        const p1Img = e.target;
       const urls = p1.dataset.srcs.split(',');
       flag = false;
       p1Img.src = urls[0];
       clearInterval(inverval);
    }
   
}


function itNext(e){

    if(e.target.tagName === 'IMG'){
        flag = true;
        timer = 0;
       const p1 = e.target.parentElement;
       const urls = p1.dataset.srcs.split(',');
       const p1Img = e.target;
       let it = timeriterator(urls);

       
       if(flag){
       
          


        inverval =  setInterval(function(){
              timer++;
              if(timer >= 5){
                  timer = 0;
                  let url = it.next().value;
                  if(url){
                    p1Img.src = url;
                  }
              }
              
          }, 150)



        
 
     }else{
      p1Img.src = urls[0];
      return false;
     }
    }

   
   
      
     
        
      
    
}

function imgstock(){
    productos.forEach(element => {
        urls = element.dataset.srcs.split(',');
        element.querySelector('img').src = urls[0];
    });
}

function* timeriterator(urls){
    for( url of urls){
        yield url;
    }
}

