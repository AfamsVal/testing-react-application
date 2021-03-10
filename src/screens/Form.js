import React,{useState} from 'react'

const Form = () => {
    const [age,setAge] = useState(0)
    return (
        <div>
            <form>
                <p title="testContent">Your age is {age}</p>
                <input type="text" title="testInput" value={age} onChange={(e)=>setAge(e.target.value)} />
                <button onClick={(e)=>setAge(20)} title="testFormBtn">click me</button>
            </form>
        </div>
    )
}

export default Form
