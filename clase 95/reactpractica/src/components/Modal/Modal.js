import React, { useState, useContext } from 'react';
import './Modal.scss';
import HeaderContext from '../../context/HeaderContext';
import {ADD} from '../../reducer/Reducer';
import {postImg} from '../../services/Services';

const Modal = () => {

    const {setUser, DataDispatch} = useContext(HeaderContext);
    const {titulo, setTitulo} = useState('');
    const [avatar, setAvatar] = useState();

    const close = () => {
        setUser(false);
    }

    const newUser = async () => {
        const payload = await postImg(titulo, avatar)
        DataDispatch({ type: ADD, payload})
        close();
    }

    return (
        <React.Fragment>
            <div className='overlay'>    
                <form id="form-modal" className='form-modal'>
                    <button type="button" id="form-btn-cerrar" onClick={close}>Cerrar</button>

                    <input className='input' type="text" id="input-name" placeholder="Titulo" onChange={e => setTitulo(e.target.value)}/>
                    
                    <input className='input' type="url" id="input-avatar" placeholder="Avatar url" onChange={e => setAvatar(e.target.value)}/>

                    <button type="button" id="guardar-form" className='guardar-form' onClick={newUser}>Guardar</button>
                </form>
            </div>    
        </React.Fragment>

    )

}

export default Modal;
