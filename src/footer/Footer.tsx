import React from 'react';
import s from './Footer.module.css'
import common from './../common/styles/Container.module.css'

let describe: string = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos.`

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${common.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Skills</h3>
                <div className={s.instances}>
                    <Instance title={'HTML'} description={describe}/>

                </div>
            </div>
        </div>
    )
}