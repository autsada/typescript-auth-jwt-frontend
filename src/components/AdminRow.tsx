import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { User } from '../types'
import { isSuperAdmin } from '../helpers/authHelpers'

interface Props {
  user: User
}

const DeleteBtn = styled.button`
  background: red;
  color: white;

  &:hover {
    background: orange;
  }
`

const AdminRow: React.FC<Props> = ({ user }) => {
  const { roles } = user
  const initialState = useCallback(
    () => ({
      CLIENT: roles.includes('CLIENT'),
      ITEMEDITOR: roles.includes('ITEMEDITOR'),
      ADMIN: roles.includes('ADMIN'),
    }),
    []
  )

  const [isEditig, setIsEditing] = useState(false)
  const [roleState, setRoleState] = useState(initialState)

  return (
    <tr key={user.id}>
      {/* Name */}
      <td>{user.username}</td>

      {/* Email */}
      <td>{user.email}</td>

      {/* CreatedAt */}
      <td>{user.created_at}</td>

      {/* Manage Roles Section */}
      {/* client role */}
      <td
        style={{
          background: !isEditig ? 'white' : undefined,
          cursor: isEditig ? 'pointer' : undefined,
        }}
        className='td_role'
      >
        {roleState.CLIENT ? (
          <FontAwesomeIcon
            icon={['fas', 'check-circle']}
            className='true'
            size='lg'
            style={{ color: 'black', cursor: 'not-allowed' }}
          />
        ) : (
          <FontAwesomeIcon
            icon={['fas', 'times-circle']}
            className='false'
            size='lg'
            style={{ color: 'lightgray', cursor: 'not-allowed' }}
          />
        )}
      </td>

      {/* item editor role */}
      <td
        style={{
          background: !isEditig ? 'white' : undefined,
          cursor: isEditig ? 'pointer' : undefined,
        }}
        className='td_role'
      >
        {roleState.ITEMEDITOR ? (
          <FontAwesomeIcon
            icon={['fas', 'check-circle']}
            className='true'
            size='lg'
            style={{ color: !isEditig ? 'black' : undefined }}
          />
        ) : (
          <FontAwesomeIcon
            icon={['fas', 'times-circle']}
            className='false'
            size='lg'
            style={{ color: !isEditig ? 'lightgray' : undefined }}
          />
        )}
      </td>

      {/* admin role */}
      <td
        style={{
          background: !isEditig ? 'white' : undefined,
          cursor: isEditig ? 'pointer' : undefined,
        }}
        className='td_role'
      >
        <>
          {roleState.ADMIN ? (
            <FontAwesomeIcon
              icon={['fas', 'check-circle']}
              className='true'
              size='lg'
              style={{ color: !isEditig ? 'black' : undefined }}
            />
          ) : (
            <FontAwesomeIcon
              icon={['fas', 'times-circle']}
              className='false'
              size='lg'
              style={{ color: !isEditig ? 'lightgray' : undefined }}
            />
          )}
        </>
      </td>

      {/* super admin role */}
      <td>
        {isSuperAdmin(user) && (
          <FontAwesomeIcon
            style={{ cursor: 'not-allowed' }}
            icon={['fas', 'check-circle']}
            size='lg'
          />
        )}
      </td>

      {/* action */}
      <td>
        <p className='role_action'>
          <button>
            <FontAwesomeIcon
              icon={['fas', 'times']}
              color='red'
              onClick={() => {
                setRoleState(initialState)
                setIsEditing(false)
              }}
              size='lg'
            />
          </button>
          <button>
            <FontAwesomeIcon icon={['fas', 'check']} color='teal' size='lg' />
          </button>
        </p>
      </td>

      <td>
        <DeleteBtn
          style={{ cursor: isEditig ? 'not-allowed' : undefined }}
          disabled={isEditig}
        >
          <FontAwesomeIcon icon={['fas', 'trash-alt']} size='lg' />
        </DeleteBtn>
      </td>
    </tr>
  )
}

export default AdminRow
