export default function Sort( props ){

    return (
        <>
        <form action="">
            <label htmlFor="sort">Sort:</label>
            <select onClick={(e)=>{props.handleSort(e.target.value)}} className="text-black ml-1  p-1 border rounded-md mt-2" name="sort" id="sort">
                <option value="normal"> normal</option>
                <option value="a-z">ascending(a-z)</option>
                <option value="z-a">descending(z-a)</option>
                

            </select>
        </form>
        </>
    )
}