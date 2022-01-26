export default function init() {}

const profileTag = document.querySelector('#profile')
const nameTag = document.querySelector('#name')
const followers = document.querySelector('[data-dado="followers"]')
const following = document.querySelector('[data-dado="following"]')
const repository = document.querySelector('[data-dado="repository"]')
// const company = document.querySelector('[data-dado="company"]')
const location = document.querySelector('[data-dado="location"]')

async function imafetch() {
  const url = 'https://api.github.com/users/WendelSantosNunes'
  const dados = await fetch(url)
  const dadosFinal = await dados.json()
  const name = dadosFinal.name

  nameTag.innerHTML = name
  profileTag.setAttribute('src', dadosFinal.avatar_url)
  followers.innerHTML = dadosFinal.followers
  following.innerHTML = dadosFinal.following
  repository.innerHTML = dadosFinal.public_repos
  location.innerHTML = dadosFinal.location
}

imafetch()
