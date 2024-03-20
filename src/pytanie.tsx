import { Paper, Typography } from '@mui/material';

export default function Answer({option, selectedOption, content, correctAnswer, onClick }: { option: string,  content: string, selectedOption:string, correctAnswer: string, onClick: (c: string) => any }) {
    return <Paper
        onClick={() => onClick(option)}
        elevation={selectedOption === option ? 3 : 0}
        sx={{               
            padding: 2,
            margin: 1,
            cursor: "pointer",
            color: '#bfbebb',
            backgroundColor: 'inherit',
            border:
              selectedOption && option === correctAnswer
              ? "solid #2fff00 5px"
              : option === selectedOption
                ? "solid #ff0000 5px"
                  : "solid black 2px"
        }}
    >
        <Typography variant="body1">{content}</Typography>
    </Paper>
}