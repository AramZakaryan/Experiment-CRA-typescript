import React, {LegacyRef, MutableRefObject, useRef, useState} from 'react';

const App = () => {

    const [counter, setCounter] = useState(0)

    const [name, setName] = useState<string>()
    const [surname, setSurame] = useState<string>()
    // console.log(name, surname)

    const ref1 = useRef<any>()
    const ref2 = useRef<any>()

    return (
        <div>
                <input type="text"
                       placeholder={"name"}
                       value={name}
                       onChange={e=>setName(e.currentTarget.value)}
                       ref={ref1}

                />
                <br/>
                <input type="text"
                       placeholder={"surname"}
                       value={surname}
                       onChange={e=>setSurame(e.currentTarget.value)}
                       ref={ref2}

                />
                <br/>
                <button
                    onClick={()=>{
                        ref2.current.value="1"}}
                >
                    Change Focus
                </button>



        </div>
    );
}

export default App;
