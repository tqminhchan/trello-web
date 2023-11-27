import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="MERN stack board"
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/736x/28/40/f9/2840f99e315707f55a0f4c863e0c6d27.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              //src="https://i.pinimg.com/564x/1b/49/06/1b4906b530aae2a015ef02afc37c7c97.jpg"
              src="https://i.pinimg.com/564x/6b/15/37/6b15373b804ef0af78d3973ca1cdb72f.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/564x/62/9b/66/629b66861e54d25e24600dd19782bf67.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/564x/da/47/ed/da47ed96d9f009355899e19d9447118a.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://preview.redd.it/what-is-the-source-of-this-cool-photo-of-haerin-v0-t2riizouutob1.jpg?width=1000&format=pjpg&auto=webp&s=4d0340a03113ecacb9f90a5ff61411e8490dac59"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/736x/28/40/f9/2840f99e315707f55a0f4c863e0c6d27.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              //src="https://i.pinimg.com/564x/1b/49/06/1b4906b530aae2a015ef02afc37c7c97.jpg"
              src="https://i.pinimg.com/564x/6b/15/37/6b15373b804ef0af78d3973ca1cdb72f.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/564x/62/9b/66/629b66861e54d25e24600dd19782bf67.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/564x/50/40/ef/5040ef755cea5d8b279b3da7ce65ece2.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/564x/da/47/ed/da47ed96d9f009355899e19d9447118a.jpg"
            />
          </Tooltip>

          <Tooltip title="MERN stack">
            <Avatar
              alt="MERN stack"
              src="https://i.pinimg.com/564x/56/db/47/56db47541cc2e46b0995d8853e8b7b97.jpg"
            />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
