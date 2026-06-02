"use client";
import {FloppyDisk} from "@gravity-ui/icons";
import { redirect } from 'next/navigation';
import React from 'react';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const NewUserPage = () => {

    const onSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const newUsers = Object.fromEntries(formData.entries());
        console.log('new user data', newUsers);

        // todo send data to server client site js style

        const req = await fetch('http://localhost:1996/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUsers)
        })

        // .then (res => res.json()) ---- if not async await

        const res = await req.json();
        // console.log('new user data:', creatUser);

        if(res.success){
            alert('user created');;
            redirect('/user');
        }
    }

    return (
        <div>
            <h2>Create a new user</h2>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default NewUserPage;