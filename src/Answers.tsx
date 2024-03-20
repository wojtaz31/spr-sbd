import Answer from './pytanie';
import { Question } from './types';

export default function Answers({selectedOption, currentQuestion, handleOptionClick }: {currentQuestion: Question, selectedOption:string, handleOptionClick: (c: string) => any }) {
    return (
        <>
            <Answer
                option={'odpa'}
                selectedOption={selectedOption}
                onClick={() => handleOptionClick('odpa')}
                correctAnswer={currentQuestion.a}
                content={currentQuestion.q.odpA.slice(20)}
            />
            <Answer
                option={'odpb'}
                selectedOption={selectedOption}
                onClick={() => handleOptionClick('odpb')}
                correctAnswer={currentQuestion.a}
                content={currentQuestion.q.odpB.slice(20)}
            />
            <Answer
                option={'odpc'}
                selectedOption={selectedOption}
                onClick={() => handleOptionClick('odpc')}
                correctAnswer={currentQuestion.a}
                content={currentQuestion.q.odpC.slice(20)}
            />
            <Answer
                option={'odpd'}
                selectedOption={selectedOption}
                onClick={() => handleOptionClick('odpd')}
                correctAnswer={currentQuestion.a}
                content={currentQuestion.q.odpD.slice(20)}
            />
        </>
    )
}