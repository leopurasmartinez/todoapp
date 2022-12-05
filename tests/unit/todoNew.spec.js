import { createLocalVue, shallowMount } from '@vue/test-utils'

import Vuex from 'vuex'
import todo from '@/store/modules/todo.js'
import TodoNew from '@/components/TodoNew.vue'
import App from '@/App.vue'


const localVue = createLocalVue();
localVue.use(Vuex);

describe('The TodoNew.vue component', () => {
  let wrapper;
  let store;
  let state = {};
  let actions = {};
  let modules = {
    todo
  };
  beforeEach(() => {
    store = new Vuex.Store({ state, actions, modules });

    wrapper = shallowMount(TodoNew, {
      localVue,
      store,
    });
  })

  async function addTodo (todoText) {
    wrapper.find('[class="new-todo"]').setValue(todoText)
    const element = wrapper.find('[class="new-todo"]')
    element.setValue(todoText)
    await element.trigger('keyup.enter')
  }

  it('Can be mounted', () => {
    const wrapper = shallowMount(TodoNew)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Allows for adding one todo item', async () => {
    await addTodo('My first todo item')
  })

  it('Empties the input field after todo has been added', async () => {
    await addTodo('Some todo item')
    expect(wrapper.find('[class="new-todo"]').element.value).toEqual('')
  })
})
