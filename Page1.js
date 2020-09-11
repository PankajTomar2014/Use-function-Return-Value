

export function Api() {
   return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then( (resp)=>{ 
        if(resp==='')      
            return "Data not found";
        else
       return resp

    })      
 }


