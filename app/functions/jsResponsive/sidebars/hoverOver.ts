//client

function sidebarHover() {
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
                // mouseY >= sidebarRect.top && mouseY <= sidebarRect.bottom;

            const isMouseOnSidebarInside = 
                mouseX >= sidebarInsideRect.left && mouseX <= sidebarInsideRect.right 
                // && mouseY >= sidebarInsideRect.top && mouseY <= sidebarInsideRect.bottom;
                if (isMouseOnSidebar || isMouseOnSidebarInside || isMouseNotOnSidebar) {
                // console.log('state: true, open')
                sidebar.style.width = "34%";    
                sidebar.style.minWidth = '400px';
                sidebar_inside.style.display = "block";
                sidebar_inside.style.opacity = '1'
                } else {
                // console.log('state: false, close')
                sidebar.style.width = '0px';
                sidebar.style.minWidth = '0px';
                sidebar_inside.style.display = 'none'
                sidebar_inside.style.opacity = '0'
            }
        }
     }
     document.addEventListener('mousemove', hoverOver)

     return () => {
        document.removeEventListener('mousemove', hoverOver)
     }
}

export { sidebarHover };