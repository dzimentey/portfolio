import React from 'react';
import s from './Main.module.css'
import common from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={common.container}>
                <div className={s.intro}>
                    <span>Hello you guys</span>
                    <h1>I'm Dzimon</h1>
                    <p>A Front-End React developer</p>
                </div>
                <div className={s.photo}>
                </div>

            </div>
        </div>
    )
}