import * as React from 'react';
import { useState } from 'react'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next'


// Contact Form
export default function Contact() {
    // contact form data held in state variables
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const { t } = useTranslation()
    
    // Contact form submitted using formatsubmit.io
    // Yet to be updated with client's email account
    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://formsubmit.co/ajax/d19908dd31e0ee7758db5f46e8fc1476", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: {name},
                email: {email},
                message: {message}
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    return (
        <Card id="contact-me" sx={{maxWidth:1000, my:5, mx: "auto", py: 3, px: [2, 5]}}>
            <CardContent>
                <Typography variant="h2" gutterBottom>
                    {t('contact.title')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('contact.subtitle')}
                </Typography>
                <form>
                    <Grid container spacing={3} sx={{'pt': 2}}>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                id="contact-form-name" 
                                label={t('contact.name.label')} 
                                placeholder={t('contact.name.placeholder')} 
                                onChange={ e => setName(e.target.value)}
                                variant="outlined"
                                value={name}
                                fullWidth 
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                id="contact-form-email" 
                                type="email" 
                                label={t('contact.email.label')} 
                                placeholder={t('contact.email.placeholder')} 
                                onChange={ e => setEmail(e.target.value)}
                                value={email}
                                variant="outlined" 
                                fullWidth 
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  
                                id="contact-form-message" 
                                label={t('contact.message.label')} 
                                multiline 
                                minRows={5} 
                                placeholder={t('contact.message.placeholder')}
                                onChange={ e => setMessage(e.target.value)}
                                value={message}
                                variant="outlined" 
                                fullWidth 
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} margin="auto">
                            <Button 
                                type="submit" 
                                variant="contained" 
                                fullWidth
                                onClick={handleSubmit}
                            >
                                {t('contact.button')}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}