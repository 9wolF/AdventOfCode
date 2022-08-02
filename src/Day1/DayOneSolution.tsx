import * as React from "react";
import {useEffect} from "react";
import {data} from "./input";

export const DayOneSolution = () => {

    useEffect(() => {
        let largerThanPrev = 0;
        let prevMeasurement = 0;
        data.forEach((measurement) => {
            if (measurement > prevMeasurement) {
                largerThanPrev++;
            }
            prevMeasurement = measurement;
        })

        console.log(largerThanPrev);

    }, [])

    return (
        <p>

        </p>
    )
}