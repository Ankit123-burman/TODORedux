import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue] = useState('')
  const [item,setItem] = useState([])
  const [search , setSearch] = useState('')
  const [originalItem, setOriginamItem] = useState([])



  const searchItem = () =>{
    if(search.trim()=== ''){
      setItem(originalItem)

    }else{
      const sr  = item.filter((value) => 
         value.toLowerCase().includes(search.toLowerCase())
      )
      setItem(sr)
    }
  }

  const add=()=>{
      if(value.trim() === '') return;
      const update = [...item,value]
      setItem(update);
      setOriginamItem(update)
      setValue("")
  }

  const Delete =(indexTodel)=>{
    const updateItem = item.filter((_,indexx)=> indexx !== indexTodel )
    const updateOriginal = originalItem.filter((_,indexx)=> indexx !== indexTodel)
    setOriginamItem(updateOriginal)
    setItem(updateItem)

  }


  return (
    <>
      <div  className="container h-screen w-screen bg-amber-500  p-5 font-bold flex justify-center " >
        <div >
        <input type="search"  onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            searchItem()
          }
        }}  value={search}
         onChange={(e)=>setSearch(e.target.value)} 
         className='bg-amber-100  rounded-xs p-1.5 mr-7 ' 
          placeholder='search item'/>

         <button onClick={searchItem}  className='bg-blue-600 h-10 w-18 rounded-2xl' >Search</button>

        <h1 className='text-6xl text-center p-15' >TODO LIST</h1> 
        <input onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            add()
          }
        }} value={value} onChange={(e)=>setValue(e.target.value)} type="text" className='bg-amber-100  rounded-xs p-1.5 w-xl' placeholder='Enter item....' />
        <button onClick={add} className='bg-green-700 w-24 h-10 hover:bg-red-500' >AddItem</button>
        
        <ul className='mt-4' >
          {item.map((item,index)=>(
           <li
           key={index} className='p-1 border-b flex justify-between'
           >{item} <span><button onClick={()=>Delete(index)} className='bg-red-600' >Delete</button></span> </li>
          ))}
        </ul>
        
        </div>
      </div>
    </>
  )
}

export default App
