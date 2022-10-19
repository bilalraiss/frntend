import {Button, Modal} from "@mui/material";
import {useEffect, useState} from "react";
import {Box} from "@mui/system";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ListingDetailModal = (props) => {

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{...style, width: 400}}>
        <h2 id="parent-modal-title">some data</h2>
        <p id="parent-modal-description">
          Specs here
        </p>
        <Button onClick={handleClose}>Edit</Button>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>)

}
export default ListingDetailModal;