import { Grid, Typography } from '@mui/material'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
    </Grid>
  )
}

export default HomePage
