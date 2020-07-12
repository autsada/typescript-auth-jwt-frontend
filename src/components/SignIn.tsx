import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from './modal/Modal'
import { AuthContext } from '../context/AuthContextProvider'
import {
  FormContainer,
  Header,
  StyledForm,
  InputContainer,
  Input,
  Button,
  StyledSwitchAction,
  Divider,
  StyledSocial,
} from './SignUp'

interface Props {}

const SignIn: React.FC<Props> = () => {
  const { handleAuthAction } = useContext(AuthContext)

  return (
    <Modal>
      <FormContainer>
        <Header>
          <h2>Sign In</h2>
        </Header>

        <StyledSocial>
          <button className='facebook'>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} size='lg' />
            <a>Sign in with Facebook</a>
          </button>
          <button className='google'>
            <FontAwesomeIcon icon={['fab', 'google']} />
            <a>Sign in with Google</a>
          </button>
        </StyledSocial>

        <Divider />

        <StyledForm>
          <p className='email_section_label'>or sign in with an email</p>
          <InputContainer>
            <label>Email</label>

            <Input
              type='text'
              name='email'
              id='email'
              placeholder='Your email'
              autoComplete='new-password'
            />
          </InputContainer>

          <InputContainer>
            <label>Password</label>

            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
            />
          </InputContainer>
          <Button disabled>Submit</Button>
        </StyledForm>
        <StyledSwitchAction>
          <p>
            Don't have an account yet?{' '}
            <span
              style={{ cursor: 'pointer', color: 'red' }}
              onClick={() => handleAuthAction('signup')}
            >
              sign up
            </span>{' '}
            instead.
          </p>
          <p>
            Forgot password? click{' '}
            <span
              style={{ cursor: 'pointer', color: 'red' }}
              onClick={() => handleAuthAction('request')}
            >
              here.
            </span>
          </p>
        </StyledSwitchAction>
      </FormContainer>
    </Modal>
  )
}

export default SignIn
