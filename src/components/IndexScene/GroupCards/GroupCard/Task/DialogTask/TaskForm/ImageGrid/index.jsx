/* eslint-disable no-underscore-dangle */
import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import PictureUpload from 'components/PictureUpload'

import connector from './connector'


const styles = (theme) => ({
  image: {
    padding: 20,
    paddingBottom: 0,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
})

class ImageGrid extends React.Component {
  handleUpload = (name, value) => {
    const { actions } = this.props
    actions.groupCard.addPictures({ pictures: value })
  }

  render() {
    const { classes, currentTask } = this.props

    return (
      <div>
        <Typography variant="subheading">Вложения</Typography>
        <div className={classes.image}>
          <PictureUpload
            name="pictures"
            pictures={currentTask.pictures || []}
            onChange={this.handleUpload}
          />
        </div>
      </div>
    )
  }
}

ImageGrid.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  currentTask: object.isRequired,
}

export default withStyles(styles)(connector(ImageGrid))
