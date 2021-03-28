

  
    
        import axios from "axios";
    
        export  default function Homepage(){
    
          const Getjoke =()=>{
              axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(
                  (Response)=>{
                  }
              )
            }
            
            
            console.log(Response);

        
    return(<div>

<button onClick={Getjoke}>this is my button</button>





    </div>
    );




        }

        
        
        
        