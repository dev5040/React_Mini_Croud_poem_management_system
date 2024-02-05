




import { useState } from "react";
import axios from "axios";

const Insert=()=>
{
    const [input,setInput]=useState({});
  const handleInput=(e)=>
  {

    let name=e.target.name;
    let value=e.target.value;
    setInput( values=>({...values ,[name]:value}));

    
    //console.log(input);

  }

  const DataSave=()=>
  {
    //alert(input);
    //console.log("data successfully save!!!");
    let url="http://localhost:4000/poems";
    axios.post(url,input).then(alert("data save!!"));
  }


	return(


	<>
        <center>
          <h1>INSERT NEW POEM DATA</h1>
          <hr color="black" size="1" style={{width:"500px"}}/>

		<label style={{fontSize:"25px",marginLeft:"-55px"}}>Enter src No:</label><br/>
    <input type="text" name="srcno" value={input.srcno}  
        onChange={handleInput}   /><br/><br/>

        <label style={{fontSize:"25px"}}>Enter Poem's Name:</label><br/>
          <input type="text" name="poemnm" value={input.poemnm}  
        onChange={handleInput}   /><br/><br/>

        <label style={{fontSize:"25px"}}>Enter Poet's Name:</label><br/>
          <input type="text" name="poetnm" value={input.poetnm}  
        onChange={handleInput}   /><br/><br/>

        <label style={{fontSize:"25px"}}>Enter Poem's Price:</label><br/>
          <input type="text" name="prc" value={input.prc} 
        onChange={handleInput}   /><br/><br/>
        <button onClick={DataSave}>save Data</button><br/><br/>

        </center>


		
	</>



	);
}
export default Insert;






