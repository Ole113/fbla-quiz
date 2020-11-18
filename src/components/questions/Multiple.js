import React from "react";

/**
 * 
 * @param {Any} props 
 */
export default function Multiple(props) {
    return (
        <div className="form-group">
            <label htmlFor="numberQuestions">{props.content}</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={"questionRadios" + props.id} id={"questionRadios1" + props.id} value="radio1" required/>
                <label className="form-check-label" htmlFor={"questionRadios1" + props.id} >
                    {props.optionOne}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={"questionRadios" + props.id} id={"questionRadios2" + props.id} value="radio2" required/>
                <label className="form-check-label" htmlFor={"questionRadios2" + props.id} >
                    {props.optionTwo}
                </label>
            </div >
            <div className="form-check">
                <input className="form-check-input" type="radio" name={"questionRadios" + props.id} id={"questionRadios3" + props.id} value="radio3" required/>
                <label className="form-check-label" htmlFor={"questionRadios3" + props.id} >
                    {props.optionThree}
                </label>
            </div >
            <div className="form-check">
                <input className="form-check-input" type="radio" name={"questionRadios" + props.id} id={"questionRadios4" + props.id} value="radio4" required/>
                <label className="form-check-label" htmlFor={"questionRadios4" + props.id} >
                    {props.optionFour}
                </label>
            </div >
        </div>
    );
}