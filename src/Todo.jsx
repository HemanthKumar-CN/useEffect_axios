import React from 'react'
import axios from "axios"

const Todo = () => {

    const [data, setData] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [limit, setLimit] = React.useState(1)
    const [totalCount, setTotalCount] = React.useState(0)
    React.useEffect(()=> {
        getTodo(page,limit)

        
    },[page,limit])

     const getTodo= async (page,limit)=> {
         let r=await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)  
        //  console.log(r.headers["x-total-count"]) 
         setData(r.data)
         let num=Number(r.headers["x-total-count"])
         setTotalCount(num)
         
        }
        
    // console.log(limit)
    let op=[1,2,3,4];

  return (
    <div>
        <h1>Todo</h1>
        {
            data.map((item,index)=> (
                <div key={item.id}>{index}-{item.value}</div>
            ))
        }

        <h1>Page: {page}</h1>
        <button disabled={page==1} onClick={()=> {setPage(page-1)}}>{"<"}</button>
        <select  onChange={(e)=> {
            // console.log(e.target.value)
            let numLimit=Number(e.target.value)
            setLimit(numLimit)
            }}  name="" id="">
            <option  value="1">1</option>
            <option value="3">3</option>
        </select>
        {/* <button onClick={()=> {setLimit(3)}}>test</button> */}
        <button disabled={page>=Math.ceil(totalCount/limit)} onClick={()=> {setPage(page+1)}}>{">"}</button>

        {
            <select>
            {
                op.map(limits=> {
                    return (
                        
                            <option key={limits} value={limits}>{limits}</option>
                        
                    )
                })
            }
            </select>
        }
        

    </div>
  )
}

export default Todo