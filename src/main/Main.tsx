import React from 'react';
import s from './Main.module.css'
import common from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={common.container}>
                <div className={s.intro}>
                    <span>Hello you guys. I'm El Chupo Pupo</span>
                    <h1>Front-end <span>React</span> developer</h1>
                    {/*<p>Front-end React developer</p>*/}
                    {/*<p>There are many variations of passages of Lorem Ipsum available,*/}
                    {/*    but the majority have suffered alteration in some form, by injected humour, or randomised words*/}
                    {/*    which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum by*/}
                    {/*    injected humour, or randomised words which don't look even slightly believable. If you are going*/}
                    {/*    to use a passage of Lorem Ipsum</p>*/}
                </div>
                <div className={s.photo}>
                </div>

            </div>
        </div>
    )
}