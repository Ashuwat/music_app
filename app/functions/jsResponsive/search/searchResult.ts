import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

const clickOffSearch = () => {
    const panel = document.getElementById('searchResult');
    const searchInput = document.getElementById('searchInput');
    
    if (panel && searchInput) {
            document.addEventListener('mousedown', function(event: MouseEvent) {
            if (!panel.contains(event.target as Node) && !searchInput.contains(event.target as Node)) {
                panel.style.display = 'none';
                panel.style.opacity = '0';
            } else {
                panel.style.display = 'block';
                panel.style.opacity = '1';
            }
        })
    };
}   

const focusOnSearch = () => {
//     document.addEventListener('mousedown', () => {
//         const something = document.getElementById('searchInput') as HTMLInputElement
//         if(something) {
//             something.addEventListener('focusin', () => {
//                 console.log('focus happeneds')
//             })
//         }
//     }
// ) 
}

const something = () => {
    // document.addEventListener('mousedown', function (event: MouseEvent) {
    //     const panel = document.getElementById('searchResult')
    //     // const searchInput = document.getElementById('searchInput')
    //     const main = document.getElementById('main')
    //     const mouseX = event.clientX
    //     const mouseY = event.clientY
        
    //     if (panel && main) {
    //         const panelBox = panel.getBoundingClientRect()
    //         // const searchInputBox = searchInput.getBoundingClientRect()

    //         const isMouseOnPanel: boolean = 
    //         mouseX >= panelBox.left && mouseX <= panelBox.right &&
    //         mouseY >= panelBox.top && mouseY <= panelBox.bottom;
    //         // const isMouseOnSearchInput: boolean = 
    //         // mouseX >= searchInputBox.left && mouseX <= searchInputBox.right &&
    //         // mouseY >= searchInputBox.top && mouseY <= searchInputBox.bottom;  
            
    //         if (!isMouseOnPanel) {
    //             panel.style.display = 'none';
    //             panel.style.opacity = '0'
    //         } else {
    //             panel.style.display = 'block';
    //             panel.style.opacity = '1'
    //         }
    //     }   
    // })  
}
export {something, focusOnSearch, clickOffSearch };