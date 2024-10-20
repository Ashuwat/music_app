//client

function sidebarNormal(state: boolean) {
    const sidebar = document.getElementById('sidebar')
    const sidebar_inside = document.getElementById('sidebar_inside')
    const main = document.getElementById('main')
    // const main_inside = document.getElementById('main_inside')

    if (sidebar && sidebar_inside) {
        if (state === true) {
            sidebar.style.width = "34%";    
            sidebar.style.minWidth = '400px';
            sidebar_inside.style.display = "block";
            sidebar_inside.style.opacity = '1'
        } else {
            sidebar.style.width = '0px';
            sidebar.style.minWidth = '0px';
            sidebar_inside.style.display = 'none'
            sidebar_inside.style.opacity = '0'
        }
    }
}

//make it move based on cursor movement
function sidebarHover(state: boolean) {
    function hoverOver( event: MouseEvent ) {
        const sidebar = document.getElementById('sidebar')
        const sidebar_inside = document.getElementById('sidebar_inside')
        const main = document.getElementById('main')
        const main_inside = document.getElementById('main_inside')
        const mouseX = event.clientX
        const mouseY = event.clientY

        if (sidebar && sidebar_inside && main && main_inside) {
            const sidebarRect = sidebar.getBoundingClientRect();
            const sidebarInsideRect = sidebar_inside.getBoundingClientRect();
            const isMouseNotOnSidebar = mouseX < 25

            const isMouseOnSidebar = 
                mouseX >= sidebarRect.left && mouseX <= sidebarRect.right

            const isMouseOnSidebarInside = mouseX >= sidebarInsideRect.left && mouseX <= sidebarInsideRect.right 
            if (state === false) {       
                if (isMouseOnSidebar || isMouseOnSidebarInside || isMouseNotOnSidebar) {
                sidebar.style.width = "34%";    
                sidebar.style.minWidth = '400px';
                sidebar_inside.style.display = "block";
                sidebar_inside.style.opacity = '1'
                } else {
                sidebar.style.width = '0px';
                sidebar.style.minWidth = '0px';
                sidebar_inside.style.display = 'none'
                sidebar_inside.style.opacity = '0'
            }
            } else {
                sidebar.style.width = "34%";    
                sidebar.style.minWidth = '400px';
                sidebar_inside.style.display = "block";
                sidebar_inside.style.opacity = '1'
            }


        }
     }
     document.addEventListener('mousemove', hoverOver)

     return () => {
        document.removeEventListener('mousemove', hoverOver)
     }
}

export { sidebarHover, sidebarNormal };