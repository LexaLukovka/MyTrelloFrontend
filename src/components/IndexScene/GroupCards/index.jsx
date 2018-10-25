/* eslint-disable no-underscore-dangle,no-confusing-arrow,no-return-assign */
import React from 'react'
import { array, object } from 'prop-types'
import { withStyles } from '@material-ui/core'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import GroupCard from 'components/IndexScene/GroupCards/GroupCard'
import AddGroupCard from 'components/IndexScene/GroupCards/AddGroupCard'

import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = () => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
  },
})

class GroupCards extends React.Component {
  onDragEnd = async (result) => {
    const { actions, groupCard } = this.props
    const { destination, source, draggableId, type } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'groupCard') {
      const newgroupCard = groupCard

      let currentGroup = {}
      groupCard.filter(group => group._id === draggableId ? currentGroup = group : currentGroup)

      newgroupCard.splice(source.index, 1)
      newgroupCard.splice(destination.index, 0, currentGroup)

      return
    }

    let start = {}
    groupCard.filter(group => group._id === source.droppableId ? start = group : start)

    let finish = {}
    groupCard.filter(group => group._id === destination.droppableId ? finish = group : start)

    if (start === finish) {
      let currentTask = {}
      start.tasks.filter(task => task._id === draggableId ? currentTask = task : currentTask)

      start.tasks.splice(source.index, 1)
      start.tasks.splice(destination.index, 0, currentTask)

      await actions.groupCard.save({ start })
      return
    }

    let startCurrentTask = {}
    start.tasks.filter(task => task._id === draggableId ? startCurrentTask = task : startCurrentTask)
    start.tasks.splice(source.index, 1)

    finish.tasks.splice(destination.index, 0, startCurrentTask)

    await actions.groupCard.save({ start, finish })
  }

  render() {
    const { classes, user, groupCard } = this.props

    return (
      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="all-groupCard"
            direction="horizontal"
            type="groupCard"
          >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={classes.root}
              >
                {!isEmpty(groupCard) &&
                groupCard.map((group, index) =>
                  <GroupCard
                    key={group._id}
                    index={index}
                    user={user}
                    title={group.title}
                    tasks={group.tasks}
                    groupId={group._id}
                  />)
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {user &&
        <AddGroupCard />
        }
      </div>
    )
  }
}

GroupCards.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  user: object,
  groupCard: array.isRequired,
}

GroupCards.defaultProps = {
  user: null,
}

export default withStyles(styles)(connector(GroupCards))
