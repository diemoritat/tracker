import { shallowMount } from '@vue/test-utils'
import FormInput from '../../src/components/form/FormInput.vue'

describe('FormInput', () => {
  it('Responds correctly to text input', () => {
    const wrapper = shallowMount(FormInput, {
      propsData: {
        id: 1,
        type: 'text'
      }
    })
    const input = wrapper.find('input')

    input.trigger('change')
    expect(wrapper.emitted().input).toBeTruthy()
  })

  it('Responds correctly money input', () => {
    const wrapper = shallowMount(FormInput, {
      propsData: {
        id: 1,
        type: 'money'
      }
    })
    const input = wrapper.find('input')

    input.trigger('change')
    expect(wrapper.emitted().input).toBeTruthy()
  })
})