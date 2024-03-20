import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NewBar() {
    return <Box sx={{marginBottom: 0, height: 80}} style={{height: 100, marginBottom: 10, zIndex: 10}}>
        <AppBar sx={{height: '111.5%', margin: 'auto'}} position="static">
            <Toolbar sx={{margin: 'auto'}}>

                <Typography style={{
                    marginRight: '4em',
                    letterSpacing: '2px',
                    fontSize: '2em'
                }}>PANEL NAWIGACYJNY</Typography>
                
                 <Typography variant="h4" sx={{marginRight: '1em'}}>
                    <Link to={"/"}
                             style={{color: '#fff', textDecoration: 'none'}}>Tescik</Link>
                </Typography>
                    <Typography variant="h4" sx={{marginRight: '1em'}}>
                        <Link to={"/dzisiejsze"}
                                 
                                 style={{color: '#fff', textDecoration: 'none'}}>Dzisiejsze pytania</Link>
                    </Typography>

            </Toolbar>
        </AppBar>
    </Box>
}