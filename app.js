document.querySelector('button').addEventListener('click', loadData)

function loadData(){
    // creating an XHR object
    const xhr = new XMLHttpRequest()
    // this object like any object will have properties and methods associated with it
    // Open is the specification of the request type and URL/filename it will be made to
    // the first parameter is the type of request
    // the second paramenter is the URL/filename that the request is being made to
    // true means it will be asynchronous 
    xhr.open('GET', 'data.txt', true)
    xhr.onload = function(){
        // check to see if status = 200, which means OK
        if(this.status === 200){
            console.log(this.responseText)
        }
    }
    // xhr.send will send the request itself
    xhr.send()
}