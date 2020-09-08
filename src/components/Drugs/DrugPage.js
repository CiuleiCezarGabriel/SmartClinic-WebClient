import React, {useState} from 'react'
import Item from '../Item/Item'
import DrugSearch from '../DrugSearch/DrugSearch'
import drugImg from '../../assets/images/bbb.jpg'
import TablePagination from '@material-ui/core/TablePagination';

function DrugPage() {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    return (
        <div>
            <div class="relative flex h-full">
                <div class="flex h-full">
                    <DrugSearch />
                </div>
                <div class="relative flex-grow h-full">
                    <div class="relative h-full w-full">
                        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                            <Item price={12} name={"nume"} img={drugImg}></Item>
                            <Item price={12} name={"nume"} img={drugImg}></Item>
                        </div>
                    </div>
                </div>
            </div>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>

    )
}

export default DrugPage