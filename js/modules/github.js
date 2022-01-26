export default function init() {
  const profileTag = document.querySelector('#profile')
  const nameTag = document.querySelector('#name')
  const followers = document.querySelectorAll('[data-dado="followers"]')
  const following = document.querySelectorAll('[data-dado="following"]')
  const repository = document.querySelectorAll('[data-dado="repository"]')
  const location = document.querySelectorAll('[data-dado="location"]')

  async function imafetch() {
    const url = 'https://api.github.com/users/WendelSantosNunes'
    const dados = await fetch(url)
    const dadosFinal = await dados.json()
    const name = dadosFinal.name

    nameTag.innerHTML = name
    profileTag.setAttribute('src', dadosFinal.avatar_url)

    followers[0].innerHTML = dadosFinal.followers
    followers[1].innerHTML = dadosFinal.followers

    following[0].innerHTML = dadosFinal.following
    following[1].innerHTML = dadosFinal.following

    repository[0].innerHTML = dadosFinal.public_repos
    repository[1].innerHTML = dadosFinal.public_repos

    location[0].innerHTML = dadosFinal.location
    location[1].innerHTML = dadosFinal.location
  }

  imafetch()
}
