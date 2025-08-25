<template>
  <div class="themed">
    <div class="basic-infos">
      <div class="title">Perfil</div>
      <div class="selfie">
        <img src="../assets/photos/alfredo.jpg" alt="Selfie do Alfredo" />
      </div>
      <LongeButton variant="primary">Seu Alfredo</LongeButton>
    </div>

    <div class="detailed-infos">
      <div class="left-side">
        <div class="info-card info-card--basic">
          <div class="info-title">Informações Básicas</div>
          <ul class="info-infos">
            <li>Idade: 76 anos</li>
            <li>Sexo: Masculino</li>
            <li>Estado Civil: Viúvo</li>
            <li>Ocupação: Aposentado</li>
            <li>Residência: Mora sozinho</li>
            <li>Cidade: Blumenau/SC</li>
          </ul>
        </div>

        <div class="info-card info-card--family">
          <div class="info-title">Familiar Responsável</div>
          <div class="info-infos">Ana Souza</div>
        </div>

        <div class="info-card info-card--obs">
          <div class="info-title">Observações</div>
          <ul class="info-infos">
            <li>Sente falta de caminhadas;</li>
            <li>Gosta de sopa de lentilha;</li>
            <li>Gosta de jogar dominó;</li>
          </ul>
        </div>
      </div>

      <div class="right-side">
        <div class="info-card info-card--meds">
          <div class="info-title">Medicações:</div>
          <div class="info-infos">
            <ColoredPng :src="pillsIcon" />
          </div>
        </div>

        <div class="info-card info-card--laudos">
          <div class="info-title">Laudos:</div>
          <div class="info-infos">
            <ColoredPng :src="laudoIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { setStatusBarDark } from '@/utils/statusBar';
import LongeButton from '@/components/LongeButton.vue';
import ColoredPng from '@/components/ColoredPng.vue';

import pillsIcon from "../assets/action-icons/pills.png"
import laudoIcon from "../assets/action-icons/laudos.png"

onMounted(async () => {
  await setStatusBarDark();
})
</script>

<style lang="scss" scoped>
.themed {
  color: white;

  .basic-infos {
    text-align: center;

    .title {
      font-size: 3rem;
      font-weight: 700;
      padding-top: 32px;
      margin-bottom: 24px;
    }

    .selfie {
      margin: 12px auto;
      width: 50vw;
      border-radius: 50%;
      height: 50vw;
      overflow: hidden;
    }
  }

  .detailed-infos {
    margin-top: 24px;
    color: var(--color-primary);
    display: flex;
    gap: 8px;

    .left-side {
      flex: 3;
    }

    .right-side {
      flex: 2;
    }

    .left-side,
    .right-side {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .info-card {
      flex: 1;
      background-color: white;
      border-radius: 10px;
      padding: 12px;

      .info-title {
        font-weight: 700;
      }

      .info-infos {
        font-size: 0.9rem;
        padding: 0;
        margin: 8px 0 0;
        list-style: none;

        li:not(:first-of-type) {
          margin-top: 4px;
        }
      }

      &--basic {
        .info-infos {
          list-style: disc;
          padding-left: 14px;
        }
      }

      &--meds,
      &--laudos {
        display: grid;

        .masked {
          background-color: var(--color-primary);

          img {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>