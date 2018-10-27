/* eslint-disable no-underscore-dangle  */
import React from 'react'
import { array, number, object, string } from 'prop-types'
import { Card, CardContent, CardHeader, ClickAwayListener, IconButton, Typography, withStyles } from '@material-ui/core'

import DeleteIcon from 'mdi-react/DeleteIcon'
import CreateIcon from 'mdi-react/CreateIcon'

import { Draggable, Droppable } from 'react-beautiful-dnd'

import EditGroupCard from './EditGroupCard'
import CreateGroupTask from './CreateGroupTask'
import ClickAddTask from './ClickAddTask'
import Task from './Task'

import connector from './connector'

const styles = () => ({
  root: {
    minWidth: 300,
    maxWidth: 400,
    margin: '0 10px 30px',
    background: 'rgba(225, 225, 225, 0.8)',
  },
  title: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  content: {
    padding: 10,
  },
  task: {
    paddingTop: 5,
  },
})

class GroupCard extends React.Component {
  handleEditGroupCard = (groupId) => {
    const { actions } = this.props
    actions.groupCard.currentGroup(groupId)
    actions.groupEdit.openEdit(groupId)
  }

  handleCloseEdit = () => {
    const { actions } = this.props
    actions.groupEdit.closeEdit()
  }

  handleDeleteGroupCard = (groupId) => {
    const { actions } = this.props
    actions.groupCard.deleteGroup(groupId)
  }

  handleOpenInput = (groupId) => {
    const { actions } = this.props
    actions.groupCard.currentGroup(groupId)
    actions.task.openOneTask(groupId)
  }

  handleCloseInput = () => {
    const { actions } = this.props
    actions.task.closeOneTask()
  }

  render() {
    const { classes, user, title, tasks, groupId, index, openEdit, openId } = this.props

    return (
      <Draggable draggableId={groupId} index={index}>
        {(provided) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <Card className={classes.root}>
              <div {...provided.dragHandleProps}>
                {openEdit === groupId ?
                  <ClickAwayListener onClickAway={this.handleCloseEdit}>
                    <EditGroupCard closeInput={this.handleCloseEdit} />
                  </ClickAwayListener>
                  :
                  <CardHeader
                    className={classes.title}
                    title={<Typography variant="subheading">{title}</Typography>}
                    action={user &&
                    <div style={{ paddingTop: 5 }}>
                      <IconButton onClick={() => this.handleEditGroupCard(groupId)}>
                        <CreateIcon />
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteGroupCard(groupId)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>}
                  />
                }
              </div>
              <CardContent className={classes.content}>
                {user &&
                (openId === groupId ?
                  <ClickAwayListener onClickAway={this.handleCloseInput}>
                    <CreateGroupTask closeInput={this.handleCloseInput} />
                  </ClickAwayListener>
                    :
                  <ClickAddTask openInput={() => this.handleOpenInput(groupId)} />
                )}
                <Droppable droppableId={groupId} type="task">
                  {(provideds) => (
                    <div
                      ref={provideds.innerRef}
                      {...provideds.droppableProps}
                      className={classes.task}
                    >
                      {tasks.map((task, i) =>
                        <Task
                          index={i}
                          task={task}
                          key={task._id}
                          groupId={groupId}
                        />)}
                      {provideds.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    )
  }
}

GroupCard.propTypes = {
  classes: object.isRequired,
  user: object,
  actions: object.isRequired,
  groupId: string.isRequired,
  title: string.isRequired,
  tasks: array.isRequired,
  index: number.isRequired,
  openId: string,
  openEdit: string,
}

GroupCard.defaultProps = {
  user: null,
  openId: null,
  openEdit: null,
}

export default withStyles(styles)(connector(GroupCard))
