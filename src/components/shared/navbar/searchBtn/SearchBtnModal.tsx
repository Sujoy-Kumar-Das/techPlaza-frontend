import { Box } from "@mui/material";
import CustomModal from "../../modals/CustomModal";

export default function SearchBtnModal({ setOpen, open }) {
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box></Box>
    </CustomModal>
  );
}
