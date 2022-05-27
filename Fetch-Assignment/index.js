
function getData(){
    console.log('started getData');
    let url="email.txt";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        rconsole.log(data);
    })

}

getData();
