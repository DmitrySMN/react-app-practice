import {useState} from "react";
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import {Link} from "react-router-dom";

const ModalWindow = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button sx={{width: 100}} variant="outlined" onClick={() => setIsOpen(true)}>
                Вход
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{ width: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{ fontWeight: 'lg', mb: 1 }}
                    >
                        Регистрация
                    </Typography>

                </Sheet>
            </Modal>
        </>
    );
}

export default ModalWindow;