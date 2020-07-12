import React from 'react'
import Modal from './modal/Modal'
import {
  FormContainer,
  Header,
  StyledForm,
  InputContainer,
  Input,
  Button,
} from './SignUp'

const ResetPassword = () => {
  return (
    <Modal>
      <FormContainer>
        <Header>
          <h4>Enter your new password below.</h4>
        </Header>
        <StyledForm>
          <InputContainer>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
            />
          </InputContainer>
          <Button>Submit</Button>
        </StyledForm>
      </FormContainer>
    </Modal>
  )
}

export default ResetPassword
