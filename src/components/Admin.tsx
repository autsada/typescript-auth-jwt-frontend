import React from 'react'
import styled from 'styled-components'

import AdminRow from './AdminRow'
import { users } from '../helpers/data'

const Div = styled.div`
  width: 100%;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  /* thead {
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
  } */

  th {
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    margin: 0;
   font-weight: 800;
  }

  td {
   border: 1px solid ${(props) => props.theme.colors.lightGrey};
    margin: 0;
    padding: 0.5rem;
   font-weight: 400;
   text-align: center;

   .true {
      color: ${(props) => props.theme.colors.teal};
   }

   .false {
      color: red;
   }

   .role_action {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;
      border: none;

      button {
        margin: 0;
        padding: 0.3rem;
      }
    }
  }

  .td_role {
     background: ${(props) => props.theme.colors.lighterGrey};
  }
`

const Admin: React.FC = () => {
  return (
    <Div>
      <h3>Permission Management</h3>
      <Table>
        <thead>
          <tr>
            {/* Header */}
            <th rowSpan={2} style={{ width: '25%' }}>
              Name
            </th>
            <th rowSpan={2} style={{ width: '20%' }}>
              Email
            </th>
            <th rowSpan={2} style={{ width: '15%' }}>
              Created At
            </th>
            <th colSpan={4} style={{ width: '25%' }}>
              Role
            </th>
            <th rowSpan={2} style={{ width: '10%' }}>
              Edit Roles
            </th>
          </tr>
          {/* Edit Roles Sub Headers */}
          <tr>
            <th>Client</th>
            <th>Editor</th>
            <th>Admin</th>
            <th>Super</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <AdminRow user={user} key={user.id} />
          ))}
        </tbody>
      </Table>
    </Div>
  )
}

export default Admin
