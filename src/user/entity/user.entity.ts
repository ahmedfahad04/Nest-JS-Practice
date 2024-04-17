import { Column, Entity, Generated, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email']) // have to handle error to show duplicate mail exists
export class User {

    @PrimaryGeneratedColumn()
    @Generated('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}