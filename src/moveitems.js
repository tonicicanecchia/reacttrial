import React  from "react";

export  default function Moveitems(props){












    return(
<div>

<strong>{props.Title}</strong>({props.imdbID})
<img src={props.Poster}
alt={props.Year}
style={{display:"block",
maxWidth:"100%",

}
}
/>


</div>



    );


}