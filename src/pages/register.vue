<template>
  <LogoHeader />

  <div class="title">Cadastrar</div>

  <div class="option-buttons">
    <LongeButton variant="primary">
      <img src="../assets/action-icons/lock.png" />
      <span>Idoso/Familiar</span>
    </LongeButton>
    <LongeButton variant="secondary">
      <img src="../assets/action-icons/lock.png" />
      <span>Profissional</span>
    </LongeButton>
    <LongeButton variant="primary">
      <img src="../assets/action-icons/lock.png" />
      <span>Corporativo</span>
    </LongeButton>
    <LongeButton variant="secondary">
      <img src="../assets/action-icons/lock.png" />
      <span>Administração</span>
    </LongeButton>
  </div>

  <RouterLink class="login" to="/login">Já tem uma conta? Logar-se</RouterLink>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { setStatusBarLight } from '@/utils/statusBar';
import LogoHeader from '@/components/LogoHeader.vue';
import LongeButton from '@/components/LongeButton.vue';

onMounted(async () => {
  await setStatusBarLight();
})
</script>

<style lang="scss" scoped>
.title {
  color: var(--color-secondary);
  text-align: center;
  margin: 24px 0;
  font-size: 2rem;
}

.option-buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;

  button {
    border-radius: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;

    img {
      height: 1.3rem;
      margin-right: 14px;
    }
  }
}

.login {
  display: block;
  color: var(--color-primary);
  font-size: 0.8em;
  font-weight: 700;
  text-align: center;
  margin-top: 32px;
}
</style>