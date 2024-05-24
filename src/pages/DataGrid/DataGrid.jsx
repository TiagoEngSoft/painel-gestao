import React, { useMemo } from 'react'
import MaterialReactTable from "material-react-table";
import { userData } from '../../data';
import './DataGrid.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
const DataGrid = () => {

    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: 'Primeiro nome',
        },
        {
            accessorKey: "name.lastName",
            header: 'Último nome',
        },
        {
            accessorKey: "address", //normal accessorKey
            header: "Endereço",
        },
        {
            accessorKey: "city",
            header: "Cidade",
        },
        {
            accessorKey: "state",
            header: "Estado",
        },
    ])
    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        })
    )

    return (
        <div className="table-container">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData} localization={MRT_Localization_PT_BR} />
            </ThemeProvider>
        </div>
    )
}

export default DataGrid