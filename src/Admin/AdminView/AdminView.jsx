import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Https, Host, AllGuests, Get, Views } from '../../Shared/UrlConstants';

export default function AdminView (props) {
    const attendeesColumns  = [
        {field: 'id', headerName: 'Id', width: 80},
        {field: 'name', headerName: 'Nume', width: 400},
        {field: 'numberOfGuests', headerName: '# Invitati', width: 200},
        {field: 'isComing', headerName: 'Participa', width: 200},
        {field: 'numberOfVeggiesMenus', headerName: '# Veggie Menus', width: 200},
        {field: 'otherDetails', headerName: 'Observatii', width: 300},
    ];

    const statisticsColumns = [
        {field: 'id', headerName: 'Id', width: 80, filterable: false, sortable: false, disableColumnMenu: true},
        {field: 'veggieMenus', headerName: 'Meniuri Veggie', width: 200, filterable: false, sortable: false, disableColumnMenu: true},
        {field: 'normalMenus', headerName: 'Meniuri Carne', width: 200, filterable: false, sortable: false, disableColumnMenu: true},
        {field: 'numberOfAttendees', headerName: 'Total Invitati', width: 200, filterable: false, sortable: false, disableColumnMenu: true},
        {field: 'numberOfViews', headerName: 'Total Vizualizari', width: 200, filterable: false, sortable: false, disableColumnMenu: true},
    ];

    var [attendeesRows, setAttendeesRows] = useState(null);
    var [statisticsRows, setStatisticsRows] = useState(null);

    useEffect(() => {
        getAllGuests();
        getAllViews();
    }, []);

    const getAllGuests = async () => {
        var response = await fetch(Https + Host + AllGuests,
            {
                method: Get,
                headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Host': Host,
                'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            
        setAttendeesRows(await response.json());
        console.log("getGuests");
    }

    const getAllViews = async () => {
        var response = await fetch(Https + Host + Views,
            {
                method: Get,
                headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Host': Host,
                'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            var viewsResponse = await response.json();
        
            setStatisticsRows([
                {
                    id: 1, 
                    veggieMenus: 200, 
                    normalMenus: 50, 
                    numberOfAttendees: 140, 
                    numberOfViews: viewsResponse.numberOfViews}
            ]);
    }
    
    const onLogoutEvent = (event) => {
        props.logoutProp();
    }

    return (
        <>
            <h2>Admin</h2>
            <button onClick={onLogoutEvent}>Log out</button>
            <DataGrid
                columns={statisticsColumns}
                rows={statisticsRows !== null ? statisticsRows : []}
                hideFooter
                disableColumnSelector
            ></DataGrid>
            <DataGrid
                columns={attendeesColumns}
                rows={attendeesRows !== null ? attendeesRows : []}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 30}
                    },
                }}
                pageSizeOptions={[5,10]}
            ></DataGrid>
        </>
    );
}