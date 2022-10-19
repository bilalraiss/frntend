import {Button, Grid, styled} from "@mui/material";
import SimpleCard from "../../../components/SimpleCard";
import ListingDetailModal from "./ListingDetailModal";
import {useState} from "react";

/*const ContentBox = styled('div')(({theme}) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {margin: '16px'},
}));*/

/*const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));*/

/*const SubTitle = styled('span')(({theme}) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));*/

/*const H4 = styled('h4')(({theme}) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));*/

const Container = styled('div')(({theme}) => ({
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

const ListingCard = (props) => {

  const [detailOpen, setDetailOpen] = useState(false);

  const handleOpen = () => {
    setDetailOpen(true)
  }


  return (
    <Container>

      <SimpleCard title={props.name}>
        <Grid container>
          <Grid item xs={2}>
            Card details
            Specifications
          </Grid>
          <Grid item xs={4}>
            Lorem ipsum donor siet amet
          </Grid>

        </Grid>
        <Button onClick={handleOpen}>Details</Button>
        <ListingDetailModal open={detailOpen} />
      </SimpleCard>
    </Container>
  )

}

export default ListingCard;