import React, { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'

type GameCardProps = {
  game: any
}

const GameCard = ({
  game
}: GameCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={game.background_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="h6"
            sx={{fontSize: 14}}>
            {game.name}
          </Typography>
          <Rating name="disabled" value={game.rating}
            precision={0.5} size="small" readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard