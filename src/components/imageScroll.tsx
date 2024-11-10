import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

function getCurrentFrame(index: number): string {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;
}

interface ImageCanvasProps {
    numFrames: number;
    width: number;
    height: number;
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ numFrames, width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [frameIndex, setFrameIndex] = useState<number>(0);

    const preloadImages = useCallback(() => {
        const newImages: HTMLImageElement[] = [];
        for (let i = 1; i <= numFrames; i++) {
            const img = new Image();
            const imgSrc = getCurrentFrame(i);
            img.src = imgSrc;
            newImages.push(img);
        }
        setImages(newImages);
    }, [numFrames]);

    const renderCanvas = useCallback(() => {
        const context = canvasRef.current?.getContext("2d");
        if (context) {
            context.canvas.width = width;
            context.canvas.height = height;
        }
    }, [width, height]);

    useEffect(() => {
        preloadImages();
        renderCanvas();
    }, [preloadImages, renderCanvas]);

    useEffect(() => {
        if (!canvasRef.current || images.length < 1) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        if (!context) return;

        const render = () => {
            context.drawImage(images[frameIndex], 0, 0);
        };

        render();

    }, [frameIndex, images]);

    return (
        <div className="relative">
            <canvas
                ref={canvasRef}
                className="object-contain w-[600px] h-auto" // Ensure fixed width and prevent overflow
            />
        </div>
    );
};

const Home: React.FC = () => {
    const imageCanvasProps = useMemo(() => ({
        width: 1158,
        height: 770,
        numFrames: 147
    }), []);

    return (
        <main className="mt-12">
            <div className="flex gap-5 mb-8">
                <div className="text-3xl font-bold text-slate-300">Projects</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>
            <ImageCanvas {...imageCanvasProps} />
        </main>
    );
};

export default Home;
