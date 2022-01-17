async function apiCall(url) {

    try{
        let res= await fetch(url)

    let data = await res.json();
    return data
    
    }
    catch(err){
        console.log("err" ,err)
    }

    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach((el)=>{

        let div = document.createElement("div");
        div.addEventListener("click",()=>{
            let obj={
                name:el.title,
                image:el.image,
                detail : el.description
            }

            localStorage.setItem("search_term",JSON.stringify(obj))

            window.location.href="news.html"
        })

        let p=document.createElement("p");
        p.textContent = el.title;

        let img=document.createElement("img");

        img.src=el.image

        let desc = document.createElement("p")

        desc.innerText=el.description

        div.append(p,img)
        main.append(div)
    })

}

export { apiCall, appendArticles }