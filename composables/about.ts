import { useRuntimeConfig } from '#app'

export const useProfile = () => {
  interface Profile {
    name: {
      first: String
      last: String
      middle?: String
      nick?: String
    }
    email: String
    job_title: String
    avatar: String
    years_of_experience: Number
    year_published: Date
    bio?: String
    socials: {
      default_username: String
      discord?: String
      github?: String
      linkedin?: String
      reddit?: String
      twitter?: String
    }
    firebase_loaded: Boolean
  }
  interface ConfigData {
    email: String
    name: {
      first: String
      last: String
      middle?: String
      nick?: String
    },
  }
  // get temporary dev info from config
  const { public: public_config }: ConfigData = useRuntimeConfig()
  // set temp data
  return useState<Profile>('profile', () => ({
    ...public_config,
    avatar: '',
    job_title: 'fullstack-developer',
    bio:'',
    years_of_experience: 5,
    year_published: new Date('2019-04-11T10:20:30Z'),
    socials:{
      default_username: 'favourwright',
    },
    firebase_loaded: false
  })
)}