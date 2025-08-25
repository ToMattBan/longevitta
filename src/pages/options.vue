<template>
  <LogoHeader :showBoth="false" />

  <div class="options-container">
    <LongeButton v-for="option, index in optionsToShow" :variant="index % 2 == 0 ? 'primary' : 'secondary'"
      @click="checkGoSomewhere(option)">
      <img :class="{ 'op-0': optionsExistent.includes(option) }" src="../assets/action-icons/lock.png" />
      <span>{{ option }}</span>
    </LongeButton>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { setStatusBarLight } from '@/utils/statusBar';

import LogoHeader from '@/components/LogoHeader.vue';
import LongeButton from '@/components/LongeButton.vue';

interface IOptions {
  health: string[],
  wellBeing: string[],
  activities: string[],
  food: string[],
  calendar: string[],
  status: string[],
}

onMounted(async () => {
  await setStatusBarLight();
})

const route = useRoute();
const router = useRouter();

const allOptions: IOptions = {
  health: [
    "Perfil", "Registro Médico", "Sincronizar Smartwatch", "Lembrete de Medicação"
  ],
  wellBeing: [
    "IA Amizade", "Mensagem"
  ],
  activities: [
    "Jogos", "Rotina"
  ],
  food: [
    "Diário da Alimentação", "Ia Alimentos", "Receitas"
  ],
  calendar: [
    "Agendamento de Profissionais", "Veículo Adaptado", "Empréstimo de Smartwatch", "Empréstimo de Materiais"
  ],
  status: [
    "Relatórios", "Linha do Tempo", "GPS"
  ],
}

const params = route.params.type as keyof IOptions;
const optionsToShow = allOptions[params];

const optionsExistent: string[] = ['Perfil', 'Agendamento de Profissionais']

function checkGoSomewhere(option: string) {
  if (option === 'Perfil') router.push('/profile');
  if (option === 'Agendamento de Profissionais') router.push('/profissional')
}
</script>

<style lang="scss" scoped>
.options-container {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 24px;

  button {
    border-radius: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    height: 5rem;
    font-size: 1.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 1.3rem;
      margin-right: 14px;
    }
  }
}
</style>