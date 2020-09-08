import React from "react";

/**
 * Renders a Modal component.
 * @param {Any} props The properties passed in by the parent class.
 */
export default function Modal(props) {

	//There's an bug where when the modal is closed the help button moves to the left for a split second.  Most likely this is a bug with Bootstrap rather than FBLA Quiz.
    let showButton = () => setTimeout(function(){ document.getElementsByClassName("modal-button")[0].style.display = "block"; }, 300);

    return (
        <div className="modal fade" id="helpModal" tabIndex="-1" role="dialog" aria-labelledby="helpModal" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="helpModalTitle">{props.title}</h5>
                <button onClick = {showButton} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              {props.body}
              </div>
              <div className="modal-footer">
                <button onClick = {showButton} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    );
}