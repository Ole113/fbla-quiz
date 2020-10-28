import React from "react";
import "../assets/css/Modal.css";

import $ from 'jquery'; 

/**
 * Renders a Modal component.
 * @param {Any} props The properties passed in by the parent class.
 */
export default function Modal(props) {

	//There's an bug where when the modal is closed the help button moves to the left for a split second.  Most likely this is a bug with Bootstrap rather than FBLA Quiz.
	const SHOW_BUTTON = () => setTimeout(function () { document.getElementsByClassName("modal-button")[0].style.display = "block"; }, 300);

	if(props.type === "error") window.$(props.id !== undefined ? "#" + props.id : "#helpModal").modal();
	return (
		<div className="modal fade" id={props.id !== undefined ? props.id : "helpModal"} tabIndex="-1" role="dialog" aria-labelledby="helpModal" aria-hidden="true" data-backdrop="static">
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="helpModalTitle">{props.title}</h5>
						<button onClick={SHOW_BUTTON} type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>	
					</div>
					<div className="modal-body">
						{props.body}
					</div>
					<div className="modal-footer">
						<button onClick={SHOW_BUTTON} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	);
}