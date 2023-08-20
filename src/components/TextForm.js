import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>

      <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#343a40' : '#fff', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="5"></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>

        <h2 className='mt-3'>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        
        <h4 className='mt-3'>Preview</h4>
        <p> {text} </p>
      </div>

    </>
  );
}

