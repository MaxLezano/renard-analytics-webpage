import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alerts = ({ open, severity }) => {
  const [t] = useTranslation('global');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setSnackbarOpen(open);
  }, [open]);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleClose} id='alert_snackbar'>
        <Alert severity={severity} sx={{ width: '100%' }}>
          {severity === 'error' ? t('alert.error') : t('alert.success')}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Alerts;