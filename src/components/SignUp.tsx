import React, { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from './modal/Modal'
import { AuthContext } from '../context/AuthContextProvider'

interface Props {}

export const FormContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem 0;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  h2 {
    margin: 0;
  }
`

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  .email_section_label {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.teal};
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  border: 0.5px solid ${(props) => props.theme.colors.teal};
  border-radius: ${(props) => props.theme.radius};
  margin: 0.2rem 0;
  padding: 1rem;
  font-size: 1.4rem;
  outline: none;
  box-shadow: 2px 2px 4px ${(props) => props.theme.colors.lightGrey};
`

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  background: ${(props) => props.theme.backgroundColors.main};
  color: white;
  font-size: 1.8rem;
  margin-top: 2rem;

  &:hover {
    background: ${(props) => props.theme.colors.darkTeal};
  }
`

export const StyledError = styled.p`
  margin: 0;
  padding: 0;
  color: red;
  font-size: 1.5rem;
`

export const StyledSwitchAction = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;

  p {
    font-size: 1.2rem;
    color: black;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }
`

export const StyledInform = styled.div`
  margin: 0;
  padding: 0.2rem;
  width: 100%;

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.teal};
    padding: 0;
  }
`

export const StyledSocial = styled.div`
  margin: 1rem auto;
  padding: 0.2rem;
  width: 100%;

  button {
    width: 100%;
    margin: 1rem auto;
    padding: 4%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  }

  .facebook {
    background: ${(props) => props.theme.colors.fbBlue};

    &:hover {
      background: ${(props) => props.theme.colors.fbDarkBlue};
    }
  }

  .google {
    background: ${(props) => props.theme.colors.googleRed};

    &:hover {
      background: ${(props) => props.theme.colors.googleDarkRed};
    }
  }
`

export const Divider = styled.hr`
  background-color: ${(props) => props.theme.colors.lightGrey};
  height: 1px;
  width: 100%;
`

const SignUp: React.FC<Props> = () => {
  const { handleAuthAction } = useContext(AuthContext)

  return (
    <Modal>
      <FormContainer>
        <Header>
          <h2>Sign Up</h2>
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
          <p className='email_section_label'>or sign up with an email</p>
          <InputContainer>
            <label>Username</label>
            <Input
              type='text'
              name='username'
              id='username'
              placeholder='Your username'
              autoComplete='new-password'
            />
          </InputContainer>

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
            Already have account?{' '}
            <span
              style={{ cursor: 'pointer', color: 'red' }}
              onClick={() => handleAuthAction('signin')}
            >
              sign in
            </span>{' '}
            instead.
          </p>
        </StyledSwitchAction>
      </FormContainer>
    </Modal>
  )
}

export default SignUp
