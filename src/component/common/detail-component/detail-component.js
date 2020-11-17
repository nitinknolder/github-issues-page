import { React } from 'react';
import styled from 'styled-components';

const DetailTagContainer = styled.a`
   border: 1px solid #cdcfd1;
   border-width: 1px 0px 1px 1px;
   text-decoration:none;
   padding: ${prop => prop.padding};
   border-radius : 2px 0px 0px 2px;
   background-color : ${prop => prop.backgroundColor};
   line-height: 20px;
   cursor : pointer;
   font-weight : bold;
   color : #586069;
   &:hover {
     background-color : ${prop => prop.backgroundColor};
   }
`;

const DetailValueContainer = styled.a`
   border: 1px solid #cdcfd1;
   padding: ${prop => prop.padding};
   border-radius : 0px 2px 2px 0px;
   line-height: 20px;
   text-decoration:none;
   color : #586069;
   font-weight : bold;
   cursor : pointer;
   background-color : ${prop => prop.backgroundColor};

`;


const DetailComponent = ({
    tagBgColor, tagPadding, tag, tagHref,
    valueBgColor, valuePadding, value, valueHref }) => (
        <div className="detail-container">
            <DetailTagContainer
                backgroundColor={tagBgColor}
                padding={tagPadding}
                href={tagHref}
            >{tag}</DetailTagContainer>
            <DetailValueContainer
                backgroundColor={valueBgColor}
                padding={valuePadding}
                href={valueHref}
            >{value}</DetailValueContainer>
        </div>
    );
export default DetailComponent;