import axios from "axios";
import React,{useState,useEffect} from "react";
import Moveitems from "./moveitems";

export   default function Datafetch(){
    const number=0;
    const[post,setpost] =useState(number);
    const[searchtext,set_searchtext]=useState("")
    const[searchstate,set_searchstate]=useState({status:"idle"})
    const increment=() =>{
        setpost(post+1)
    }
    const descrese=() =>{
        setpost(post-1)
    
    }
  
     
    useEffect(()=>{  
        console.log("The useEffect action!");
        
      },[]); 
      console.log(post);
      
      const search= async() =>{
          const Response= await axios.get("http://www.omdbapi.com/?s=life&apikey=79543557")

         

          console.log(Response);

      set_searchstate({status:"done", data:Response.data.Search})
    }
    
    return(<div>
<p>{post}</p>
<button onClick={increment}>like</button>
<button onClick={descrese}>unlike</button>
<input value={searchtext}
onChange={e =>set_searchtext(e.target.value)}

/>

<button onClick ={search}>search</button>


</div>



    )
}
