/* eslint-disable no-underscore-dangle */
import React from 'react'
import { array, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import GroupCard from 'components/IndexScene/GroupCards/GroupCard'
import AddGroupCard from 'components/IndexScene/GroupCards/AddGroupCard'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

const GroupCards = ({ classes, groupCard }) =>
  <div className={classes.root}>
    {groupCard.map(group => <GroupCard key={group._id} title={group.title} groupId={group._id} />)}
    <AddGroupCard />
  </div>

GroupCards.propTypes = {
  classes: object.isRequired,
  groupCard: array.isRequired,
}

export default withStyles(styles)(GroupCards)
