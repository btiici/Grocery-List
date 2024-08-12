import React from "react"
import { FaTrashAlt } from 'react-icons/fa';

export default function Content ({items, handleCheck, handleDelete}){
    
    return(
        <div className="body">
            {items.length ? 
                (
                    <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <input 
                                        type="checkbox"
                                        onChange={() => handleCheck(item.id)} 
                                        checked={item.checked}
                                    />
                                    <label>
                                        {item.name}
                                    </label>
                                    <FaTrashAlt 
                                        role="button"
                                        tabIndex="0"
                                        onClick={() => handleDelete(item.id)}
                                    />
                                </li>
                            ))}
                    </ul>
                ) : (<p>Your list is empty</p>)
            }
        </div>
    )
}