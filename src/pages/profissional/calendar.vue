<template>
  <div class="themed">
    <BackButton />

    <div class="calendar-title">Agenda</div>

    <div class="calendar-table">

      <div class="calendar-month">
        <span class="profissional-name">Maria</span>
        <div class="current-month">Agosto 2025</div>
      </div>

      <table cellspacing="0">
        <thead>
          <tr>
            <th>DOM</th>
            <th>SEG</th>
            <th>TER</th>
            <th>QUA</th>
            <th>QUI</th>
            <th>SEX</th>
            <th>SÁB</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="week in weeks">
            <td v-for="day in week" :class="{ 'busy': isBusy(day) }">
              <div>{{ day }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BackButton from '@/components/BackButton.vue';

onMounted(() => {
  createCalendar();
})

const monthUsing = (new Date()).getMonth();
const yearUsing = (new Date()).getFullYear();
const weeks = ref<(number | undefined)[][]>([]);

function createCalendar() {
  const allDays: (number | undefined)[] = [];

  const firstDay = new Date(yearUsing, monthUsing, 1);
  const lastDay = new Date(yearUsing, monthUsing + 1, 0);

  const weekDayFirstDay = firstDay.getDay();
  const lastDayNumber = lastDay.getDate();

  for (let day = 0; day < weekDayFirstDay; day++) {
    allDays.push(undefined)
  }

  for (let day = 1; day <= lastDayNumber; day++) {
    allDays.push(day);
  }

  const allWeeks = new Array(Math.ceil(allDays.length / 7))
    .fill(undefined)
    .map(_ => allDays.splice(0, 7))

  const lastWeek = allWeeks[allWeeks.length - 1];
  while (lastWeek.length < 7) {
    allWeeks[allWeeks.length - 1].push(undefined)
  }

  weeks.value = allWeeks;
}

function isBusy(day: undefined | number) {
  if (day === undefined) return false

  return Math.random() * day > day / 2;
}
</script>

<style lang="scss" scoped>
.themed {
  color: white;
  text-align: center;

  .calendar-title {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 32px;
    margin-bottom: 48px;
  }

  .calendar-table {
    --border-table: solid 2px white;

    .calendar-month {
      font-weight: 700;

      .profissional-name {
        font-size: 1.5rem;
        color: var(--color-primary);
        background-color: white;
        border-radius: 10px;
        padding: 8px;
      }

      .current-month {
        background-color: var(--color-primary);
        border: var(--border-table);
        border-bottom: none;
        padding: 8px;
        font-size: 2rem;
        text-transform: uppercase;
      }
    }

    table {
      width: 100%;
      border-left: var(--border-table);
      border-bottom: var(--border-table);

      th,
      td {
        border-right: var(--border-table);
        border-top: var(--border-table);
        width: calc(100%/7);
        padding: 4px 0;
      }

      th {
        font-weight: 500;
        font-size: 0.8rem;
      }

      td {
        &.busy {
          background-color: var(--color-primary);
        }

        div {
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>