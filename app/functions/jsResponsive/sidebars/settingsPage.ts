//client-side
'use client'
const settingsControl = (state: boolean, settingsVar: string, settings_innerVar: string) => {
    const settings = document.getElementById(settingsVar)
    const settings_inner = document.getElementById(settings_innerVar)
    const overlay = document.getElementById('overlay')
    if (settings && settings_inner && overlay) {
        if (state === true) {
            console.log('it is opened')
            settings.style.width = '450px'
            settings.style.minWidth = '450px'
            settings.style.display = 'fixed'
            settings.style.position = 'absolute'
            settings.style.background = 'linear-gradient(rgb(107, 61, 58, 0.7), black)'
            settings.style.right = '10px'
            settings.style.backdropFilter = 'blur(100px)'
            settings.style.border = '1px solid white'
            settings.style.zIndex = '11'
            settings.style.overflowX = 'none'
            //settings_inner
            settings_inner.style.display = 'none'
            settings_inner.style.transitionDuration = '100ms'
            settings_inner.style.opacity = '0'
            //settings_inner
            setTimeout(() => {
                settings_inner.style.display = 'block'
                setTimeout(() => {
                    settings_inner.style.opacity = '1'
                }, 30);
            }, 100);
            //overlay
            overlay.style.opacity = '0.4    '
            overlay.style.display = 'block'
        }

        else {
            console.log('it is closed')
            settings.style.border = ''
            // settings.style.background = 'blue'
            settings.style.width = '0px'
            settings.style.minWidth = '0px'
            settings.style.display = 'fixed'
            settings.style.position = 'absolute'
            settings.style.border = '0px solid transparent'
            settings.style.right = '10'

            settings_inner.style.display = 'none'
            //overlay
            overlay.style.opacity = '0'
            setTimeout(() => {
                overlay.style.display = 'none'
            }, 50);
        }
    }
}

const clickOutsideSettings = () => {
    document.addEventListener('click', (event) => {
    const settings = document.getElementById('settings')
    const settings_inner = document.getElementById('settings_inner')
    let mouseX = event.clientX;
    let mouseY = event.clientY
    if (settings && settings_inner) {
        const settingsbox = settings.getBoundingClientRect()
        const outsideBox = 
            mouseX <= settingsbox.left && mouseX >= settingsbox.right &&
            mouseY <= settingsbox.top && mouseY >= settingsbox.bottom;
        if (outsideBox) {
            sessionStorage.setItem('settingsPage', 'false')
            settings.style.border = ''
            // settings.style.background = 'blue'
            settings.style.width = '0px'
            settings.style.minWidth = '0px'
            settings.style.display = 'fixed'
            settings.style.position = 'absolute'
            settings.style.border = '0px solid transparent'
            settings.style.right = '10'
            settings_inner.style.display = 'none'
            return true
        }
    }
    })
}
export {clickOutsideSettings, settingsControl}

