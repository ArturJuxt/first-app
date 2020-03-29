import React from 'react';
import s from './Dialog.module.css';
import Names from './Name/Names';
import Messages from './Message/Messages';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


function Dialog() {
    return (
        <BrowserRouter>
            <div className={s.dialog}>
                <Switch>
                    <div>
                        <Route><Names name='Artur' id='1' /></Route>
                        <Route><Names name='Edgar' id='2' /></Route>
                        <Route><Names name='Narek' id='3' /></Route>
                        <Route><Names name='Aram' id='4' /></Route>
                        <Route><Names name='Tiko' id='5' /></Route>
                        <Route><Names name='Hayko' id='6' /></Route>
                    </div>
                </Switch>
                <Switch>
                    <div>
                        <Route><Messages message='message 1' /></Route>
                        <Route><Messages message='message 2' /></Route>
                        <Route><Messages message='message 3' /></Route>
                        <Route><Messages message='message 3' /></Route>
                    </div>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Dialog