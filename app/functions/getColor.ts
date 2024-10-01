import { FastAverageColor } from "fast-average-color";

const getColor = async (url: string) => {
    const fac =  new FastAverageColor();
    const rgb = fac.getColorAsync(url).then((color) => {
    console.log(color.rgb);
    return color.value
    });
    return rgb
} 

export default getColor;