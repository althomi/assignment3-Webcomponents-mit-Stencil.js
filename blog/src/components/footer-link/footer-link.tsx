import { FunctionalComponent, h} from '@Stencil/core';

interface FooterLinkProps{
    text: string;
    link: any;
}

export const FooterLink: FunctionalComponent <FooterLinkProps> = ({link, text}) => (
<a href={link}> {text}</a>
);