<template>
  <LogoHeader />

  <form @submit.prevent="enterApp">
    <legend>Login</legend>

    <div class="input-container">
      <label>Nome:</label>
      <input required v-model="name" />
      <div class="login-error" v-if="showErrorName">
        Para acessar, utilize o nome "Alfredo"
      </div>
    </div>

    <div class="input-container">
      <label>Senha:</label>
      <input type="password" required v-model="pass" />
      <div class="login-error" v-if="showErrorPass">
        Para acessar, utilize a senha "1234"
      </div>
    </div>

    <LongeButton variant="secondary" type="submit">Entrar</LongeButton>

    <RouterLink class="signup" to="/register">Não tem uma conta? Cadastre-se</RouterLink>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { setStatusBarLight } from '@/utils/statusBar';

import LogoHeader from '@/components/LogoHeader.vue';
import LongeButton from '@/components/LongeButton.vue';

onMounted(async () => {
  await setStatusBarLight();
})

const router = useRouter()

const name = ref<string>('');
const pass = ref<string>('');

const showErrorName = ref<boolean>(false)
const showErrorPass = ref<boolean>(false)

function enterApp() {
  let canLogin = true;

  if (name.value.trim() !== 'Alfredo') { showErrorName.value = true; canLogin = false }
  if (pass.value.trim() !== '1234') { showErrorPass.value = true; canLogin = false }

  if (canLogin) router.push('/home');
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

    .login-error {
      color: red;
      font-weight: normal;
      font-size: 0.8rem;
      margin-top: 4px;
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