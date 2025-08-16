<template>
  <section class="logo-container">
    <img class="main-logo" src="../assets/logos/small_logo.png" alt="LGV" />
    <img src="../assets/logos/big_logo.png" alt="logo extenso" />
  </section>

  <form @submit.prevent="">
    <legend>Login</legend>

    <div class="input-container">
      <label>Nome:</label>
      <input />
    </div>

    <div class="input-container">
      <label>Senha:</label>
      <input type="password" />
    </div>

    <LongeButton variant="secondary" type="submit">Entrar</LongeButton>

    <a href="/register">Não tem uma conta? Cadastre-se</a>
  </form>
</template>

<script setup lang="ts">
import LongeButton from '@/components/LongeButton.vue';

</script>

<style lang="scss" scoped>
.logo-container {
  text-align: center;

  .main-logo {
    width: 50%;
    margin-top: 32px;
    margin-bottom: 24px;
  }
}

form {
  color: var(--color-primary);
  text-align: center;
  margin-top: 32px;

  legend {
    margin-bottom: 23px;
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

  a {
    display: block;
    color: var(--color-primary);
    font-size: 0.8em;
    font-weight: 700;
  }
}
</style>