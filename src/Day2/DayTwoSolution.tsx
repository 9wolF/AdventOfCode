import * as React from "react";
import {useEffect} from "react";
import {data} from "./dayTwoInput";

export const DayTwoSolution = () => {

    useEffect(() => {
        let numberOfInc = 0;
        let beforeSum = 0;
        let beforeData: Array<number> = [];
        for (let i = 0; i < data.length; i++) {
            let currentSum = 0;
            let currentData = data.slice(i, i + 3);
            // console.log('Durchlauf: ' + i + ' ' + currentData);
            currentData.forEach((measurementCurr) => {
                currentSum += measurementCurr;
            })
            // console.log('Durchlauf: ' + i + ' ' + currentSum);
            if (beforeData.length && !beforeSum) {
                beforeData.forEach((measurementBefore) => {
                    beforeSum += measurementBefore;
                })
            }
            // console.log('Durchlauf: ' + i + ' ' + beforeData);
            // console.log('Durchlauf: ' + i + ' ' + (currentSum > beforeSum));

            if (currentSum > beforeSum) {
                numberOfInc++;
            }

            beforeSum = currentSum;
            beforeData = currentData;
            // console.log('Durchlauf: ' + i + ' ' + beforeSum);
            // console.log('Durchlauf: ' + i + ' ' + beforeData);
        }

        console.log(numberOfInc);
    }, [])

    return (
        <p>

        </p>
    )
}