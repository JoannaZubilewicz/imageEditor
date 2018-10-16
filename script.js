(function(){
        
    let change =    function(e) {
    
        let img = new Image();
        let URL = window.URL;
        let url = URL.createObjectURL(e.target.files[0]);
        img.src = url;
        
        img.onload = function() {
            let canvas = document.getElementById("myCanvas");
            let ctx = canvas.getContext("2d");        
        
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0,canvas.width  , 500);
        }
    }

    document.getElementById("selectedImage").addEventListener("change",change)
})()