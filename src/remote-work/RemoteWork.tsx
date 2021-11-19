import React from 'react';
import s from './RemoteWork.module.css'
import common from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${common.container} ${s.remoteWorkContainer}`}>

                <Title text={'Open for remote work'}/>

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