import React from "react";
import "../assets/css/Modal.css";

/**
 * Renders a Modal component.
 * @param {Any} props The properties passed in by the parent class.
 */
export default function Modal(props) {
    return (
        <div className="modal fade" id="helpModal" tabIndex="-1" role="dialog" aria-labelledby="helpModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="helpModalTitle">{props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              {props.body}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    );
}