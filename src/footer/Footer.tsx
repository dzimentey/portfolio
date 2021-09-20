import React from 'react';
import s from './Footer.module.css'
import common from './../common/styles/Container.module.css'


let skill1: string = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos.`

export const Footer = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${common.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skil title={'HTML'} description={skill1}/>

                </div>
            </div>
        </div>
    )
}