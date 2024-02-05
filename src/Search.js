

import axios from "axios";
import { useState } from "react";

const Search=()=>
{

    const [src,setSrc]=useState("");

    const [myData,setMyData]=useState([]);
    const handleSubmit=()=>
    {
        let url=`http://localhost:4000/poems/?srcno=${src}`;
        axios.get(url).then((res)=>
        {
            setMyData(res.data);
        });

    }

    const poemData=myData.map((key)=>{

        return(

            <>
        <tr align="center">
            <td>{key.srcno}</td>
            <td>{key.poemnm}</td>
            <td>{key.poetnm}</td>
            <td>{key.prc}</td>
        </tr>
            </>


        );
    });


    return(

        <>
        <center>
        
        <h1 style={{fontSize:"40px"}}>SEARCH POEM RECORD</h1>
        <hr color="black" size="1" style={{width:"500px"}}/><br/>

       <p style={{fontSize:"20px"}}> Enter Src no: <input type="text" value={src} 
        onChange={(e)=>{setSrc(e.target.value)}}/>

        <button onClick={handleSubmit}>Search</button></p>
        <br/><br/><br/>

        <table border="1px" bgcolor="#58886b" align="center" width="350px">
            <tr bgcolor="salmon">

                <th>Src No</th>
                <th>Poem</th>
                <th>Poet</th>
                <th>Price</th>

            </tr>
            {poemData}
        </table>
        <br/><br/>
        
        </center>
        
        </>




    );
}

export default Search;