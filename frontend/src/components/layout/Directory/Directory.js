import React,{useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useDispatch,useSelector} from "react-redux"
import { allUsers } from '../../../action/userAction';

const columns = [
  { id: 'name', label: 'Name', minWidth: 70 },
  { id: 'diploma', label: 'Diploma', minWidth: 70 },
  {
    id: 'gratuation',
    label: 'Gratuation Date',
    minWidth: 70,
    align: 'right',
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 70,
    align: 'right',
  },
  {
    id: 'department',
    label: 'Department',
    minWidth: 70,
    align: 'right',
  },
];

  const rows=[
    {
      image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      name:"Name",
      diploma:"CSE",
      gratuation:"1/1/2022",
      location:"Bhagalpur",
      department:"science"
    },
    {
      image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      name:"Name",
      diploma:"CSE",
      gratuation:"1/1/2022",
      location:"Bhagalpur",
      department:"science"
    },
    {
      image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      name:"Name",
      diploma:"CSE",
      gratuation:"1/1/2022",
      location:"Bhagalpur",
      department:"science"
    },
    {
      image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      name:"Name",
      diploma:"CSE",
      gratuation:"1/1/2022",
      location:"Bhagalpur",
      department:"science"
    },
    {
      image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      name:"Name",
      diploma:"CSE",
      gratuation:"1/1/2022",
      location:"Bhagalpur",
      department:"science"
    },{
      image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      name:"Name",
      diploma:"CSE",
      gratuation:"1/1/2022",
      location:"Bhagalpur",
      department:"science"
    }
  ]

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function Directory() {
  const dispatch = useDispatch()
  const {users,loading}  = useSelector(state=>state.allUsers)
  console.log(users)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(allUsers())
  }, [])
  

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden',margin:"4vmax auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
// import React from 'react'
// import "./directory.css"


// const Directory = () => {
//   const obj=[
//     {
//       image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       name:"Name",
//       diploma:"CSE",
//       gratuation:"1/1/2022",
//       location:"Bhagalpur",
//       department:"science"
//     },
//     {
//       image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       name:"Name",
//       diploma:"CSE",
//       gratuation:"1/1/2022",
//       location:"Bhagalpur",
//       department:"science"
//     },
//     {
//       image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       name:"Name",
//       diploma:"CSE",
//       gratuation:"1/1/2022",
//       location:"Bhagalpur",
//       department:"science"
//     },
//     {
//       image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       name:"Name",
//       diploma:"CSE",
//       gratuation:"1/1/2022",
//       location:"Bhagalpur",
//       department:"science"
//     },
//     {
//       image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       name:"Name",
//       diploma:"CSE",
//       gratuation:"1/1/2022",
//       location:"Bhagalpur",
//       department:"science"
//     },{
//       image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       name:"Name",
//       diploma:"CSE",
//       gratuation:"1/1/2022",
//       location:"Bhagalpur",
//       department:"science"
//     }
//   ]

//   return (
//     <div className='directory'>
      
//     </div>
//   )
// }

// export default Directory