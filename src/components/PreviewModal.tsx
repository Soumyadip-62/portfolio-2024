import { Close } from "@mui/icons-material";
import { Dialog, IconButton, Slide } from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const PreviewModal = ({ openPreviewModal, setopenPreviewModal, previewImage }: { openPreviewModal: boolean, previewImage: string, setopenPreviewModal: (openPreviewModal: boolean) => void }) => {

    return <Dialog
        fullScreen
        open={openPreviewModal}
        onClose={setopenPreviewModal}
        slots={{
            transition: Transition,

        }}
        slotProps={{
            paper: {
                sx: {
                    bgcolor: "#1A1A1A",

                }
            }
        }}
    >
        <IconButton onClick={() => setopenPreviewModal(false)} sx={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 1,
        }}>
            <Close color="primary" sx={{
                width: "40px",
                height: "40px",
            }} />
        </IconButton>
        <video key={previewImage} autoPlay loop muted width={'100%'} height={'100%'}>
            <source src={previewImage} type="video/mp4" />
        </video>
        {/* <img src={previewImage} alt="Preview" style={{ width: "90%", height: "auto", margin: 'auto' }} /> */}
    </Dialog>;
};

export default PreviewModal;
