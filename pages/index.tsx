import React, {useState, useEffect} from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';

export default function Indes() {

    const [tap, setTap] = useState('tap1');

    return( <>
    <AppBar position='static'>
        <Toolbar>
            <Button color="inherit" onClick={() => setTap('tab1')}> Tab 1 </Button>
            <Button color="inherit"  onClick={() => setTap('tab2')}> Tab 2</Button>
        </Toolbar>
    </AppBar>

    {tap === 'tab1' && (<> <h1>Inhalt Tab1</h1> </>)}
    {tap === 'tab2' && (<> <h1>Inhalt Tab2</h1> </>)}
    </>)
}