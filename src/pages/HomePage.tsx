import { Box, Card, CardContent, Typography } from '@mui/material';

export const HomePage = () => {
    return (
      <Box sx={
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',   
            height: '100vh',
        }
      }>
          <Card sx={{maxWidth:400,padding:2,textAlign:'center'}}>   
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    Welcome to the AdminX Dashboard
                </Typography>
                <Typography variant="body1">
                    This is the admin dashboard for the User Management.
                </Typography>
                <Box mt={2}>
                    <Typography variant="body1">
                        You can manage posts and users using the navigation on the left.
                    </Typography>
                </Box>
            </CardContent>
        </Card>
      </Box>
    );
};
