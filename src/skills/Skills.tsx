import React from 'react';
import s from './Skills.module.css'
import common from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

let skill1: string = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos.`

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${common.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title text={'My skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'} description={skill1}/>
                    <Skill title={'Redux'} description={skill1}/>
                    <Skill title={'TS'} description={skill1}/>
                    <Skill title={'JS'} description={skill1}/>
                    <Skill title={'HTML'} description={skill1}/>
                    <Skill title={'CSS'} description={skill1}/>
                </div>
            </div>
        </div>
    )
}