(function(){
    var imagesRemoved = 0
    document.querySelectorAll('.imageToRemove').forEach( imageToRemove =>{
        if( imageToRemove.parentNode) imageToRemove.parentNode.removeChild(imageToRemove);
        imagesRemoved++;
    })
    console.log(imagesRemoved + " images removed!");
})();