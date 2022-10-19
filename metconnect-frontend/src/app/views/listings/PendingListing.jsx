import {useState} from "react";
import {Box, Divider, FormControl, Grid, MenuItem, Select} from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb";
import InputLabel from "@mui/material/InputLabel";
import ListingCard from "./components/ListingCard";
import {ListContainer} from "../../components/ListingContainer";


const PendingListing = () => {

  const [category, setCategory] = useState("All")

  const handleChange = (e) => {
    setCategory(e.target.value)
  }


  return (
    <ListContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{name: 'Listings', path: '/listing/declined'},
          {name: 'Declined Listing'}]}/>
      </Box>
      <Grid container justify={"space-between"}>
        <Grid item right xs={2}>
          <FormControl variant="standard" sx={{m: 1, minWidth: 240}}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              width={"200px"}
              id="categorySelect"
              defaultValue={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Clothing"}>Clothing</MenuItem>
              <MenuItem value={"Boots"}>Boots</MenuItem>
              <MenuItem value={"Hardware"}>Hardware</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item left xs={8}>
          <Divider/>
          <ListingCard name={"Jeans"}/>
          <ListingCard name={"Potatoes"}/>
          <ListingCard name={"Promethium"}/>
          <ListingCard name={"Nebula"}/>
        </Grid>
      </Grid>
    </ListContainer>
  )


}

export default PendingListing;