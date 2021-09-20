import React from 'react';
import s from './MyWorks.module.css'
import common from './../common/styles/Container.module.css'
import {Work} from "./work/Work";


let describe: string = `Fuga neque pariatur qui sequi voluptas! 
    Aliquam aliquid deleniti doloribus expedita fugit hic illo illum incidunt
    minus neque nobis odit perferendis porro.`

export const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${common.container} ${s.myWorksContainer}`}>
                <h3 className={s.title}>My Works</h3>
                <div className={s.works}>
                   <Work title={'Work 1'} description={describe} />
                   <Work title={'Work 2'} description={describe} />
                </div>
            </div>
        </div>
    )
}