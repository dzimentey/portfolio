import React from 'react';
import s from './RemoteWork.module.css'
import common from './../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${common.container} ${s.remoteWorkContainer}`}>

                <h3 className={s.title}>Open for remote work</h3>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci amet architecto beatae consequuntur, earum est iste libero magnam repellendus sit?
                        Accusamus aut dolores id incidunt ratione repudiandae? Aspernatur autem, repudiandae!
                    </p>
                </div>

                <div className={s.hireButton}>
                    Hire me
                </div>

            </div>
        </div>
    )
}