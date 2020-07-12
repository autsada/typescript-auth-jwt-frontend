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

interface Props {}

const RequestResetPassword: React.FC<Props> = () => {
  return (
    <Modal>
      <FormContainer>
        <Header>
          <h4>Enter your email below to reset password.</h4>
        </Header>
        <StyledForm>
          <InputContainer>
            <Input
              type='text'
              name='email'
              id='email'
              placeholder='Your email'
              autoComplete='new-password'
            />
          </InputContainer>
          <Button disabled>Submit</Button>
        </StyledForm>
      </FormContainer>
    </Modal>
  )
}

export default RequestResetPassword
