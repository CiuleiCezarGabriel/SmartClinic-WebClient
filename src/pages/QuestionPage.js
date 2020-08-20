import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { fetchQuestions } from '../actions';

class QuestionPage extends React.Component {

    onGetQuestions() {
        let { fetchQuestions } = this.props
        fetchQuestions()
    }

    render() {
        let { questions } = this.props
        return (
            <div>
                <div><button onClick={() => this.onGetQuestions()}>Get my questions</button></div>
                Question list:
                <div>
                    {!!questions.length &&
                        questions.map((question, index) => (
                            <div key={index}>
                                {question.status}
                            </div>
                        ))}
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

