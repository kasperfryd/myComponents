import React from 'react'
import Carousel from '../../components/carousel/carousel'

function CarouselPage() {

    // Carousel object (required prop for Carousel)
    const carouselItems = {
        item: [
            { img: "https://picsum.photos/1920/870", text: "Hello world" },
            { img: "https://picsum.photos/1920/830", text: "World Hello" },
            { img: "https://picsum.photos/1920/840", text: "Fine day" },
            { img: "https://picsum.photos/1920/850", text: "Indeed good sir!" },
        ]
    }

    return (
        <section>
            <h1>Carousel component</h1>
            <Carousel delay="5" height="55vh" items={carouselItems}></Carousel>
        </section>
    )
}

export default CarouselPage