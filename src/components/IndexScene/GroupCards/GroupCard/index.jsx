/* eslint-disable no-underscore-dangle  */
import React from 'react'
import { array, func, number, object, string } from 'prop-types'
import { Card, CardContent, withStyles } from '@material-ui/core'

import { Draggable, Droppable } from 'react-beautiful-dnd'

import MyGroupCardHeader from './MyGroupCardHeader'
import CreateTasks from './CreateTasks'
import Task from './Task'

import isEmpty from 'lodash/isEmpty'

const styles = () => ({
  root: {
    minWidth: 300,
    maxWidth: 400,
    margin: '0 10px 30px',
    background: 'rgba(225, 225, 225, 0.8)',
  },
  content: {
    padding: 10,
  },
  task: {
    paddingTop: 5,
  },
})

const GroupCard = ({
  classes,
  user,
  title,
  tasks,
  groupId,
  index,
  openId,
  openEdit,
  onCloseEdit,
  onOpenEdit,
  onDelete,
  onCreateTask,
  onCloseCreateTasks,
}) =>
  <Draggable draggableId={groupId} index={index}>
    {(provided) => (
      <div {...provided.draggableProps} ref={provided.innerRef}>
        <Card className={classes.root}>
          <div {...provided.dragHandleProps}>
            <MyGroupCardHeader
              user={user}
              title={title}
              openEdit={openEdit}
              groupId={groupId}
              onOpenEdit={onOpenEdit}
              onCloseEdit={onCloseEdit}
              onDelete={onDelete}
            />
          </div>
          <CardContent className={classes.content}>
            <CreateTasks
              user={user}
              openId={openId}
              groupId={groupId}
              onCreateTask={onCreateTask}
              onCloseCreateTasks={onCloseCreateTasks}
            />
            <Droppable droppableId={groupId} type="task">
              {(provideds) => (
                <div
                  ref={provideds.innerRef}
                  {...provideds.droppableProps}
                  className={classes.task}
                >
                  {!isEmpty(tasks) &&
                  tasks.map((task, i) =>
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

GroupCard.propTypes = {
  classes: object.isRequired,
  user: object,
  groupId: string.isRequired,
  title: string.isRequired,
  tasks: array.isRequired,
  index: number.isRequired,
  openId: string,
  openEdit: string,
  onCloseEdit: func.isRequired,
  onOpenEdit: func.isRequired,
  onDelete: func.isRequired,
  onCreateTask: func.isRequired,
  onCloseCreateTasks: func.isRequired,
}

GroupCard.defaultProps = {
  user: null,
  openId: null,
  openEdit: null,
}

export default withStyles(styles)(GroupCard)
