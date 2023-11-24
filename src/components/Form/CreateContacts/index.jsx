import React from 'react';
import { useFormik } from 'formik';
import {FormCard, FormBox, InputName, Input, Button} from './FormStyle'

const CreateContactForm = ({addContact}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
      onSubmit: values => {
          formik.resetForm();
       // e.preventDefault()
        addContact(values)
      //alert(JSON.stringify(values, null, 2));
      },
      validate:values=>{
          let errors = {
          };
 if(!values.name){
  errors.name = 'Required!'
 } 
 else if (values.number.length > 0 ) {
     if(!/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/i.test(values.number)){
errors.number = 'Invalid number format!'
          }
 }
 return errors;
},
  });
    return (
      <FormCard >
            <form onSubmit={formik.handleSubmit}>
    <FormBox>
      <InputName htmlFor="firstName">Name</InputName>
      {formik.errors.name&& <div className="error">{formik.errors.name}</div>}  
      <Input
      style={formik.errors.name &&{backgroundColor: 'red',}}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
    </FormBox>
    <FormBox>
       <InputName htmlFor="lastName">Number</InputName>
    {formik.errors.number&& <div className="error">{formik.errors.number}</div>}   
      <Input
      style={formik.errors.number &&{backgroundColor: 'red',}}
        id="number"
        name="number"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.number}
      />
    </FormBox>
      <Button type="submit">Submit</Button>
            </form>
            </FormCard>
  );
};
export default CreateContactForm

