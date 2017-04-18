
// //  'http://echo.jsontest.com/firstname/Karl/lastname/McCracken/credentials/MasterDeveloper/city/Corona/zipcode/92883/isActive/true/infoGroup1DueDate/4-4-14';

// // export interface Speaker{
// //     // id?: number;
// //     firstname?: string;
// //     lastname?: string;
// //     credentials?: string;
// //     city?: string;
// //     isActive?: string;
// //     infoGroup1DueDate?: string;
// // }


// export interface Speaker{
//     // id?: number;
//     firstname?: string;
//     lastname?: string;
//     credentials?: string;
//     city?: string;
//     isActive?: string;
//     infoGroup1DueDate?: string;
// }

import { Lecture } from './lecture';
export class Speaker{
    constructor(
        public firstname: string,
        public lastname: string,
        public lectures: Lecture[]//,

        // public roles = [
        //     { value: 'admin', display: 'Administrator' },
        //     { value: 'guest', display: 'Guest' },
        //     { value: 'custom', display: 'Custom' }
        // ],

        // public segment = [
        //     { value: 'admin', display: 'Administrator' },
        //     { value: 'guest', display: 'Guest' },
        //     { value: 'custom', display: 'Custom' }
        // ]


    ) {}
}


// export interface Speaker{
//     firstname?: string;
//     lastname?: string;

// }