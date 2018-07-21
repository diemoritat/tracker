<template>
  <div class="page-add">
    <header class="alt-header">
      <div class="alt-header__top">
        <router-link to="/" class="alt-header__back">
          <span class="alt-header__back-icon"></span>
          Voltar
        </router-link>
      </div>
      <div class="alt-header__content">
        <h1 class="alt-header__title">{{$route.name}}</h1>
      </div>
    </header>
    

    <form action="" class="form">
      <fieldset>
        <legend class="form__legend">Dados da cobrança</legend>

        <form-input
          v-model="amount"
          :id="1"
          :type="'money'"
        >
          Valor
        </form-input>

        <form-input 
          v-model="email"
          :id="2"
          :placeholder="'email@exemplo.com'"
          :type="'text'"
        >
          Email
        </form-input>

        <div class="form__field">
          <form-checkbox v-model="addReason" :id="4">Adicionar motivo</form-checkbox>
        </div>

        <form-input 
          v-if="addReason"
          v-model="reason"
          :id="3"
          :placeholder="'Motivo da cobrança'"
        >
          Motivo
        </form-input>

        <form-button :buttonAction="()=>{}" :isDisabled="true">
          Criar
        </form-button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import FormButton from '@/components/form/FormButton'
import FormCheckbox from '@/components/form/FormCheckbox'
import FormInput from '@/components/form/FormInput'

export default {
  name: 'AddNew',
  components: {
    FormButton,
    FormCheckbox,
    FormInput
  },
  data() {
    return {
      amount: 0.96,
      email: '',
      addReason: false,
      reason: ''
    }
  },
  methods: {
    addNew() {
      this.$router.push('/new')
    }
  }
}
</script>

<style lang="scss">
.page-add {
  padding: 20px 30px;
  height: 100%;
}

.alt-header {
  margin-bottom: 20px;

  &__top {
    margin-bottom: 25px;
    padding-top: 5px;
  }

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__back {
    color: #1845e3;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    padding-left: 20px;
    display: block;
  }

  &__back-icon {
    width: 12px;
    height: 2px;
    background-color: #254ee4;
    border-radius: 5px;
    position: absolute;
    left: 3px;
    top: 7px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: -1px;
      top: -2px;
      width: 8px;
      height: 2px;
      background-color: #254ee4;
      transform: rotate(-45deg);
      border-radius: 5px;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: -1px;
      top: 2px;
      width: 8px;
      height: 2px;
      background-color: #254ee4;
      transform: rotate(45deg);
      border-radius: 5px;
    }
  }

  &__title {
    flex: 1;
    line-height: 1;
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
}

.form {
  &__legend {
    width: 100%;
    max-width: 400px;
    color: #1845e3;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 6px;
    border-bottom: 1px solid #1845e3;
    margin-bottom: 25px;
  }
}
</style>
