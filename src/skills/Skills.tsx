import React from 'react';
import s from './Skills.module.css'
import common from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

let skill1: string = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos.`

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${common.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={skill1}/>
                    <Skill title={'CSS'} description={skill1}/>
                    <Skill title={'JS'} description={skill1}/>
                </div>
            </div>
        </div>
    )
}