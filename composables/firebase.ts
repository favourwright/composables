export const BootstrapFirebase = (loaded: Boolean, callback: Function) => loaded ? null : callback()
export const useSetProfile = async () => {
  console.log("hitting")
  const nuxtApp = useNuxtApp()
  const profile = useProfile()
  const querySnapshot = await getDocs(collection(nuxtApp.$firebase_db, 'profile'))
  querySnapshot.forEach((doc) => {
    // because I'm expecting one record
    profile.value.email = doc.data().email
    profile.value.name.first = doc.data().name.first
    profile.value.name.last = doc.data().name.last
    profile.value.name.middle = doc.data().name.middle
    profile.value.name.nick = doc.data().name.nick
    profile.value.job_title = doc.data().job_title
    profile.value.avatar = doc.data().avatar
    profile.value.years_of_experience = doc.data().years_of_experience
    // profile.value.year_published = doc.data().year_published
    profile.value.socials.default_username = doc.data().socials.default_username
    profile.value.socials.discord = doc.data().socials.discord
    profile.value.socials.github = doc.data().socials.github
    profile.value.socials.linkedin = doc.data().socials.linkedin
    profile.value.socials.reddit = doc.data().socials.reddit
    profile.value.socials.twitter = doc.data().socials.twitter
    profile.value.bio = doc.data().bio
    profile.value.firebase_loaded = true
  })
}
