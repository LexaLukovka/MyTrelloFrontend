import React from 'react'
import { object, string } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'

const styles = () => ({
  root: {
    minWidth: 300,
    height: '100%',
    margin: '0 10px 30px',
  },
})

class GroupCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classes, title } = this.props
    return (
      <Card className={classes.root}>
        <CardHeader title={title} />
      </Card>
    )

  }
}

GroupCard.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
}

export default withStyles(styles)(GroupCard)
