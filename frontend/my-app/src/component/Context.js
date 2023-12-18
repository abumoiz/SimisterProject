import React, { createContext, useState} from "react";
const mycontext = createContext();
const Context =({children})=>{
    const [data, setdata] = useState([

        {heading: "Article (Context)",Articletil:" Celtic denied win by Álvaro Morata’s header for Atlético Madrid",  para: "Not content with branding Atlético Madrid as one of the finest teams in Europe, Brendan Rodgers used the eve of this Champions League joust to declare Celtic were facing a side that should be classed among the world’s best. As Kyogo Furuhashi and Luis Palma sent Celtic in front at separate first-half moments, Rodgers looked poised to oversee the kind of memorable European occasion that has been missing from these parts for far too long. Atlético, as one of the favourites to win this competition, had other ideas. Twice they hit back at Celtic. The Spanish team may feel they should have gone further given second half territorial dominance but Celtic contributed enough to a pulsating contest to deserve their point. They are justifiably off the mark in Group E  “I thought it was a terrific performance,” said Rodgers. “It was everything that I wanted but it was important for us to get a result as well as a performance. We showed that we could really compete with a top level team. They’ll fly back to Spain knowing they had a really tough game.”"} 
    ]);

   
    return(
<div>
<mycontext.Provider value= {{data,setdata}}>
{children }
</mycontext.Provider>
</div>
)


};
export { Context, mycontext};   