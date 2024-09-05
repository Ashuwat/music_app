function hoverOver() {
  document.addEventListener("mousemove", function (event) {
      const sidebar = document.getElementById("sidebar");
      const sidebarInside = document.getElementById('sidebar_inside');
      const main = document.getElementById('main');

      if (sidebar && sidebarInside && main) {
          // Check if the mouse is within the sidebar or to the right of the sidebar (to hide)
          const mouseX = event.clientX;
        //   const sidebarRect = sidebar.getBoundingClientRect();

          if (mouseX > 25) {
              sidebarInside.style.display = "none";
              sidebar.style.width = '0px';
              sidebar.style.minWidth = '0px';
              // main.style.width = '100%';
          } else {
              sidebar.style.width = "34%";
              sidebar.style.minWidth = '400px';
              sidebarInside.style.display = "block";
              // main.style.width = '66%';
          }
      }
  });
}

function sidebarHover() {
    //make it so that when the sidebar gets hovered
}

export { hoverOver, sidebarHover };