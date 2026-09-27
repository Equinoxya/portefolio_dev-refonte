<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ParcoursSection from '../components/ParcoursSection.vue'
import ContactSection from '../components/Contact.vue'
</script>

<template>
  <HeroSection />
  <ProjectsSection v-appear />
  <SkillsSection v-appear />
  <ParcoursSection v-appear />
  <ContactSection v-appear />
</template>
