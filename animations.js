let iconsAreRotated = [false, false, false];

function colorBackground(index){
    let header = document.getElementById("heading" + index.toString());
    header.style = "background-color: #f8f6f6 !important";
}

function uncolorBackground(index){
    if(!iconsAreRotated[index]){
        let header = document.getElementById("heading" + index.toString());
        header.style = "background-color: white !important";
    }
}


function rotateIcon(filterIndex){
    let icon = document.getElementById("icon" + filterIndex.toString());
   
    if(!iconsAreRotated[filterIndex]){
        iconsAreRotated[filterIndex] = true
        iconsAreRotated.forEach((value, index) => 
        {
            if(index != filterIndex && value){
                aux = document.getElementById("icon" + index.toString());
                aux.style = "transform: rotate(45deg) !important";
                let header = document.getElementById("heading" + index.toString());
                header.style = "background-color: white !important";
                iconsAreRotated[index] = false;
            }
        })
        icon.style = "transform: rotate(90deg) !important";
        let header = document.getElementById("heading" + filterIndex.toString());
        header.style = "background-color: #f8f6f6 !important";
    }

    else{
        icon.style = "transform: rotate(45deg) !important";
        let header = document.getElementById("heading" + filterIndex.toString());
        header.style = "background-color: white !important";
        iconsAreRotated[filterIndex] = false;
    }
}