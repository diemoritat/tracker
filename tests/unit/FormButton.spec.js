import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import FormButton from '../../src/components/form/FormButton.vue'

describe('FormButton', () => {
  it('Executes action correctly on user click', () => {
    const spy = sinon.spy()
    const wrapper = shallowMount(FormButton, {
      propsData: {
        id: 1,
        buttonAction: spy
      }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    spy.should.have.been.calledWith('yes')
  })
})