import React from 'react';
import styled from 'styled-components';
export function SignupForm() {
  return (
    <div>
      <Heading>Fill the following Details</Heading>
      <Form>
        <Field type="text" placeholder="Search College"></Field>
        <Field type="text" placeholder="Your year of admission?"></Field>
        <Field type="text" placeholder="Your Course"></Field>
        <Field type="text" placeholder="Major?"></Field>
        <Field type="text" placeholder="Minor?"></Field>
        <Field type="text" placeholder="Instagram Handle?"></Field>
        <Field type="text" placeholder="Twitter Handle?"></Field>
        <Field type="text" placeholder="Linkedin Handle?"></Field>
        <Field type="text" placeholder="Your Home State?"></Field>
        <Field type="text" placeholder="Your Home Town?"></Field>
        <Field type="text" placeholder="Your Hostel?"></Field>
        <Field type="text" placeholder="Your Skill / Interests"></Field>
      </Form>
    </div>
  )
}


const Heading = styled.h2`
text-align: center;
font-size:22px;
font-weight:lighter;
color:#999;
`

const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Field = styled.input`
padding:1rem;
width:80%;
max-width:400px;
margin:1rem;
background-color:#111;
color:white;
border:1px solid #999;
border-radius:1rem;
`