import React, { useState } from 'react'

function BillSpliter() {
  const [amount,setamount]=useState()
  const [TipPercent,setpercent]=useState(0)
  const [NumberofPeople,setNumberofPeople]=useState(0)
  const [totaltip,settip]=useState(0)
  const [Totalamount,setTotalamount]=useState(0)
  const [peoples,setPeoples]=useState(0)

  function handeldata(){
     const tip=(amount*TipPercent)/100
     settip(tip)
     const total=Number(amount) + Number(tip)
     setTotalamount(total)
     const persons=Number(total)/(NumberofPeople)
     setPeoples(persons)
  }
  return (
    <>
    <div className='flex  justify-evenly mt-5'>
        <div>
         <h1>Bill</h1>
         <input type="text"  placeholder='Enter your Amount' value={amount} onChange={(e)=>setamount(e.target.value)}/>
         <div>
            <h1>Selected Tip</h1>
            <ul className='flex '>
                {[5,10,15,25,50,75].map((value)=>(
                    
                    <li key={value} className='border mx-1' onClick={(e)=>setpercent(value)}>{value}%</li>
                ))}
            </ul>
            <input type="text" placeholder='custom Tip in percent' value={TipPercent} onChange={(e)=>setpercent(e.target.value)}/>
            <h1>Number of People</h1>
            <input type="text"  placeholder='Number of people' value={NumberofPeople} onChange={(e)=>setNumberofPeople(e.target.value)}/>
            <button onClick={handeldata}>Genrate Bill</button>
         </div>
        </div>
        <div>
             <h1>TIP:-{totaltip}</h1>
             <h1>TOTAL:-{Totalamount}</h1>
             <h1>DVIDED AMOUNT BY PER PERSON:-{peoples}</h1>
        </div>

    </div>
      
    
    </>
  )
}

export default BillSpliter