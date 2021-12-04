import React from "react";
import { TableBodyContainer, TableField, Tr } from "./style";
import { TableCheckBox } from "../common";
import { light, lightness, white } from "../../globalStyles/colors";
import Options from "./Options";

const TableBody = ({ products }) => (
    <TableBodyContainer>
        {products && products.map((a, b) => (
            <Tr color={b % 2 ? lightness : white} key={a + b}>
                <TableField width="6%"><TableCheckBox checked={a.checked} /></TableField>
                <TableField>{a.productName}</TableField>
                <TableField style={{ color: light }}>{a.productKey}</TableField>
                <TableField>{a.stock}</TableField>
                <TableField>{a.price}</TableField>
                <TableField>{a.discount.toString()}</TableField>
                <Options id={a._id} />
            </Tr>
        ))}
    </TableBodyContainer>
)

export default TableBody;