'use client'

import { Button, Container, Typography } from "@mui/material"
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Container sx={{ textAlign: 'center', marginTop: 8 }}>
            <Typography variant="h2" gutterBottom>
                Something went wrong!
            </Typography>
            <Typography variant="h6" paragraph>
                An unexpected error occurred. Please try again later.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => reset()}>
                Try Again
            </Button>
        </Container>
      </body>
    </html>
  )
}

