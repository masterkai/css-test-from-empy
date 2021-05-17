$(function () {
    // console.log('ready!!')
    darkModeSwitchToggle()
    //dwb_header-RightContainer
    // mectrl_main_body
    const mectrl_main_body = document.querySelector('#mectrl_main_body')
    $('.box_portrait .box_img_portrait').click(() => {
        if (mectrl_main_body.style.display === 'none') {
            mectrl_main_body.style.display = 'block'
            darkModeSwitchToggle()
        } else if ((mectrl_main_body.style.display = 'block')) {
            mectrl_main_body.style.display = 'none'
        }
    })

    function darkModeSwitchToggle() {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                document.documentElement.setAttribute('data-theme', 'light')
            }
        }

        toggleSwitch.addEventListener('change', switchTheme, false)

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark') //add this
            } else {
                document.documentElement.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', 'light') //add this
            }
        }

        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme)

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true
            }
        }
    }
})
