//Load a book from disk 
function loadBook(filename, dislpayName){
    let currentBook= "";
    let url= "books/"+ filename;
    console.log(url);

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
             //Remove line breaks and acarriage returns and replace with a <br>
             currentBook= currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

             document.getElementById("fileContent").innerHTML= currentBook;


             var elmnt= document.getElementById("fileContent");
             elmnt.scrollTop= 0;
         }
     }
}

function getDocStats(fileContent){
    var docLength= document.getElementById("doclength");
    var wordCount= document.getElementById("wordCount");
    var charCount= document.getElementById("charCount");

    let text= fileContent.toLowerCase();
    let wordArray= text.match(/\b\S+\b/g);
    let wordDictionary= {};

    //Count every word in the wordArray
    for(let word in wordArray){
        let wordValue= wordArray[word];
        if(wordDictionary[wordValue]> 0){
            wordDictionary[wordValue] +=1;
        }
        else {
            wordDictionary[wordValue]= 1;
        }
    }
}

function sortProperties(obj){
    //first convert the Object to an Array
    let rtnArray= Object.defineProperties(obj);

    //Sort the Array
    rtnArray.Array.sort(function (first, second){
        return second[1]- first[1]
    });
}