import React from 'react'
import { func, object, string } from 'prop-types'
import { CardHeader, ClickAwayListener, IconButton, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'
import DeleteIcon from 'mdi-react/DeleteIcon'
import EditGroupCard from './EditGroupCard'

const styles = () => ({
  title: {
    paddingTop: '8px',
    paddingBottom: 0,
  },
})

const MyGroupCardHeader = ({ classes, user, title, openEdit, groupId, onOpenEdit, onCloseEdit, onDelete }) =>
  (openEdit === groupId ?
    <ClickAwayListener onClickAway={onCloseEdit}>
      <EditGroupCard closeInput={onCloseEdit} />
    </ClickAwayListener>
    :
    <div>
      <CardHeader
        className={classes.title}
        title={<Typography variant="subheading">{title}</Typography>}
        action={user &&
        <div style={{ paddingTop: 5 }}>
          <IconButton onClick={onOpenEdit}>
            <CreateIcon />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>}
      />
    </div>)

MyGroupCardHeader.propTypes = {
  classes: object.isRequired,
  user: object,
  groupId: string.isRequired,
  title: string.isRequired,
  onCloseEdit: func.isRequired,
  onOpenEdit: func.isRequired,
  onDelete: func.isRequired,
  openEdit: string,
}
MyGroupCardHeader.defaultProps = {
  user: null,
  openEdit: null,
}

export default withStyles(styles)(MyGroupCardHeader)
