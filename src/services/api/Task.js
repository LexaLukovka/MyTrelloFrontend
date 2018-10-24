/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'src/services/Http'

class GroupCard {
  create(task) {
    return Http.post('/task', task)
  }

  update(task) {
    return Http.put('/task', task)
  }

  delete(groupId, taskId) {
    return Http.delete(`/task/${groupId}/${taskId}`)
  }
}

export default new GroupCard()
