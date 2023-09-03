"use client";

import { styled } from "styled-components";
const Date = styled.span`
    font-size: 0.6em;
    
`;
const ColorPurple = styled.span`
    padding: 0 10px;   
    margin:0 20px;
    font-size: 0.8em;
    color: white;
    background:#9999FF;
    display: inline;
`;
const ColorBlue = styled.span`
    padding: 0 10px;
    margin:0 20px;
    font-size: 0.8em;
    color: white;
    background:#33CCFF;
    display: inline;
`;
 
type LabelProps = {
    date:string
    category_number:string;
    text:string;

}

export default function Category_label(props:LabelProps){
    const date = props.date;
    const category_number = props.category_number;   
    const text = props.text;
    let jsx_element;
    switch(category_number){
        case "0":
            jsx_element = <ColorBlue>活動報告</ColorBlue>;
            break;
        case "1":
            jsx_element = <ColorPurple>成果物</ColorPurple>;
            break;
        default:
            jsx_element = <ColorBlue>null</ColorBlue>;
            

    }
    return (
        
        <span>  
            <Date>{date}</Date>{jsx_element}{text}
        </span>
    )
}