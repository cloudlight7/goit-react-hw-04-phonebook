import { Component } from 'react';
import {FormCard, FormBox, InputName, Input, Button} from './FormStyle'


 class CreateContactForm extends Component {
    state ={
      name: '',
     number: ''
    }
     handleSubmit = (e) => {
        e.target.reset()
        e.preventDefault()
        this.props.addContact(this.state)
        
        
    }
     handleChange = ({ target: { value, name } }) => {
       //  {name.number isInteger}
        this.setState({[name]:value})
    }
     render() {
   // console.log(this.state);
    return (
        <FormCard >
            <form onSubmit={this.handleSubmit}>
                <FormBox >
                    <InputName >Name</InputName>
                    <Input value={this.state.value} onChange={this.handleChange} type="text" name="name" required />
                </FormBox>
                <FormBox >
                    <InputName>Number</InputName>
                    <Input value={this.state.value} onChange={this.handleChange} type="tel"  name="number" required />
                </FormBox>
                <div >
                    <Button  type="submit" >Add contact</Button>
                </div>
            </form>
        </FormCard>
    );
}
}
export default CreateContactForm