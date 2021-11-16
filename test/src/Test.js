import React from 'react'

const Test = ({c, setC}) => {
    return (
        <div>
            <button className="button" onClick={ () => setC(parseInt(Math.random()*1000))}>Generate</button>
            <br/>
            <input value={c} type="text" placeholder= "Generated number"></input>
            <p className= "Icdnformation">If you want number, click on button!</p>
            <br/>
            <br/>
            <p className= "Calculator">Calculator</p>
            <input type="text" placeholder= "Second Number"></input>
                <select name="index" id="index">
                    <option value="plus">+</option>
                    <option value="mínus">-</option>
                    <option value="děleno">/</option>
                    <option value="krát">*</option>
                </select>
            <input type="text" placeholder= "First Number"></input>
            <button className="result"> Result</button>
        </div>
    )
}

export default Test
