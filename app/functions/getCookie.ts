//server and client I think

function getCookie(cname: string) {
    let name = cname + "=";
    let decodedValue = decodeURIComponent(document.cookie);
    let ca = decodedValue.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cname) == 0) return c.substring(name.length, c.length);
    }
  }

export {getCookie}