import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Counter() {
    const [count, setCount] = useState(0); 
    const handleQuitar = () => (
        setCount(count - 1)
    )
    const handleAgregar = () => (
        setCount(count + 1)
    )


    return(
        <div>
            <div className="item-count d-flex align-items-center">

                <div className="d-flex">
                    <button onClick={handleQuitar} type="button" class="btn btn-secondary btn-sm me-2">-</button>
                    <h1 className="text-center fs-5">{count}</h1>
                    <button onClick={handleAgregar} type="button" class="btn btn-secondary btn-sm ms-2">+</button>
                </div>
           
            </div>
        </div>
    )


}