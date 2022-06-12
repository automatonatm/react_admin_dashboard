import React, {useState} from 'react';
import './Datable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from 'data/dataSource'
import {Link} from "react-router-dom";



const Datable = () => {

    const [data, setData] = useState(userRows)

    const deleteHandler = (id) => {
      setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [{field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {

         return (
             <div className="cell__action">
                 <Link to="/users/1">
                 <div className="view-button">View</div>
                 </Link>
                 <div className="delete-button" onClick={() => deleteHandler(params.row.id)}>Delete</div>
             </div>
         )
        }}]

    return (
        <div className="datable">
            <div className="datable--title">
                Add New User
                <Link to="/users/new" className="add--link">
                    Add New
                </Link>
            </div>
            <div className="datable__container">

            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                className="data-grid datable__table cell--textCenter"

            />
            </div>
        </div>
    );
};

export default Datable;
