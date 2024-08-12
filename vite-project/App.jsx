import Header from "./src/component/Header"
import SearchItem from "./src/component/SearchItem"
import Content from "./src/component/Content"
import Footer from "./src/component/Footer"
import React from "react"
import AddItem from "./src/component/AddItem"

export default function App () {
    const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('shoppingList')))

    const [newItem, setNewItem] = React.useState('')

    const [search, setSearch] = React.useState('')

    function addItem(name){
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {id, checked:false, name}
        const listItems = [...items, myNewItem]
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    function handleCheck(id){
        const listItems = items.map((item) => 
            item.id === id ? { ...item, checked:!item.checked} : item
        )
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    function handleDelete(id){
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    function handleSubmit (e){
        e.preventDefault()
        addItem(newItem)
        if (!newItem) return;
        setNewItem('')
    }
    return(
        <>
            <Header />
            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            <Content 
                items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer 
                length={items.length}
            />
        </>
    )
}