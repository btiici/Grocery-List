export default function Footer ({length}){
    return(
        <footer>
            <h4>{length} List {length === 1 ? "item" : "items"}</h4>
        </footer>
    )
}