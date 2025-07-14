import * as React from "react";
import { Box, Modal, Button, Typography } from "@mui/material";
import Image from 'next/image';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface CertificateModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image: string;
    badgeLink: string;
}

export default function CertificateModal({
    open,
    onClose,
    title,
    description,
    image,
    badgeLink,
}: CertificateModalProps) {
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="certificate-modal-title">
            <Box sx={style}>
                <Typography variant="h6" id="certificate-modal-title">
                    {title}
                </Typography>
                <Typography variant="body2">{description}</Typography>
                <Image src={image} alt={title} style={{ width: "100%", marginTop: "10px" }}  />
                <Button href={badgeLink} target="_blank" sx={{ mt: 2 }}>
                    View Badge
                </Button>
            </Box>
        </Modal>
    );
}