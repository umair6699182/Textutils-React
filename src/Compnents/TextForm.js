import React, { useState } from 'react'

export default function TextForm(props) {



    const handleupClick = () => {
        var umair = text.toUpperCase();
        setText(umair);
    }
    const handleLowerClick = () => {
        var umair = text.toLowerCase();
        setText(umair);
    }

    const handleoclaer = () => {
        var umair = '';
        setText(umair);
    }
    const handleonchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode === 'dark'?'#23395d':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleonchange} rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupClick}>Convert to Upercase</button>
                <button className="btn btn-dark mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-warning mx-3" onClick={handleoclaer}>Clear</button>
            </div>
            <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your Text Summry</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
