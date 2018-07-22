<template>
  <form class="form">
    <fieldset>
      <legend class="form__legend">Dados da cobrança</legend>

      <form-input
        v-validate="'required'"
        v-model.trim="newCharge.amount"
        :error="errors.first('amount')"
        name="amount"
        type="money"
      >
        Valor
      </form-input>

      <form-input 
        v-validate="'required|email'"
        v-model.trim="newCharge.email"
        :error="errors.first('email')"
        name="email"
        placeholder="email@exemplo.com"
        type="text"
      >
        Email
      </form-input>

      <div class="form__field">
        <form-checkbox v-model="hasReason" name="hasReason">
          Adicionar motivo
        </form-checkbox>
      </div>

      <form-input 
        v-if="hasReason"
        v-model.trim="newCharge.reason"
        :error="errors.first('reason')"
        name="reason"
        placeholder="Motivo da cobrança"
      >
        Motivo
      </form-input>

      <form-button :button-action="submit">
        Criar
      </form-button>
    </fieldset>
  </form>
</template>

<script>
import FormButton from '@/components/form/FormButton'
import FormCheckbox from '@/components/form/FormCheckbox'
import FormInput from '@/components/form/FormInput'

import portuguese from 'vee-validate/dist/locale/pt_BR'

export default {
  name: 'FormAddNew',
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
      hasReason: false
    }
  },
  computed: {
    dateCreated() {
      return new Date().toLocaleString("pt-BR").replace(' ', ' \u2022 ')
    }
  },
  created() {
    this.$validator.localize('pt_BR', {
      messages: portuguese.messages
    });
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.newCharge.created = this.dateCreated
          this.$store.commit('createCharge', { 
            ...this.newCharge
          })

          setTimeout(() => {
            this.$router.push('/')
          }, 500)
          return;
        }
      })
    }
  }
}
</script>

<style lang="scss">
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
