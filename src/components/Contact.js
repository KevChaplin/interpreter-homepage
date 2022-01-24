import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';

export default function Contact() {
    return (
        <Card id="contact-me" sx={{maxWidth:1000, my:5, mx: "auto", py: 3, px: [2, 5]}}>
            <CardContent>
                <Typography variant="h2" gutterBottom>Contact Me</Typography>
                <Typography variant="body1" gutterBottom>
                    Please fill in the form below for enquiries and I will get back to as soon as possible.
                </Typography>
                <form>
                    <Grid container spacing={3} sx={{'pt': 2}}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="contact-form-name" label="Name" placeholder="Enter name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="contact-form-email" type="email" label="Email" placeholder="Enter email address" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  id="contact-form-message" label="Message" multiline minRows={5} placeholder="Enter your message" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} margin="auto">
                            <Button type="submit" variant="contained" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}