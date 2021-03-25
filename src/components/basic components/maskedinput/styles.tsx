import styled from 'styled-components';
import MaskedInput from 'react-text-mask'

export const MaskInput = styled(MaskedInput)`
        color: #ff9000;
        background-color: #232129;
        border: 2px solid #232129;
        width: ${props => props.width || '100%'};
        padding: ${props => props.padding};
        border-radius: 0.625rem;
        font-size: 1rem;
` 