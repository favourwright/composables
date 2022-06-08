<script setup>
const profile = useProfile()
onMounted(()=>{
  BootstrapFirebase(profile.value.firebase_loaded, useSetProfile)
})
</script>
