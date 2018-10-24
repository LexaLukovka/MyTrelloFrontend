/* eslint-disable no-underscore-dangle */
import React from 'react'
import { array, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import GroupCard from 'components/IndexScene/GroupCards/GroupCard'
import AddGroupCard from 'components/IndexScene/GroupCards/AddGroupCard'
import isEmpty from 'lodash/isEmpty'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    // flexWrap: 'wrap',
  },
})

const GroupCards = ({ classes, user, groupCard }) =>
  <div className={classes.root}>
    {!isEmpty(groupCard) &&
    groupCard.map(group =>
      <GroupCard
        key={group._id}
        user={user}
        title={group.title}
        tasks={group.tasks}
        groupId={group._id}
      />)
    }
    {user &&
    <AddGroupCard />
    }
  </div>

GroupCards.propTypes = {
  classes: object.isRequired,
  user: object,
  groupCard: array.isRequired,
}

GroupCards.defaultProps = {
  user: null,
}

export default withStyles(styles)(GroupCards)
