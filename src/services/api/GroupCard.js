/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'src/services/Http'

class GroupCard {
  load() {
    return Http.get('/groupCard')
  }

  create(title) {
    return Http.post('/groupCard', title)
  }

  delete(groupId) {
    return Http.delete(`/groupCard/${groupId}`)
  }
}

export default new GroupCard()
