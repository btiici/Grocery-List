import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

export default function AddItem ({newItem, setNewItem, handleSubmit}){
    const inputRef = useRef()

    return(
        <form className="Additem" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                placeholder="Add item"
                required
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                aria-label="Add Item"
                type="submit"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}