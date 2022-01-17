function storeSearchterm(term) {
//let search_bar =document.getElementById("search_bar").value

if(term.length>3){
   localStorage.setItem("news",JSON.stringify(term))

   window.location.href="search.html"
}

}

export default storeSearchterm