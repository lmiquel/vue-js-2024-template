import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('company', () => {
  const company = ref()

  const hasCompany = computed(() => company.value)

  const setCompany = companyToSet => (company.value = companyToSet)

  return { company, hasCompany, setCompany }
})
