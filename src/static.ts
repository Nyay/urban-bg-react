import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';

export const imgList = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

export const cardWrapperId = 'cardWrapper';

export const calcTransform = (maxValue: number, decimalValue: number) => maxValue * decimalValue * -1;

export const handleMouseMove = ( event: MouseEvent ) => {
    const photoDiv = document.getElementById(cardWrapperId) as HTMLElement;

    const mouseX = event.x, mouseY = event.y;

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = photoDiv?.offsetWidth - window.innerWidth;
    const maxY = photoDiv?.offsetHeight - window.innerHeight;

    const translateX = calcTransform(maxX, xDecimal);
    const translateY = calcTransform(maxY, yDecimal);

    photoDiv.style.transform = `translate(${translateX}px, ${translateY}px)`;

    photoDiv.animate({
        transform: `translate(${translateX}px, ${translateY}px)`,
    }, {
        duration: 3000,
        fill: 'backwards',
        easing: 'ease',
    })
}