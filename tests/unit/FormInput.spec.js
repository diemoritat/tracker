import { shallowMount } from '@vue/test-utils'
import FormInput from '../../src/components/form/FormInput.vue'

describe('FormInput', () => {
  it('Responds correctly to common input', () => {
    const wrapper = shallowMount(FormInput, {
      propsData: {
        name: 'name',
        type: 'text'
      }
    })
    const input = wrapper.find('input')

    input.trigger('input')
    expect(wrapper.emitted().input).toBeTruthy()
  })

  it('Responds correctly to money input', () => {
    const wrapper = shallowMount(FormInput, {
      propsData: {
        name: 'amount',
        type: 'money'
      }
    })
    const input = wrapper.find('input')

    input.trigger('input')
    expect(wrapper.emitted().input).toBeTruthy()
  })
})