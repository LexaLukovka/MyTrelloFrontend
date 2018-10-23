/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'src/services/Http'

class GroupCard {
  create(task) {
    return Http.post('/task', task)
  }
}

export default new GroupCard()
