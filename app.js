var arr = []
var ul = document.getElementById('data')


// Check if item present in localstorage
function checknInLocalStorage(){
    return localStorage.getItem('li') ? JSON.parse(localStorage.getItem('li')) : []
}


function removeFromList(){
    var close = document.getElementsByClassName('close')
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}



// Initial mouting and render list
function mounting(){
    let data = JSON.parse(localStorage.getItem('li')) ? JSON.parse(localStorage.getItem('li')) : []
    if(data.length  > 0 ){
        for(i=0;i<data.length;i++){
            let li = document.createElement('li')
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.append(data[i])
            li.append(span)
            ul.append(li)
        }
    }
}

// Update list when we click on enter
function addList(){
    var inputText = document.getElementById('list-data').value
    var textNode = document.createTextNode(inputText)
    var li = document.createElement('li')
    li.append(textNode)
    if(textNode == " "){
        alert('Please enter some text')
    }
    else
    {
        if(checknInLocalStorage())
        {   
            let data = arr.concat(checknInLocalStorage())
            data.push(inputText)
            localStorage.setItem("li", JSON.stringify(data))
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.append(span)
            ul.append(li)
        }
    }
}

mounting()
removeFromList()