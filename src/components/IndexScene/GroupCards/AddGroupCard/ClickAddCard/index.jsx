import React from 'react'
import { object, func } from 'prop-types'
import { Card, Typography, withStyles } from '@material-ui/core'
import AddIcon from 'mdi-react/AddIcon'

const styles = () => ({
  root: {
    display: 'flex',
    background: 'rgba(220, 220, 220, 0.5)',
    padding: '10px 30px',
  },
})
const ClickAddCard = ({ classes, openInput }) =>
  <Card className={classes.root} onClick={openInput}>
    <AddIcon />
    <Typography variant="body1">Добавить еще одну колонку</Typography>
  </Card>

ClickAddCard.propTypes = {
  classes: object.isRequired,
  openInput: func.isRequired,
}

export default withStyles(styles)(ClickAddCard)
