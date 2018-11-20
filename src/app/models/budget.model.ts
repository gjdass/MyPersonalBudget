import { Sheet } from './sheet.model';

export class Budget {

    Name: string;
    Description: string;
    Sheets: Sheet[];

    constructor(name: string, description: string) {
        this.Name = name;
        this.Description = description;
    }
}
