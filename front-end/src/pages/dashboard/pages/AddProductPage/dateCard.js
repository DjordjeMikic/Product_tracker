import React from "react";
import { SwitchCheckBox } from "../../../../components/common";
import { getDate } from "../../../../helpers";
import { DateCardContainer } from "./style";

const DateCard = ({ enabled, onChange }) => {
    const d = getDate();
    return (
        <DateCardContainer className="flex column">
            <div className="flex">
                <p>Date added</p>
                <p style={{ marginRight: '9%' }}>Sale</p>
            </div>

            <div className="flex">
                <h4>{d.month}, {d.date}, {d.year}</h4>
                <SwitchCheckBox enabled={enabled} enableSwitch={onChange} />
            </div>
        </DateCardContainer>
    )
}

export default DateCard;