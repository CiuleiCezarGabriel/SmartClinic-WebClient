import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { fetchQuestions } from '../actions';
import { questions } from '../reducers/questionReducer';
import Question from '../components/Question'

class QuestionPage extends React.Component {

    constructor(props) {
        super(props)

        let { fetchQuestions } = this.props
        fetchQuestions()
        if (questions.length < 10) {
            console.log(questions)
        }
    }

    render() {
        let { questions } = this.props
        console.log(questions.length)
        if (questions.length == 0) {
            return <div> There are no questions </div>
        }

        return (
            <div>
                <div><button onClick={() => this.onGetQuestions()}>Get my questions</button></div>
                Question list:
                <div>
                    {
                        questions.map((question, i) => {
                            return <div key={i}> <Question question={question.question}
                                response={question.response}>
                            </Question>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    questions: state.questions.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchQuestions: fetchQuestions,
}, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(QuestionPage)

