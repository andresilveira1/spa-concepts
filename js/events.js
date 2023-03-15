export default function Events({ bgMain, home, universe, exploration }) {
  home.addEventListener('click', function () {
    bgMain.classList.add('bg-main')
    bgMain.classList.remove('bg-exploration')
    bgMain.classList.remove('bg-universe')
    home.classList.add('active')
    universe.classList.remove('active')
    exploration.classList.remove('active')
  })

  universe.addEventListener('click', function () {
    bgMain.classList.add('bg-universe')
    bgMain.classList.remove('bg-main')
    bgMain.classList.remove('bg-exploration')
    universe.classList.add('active')
    home.classList.remove('active')
    exploration.classList.remove('active')
  })

  exploration.addEventListener('click', function () {
    bgMain.classList.add('bg-exploration')
    bgMain.classList.remove('bg-main')
    bgMain.classList.remove('bg-universe')
    exploration.classList.add('active')
    home.classList.remove('active')
    universe.classList.remove('active')
  })
}
