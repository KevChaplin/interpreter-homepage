import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'

export default function Contact() {

    const { t } = useTranslation()

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
                            <TextField id="contact-form-name" label={t('contact.name.label')} placeholder={t('contact.name.placeholder')} variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="contact-form-email" type="email" label={t('contact.email.label')} placeholder={t('contact.email.placeholder')} variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  id="contact-form-message" label={t('contact.message.label')} multiline minRows={5} placeholder={t('contact.message.placeholder')} variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} margin="auto">
                            <Button type="submit" variant="contained" fullWidth>{t('contact.button')}</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}