import React from 'react';
import s from './Contacts.module.css'
import common from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${common.container} ${s.contactsContainer}`}>
                <h3 className={s.title}>Quick Contact Form</h3>

                    <form action="" className={s.form}>
                        <input type="text" placeholder={'Your Name'}/>
                        <input type="text" placeholder={'Your Email'}/>
                        <textarea name="" id=""  rows={8} placeholder={'Your message'}></textarea>
                    </form>


                <button type={'submit'} className={s.sendButton}>Submit</button>

            </div>
        </div>
    )
}