<template>
  <div class="themed">
    <BackButton />

    <div class="profissional-photo">
      <img src="../../assets/photos/maria.jpg" />
    </div>

    <div class="profissional-info">
      <div class="profissional-name">Maria</div>
      <div class="profissional-title">Cuidadora Profissional</div>
      <i class="profissional-description">15 anos de experiência em Alzheimer e Parkinson, destaca-se pela empatia,
        escuta ativa e comunicação calra com famílias. Aos 38 anos, é referência para idosos, entrega relatórios
        precisos e prioriza o bem-estar físico e emocional dos pacientes.</i>
    </div>

    <div class="hire-button">
      <LongeButton variant="primary">CONTRATAR</LongeButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import LongeButton from '@/components/LongeButton.vue';
</script>

<style lang="scss" scoped>
.themed {
  .profissional-photo {
    width: 70%;
    margin: auto;
    margin-top: 32px;
    position: relative;

    img {
      border-radius: 30px;
    }

    &::after {
      content: "★★★★★";
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 2.5rem;
      position: absolute;
      bottom: 0;
      transform: translateY(20%);
      color: var(--color-secondary);
    }
  }

  .profissional-info {
    color: white;
    text-align: center;

    .profissional-name {
      margin-top: 16px;
      font-size: 2rem;
      font-weight: 700;
    }

    .profissional-title {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .profissional-description {
      display: block;
      padding: 2rem 0;
      line-height: 1.3rem;
    }
  }

  .hire-button {
    text-align: center;
  }
}
</style>