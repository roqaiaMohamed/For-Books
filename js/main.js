let data;
async function getNewBooks(searchBooks = 'now_playing'){
    response = await fetch(`http://gutendex.com/books/?api_key=be22844913886056a229c40d39a1daac`)
    resResponse = await response.json();
    data = resResponse.results
    console.log(data)
    displayData(data,4)
}

getNewBooks()



function displayData(list,length){
    let cartona = ``;
    for( let i = 0 ; i<length ; i++){

       
    
            
        
        cartona +=`
        <div class="col-md-3 text-start pb-3 "> <img class=" cardImg" style="border-radius: 5px;" src="${list[i].formats["image/jpeg"]}" alt="" srcset="">
        <p class="pt-2 m-0 fw-bold">${list[i].title}</p>
        <p  class="p-0 m-0 " style="color: #585258 ; font-size: 12px;"> ${list[i].authors["0"].name}</p>
        
    
    </div>
        `
       

    }

    

    document.getElementById('demo').innerHTML=cartona;
 
}

$(".cardButton").click(function() {
    console.log(data);
    displayData(data,data.length)
})



function search(term){
    
    var books = []
        
    
        for(var i = 0 ; i<data.length ; i++){
    
        if (data[i].title.toLowerCase().includes(term.toLowerCase()) == true ){
            books.push(data[i])
      
            console.log(books)
            
            displayData(books,books.length)
        
        }
     
    
        }
    }
    

    $("input").keyup(function(){
        search(this.value)
    })