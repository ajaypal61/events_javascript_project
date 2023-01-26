   
   
   // 2nd way of writing function 
    const callingfunction = () => {
        alert('most common way')
    }

  
    // 3nd way of writing function

    const thirdway = document.getElementById('thirdway');
    thirdway.onclick = ()=> {
        alert('most common way again')
    }


    // 4nd way of writing function

    const fourtway = document.querySelector('#fourtway');
    fourtway.addEventListener('click', () => {
        alert('i love this way')
    })