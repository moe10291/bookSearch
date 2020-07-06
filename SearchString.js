//Load a book from disk 
function loadBook(filename, dislpayName){
    let currentBook= "";
    let url= "books/"+ filename;

    //reset UI
     document.getElementById("fileName").innerHTML= dislpayName;
     document.getElementById("searchstat").innerHTML= "";
     document.getElementById("keyword").value= "";

     //create a server req to load books
     var xhr= new XMLHttpRequest();
     xhr.open("GET", url, true);
     xhr.send();

     xhr.onreadystatechange= function(){
         if (xhr.readyState ==4 && xhr.status== 200){
             currentBook= xhr.responseText;

             document.getElementById("filedContent").innerHTML= currentBook;

             var elmnt= document.getElementById("fileContent");
             elmnt.scrollTop= 0;
         }
     }
}