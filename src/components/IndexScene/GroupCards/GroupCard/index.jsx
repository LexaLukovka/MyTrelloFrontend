import React from 'react'
import { object } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'

const styles = () => ({
  root: {},
})

class GroupCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Card>
          <CardHeader title="Что нужно сделать" />
        </Card>
      </div>
    )

  }
}

GroupCard.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(GroupCard)
