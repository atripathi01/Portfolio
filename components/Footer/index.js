import React from 'react';
import Socials from '../Socials';
import Link from 'next/link';
import Button from '../Button';
import Modal from '@mui/material/Modal';
import { Box, FormGroup, TextField, Typography } from '@mui/material';
import { useTheme } from 'next-themes';
import emailJS from '@emailjs/browser';



const Footer = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData]=React.useState({});

  const {theme} = useTheme();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius:'15px',
    bgcolor: theme === 'dark' ?"#000" :'background.paper',
    boxShadow: '0 0 15px 2px #3C0753',
    p: 4,
  };

  const handleChange = (e) =>{
      setData({
        ...data,
        [e.target.name]:e.target.value,
      })
  }

  const handleSubmit = () =>{
    console.log(data);
    console.log(process.env.EMAILJS_TEMPLETE);
    const templeteID=process.env.EMAILJS_TEMPLETE;
    const serviceID=process.env.EMAILJS_SERVICEID;
    const publicKey=process.env.EMAILJS_PUBLIC_KEY;

    const mailData={
        from_name: data?.name || '',
        from_email: data?.email || '',
        message: data?.message || '',
        to_name : 'Ayush',
    }

    emailJS.send(templeteID, serviceID, mailData, publicKey).then((res)=>{
        console.log(res);
        alert('Request sent for connection');
    }).catch((err)=>{
        console.error(err);
    })

    setData({});
    handleClose();
  }
  return (
    <>
      <div className='mt-5 laptop:mt-40 p-2 laptop:p-0'>
        <div>
          <h1 className='text-2xl text-bold'>Contact.</h1>
          <div className='mt-10'>
            <h1 className='text-2xl tablet:text-5xl laptop:text-5xl laptopl:text-6xl text-bold'>
              I&apos;m Just a Message Away  
            </h1>
            <h1 className='text-lg tablet:text-3xl laptop:text-3xl laptopl:text-3xl text-bold'>
            Let&apos;s Start a Conversation
            </h1>
            <Button onClick={handleOpen} type='primary'>
              Schedule a call
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <Typography variant='h5' sx={{color:theme==='dark'?'#fff':"#000",my:2}}>Get in touch</Typography>
                <form >
                    <FormGroup sx={{mb:1}}>
                        <label>Name:</label>
                        <TextField size='small' sx={{background:'#fff', borderRadius:'5px'}} value={data?.name||''} onChange={(e)=>handleChange(e)} name='name' placeholder='Name' required/> 
                    </FormGroup>
                    <FormGroup sx={{mb:1}}>
                        <label>Email:</label>
                        <TextField size='small' sx={{background:'#fff', borderRadius:'5px'}} value={data?.email||''} type='email' onChange={(e)=>handleChange(e)} name='email' placeholder='Email' required/> 
                    </FormGroup>
                    <FormGroup sx={{mb:1}}>
                        <label>Message:</label>
                        <TextField size='small' sx={{background:'#fff', borderRadius:'5px'}} value={data?.message||''} multiline rows={3} onChange={(e)=>handleChange(e)} name='message' placeholder='Message' required/> 
                    </FormGroup>
                    <Button type={'primary'}  onClick={(e)=>handleSubmit(e)}>Send</Button>
                </form>
              </Box>
            </Modal>
            <div className='mt-10'>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0'>
        Made With ❤ by{' '}
        <Link href=''>
          <a className='underline underline-offset-1'>Ayush Tripathi</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
