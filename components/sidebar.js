function sidebar() {


    // return your html component here
    //Make sure to give input search box id as ""
    return` <div>
    <p><a href="/index.html">Home</a></p>
    <p>Login</p>
   <input id="searchbar" type="text" placeholder="search"   >
   
  </div>
`
}

// import storeSearchterm from "./scripts/search.js"

//  document.getElementById("seacrhbar").addEventListener("change",()=>{
//    storeSearchterm(document.getElementById("searchbar").value)
//   })

  export default sidebar
