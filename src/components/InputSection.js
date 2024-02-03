import React,{useState} from "react";

export default function InputSection(){
    const[money,setMoney]=useState("");
    const[experience,setExperience]=useState("");
    const [name,setName]=useState("");
    const [list,setList]=useState([]);
    const[total, setTotal]=useState({
        customer:0,
        tip:0
    });
    console.log(name.length);
    const handleAdd=()=>{
        if(money>0 && experience>0 && name !== "" ){
            let newList={
                name:name,
                tip:money*experience
            }
            let updateArr= [...list];
            updateArr.push(newList);
            setList(updateArr);
        }
        else{
            alert("please fill it correctly.")
        }
    }
    const handleAddGet=()=>{
        // let total1={
        //     totalCustomer:list.length
        // }
        // let arr=[...total];
        // arr.push(total1);
        // setTotal(arr);
        const totalCustomer=list.length;
        let totalTip= list.reduce((acc, val) => acc + val.tip, 0);
        setTotal({
            customer:totalCustomer,
            tip:totalTip
        })
    }
    console.log(list.length);
    return(
        <>
         <div className="container">
            <h1 className="a1">Tip Calculator </h1>
            <h4 className="a2">Built in react</h4>
            <lable className="a3">Enter your bill amount</lable>
            <br/>
            <input className="a4" type="text"  value={money} onChange={(e)=>setMoney(e.target.value)} />
            <br/>
            <br/>
            <label className="a5">Rating based on services</label>
            <br/>
            <select className="a6" value={experience} onChange={(e)=>setExperience(e.target.value)}>
                <option value="0">Choose...</option>
                <option value="0.20">Excellent-20%</option>
                <option value="0.10">Moderate-10%</option>
                <option value="0.05">Bad5%</option>
            </select>
            <br/>
            <br/>
            <label className="a7">Customer Name</label>
            <br/>
            <input  className="a8" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <button className="a12" onClick={handleAdd}>Add in list </button>
            <h2 className="a9">Customer List</h2>
            <div className="a13">
                {list.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p className="a14">{item.name} is offering the tip of {item.tip} rupee </p>
                        </div>
                    )
                })}
            </div>
            <button className="a10" onClick={handleAddGet}>Calculate tip And Customer</button>
            <table className="a11">
                <thead>
                    <tr >
                        <th>Total customer</th>
                        <th>total Tip</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr>
                        <td>{total.customer}</td>
                        <td>{total.tip}</td>
                    </tr>
                </tbody>
            </table>

         </div>
        </>
        
    );
}