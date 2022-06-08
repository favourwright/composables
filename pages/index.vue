<script setup>
onMounted(()=>{
  BootstrapFirebase(profile.value.firebase_loaded, useSetProfile)
})
</script>
