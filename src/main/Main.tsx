import React from 'react';
import s from './Main.module.css'
import common from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={common.container}>
                <div className={s.intro}>
                    <span>Hello you guys. I'm</span>
                    <h1>El Chupo Pupo</h1>
                    <p>Different ends developer...</p>
                </div>
                <div className={s.photo}>
                </div>

            </div>
        </div>
    )
}