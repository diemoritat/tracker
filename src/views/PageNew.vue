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
    

    <form class="form">
      <fieldset>
        <legend class="form__legend">Dados da cobrança</legend>

        <form-input
          v-model.trim="newCharge.amount"
          :id="1"
          :type="'money'"
        >
          Valor
        </form-input>

        <form-input 
          v-model.trim="newCharge.email"
          :id="2"
          :placeholder="'email@exemplo.com'"
          :type="'text'"
          name="email"
        >
          Email
        </form-input>

        <div class="error" v-if="!$v.newCharge.email.required">Field is required</div>
        <div class="error" v-if="!$v.newCharge.email.email">Name must have at least letters.</div>

        <div class="form__field">
          <form-checkbox v-model="hasReason" :id="4">Adicionar motivo</form-checkbox>
        </div>

        <form-input 
          v-if="hasReason"
          v-model.trim="newCharge.reason"
          :id="3"
          :placeholder="'Motivo da cobrança'"
        >
          Motivo
        </form-input>

        <form-button :buttonAction="submit" :disabled="submitStatus === 'ERROR'">
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

import * as _ from 'lodash';
import { validationMixin } from 'vuelidate'
import { required, email, minValue, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'AddNew',
  components: {
    FormButton,
    FormCheckbox,
    FormInput
  },
  data() {
    return {
      newCharge: {
        amount: 0,
        email: '',
        created: '',
        reason: ''
      },
      hasReason: false,
      submitStatus: null
    }
  },
  mixins: [validationMixin],
  validations: {
    newCharge: {
      amount: {
        required,
        minValue: parseFloat("0.01")
      },
      email: {
        required,
        email
      },
      reason: {
        minLength: minLength(3)
      }
    }
  },
  methods: {
    submit() {
      this.$v.newCharge.$touch()
      console.log(this.$v);
      
      if (this.$v.newCharge.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        this.newCharge.created = this.dateCreated
        this.$store.commit('createCharge', { 
          ...this.newCharge
        })

        setTimeout(() => {
          this.submitStatus = 'OK'
          this.$router.push('/')
        }, 500)
      }
    }
  },
  computed: {
    dateCreated() {
      return new Date().toLocaleString("pt-BR").replace(' ', ' \u2022 ')
    }
  }
}
</script>

<style lang="scss">
.page-add {
  padding: 20px 30px;
  min-height: 100%;
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
