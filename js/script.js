$(function () {
    // console.log('ready!!')
    const state = {
        darkMode: true
    }
    $('#ModeSwitchButton').click(() => {
        console.log('being clicked!!')
        $('.dark_mode_switch_icon').toggleClass('active')
        if ($('.dark_mode_switch_icon').hasClass('active') === true) {
            state.darkMode = false
            document.body.style.backgroundColor = '#18191a'
            console.log('state.darkMode:', state.darkMode)
            $('.dark_mode_switch').css('background-color', '#ffb74d')
        } else {
            state.darkMode = true
            document.body.style.backgroundColor = 'white'
            $('.dark_mode_switch').css('background-color', '#929292')
            console.log('state.darkMode:', state.darkMode)
        }
    })
    //dwb_header-RightContainer
    // mectrl_main_body
    const mectrl_main_body = document.querySelector('#mectrl_main_body')
    $('.box_portrait .box_img_portrait').click(() => {
        if (mectrl_main_body.style.display === 'none') {
            mectrl_main_body.style.display = 'block'
        } else if ((mectrl_main_body.style.display = 'block')) {
            mectrl_main_body.style.display = 'none'
        }
    })
})
