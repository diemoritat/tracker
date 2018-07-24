/*
  Props
  @Array tableData - Contains the data to be iterated over and displayed on the table.
*/

<template>
<div class="app-table">
  <table>
    <thead>
      <tr>
        <th>
          Valor
        </th>
        <th>
          Cliente
        </th>
        <th width="19%">
          Criado em
        </th>
        <th width="43%">
          Motivo
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of tableData" :key="`table-item__${index}`">
        <td data-label="Valor">R$ {{ item.amount }}</td>
        <td data-label="Cliente">{{ item.email }}</td>
        <td data-label="Criado em">{{ item.created }}</td>
        <td :data-label="item.reason !== '' ? 'Motivo':''">
          {{ item.reason }}
        </td>
      </tr>
      <tr v-if="tableData == ''">
        <td colspan="4" class="center">
          Não há cobranças a serem listadas
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'AppTable',
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
        color: $color-primary;
        font-weight: 700;
      }

      &.center {
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: $breakpoint-md) {
  // This extra div is needed to add box-shadow on IE11
  .app-table {
    box-shadow: 0px 2px 4px 0px #a3b1cf;
    border-radius: 4px;
  }

  table {
    background-color: #fff;
    table-layout: fixed;
    border-radius: 4px;
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
        color: $color-primary;
        padding: 9px 40px;

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
        text-align: right;
        padding-top: 12px;
        padding-right: 40px;
        padding-left: 10px;
        padding-bottom: 12px;
        display: table-cell;

        &:before {
          display: none;
        }

        &:not(:first-child) {
          text-align: left;
          padding-right: 10px;
          padding-left: 40px;
        }

        &:last-child {
          white-space: nowrap;
          position: relative;
          
          &:before {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            z-index: 1;
            top: 0;
            width: 70px;
            height: 100%;
            box-shadow: inset -63px 0px 74px -20px white;
          }
        }
      }
    }
  }
}
</style>
