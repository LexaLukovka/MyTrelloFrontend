import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import CreateGroupCard from './CreateGroupCard'
import ClickAddCard from './ClickAddCard'

const styles = () => ({
  root: {
    paddingLeft: 20,
  },
})

class AddGroupCard extends React.Component {
  state = {
    isOpen: false,
  }

  handleOpenInput = () => {
    this.setState({
      isOpen: true,
    })
  }

  handleCloseInput = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { classes } = this.props
    const { isOpen } = this.state

    return (
      <div className={classes.root}>
        {isOpen ?
          <CreateGroupCard closeInput={this.handleCloseInput} />
          :
          <ClickAddCard openInput={this.handleOpenInput} />
        }
      </div>
    )
  }
}

AddGroupCard.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AddGroupCard)
