import React, {useState, useEffect} from "react";
import { Home2 } from "./Home2";
import { Loading } from "./Loading";



export function Landing () {
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (        
      <>
      <div>
        {(loading)? <Loading /> : <Home2/>}
      </div>
        </>    
    )
}