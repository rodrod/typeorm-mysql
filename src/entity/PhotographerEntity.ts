import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";

@Entity({"name":"photographer"})
export class PhotographerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:"first_name"})
    firstName: string;

    @Column({name:"last_name"})
    lastName: string;

    @Column({ nullable: true })
    camera: string;



}
