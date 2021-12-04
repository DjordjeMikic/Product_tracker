import React from "react";
import { TableCheckBox } from "../common";
import { TableField, TableHeaderContainer } from "./style";

const properties = ['Product Name', 'Product Key', 'Stock', 'Price', 'Sale', 'Options'];

const TableHeader = ({ checkAll }) => (
    <TableHeaderContainer>
        <tr>
            <TableField width="6%">
                <TableCheckBox
                    defaultChecked={false}
                    onChange={checkAll}
                />
            </TableField>
            {properties.map((a, b) => (
                <TableField key={a + b}>{a}</TableField>
            ))}
        </tr>
    </TableHeaderContainer>
)

export default TableHeader;