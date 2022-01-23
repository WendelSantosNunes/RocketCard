export default function init() {}

const profileTag = document.querySelector('#profile')
const nameTag = document.querySelector('#name')

async function imafetch() {
  const url = 'https://api.github.com/users/WendelSantosNunes'
  const dados = await fetch(url)
  const dadosFinal = await dados.json()
  const name = dadosFinal.name
  nameTag.innerHTML = name
  profileTag.setAttribute('src', dadosFinal.avatar_url)
}

imafetch()
