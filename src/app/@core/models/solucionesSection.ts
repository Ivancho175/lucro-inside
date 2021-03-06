import { Images } from "./images";
import { Button } from './button';

export interface SolucionesSection {
    name?: String;
    label?: String;
    title?: String;
    subTitle?: String;
    body?: String;
    questions?: Array<String>;
    images?: Images[];
    button?: Button;
}
