import React, { useState } from 'react';
import './FooterStyle.css';

function Footer() {
    const [form, setform] = useState({});
    const [error, setError] = useState([]);
    const validation = () => {
        if (Object.keys(form).length == 0) {
            setError(['name', 'message', 'email']);
            return false;
        } else if (form.name == '') {
            setError([...error, 'name']);
            return false;
        } else if (form.email == '') {
            setError([...error, 'email']);
            return false;
        } else if (form.message == '') {
            setError([...error, 'message']);
            return false;
        }
        return true;
    }
    const handleSubmit = () => {
        if (validation()) {
            alert("Details saved successfully");
            setform({})
            setError('');
        }
        else {
            alert("Enter required details");
        }
    }
    console.log("Error", error, '\n', form)
    return (
        <div className='footer' id='contact'>
            <div className='footer-top'>
                <div className='footerTop-left'>
                    <h3 className='Subtitles'>Newslleter</h3>
                    <p>get news about articles and updates<br />in your mobile</p>
                </div>
                <div className='footerTop-right'>
                    <form>
                        <input type="text" name='name' placeholder='Name' onChange={(e) => {
                            setform({ ...form, name: e.target.value });
                            setError(error.filter(ele => ele != 'name'))
                        }
                        }
                            className={`form-text ${error.includes('name') ? 'red' : ''}`} />
                        <input type="text" name='email' placeholder='Email' onChange={(e) => {
                            setform({ ...form, email: e.target.value });
                            setError(error.filter(ele => ele != 'email'))
                        }} className={`form-text ${error.includes('email') ? 'red' : ''}`} />
                        <input type="text" name='message' placeholder='Message' onChange={(e) => {
                            setform({
                                ...form, message: e.target.value
                            })
                            setError(error.filter(ele => ele != 'message'))
                        }
                        } className={`form-text ${error.includes('message') ? 'red' : ''}`} />
                    </form>
                </div>

            </div>

            <div className='footer-bottom'>
                <div className='footerBottom-left'>
                    <h1>GET</h1>
                    <h1 className='Second-para'>IN TOUCH</h1>
                </div>
                <div className='footerBottom-right'>
                    <div className='send-btn' onClick={() => handleSubmit()}>Send</div>
                </div>
            </div>
        </div>
    )
}

export default Footer