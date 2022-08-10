    import React,{useState} from 'react'

    export default function TextForm(props) {
    
      const [text,setText]=useState(" ");//Enter text here in text area 

      const handleUpClick=()=>{
      let newText = text.toUpperCase(); // toUpperCase() is javaScript pre-defined function
      setText(newText)
      props.showAlert("converted to UpperCase!","success")
    }

    const handleLowClick=()=>{
      let newText = text.toLowerCase(); // toLowerCase() is javaScript pre-defined function
      setText(newText)
      props.showAlert("converted to LowerCase!","success")
    }

    const handleClearClick=()=>{
      let newText = ""; 
      setText(newText)
      props.showAlert("Text Cleared","success")
    }

    const handleCopyClick=()=>{
      navigator.clipboard.writeText(text);// This is just used to copy the text to the clipboard
      props.showAlert("Copied to Clipboard!","success")
    }

    const handleExtraSpaceClick=()=>{//Used to remove extra spaces
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success")
    }


    const handleOnChange=(event)=>{// using handleOnChange we are able to write in the textarea ,So it is important
      setText(event.target.value)//using this we are able to write in the text area
    }




  return (
<>
    <div>
      <div className="container"></div>

  <h3 className='my-1 mb-3'>{props.heading}</h3>
      <div className="form-group">
          <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="9"></textarea>
      </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert UpperCase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert Lowercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>copy Text</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my4">
      <h1>your Text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length<=1?"Nothing to Preview":text} </p>
    </div>
</>
  )
}
