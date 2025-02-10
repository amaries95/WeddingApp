import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Https, Host, AllGuests, Get, Views } from "../../Shared/UrlConstants";

export default function AdminView(props) {
  const attendeesColumns = [
    { field: "id", headerName: "Id", width: 80 },
    { field: "name", headerName: "Nume", width: 400 },
    { field: "numberOfGuests", headerName: "# Invitati", width: 200 },
    { field: "typesOfMenu", headerName: "Types of Menu", width: 200 },
    { field: "otherDetails", headerName: "Observatii", width: 800 },
  ];

  const statisticsColumns = [
    {
      field: "id",
      headerName: "Id",
      width: 80,
      filterable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "numberOfAttendees",
      headerName: "Total Invitati care vin",
      width: 200,
      filterable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "numberOfViews",
      headerName: "Total Vizualizari",
      width: 200,
      filterable: false,
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  var [attendeesRows, setAttendeesRows] = useState(null);
  var [statisticsRows, setStatisticsRows] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    var statistics = fetch(Https + Host + AllGuests, {
      method: Get,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Host: Host,
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Get all guest request was not ok");
        }

        return response.json();
      })
      .then((response) => {
        setAttendeesRows(response);

        var statistics = calculateStatistics(response);

        fetch(Https + Host + Views, {
          method: Get,
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            Host: Host,
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Get all views request was not ok");
            }

            return response.json();
          })
          .then((response) => {
            setStatisticsRows([
              {
                id: 1,
                numberOfAttendees: statistics.numberOfAttendees,
                numberOfViews: response.numberOfViews,
              },
            ]);
          });
      });

    console.log("getGuests");
  };

  const calculateStatistics = (atendees) => {
    var statistics = {
      veggieMenus: 0,
      normalMenus: 0,
      numberOfAttendees: 0,
    };

    atendees.forEach((element) => {
        statistics.numberOfAttendees += element.numberOfGuests;
    });

    return statistics;
  };

  const onLogoutEvent = (event) => {
    props.logoutProp();
  };

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
            paginationModel: { page: 0, pageSize: 30 },
          },
        }}
        pageSizeOptions={[5, 10]}
      ></DataGrid>
    </>
  );
}
