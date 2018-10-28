import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = (theme) => ({
  flex: {
    display: 'flex',
    marginLeft: 20,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
  },
  group: {
    paddingTop: 3,
    alignSelf: 'center',
  },
})

const GroupTitle = ({ classes, currentGroup }) =>
  <div className={classes.flex}>
    <Typography className={classes.group} variant="caption">В колонке &nbsp;</Typography>
    <Typography variant="subheading">{currentGroup.title}</Typography>
  </div>

GroupTitle.propTypes = {
  classes: object.isRequired,
  currentGroup: object.isRequired,
}


export default withStyles(styles)(GroupTitle)
