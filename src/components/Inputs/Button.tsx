import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Icon, IconProps } from './Icon';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    inverted?: boolean;
    icon?: StyledIcon;
    iconProps?: IconProps
};

export const Button: React.FC<IButtonProps> = ({
    inverted = true,
    icon,
    children,
    ...props
}): React.ReactElement => (
    <SButton inverted={inverted} {...props}> 
        {!!icon && <Icon icon={icon} />}
        {children}
    </SButton>
);

const SButton = styled.button<IButtonProps>`
    ${({ theme, inverted }) => `
        color: ${inverted ? `${theme.colors.primary}` : `${theme.colors.secondary}`};
        border: 1px solid ${theme.colors.primary};
        border-radius: ${theme.radius.border};
        font-size: ${theme.size.default};
        font-family: ${theme.font.body};
        text-decoration: none;
        cursor: pointer;
        padding: 0.7rem 1.25rem;
        transition: ${theme.transitions.cubicBezier};
        background-color: ${inverted ? `${theme.colors.background}` : `${theme.colors.primary}`};
        &:focus,
        &:active,
        &:hover {
            background-color: ${inverted ? `${theme.colors.primaryO}` : `${theme.colors.hover}`};
            outline: none;
        }
        &:after {
            display: none !important;
        }
    `};
`;