
function hoverOver() {
    document.addEventListener("mousemove", function (event) {
    const sidebar = document.getElementById("sidebar");
    const sidebar_inside = document.getElementById('sidebar_inside')
    const main = document.getElementById('main')
        
      if (sidebar && sidebar_inside && main) {
        if (event.clientX < 25) {
          sidebar.style.width = "34%";
        //   sidebar.style.minWidth = '500px'
          sidebar_inside.style.display = "block";

      // main.style.width = "66%";
        } else {
          sidebar_inside.style.display = "none";
          sidebar.style.width = '0%'
          sidebar.style.minWidth = '0%'
          main.style.width = '100%'
        }
      }
    });
  }


  function sidebarHover() {
    document.addEventListener('mouseover', () => {
        const sidebar = document.getElementById("sidebar");
        const sidebar_inside = document.getElementById('sidebar_inside')
        if (sidebar && sidebar_inside) {
            sidebar.style.width = "34%";
            // sidebar.style.minWidth = '500px'
            sidebar_inside.style.display = "block";
            return true;
        }
        else {
            return false;
        }
    })
  }

  export {hoverOver, sidebarHover}