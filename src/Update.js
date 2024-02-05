
import axios from "axios";
import { useEffect, useState } from "react";

const Update=()=>
{
    const [myData,setMyData]=useState([]);
    const [editData,setEditData]=useState({});

    const loadData=()=>
    {
        let url="http://localhost:4000/poems/";
        axios.get(url).then((res)=>
        {
            //console.log(res.data);
            setMyData(res.data);
        });
    }
        useEffect(()=>{
            loadData();
        },[]);

        const myDel=(myid)=>
        {
            let url=`http://localhost:4000/poems/${myid}`;
            axios.get(url).then((res)=>{

                setEditData(res.data);




            });

        }
        const handleInput=(e)=>
        {
            let name=e.target.name;
            let value=e.target.value;
            setEditData(values=>({...values,[name]:value}));
        }

        const handleSubmit=()=>
        {
            let myid=editData.id;
            let url=`http://localhost:4000/poems/${myid}`;
            axios.put(url,editData).then((res)=>{

                alert("data successfully saved !!");
                loadData();
            });
        }

        const MyData=myData.map((key)=>{

        return(

            <>
            <tr align="center">
              <td>{key.srcno}</td>
              <td>{key.poemnm}</td>
              <td>{key.poetnm}</td>
              <td>{key.prc}</td>
              <td>
                <a href="#" onClick={()=>{myDel(key.id)}}>
                    <img src="images/edit.png" width="35" height="30"/>
                </a>
                <a href="#" onClick={()=>{myDel(key.id)}}>
                    <img src="images/del.png" width="35" height="30"/>
                </a>
              </td>
            </tr>
            </>
          );
        });

        




    return(

        <>
        
        

        <center>
      <h1 style={{fontSize:"40px"}}>UPDATE POEM RECORD</h1>
      <hr color="black" size="1" style={{width:"500px"}}/>
      <br/>
      
      <table border="1px" width="400px" align="center" height="300px" bgcolor="#d6a9c0">
        <tr bgcolor="orange">
          
          <th>Src No</th>
          <th>Poem</th>
          <th>Poet</th>
          <th>Price</th>
          <th></th>
          
        </tr>
        {MyData}
      </table>
      </center><br/><br/>

      

      <div>
        <center>
        
        <h1 style={{fontSize:"40px"}}>EDIT POEM RECORD</h1>
        <hr color="black" size="1" style={{width:"500px"}}/>

        <label style={{fontSize:"20px",marginLeft:"-95px"}}>Edit Src No:</label><br/>
        <input type="text" name="srcno" value={editData.srcno}  
        onChange={handleInput}   /><br/><br/>

        <label style={{fontSize:"20px",marginLeft:"-55px"}}>Edit Poem's Name:</label><br/>
        <input type="text" name="poemnm" value={editData.poemnm}  
        onChange={handleInput}   /><br/><br/>

        <label style={{fontSize:"20px",marginLeft:"-55px"}}>Edit poet's Name:</label><br/>
        <input type="text" name="poetnm" value={editData.poetnm}  
        onChange={handleInput}   /><br/><br/>

        <label style={{fontSize:"20px",marginLeft:"-55px"}}>Edit Poem's Price:</label><br/>
        <input type="text" name="prc" value={editData.prc}  
        onChange={handleInput}   /><br/><br/>
        <button onClick={handleSubmit}>UPDATE</button>

            </center>

      </div><br/>

        
        
        </>




    );
}

export default Update;