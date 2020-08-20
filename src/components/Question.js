import React from 'react'

class Question extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            // DEMO 
            <div>
                <div>
                    Intrebare <label> {this.props.question} </label>
                </div>
                {
                    this.props.response == " " ?
                        <div>
                            Raspuns <input type="text" />
                            <button > Send Response</button>

                        </div>
                        :
                        <div>
                            Raspuns  <label> {this.props.response} </label>
                        </div>
                }
            </div>
        )
    }
}
export default Question
