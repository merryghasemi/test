

document.getElementById("json_data").addEventListener('click',showData);

function showData(){

fetch('posts.json')
.then(function(res){
return res.json();
})
.then(function(data){

    console.log(data)
})

}

document.getElementById('button2').addEventListener('click',geData);

function geData(){

    fetch('posts.json')
    .then(function(resp){

        return resp.json();
    })
    .then(function(mydata){

        console.log(mydata)
    })
}
