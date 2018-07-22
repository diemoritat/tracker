import { shallowMount } from '@vue/test-utils'
import FormCheckbox from '../../src/components/form/FormCheckbox.vue'

describe('FormCheckbox', () => {
  it('Responds correctly to user input', () => {
    const wrapper = shallowMount(FormCheckbox)
    const input = wrapper.find('input')

    input.setChecked()
    expect(wrapper.emitted().input).toBeTruthy()
  })
})