import React from 'react'
import { useSelector } from 'react-redux'
import { CellTip, cellBooleanFormatter } from 'src/components/tables'
import { CippPageList } from 'src/components/layout'

const columns = [
  {
    selector: (row) => row['User'],
    name: 'User',
    sortable: true,
    cell: (row) => CellTip(row['User']),
    exportSelector: 'User',
    minWidth: '200px',
  },
  {
    selector: (row) => row['Identity'],
    name: 'Identity',
    sortable: true,
    cell: (row) => CellTip(row['Identity']),
    exportSelector: 'Identity',
  },
  {
    selector: (row) => row['AccessRights'],
    name: 'AccessRights',
    sortable: true,
    exportSelector: 'AccessRights',
  },
  {
    selector: (row) => row['Type'],
    name: 'Type',
    sortable: true,
    exportSelector: 'Type',
  },
  {
    selector: (row) => row['FolderName'],
    name: 'FolderName',
    sortable: true,
    exportSelector: 'FolderName',
  },
]

const MailboxStatsList = () => {
  const tenant = useSelector((state) => state.app.currentTenant)

  return (
    <CippPageList
      title="Permissions Report"
      datatable={{
        reportName: `${tenant?.defaultDomainName}-PermissionsReport-List`,
        path: '/api/ListExchPermissionsReport',
        columns,
        params: { TenantFilter: tenant?.defaultDomainName },
        tableProps: {},
      }}
    />
  )
}

export default MailboxStatsList
