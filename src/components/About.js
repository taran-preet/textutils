import React from "react";

export default function About(props) {
  // let myStyle={
  //     color:props.mode==='dark'?'white':'black',
  //     backgroundColor:props.mode==='dark'?'black':'white',
  //     border:"2px solid white"
  // }

  return (
    <div>
      <div className="container my-4">
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>Analyze your Text!</strong>
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className={`card-body text-${props.aboutColor}`}>
                TextUtils gives you a way to analyze your text quickly and
                efficiently,Be it Word Count or character count....
              </div>
            </div>
          </div>
          <div className={`card text-${props.aboutColor}`}>
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong> Free to use</strong>
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className={`card-body text-${props.aboutColor}`}>
                TextUtils is a free character counter tool that provides instant
                character count and word statistics for a given text. Textutils
                reports the number of Words and character. Thus it is suitable
                for writing the text with words/ character limit.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn  btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>Browser Compatable </strong>
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className={`card-body text-${props.aboutColor}`}>
                This Word counter software works in any web browser such as
                chrome,firefox,safari,opera.It suits to count character in the
                facebook,blog,books,excel documnent,pdf documents ,essays, etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
