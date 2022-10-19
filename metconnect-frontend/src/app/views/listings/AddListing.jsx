import {Box, styled} from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb";
import AddListingForm from "./components/AddListingForm";
import {SimpleCard} from "../../components";

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
}));

const AddListing = () => {


  //const theme = useTheme();
  return(
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Listings', path: '/listing/add' }, { name: 'Add Listing' }]} />
      </Box>
      <SimpleCard title={"Add new listing"}>
        <AddListingForm />
      </SimpleCard>
    </Container>
  )

}

export default AddListing;