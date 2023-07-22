import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled(Field)`
    padding: 5px;
    width: 200px;
    border: 2px solid greenyellow;
    border-radius: 5px;
`;

export const ButtonAdd = styled.button`
    display: flex;
    gap: 5px;
    background-color: rgb(38 209 135);
    color: #6d2b65;
    border: 3px solid rgb(30 159 139);
    border-radius: 20px;
    padding: 5px 20px;
    font-size: 18px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    &:hover, &:focus {
        background-color: rgb(30 159 139);
        border: 3px solid rgb(38 209 135);
        color: #fff;
    }
`;

export const LabelForm = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ErrorText = styled.p`
    color: red;
`;

export const FormBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const BigBoxForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;