import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import FormButton from '../../src/components/form/FormButton.vue'

describe('FormButton', () => {
  it('Executes prop action correctly on user click', () => {
    const spy = sinon.spy()
    const wrapper = shallowMount(FormButton, {
      propsData: {
        buttonAction: spy
      }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(spy.called).toBeTruthy()
  })
})