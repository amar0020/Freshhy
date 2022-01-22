var b=document.querySelectorAll(".bt")
    var a=0
    
    b.forEach(function(elem,index){
        b[index].addEventListener('click',function(){
            show(index)
        })})
    function show(index){
        if(a==0){
            console.log(a)
            document.querySelectorAll(".my")[index].style.display="block"
            document.querySelectorAll(".foot2")[index].style.boderBottom="none"
            return a=1
        }
        if(a==1){
            console.log(a)
            document.querySelectorAll(".my")[index].style.display="none"
            return a=0
        }
    }
