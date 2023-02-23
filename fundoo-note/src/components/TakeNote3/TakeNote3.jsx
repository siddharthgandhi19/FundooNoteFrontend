import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InputBase from '@mui/material/InputBase';
import { NoteArchieveApi } from '../../services/DataService';


export default function TakeNote3(props) {

  const NoteArchieve = (id) => {
    let nId = {
      "noteID": id
    }

    NoteArchieveApi(nId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardHeader
        // avatar={
        //   <InputBase id="outlined-basic" placeholder='Title' variant="outlined" multiline fullWidth="true" />
        // }
        action={
          <IconButton aria-label="settings">
            <PushPinOutlinedIcon style={{ color: '#202124' }} />
          </IconButton>
        }
        title={props.note.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.note.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <NotificationsActiveOutlinedIcon style={{ color: '#202124' }} fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <PersonAddAltOutlinedIcon style={{ color: '#202124' }} fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <PaletteOutlinedIcon style={{ color: '#202124' }} fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <InsertPhotoOutlinedIcon style={{ color: '#202124' }} fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <ArchiveOutlinedIcon onClick={() => NoteArchieve(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <MoreVertOutlinedIcon style={{ color: '#202124' }} fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}