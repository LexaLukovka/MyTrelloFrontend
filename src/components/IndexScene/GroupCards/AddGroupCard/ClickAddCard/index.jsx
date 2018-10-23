import React from 'react'
import { func, object } from 'prop-types'
import { Card, Typography, withStyles } from '@material-ui/core'
import AddIcon from 'mdi-react/AddIcon'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(220, 220, 220, 0.5)',
    padding: '10px 0',
    minWidth: 300,
  },
})
const ClickAddCard = ({ classes, openInput }) =>
  <Card className={classes.root} onClick={openInput}>
    <AddIcon style={{ alignSelf: 'center' }} />
    <Typography variant="body2">Добавить еще одну колонку</Typography>
  </Card>

ClickAddCard.propTypes = {
  classes: object.isRequired,
  openInput: func.isRequired,
}

export default withStyles(styles)(ClickAddCard)
