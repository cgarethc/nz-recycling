import React from 'react';

import Typography from '@material-ui/core/Typography';
import HouseIcon from '@material-ui/icons/House';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';

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

  const councilRender = rowData => <Typography color="textPrimary"><a href={rowData['Recycling info']} target="_blank" rel="noopener noreferrer">{rowData['Council']}</a></Typography>;

  const createCollectionRender = (field) => {
    return rowData => {
      const fieldValue = rowData[field];
      let icon;
      if (fieldValue.startsWith('K')) {
        icon = <Tooltip title={`${field} kerbside pickup`} aria-label="kerbside pickup"><HouseIcon /></Tooltip>;
      }
      else if (fieldValue.startsWith('D')) {
        icon = <Tooltip title={`Drop off ${field} at collection point`} aria-label="drop off"><LocalShippingIcon color='secondary' /></Tooltip>;
      }
      else {
        icon = <Tooltip title={`${field} not recycled`} aria-label="not recycled"><NotInterestedIcon color='error' /></Tooltip>;
      }

      if (fieldValue.endsWith('$')) {
        icon = <>{icon}<Tooltip title="Charges apply" aria-label="charges apply"><MonetizationOnIcon color='error' /></Tooltip></>;
      }

      return icon;
    };
  };

  const createYesNoRender = (field) => {
    return rowData => {
      const fieldValue = rowData[field];
      let icon;
      if (fieldValue === 'Y') {
        icon = <Tooltip title={`${field} yes`} aria-label="yes"><CheckIcon /></Tooltip>;
      }
      else {
        icon = <Tooltip title={`${field} no`} aria-label="no"><NotInterestedIcon color='error' /></Tooltip>;
      }
      return icon;
    };
  };

  const columnStyle = {
    
  };

  const headerStyle = {
    transform: 'rotate(90deg)',
    border: 'none'
  };

  return (<MaterialTable
    columns={[
      {
        field: "Council",
        render: councilRender,
        width: 300,
        cellStyle: {fontSize: '8pt'}
      },
      {
        title: 'Paper', field: 'Paper', render: createCollectionRender('Paper'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Cardboard', field: 'Cardboard', render: createCollectionRender('Cardboard'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Cans/Tins', field: 'Cans/Tins', render: createCollectionRender('Cans/Tins'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Glass', field: 'Glass', render: createCollectionRender('Glass'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Plastics 1&2', field: 'Plastics 1&2', render: createCollectionRender('Plastics 1&2'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Plastics 5', field: 'Plastics 5', render: createCollectionRender('Plastics 5'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Plastics 3', field: 'Plastics 3 V', render: createCollectionRender('Plastics 3 V'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Plastics 4', field: 'Plastics 4 LDPE', render: createCollectionRender('Plastics 4 LDPE'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Expanded polystyrene', field: 'Plastics 6 EPS', render: createCollectionRender('Plastics 6 EPS'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Plastics 6', field: 'Plastics 6 PS', render: createCollectionRender('Plastics 6 PS'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Plastics 7', field: 'Plastics 7 Other', render: createCollectionRender('Plastics 7 Other'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Tetra Pak', field: 'Tetra Pak', render: createCollectionRender('Tetra Pak'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Green waste', field: 'Green waste', render: createCollectionRender('Green waste'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Food scraps', field: 'Food scraps', render: createCollectionRender('Food scraps'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
      {
        title: 'Lids', field: 'Lids', render: createYesNoRender('Lids'),
        cellStyle: columnStyle, headerStyle: headerStyle
      },
    ]}
    data={councils}
    title="Councils"
    icons={tableIcons}
    options={{
      pageSize: 67,
      pageSizeOptions: [5, 10, 30, 67],
      fixedColumns: {
        left: 1,
        right: 0
      },
      tableLayout: 'fixed'
    }}
  />);
}