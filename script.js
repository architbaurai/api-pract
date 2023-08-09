document.getElementById('mybut').addEventListener("click",(event)=>{
    
    const prom = fetch('http://www.boredapi.com/api/activity');

    prom.then((response)=>{

        return response.json();

    }).then((data)=>{
        
        document.getElementById("stuff").innerHTML = `


        <p>Activity: ${data.activity}</p>

        <p>Type: ${data.type}</p>

        <p>Participants required: ${data.participants}</p>

        <p>Price: ${data.price}</p>

        <p>Accessibility: ${data.accessibility}</p>

        `

    })
})