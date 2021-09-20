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
        // optional - used for spinning or loading gifs
        // xhr.onprogress = function(){
        //     console.log('READYSTATE: ', xhr.readyState)
        // }
    xhr.onload = function(){
        // check to see if status = 200, which means OK
        if(this.status === 200){
            console.log('READYSTATE: ', xhr.readyState)
            console.log(this.responseText)
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
        }
    }
    // if there is any error, onerror will log it
    xhr.onerror = function(){
        console.log('Request Error:')
    }
    // xhr.send will send the request itself
    xhr.send()
}