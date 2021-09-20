import React from 'react';
import s from './RemoteWork.module.css'
import common from './../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${common.container} ${s.remoteWorkContainer}`}>
                <h3 className={s.title}>Open for remote work</h3>
                <div className={s.hireButton}>
                    Hire me
                </div>
            </div>
        </div>
    )
}