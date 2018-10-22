import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import GroupCard from 'components/IndexScene/GroupCards/GroupCard'
import AddGroupCard from 'components/IndexScene/GroupCards/AddGroupCard'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const GroupCards = ({ classes }) =>
  <div className={classes.root}>
    <GroupCard />
    <AddGroupCard />
  </div>

GroupCards.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(GroupCards)
