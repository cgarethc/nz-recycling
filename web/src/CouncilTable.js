import React from 'react';

import Typography from '@material-ui/core/Typography';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import HouseIcon from '@material-ui/icons/House';
import StoreIcon from '@material-ui/icons/Store';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function CouncilTable(props) {

  const councils = props.councils;
  const loaded = councils && (councils.length > 0);

  const councilRender = rowData => <Typography>{rowData['Council']}<a href={rowData['Recycling info']} target="_blank" rel="noopener noreferrer"><OpenInBrowserIcon color="primary" fontSize="small" /></a></Typography>;
  const createCollectionRender = (field) => {
    return rowData => {
      const fieldValue = rowData[field];
      let icon;
      if (fieldValue.startsWith('K')) {
        icon = <HouseIcon />;
      }
      else if (fieldValue.startsWith('D')) {
        icon = <StoreIcon color='secondary' />
      }
      else {
        icon = <NotInterestedIcon color='error'/>;
      }

      if(fieldValue.endsWith('$')){
        icon = <>{icon}<MonetizationOnIcon color='error'/></>;
      }

      return icon;
    };
  };

  return (<MaterialTable
    columns={[
      {
        title: "Council", field: "Council",
        render: councilRender
      },
      { title: "Area", field: "Area" },
      {
        title: 'Paper', field: 'Paper', render: createCollectionRender('Paper')
      },
      {
        title: 'Cardboard', field: 'Cardboard', render: createCollectionRender('Cardboard')
      },
      {
        title: 'Cans/Tins', field: 'Cans/Tins', render: createCollectionRender('Cans/Tins')
      },
      {
        title: 'Glass', field: 'Glass', render: createCollectionRender('Glass')
      }
    ]}
    data={councils}
    title="Councils"
    icons={tableIcons}
    options={{
      pageSize: 70,
      pageSizeOptions: [5, 10, 30, 70]
    }}
  />);
}