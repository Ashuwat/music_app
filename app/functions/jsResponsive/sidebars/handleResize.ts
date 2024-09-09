//client

const setSidebarHidden = (): void => {
    const sidebar = document.getElementById('sidebar');
    const sidebar_inside = document.getElementById('sidebar_inside')
    const main = document.getElementById('main')
    
    if (sidebar && sidebar_inside && main) {
    sidebar.style.left = '0px'
    sidebar.style.width = '0px';
    sidebar.style.minWidth = '0px';
    sidebar.style.margin = '0px 0px 0px 10px'
    sidebar.style.display = 'fixed'
    sidebar.style.position = 'absolute'
    sidebar.style.zIndex = '2';
    //end of sidebar
    sidebar_inside.style.display = 'none';
    //end of sidebar_inside
    main.style.width = '100%';
    }
}

const setSidebarVisible = (): void => {
    const sidebar = document.getElementById('sidebar');
    const sidebar_inside = document.getElementById('sidebar_inside')
    const main = document.getElementById('main')

    if (sidebar && sidebar_inside && main) {
    sidebar.style.width = '';
    sidebar.style.minWidth = '';
    sidebar.style.margin = '0px 0px 0px 0px'
    sidebar.style.position = 'relative'
    sidebar.style.zIndex = '';
    sidebar.style.display = 'block'
    //end of sidebar
    sidebar_inside.style.display = '';
    //end of sidebar_inside
    main.style.width = '100%';
    //end of main
    }
}

export {setSidebarVisible, setSidebarHidden}