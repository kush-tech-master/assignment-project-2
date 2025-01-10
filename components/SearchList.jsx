export default function SearchList(props){

    return (
   
        <div className="shadow-2xl max-h-72  w-[20rem] overflow-y-auto  h-[10rem] ">
       
        {props.result.map((item,idx)=>{
            return <div 
            className="bg-slate-200 text-black border p-0.5 rounded-md border-black"
             onClick={(e)=>{ 
                props.searchResult(e.target.textContent)
            }}
             key={idx}>
                {item.title}
                </div>
        })
        }
        </div>
      
    )
}