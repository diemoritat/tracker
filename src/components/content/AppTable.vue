<template>
  <table>
    <thead>
      <tr>
        <th>
          Valor
        </th>
        <th>
          Cliente
        </th>
        <th>
          Criado em
        </th>
        <th>
          Motivo
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Valor">R$ 100,00</td>
        <td data-label="Cliente">gerhold.adolf@gmail.com</td>
        <td data-label="Criado em">12/05/2018 - 17h34</td>
        <td data-label="Motivo">Lorem ipsum blá blá</td>
      </tr>
      <tr>
        <td data-label="Valor">R$ 100,00</td>
        <td data-label="Cliente">gerhold.adolf@gmail.com</td>
        <td data-label="Criado em">12/05/2018 - 17h34</td>
        <td data-label="Motivo">Lorem ipsum blá blá</td>
      </tr>
      <tr>
        <td data-label="Valor">R$ 100,00</td>
        <td data-label="Cliente">gerhold.adolf@gmail.com</td>
        <td data-label="Criado em">12/05/2018 - 17h34</td>
        <td data-label="Motivo">Lorem ipsum blá blá</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
table {
  width: 100%;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px #a3b1cf;
  overflow: hidden;

  thead {
    tr {
      border-bottom: 1px solid #d1d6e4;
    }

    th {
      font-size: 12px;
      text-align: left;
      text-transform: uppercase;
      color: #5135a7;
      padding: 9px 20px;

      &:first-child {
        text-align: right;
      }
    }
  }

  tbody {

    tr {
      transition: background-color 0.1s linear;

      &:not(:last-child) {
        border-bottom: 1px solid #d1d6e4;
      }

      &:hover {
        background-color: #f7f7f7;
        transition: background-color 0.2s linear;
      }
    }
    td {
      font-size: 12px;
      text-align: left;
      padding: 12px 20px;

      &:first-child {
        text-align: right;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }

  table thead {
    display: none;
  }

  table tr {
    margin-bottom: 20px;
    display: block;
    background-color: #fff;
    border-radius: 4px;
    border-bottom: 2px solid #ddd;
    box-shadow: 2px 2px 1px #97a7c8;
  }

  table td {
    display: block;
    text-align: left;
    font-size: 13px;
  }

  table td:last-child {
    border-bottom: 0;
  }

  table td::before {
    content: attr(data-label);
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    color: #5135a7;
    font-weight: 700;
  }
    #card	tbody{
    line-height:0!important;
  }
}
</style>
