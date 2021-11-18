import React from 'react';
import s from './MyWorks.module.css'
import common from './../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import cat from "./../assets/images/cat.jpg"

let describe: string = `Fuga neque pariatur qui sequi voluptas! 
    Aliquam aliquid deleniti doloribus expedita fugit hic illo illum incidunt
    minus neque nobis odit perferendis porro.`

const catImage = {
    backgroundImage: `url(${cat})`
}

export const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${common.container} ${s.myWorksContainer}`}>
                <Title text={'My works'} />
                <div className={s.works}>
                    <Work title={'Work 1'} description={describe} style={catImage}/>
                    <Work title={'Work 2'} description={describe} style={catImage}/>
                    <Work title={'Work 2'} description={describe} style={catImage}/>
                </div>
            </div>
        </div>
    )
}