import React from 'react';
import s from './MyWorks.module.css'
import common from './../common/styles/Container.module.css'


let skill1: string = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos.`

export const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${common.container} ${s.myWorksContainer}`}>
                <h3 className={s.title}>My Works</h3>
                <div className={s.works}>
                    {/*<Skill title={'HTML'} description={skill1}/>*/}
                    {/*<Skill title={'CSS'} description={skill1}/>*/}

                </div>
            </div>
        </div>
    )
}