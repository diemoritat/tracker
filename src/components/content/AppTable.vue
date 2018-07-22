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
      <tr v-for="(item, index) of tableData" :key="`table-item__${index}`">
        <td data-label="Valor">R$ {{item.amount}}</td>
        <td data-label="Cliente">{{item.email}}</td>
        <td data-label="Criado em">{{item.created}}</td>
        <td data-label="Motivo">{{item.reason}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
table {
  width: 100%;
  margin-bottom: 15px;

  thead {
    display: none;
  }

  tbody {
    tr {
      margin-bottom: 10px;
      display: block;
      background-color: #fff;
      border-radius: 4px;
      padding: 5px 10px;
      box-shadow: 0px 4px 8px 1px #97a7c8;
    }

    td {
      display: block;
      text-align: left;
      font-size: 11px;
      padding: 3px 0;

      &:last-child {
        border-bottom: 0;
      }

      &:before {
        content: attr(data-label);
        display: block;
        font-size: 11px;
        text-transform: uppercase;
        color: #5135a7;
        font-weight: 700;
      }
    }
  }
}

@media screen and (min-width: 600px) {
  table {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px #a3b1cf;
    overflow: hidden;

    thead {
      display: table-header-group;

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
        margin-bottom: 0;
        display: table-row;
        border-radius: 0;
        padding: 5px 10px;
        box-shadow: none;
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
        display: table-cell;

        &:before {
          display: none;
        }

        &:first-child {
          text-align: right;
        }
      }
    }
  }
}
</style>
