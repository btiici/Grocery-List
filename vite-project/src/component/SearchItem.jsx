export default function SearchItem({search, setSearch}){
    return(
        <form onSubmit={(e) => e.preventDefault()} className="search">
            <label htmlFor="search">Search Item</label>
            <input 
                id="search"
                type="text"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}