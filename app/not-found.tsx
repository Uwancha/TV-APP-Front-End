import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

 export default function NotFound() {
  return (
    <Container sx={{ textAlign: 'center', marginTop: 24 }}>
      <Typography variant="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h6" paragraph>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link href={'/channel'}>
        <Button variant="contained" color="primary" >
            Go to Channel
        </Button>
      </Link>
    </Container>
  );
};