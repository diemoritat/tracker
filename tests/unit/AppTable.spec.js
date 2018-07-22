import { shallowMount } from '@vue/test-utils'
import AppTable from '@/components/content/AppTable.vue'

describe('AppTable', () => {
  it('Renders data when passed', () => {
    const tableData = [
      {
        amount: 'R$ 99,00',
        email: 'lorem@ipsum.com',
        created: '22/07/2018 • 01:21:10',
        reason: 'Lorem ipsum'
      },
      {
        amount: 'R$ 99,00',
        email: 'lorem@ipsum.com',
        created: '22/07/2018 • 01:21:10',
        reason: 'Lorem ipsum'
      }
    ]

    const wrapper = shallowMount(AppTable, {
      propsData: { 
        tableData: tableData
      }
    })

    expect(wrapper.findAll('tbody tr')).toHaveLength(tableData.length)
  })

  it('Renders data in the correct order', () => {
    const wrapper = shallowMount(AppTable, {
      propsData: { 
        tableData: [
          {
            amount: 'R$ 99,00',
            email: 'lorem@ipsum.com',
            created: '22/07/2018 • 01:21:10',
            reason: 'Lorem ipsum'
          }
        ]
      }
    })

    const tableBody = wrapper.find('tbody tr')
    
    expect(tableBody.findAll('td').at(0).text()).toContain('R$ 99,00')
    expect(tableBody.findAll('td').at(1).text()).toContain('lorem@ipsum.com')
    expect(tableBody.findAll('td').at(2).text()).toContain('22/07/2018 • 01:21:10')
    expect(tableBody.findAll('td').at(3).text()).toContain('Lorem ipsum')
  })

  it('Renders default message if prop is empty', () => {
    const defaultMessage = 'Não há cobranças a serem listadas'
    const wrapper = shallowMount(AppTable, {
      propsData: { 
        tableData: []
      }
    })
    
    expect(wrapper.find('td').text()).toContain(defaultMessage)
  })
})