import React from "react";
import s from './Title.module.css'

type TitlePropsType = {
    text: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.title}>
            <h3>{props.text}</h3>
        </div>
    )
}