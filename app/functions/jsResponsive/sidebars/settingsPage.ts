//client-side

const settingsControl = (state: boolean) => {
    const settings = document.getElementById('settings')
    const settings_inner = document.getElementById('settings_inner')

    if (settings && settings_inner) {
        // console.log('it detected settings')
        if (state === true) {
            console.log('it is opened')
            settings.style.width = '400px'
            settings.style.minWidth = '300px'
            settings.style.display = 'fixed'
            settings.style.position = 'absolute'
            settings.style.background = 'blue'
            settings.style.border = ''
            settings.style.zIndex = '10'
            settings.style.right = '0'

            settings_inner.style.display = 'block'
        }

        else {
            console.log('it is closed')
            settings.style.border = ''
            settings.style.background = 'blue'
            settings.style.width = '0px'
            settings.style.minWidth = '0px'
            settings.style.display = 'fixed'
            settings.style.position = 'absolute'
            settings.style.zIndex = '2'
            settings.style.right = '0'

            settings_inner.style.display = 'none'
            
        }
    }
}

export default settingsControl

settingsControl(false)