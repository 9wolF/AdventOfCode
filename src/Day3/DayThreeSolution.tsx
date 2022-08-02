import * as React from "react";
import {useEffect, useState} from "react";
import data from './dayThreeInput.txt';

export const DayThreeSolution = () => {
    const [height, setHeight] = useState(0);
    const [depth, setDepth] = useState(0);
    const [aim, setAim] = useState(0);

    useEffect(() => {
        let horizontalDummy = 0;
        let depthDummy = 0;
        let aimDummy = 0;
        fetch(data)
            .then(r => r.text())
            .then(text => {
                let inputArray = text.split('\n').map((command: string) => command.split(' '));


                inputArray.forEach(([command, value]) => {
                    if (value) {
                        let valueToUse = parseInt(value.replace(/[\r\n]/gm, ''));
                        switch (command) {
                            case 'forward':
                                horizontalDummy += valueToUse;
                                console.log('Hori:' + horizontalDummy);
                                depthDummy += aimDummy * valueToUse;
                                console.log('Depth:' + depthDummy);
                                break;
                            case 'down':
                                aimDummy += valueToUse;
                                console.log('Aim:' + aimDummy);
                                break;
                            default:
                                aimDummy -= valueToUse;
                                console.log('Aim:' + aimDummy);
                                break;
                        }
                    }
                })
                setHeight(horizontalDummy);
                setDepth(depthDummy);
                setAim(aimDummy);
            })


    }, [])

    useEffect(() => {
        console.log(height * depth);
    }, [height, depth])

    return (
        <p>

        </p>
    )
}