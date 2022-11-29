import { useState, useRef } from 'react'
import CanvasContext from './CanvasContext';

function GameLoop() {
    //Reference to canvas obj and canvas state
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);

    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, [setCtx]);

    return (
        <CanvasContext.Provider value={ctx}> 
            <canvas 
                ref={canvasRef}
                width={width}
                height={height}
            />
            {children}
        </CanvasContext.Provider>
    )
}

export default GameLoop