import React from 'react'
import { object, string } from 'prop-types'
import { Card, CardContent, CardHeader, IconButton, Typography, withStyles } from '@material-ui/core'
import DeleteIcon from 'mdi-react/DeleteIcon'
import CreateGroupTask from './CreateGroupTask'
import ClickAddTask from './ClickAddTask'
import connector from './connector'

const styles = () => ({
  root: {
    minWidth: 300,
    height: '100%',
    margin: '0 10px 30px',
    background: 'rgba(225, 225, 225, 0.7)',
  },
  title: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
})

class GroupCard extends React.Component {
  handleOpenInput = (groupId) => {
    const { actions } = this.props
    actions.task.openOneTask(groupId)
  }

  handleCloseInput = () => {
    const { actions } = this.props
    actions.task.closeOneTask()
  }

  render() {
    const { classes, title, groupId, openTask: { openId } } = this.props

    return (
      <Card className={classes.root}>
        <CardHeader
          className={classes.title}
          title={<Typography variant="subheading">{title}</Typography>}
          action={<IconButton><DeleteIcon /></IconButton>}
        />
        <CardContent>
          {openId === groupId ?
            <CreateGroupTask groupId={groupId} closeInput={this.handleCloseInput} />
            :
            <ClickAddTask openInput={() => this.handleOpenInput(groupId)} />
          }
        </CardContent>
      </Card>
    )
  }
}

GroupCard.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  title: string.isRequired,
  groupId: string.isRequired,
  openTask: object.isRequired,
}

export default withStyles(styles)(connector(GroupCard))
