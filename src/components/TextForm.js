import React, { useState } from 'react'

export default function TextForm(props) {

  //function to convert in uppercase
    const handleUpClick=()=>{
        console.log("Upper Case clicked"+text);
        let newtext=text;
        setText(newtext.toUpperCase());
        props.showAlert("Converted to upper case","primary");
    }
    const onChangeHandler=(event)=>{
        console.log("onchange is clicked");
        setText(event.target.value);
    }

    //function to convert in lowercase
    const handleLowerClick=(event)=>{
      let newtext=text;
      setText(newtext.toLowerCase());
      props.showAlert("Converted to lower case","warning");
    }

    //function to clear the text
    const handlecleartask=()=>{
      setText("");
      console.log("textarea is now empty");
      props.showAlert("Text is cleared","primary");
    }

    // function to copy all the spaces
    const handleCopy=()=>{
      console.log("all the text is copied");
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard","primary");
    }

    //function to handle extra spaces
    const handleSpaces=()=>{
      var newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("All the extra spaces are removed","primary");
    }

    // function for speak 
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    // function to stop speak
    const stopspeak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent == "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
          if (toogle.innerHTML = "Speak"){
              window.speechSynthesis.cancel()
          }
      }
  }
    // function to download the text as a file
    const downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      element.click();
      props.showAlert("File is downloaded","primary");
}
    //useState to carry the text
    const [text,setText]=useState("")
  return (
    <>
    <div className='conatiner my-3'>
        <h3>{props.heading}</h3>
<textarea className={`form-control backgroundColor:${(props.mode==="dark")?'light':'dark'}`} rows="8" id="myBox" value={text} placeholder="Enter text here" onChange={onChangeHandler}></textarea>
<button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handlecleartask}>Clear</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Sapce</button>
<button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
<button type="submit" onClick={stopspeak} className="btn btn-primary mx-2 my-2" id="toggle">Stop Speak</button>
<button className={`btn btn-primary mx-2 my-2 text-:${(props.mode==="dark")?'light':'dark'}`} onClick={downloadTxtFile}>Download Text</button>
</div>
<div className='container my-3'>
  <h3>Your text summary</h3>
  <h3>{text.split(" ").length} words</h3>
  <h3>{text.length} chars</h3>
  <h3>{0.008 * text.split(" ").length} minutes read</h3>
  <h3>Preview</h3>
  <p>{(text.length>0?text:"Enter something to preview it here")}</p>
</div>
</>
  )
}
