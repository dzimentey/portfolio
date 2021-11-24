import React from 'react';
import s from './Work.module.scss'
import common from './../common/styles/Container.module.css'
type WorkType = {
    title: string
    description: string
    style: {}
}

export const Work = (props: WorkType) => {
    return (
        <div className={s.work}>
            <div className={s.imageContainer} style={props.style}>
                <span className={s.seeMore}>Show more</span>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>

    )
}