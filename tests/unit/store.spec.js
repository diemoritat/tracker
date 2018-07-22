import store from '../../src/store'
import mutations from '../../src/store/mutations'

describe('Charges store', () => {

  test('Initial state', () => {
    expect(store.state.charges).toEqual([])
  })

  test('Add new charge to the store', () => {
    let mockEntry = {
      amount: 'R$ 99,00',
      email: 'lorem@ipsum.com',
      created: '22/07/2018 • 01:21:10',
      reason: 'Lorem ipsum'
    }
    let state = { charges: [] }

    mutations.createCharge(state, mockEntry)

    expect(state.charges).toEqual([mockEntry])
  })
})