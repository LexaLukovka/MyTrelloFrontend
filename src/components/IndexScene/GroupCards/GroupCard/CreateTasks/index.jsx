import React from 'react'
import { func, object, string } from 'prop-types'
import { ClickAwayListener } from '@material-ui/core'
import CreateTask from './CreateTask'
import ClickAddTask from './ClickAddTask'

const CreateTasks = ({ user, openId, groupId, onCreateTask, onCloseCreateTasks }) =>
  <div>
    {user &&
    (openId === groupId ?
      <ClickAwayListener onClickAway={onCloseCreateTasks}>
        <CreateTask closeInput={onCloseCreateTasks} />
      </ClickAwayListener>
        :
      <ClickAddTask onCreateTask={onCreateTask} />
    )}
  </div>

CreateTasks.propTypes = {
  user: object,
  groupId: string.isRequired,
  openId: string,
  onCreateTask: func.isRequired,
  onCloseCreateTasks: func.isRequired,
}

CreateTasks.defaultProps = {
  user: null,
  openId: null,
}

export default CreateTasks
