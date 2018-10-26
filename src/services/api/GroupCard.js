/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'src/services/Http'

class GroupCard {
  load() {
    return Http.get('/groupCard')
  }

  create(title) {
    return Http.post('/groupCard', title)
  }

  update(groupCard) {
    return Http.put('/groupCard', groupCard)
  }

  save(groupCard) {
    return Http.put('/groupCard/save', groupCard)
  }

  delete(groupId) {
    return Http.delete(`/groupCard/${groupId}`)
  }
}

export default new GroupCard()
