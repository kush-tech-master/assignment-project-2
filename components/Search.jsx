 "use client"

 import { useRef } from "react"
 export default function Search(props){

        let ref = useRef()

    return (
        <>
            <form ref={ref} action={()=>{ref.current.reset()}}>
                <input type="text" autoComplete="off" placeholder="search here" name="serachbar" id="searchbar" value={props.input} className=" mt-2 text-black p-1 border rounded-md w-[20rem] ml-[7rem]"
                onChange={(e)=>{props.handleChange(e.target.value)}} />

                <button onClick={()=>{props.handleSubmit(props.temp)}} className="mx-4 w-[5rem] p-1 border rounded-md box-border">search</button>
            </form>
        </>
    )
 }