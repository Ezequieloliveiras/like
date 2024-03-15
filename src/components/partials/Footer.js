import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function LabelBottomNavigation() {
  const [value, setValue] = useState('recents')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} sx={{ backgroundColor: '#1A237E' }}>
      <BottomNavigationAction
        color='White'
        value="recents"
        icon={<MapIcon sx={{ color: 'white' }} />}
      />
      <BottomNavigationAction
        value="favorites"
        icon={<FavoriteIcon sx={{ color: 'white' }} />}
      />
      <BottomNavigationAction
        value="nearby"
        icon={<LocationOnIcon sx={{ color: 'white' }} />}
      />
    </BottomNavigation>
  )
}
