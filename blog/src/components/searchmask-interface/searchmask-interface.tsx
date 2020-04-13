import { FunctionalComponent, h} from '@Stencil/core';

interface SearchmaskProps{
    text: string;
    imageUrl: string;
}

export const FooterLink: FunctionalComponent <SearchmaskProps> = ({imageUrl, text}) => (
<h1>{text}<button><img src={imageUrl}/></button></h1>
);