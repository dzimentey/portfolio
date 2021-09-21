import React from 'react';
import s from './Footer.module.css'
import common from './../common/styles/Container.module.css'
import {Instance} from "./Instance";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${common.container} ${s.footerContainer}`}>
                <h3 className={s.title}>El Chupo Pupo</h3>
                <div className={s.instances}>

                   <Instance/>
                   <Instance/>
                   <Instance/>
                   <Instance/>

                </div>
                <span className={s.copyrights}>&copy; 2021 All rights reserved</span>
            </div>
        </div>
    )
}