import React from 'react';
import s from './Contacts.module.css'
import common from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${common.container} ${s.contactsContainer}`}>
                <h3 className={s.title}>Contacts</h3>
                <div className={s.formContainer}>
                    <form action="" className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols={38} rows={8}></textarea>
                    </form>
                </div>
                <div className={s.sendButton}>
                    Send
                </div>
            </div>
        </div>
    )
}