// import { BaseEntity } from 'src/app/shared/models/base-entity.model';

// export class User extends BaseEntity{

export class User {
    map(response: User) {
        throw new Error('Method not implemented.');
    }
    id: number;

    constructor(){
        this.id = 0
    }

}

export interface Teacher {
    id: number;
}


  








