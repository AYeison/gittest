const p1 = document.querySelector("#p1");
let urls = []
let flag = false;
let interval;

const p1Img = p1.querySelector('img');
urls = p1.dataset.srcs.split(',');
p1Img.src = urls[0];

p1Img.addEventListener('mouseover', itNext);
p1Img.addEventListener('mouseout', itout);

function itout(){
    flag = false;
    p1Img.src = urls[0];
    clearInterval(inverval);
}


function itNext(){
       let it = timeriterator(urls);
       flag = true;
       timer = 0;
       if(flag){
       
          


          inverval =  setInterval(function(){
                timer++;
                if(timer >= 5){
                    timer = 0;
                    p1Img.src = it.next().value != undefined ? it.next().value : urls[urls.length-1];
                }
                console.log(timer);
            }, 300)



          
   
       }else{
        p1Img.src = urls[0];
        return false;
       }
        
      
    
}


function* timeriterator(urls){
    for( url of urls){
        yield url;
    }
}

