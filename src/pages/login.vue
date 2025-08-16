<template>
  <LogoHeader />

  <form @submit.prevent="enterApp">
    <legend>Login</legend>

    <div class="input-container">
      <label>Nome:</label>
      <input required />
    </div>

    <div class="input-container">
      <label>Senha:</label>
      <input type="password" required />
    </div>

    <LongeButton variant="secondary" type="submit">Entrar</LongeButton>

    <RouterLink class="signup" to="/register">Não tem uma conta? Cadastre-se</RouterLink>
  </form>
</template>

<script setup lang="ts">
import LogoHeader from '@/components/LogoHeader.vue';
import LongeButton from '@/components/LongeButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function enterApp() {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
form {
  color: var(--color-primary);
  text-align: center;
  margin-top: 32px;

  legend {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 2em;
  }

  .input-container {
    text-align: left;
    width: 80%;
    margin: auto;
    font-size: 1.3em;
    margin-top: 12px;
    font-weight: 700;

    label {
      display: block;
    }

    input {
      width: 100%;
      border-radius: 30px;
      border: 2px solid var(--color-primary);
      height: 40px;
      padding: 8px 16px;
    }
  }

  button {
    margin: 48px 0;
  }

  .signup {
    display: block;
    color: var(--color-primary);
    font-size: 0.8em;
    font-weight: 700;
  }
}
</style>