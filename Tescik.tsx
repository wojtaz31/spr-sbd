import './App.css';
import { useState } from 'react';
import { Box, Button, Card, CardContent, Checkbox, Typography } from '@mui/material';
import { questions } from './pytania_inf03_sql';
import Answers from './Answers';
import { getProgressFromStorage, loadRandomQuestion } from './utils';
import { ProgressStatus, Question } from './types';

let progress: ProgressStatus = getProgressFromStorage()

export let przerobione: any = progress['przerobione'];
let iloscPoprawnych = progress['iloscPoprawnych']
let iloscUdzielonych = progress['iloscUdzielonych']

export default function Tescik() {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(loadRandomQuestion() as Question);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [answered, setAnswered] = useState(false);
  const [flag, setFlag] = useState(false);

  const resetStates = () => {
    setFlag(false)
    setAnswered(false);
    setSelectedOption('');
    setCurrentQuestion(loadRandomQuestion())
  }

  const handleOptionClick = (option: any) => {
    if (!answered) {
      setSelectedOption(option);
      setAnswered(true);
    }
  };

  const handleNextClick = () => {
    if (selectedOption) {
      iloscUdzielonych++;
      localStorage.setItem('iloscUdzielonych', JSON.stringify(iloscUdzielonych));
    }
    if (selectedOption === currentQuestion.a && !flag) {
      przerobione.push(+currentQuestion.q.id - 1)
      iloscPoprawnych++;
      localStorage.setItem('iloscPoprawnych', JSON.stringify(iloscPoprawnych));
    }
    resetStates()
  };

  const hardReset = (hard: boolean) => {
    if (hard) {
      przerobione = []
      localStorage.setItem('przerobione', JSON.stringify(przerobione))
    }
    iloscUdzielonych = 0;
    localStorage.setItem('iloscUdzielonych', JSON.stringify(iloscUdzielonych));
    iloscPoprawnych = 0;
    localStorage.setItem('iloscPoprawnych', JSON.stringify(iloscPoprawnych));
    resetStates()
  }

  return (
    <Box sx={{ p: 2, backgroundColor: '#494949' }}>
      {przerobione.length === questions.length ? (<>
        <h1 style={{ color: 'white' }}>Congratulations ! Przerobiłeś wszystko, jest ogień.</h1>
        <Button sx={{ p: 2, fontSize: 25, border: 'solid 5px black' }} onClick={() => { hardReset(true) }}>
          RESETUJ PROGRES I ROZPOCZNIJ OD NOWA
        </Button>
        <h1><a id='donation_link' style={{ color: 'white' }} target='_blank' href='https://paypal.me/wojtaz31?country.x=PL&locale.x=pl_PL'>Link do donacji</a></h1>
      </>) :
        <><Card sx={{ mb: 2, backgroundColor: '#181818', color: 'white' }}>
          <CardContent>
            <Typography variant="h3" sx={{ mb: 2, }}>
              {currentQuestion.q.header}
            </Typography>
            Oflaguj pytanie:
            <Checkbox
              checked={flag}
              onChange={() => setFlag(!flag)}
              sx={{
                mb: 2,
                margin: 1,
                color: 'white'
              }}
            />
            <Button sx={{ p: 2 }} onClick={() => { hardReset(true) }}>HARD RESET</Button>
            <Typography variant="h4" sx={{ marginRight: '1em' }}>

            </Typography>
            <Button sx={{ m: 2 }} variant="contained" onClick={() => { hardReset(false) }}> Resetuj procenty</Button>
            <a>{`Procent poprawnych odpowiedzi: ${iloscUdzielonych == 0 ? 0 : ((iloscPoprawnych / iloscUdzielonych) * 100).toFixed(1)}%`}</a>
            {przerobione.length > 0 ? (<><Typography>{`Przerobione pytania: ${przerobione.length}`}</Typography>
              <Typography>{`Pozostalo do przerobienia ${2227 - przerobione.length}`}</Typography></>) : <></>}
            <br />
            <Box sx={{ p: 2, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))' }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {currentQuestion.q.tresc}
                {currentQuestion.q?.obrazek != undefined ? (
                  <><br/><img src={currentQuestion.q.obrazek} style={{ color: 'white' }}></img></>
                ) : <></>}
              </Typography>
              <Answers selectedOption={selectedOption} currentQuestion={currentQuestion} handleOptionClick={handleOptionClick} />
            </Box>
          </CardContent>
        </Card>
          <Button variant="contained" onClick={handleNextClick} disabled={!selectedOption}>Dalej</Button>
        </>
      }
    </Box>
  );
};
